const links = document.getElementsByClassName("link");

const pages = {
    "/": {
        file: "",
        pageId: "",
        linkId: "",
    },
    "/inline-circle": {
        file: "/pages/inline-circle.html",
        pageId: "inline-circle-page",
        linkId: "inline-circle-link",
    },
    "/app-bar": {
        file: "/pages/app-bar.html",
        pageId: "app-bar-page",
        linkId: "app-bar-link",
    },
};

async function render(pathname) {
    const element = document.getElementById(pages[pathname].pageId);
    if (!element) {
        const allSelectedLinks = document.querySelectorAll(
            ".wt-list-item.selected"
        );

        Array.from(allSelectedLinks ?? []).forEach((link) =>
            link.classList.remove("selected")
        );

        const link = document.getElementById(pages[pathname].linkId);

        if (!link.classList.contains("selected")) {
            link.classList.add("selected");
        }

        const res = await fetch(
            `${window.location.origin}${pages[pathname].file}`
        );
        const data = await res.text();
        document.getElementById("root").innerHTML = data;
    }
}

async function handleLoadPage(pathname) {
    const location = pathname || window.location.pathname;
    const file = pages?.[location]?.file || null;

    if (file) {
        await render(location);
        return;
    }

    history.replaceState(null, null, "/");
}

function handleNavigation(event) {
    event.preventDefault();

    const url = event.target.getAttribute("route");

    history.pushState(null, null, url);

    handleLoadPage(url);
}

window.addEventListener("load", () => {
    handleLoadPage();
    Array.from(links).forEach((link) => {
        link.addEventListener("click", handleNavigation);
    });
});

window.addEventListener("popstate", (e) => {
    handleLoadPage();
    e.preventDefault();
});
