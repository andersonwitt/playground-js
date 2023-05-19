const links = document.getElementsByTagName("a");

[...links].forEach((item) =>
  item.addEventListener("click", (e) => {
    window.history.pushState(null, null, item.getAttribute("route"));
  })
);

async function navigateToHash(e) {
  debugger;
  const path = window.location.pathname;
  const rootElement = document.getElementById("root");
  rootElement.innerHTML = "";

  if (path === "/inline-circle") {
    const objectElement = document.createElement("object");
    objectElement.data = "./inline-circle.html";
    rootElement.appendChild(objectElement);
  } else if (path === "other-route") {
    // Handle other routes and load corresponding content
  } else {
    //window.location.pathname = "/"; // Handle default route or unrecognized routes
  }
}

window.addEventListener("popstate", navigateToHash);
window.addEventListener("load", () => {
  navigateToHash();
  alert()
});
