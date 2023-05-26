export class AppBar extends HTMLElement {

    connectedCallback() {
        const innerContent = this.innerHTML;
        let titleHtml = "";

        if (this.title) {
            titleHtml = `
            <article class="nav-title">
                <header>
                    <h1 id="app-bar-title">${this.title ?? ""}</h1>
                </header>
            </article>
            `;
        }

        if (innerContent) {
            this.innerHTML = `
            <style>
                .app-bar-nav {
                    padding: 25px;
                }

                .nav-title > header > h1 {
                    font-size: 24px;
                    font-weight: 600;
                }
            </style>
            <nav class="app-bar-nav" data-testid="app-bar">
                ${titleHtml}
                <section>
                    ${innerContent}
                </section>
            </nav>
            `;
        }
    }

    static get observedAttributes() {
        return ["title"];
    }

    attributeChangedCallback(name, _oldValue, newValue) {
        switch (name) {
            case "title":
                const element = this.querySelector("app-bar-title");
                if (element?.textContent) {
                    element.textContent = newValue;
                }
                break;
        }
    }

    get title() {
        return this.getAttribute("title");
    }

    set title(title) {
        this.setAttribute("title", title);
    }
}
