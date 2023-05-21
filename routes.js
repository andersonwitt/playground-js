const links = document.getElementsByClassName("link");

const pages = {
    "/": {
        file: "",
        id: "",
    },
    "/inline-circle": {
        file: "/pages/inline-circle.html",
        id: "inline-circle-page",
    },
    "/app-bar": {
        file: "/pages/app-bar.html",
        id: "app-bar-page",
    },
};

async function render(pathname) {
    const element = document.getElementById(pages[pathname].id);
    if (!element) {
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
