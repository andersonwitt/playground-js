export class InlineCircle extends HTMLElement {
    connectedCallback() {
        this.style.display = "inline-block";
        this.style.borderRadius = "50%";
        this.style.border = "solid #fff 1px";
        this.style.transform = "translateY(10%)";

        if (!this.style.width) {
            this.style.width = "0.8rem";
            this.style.height = "0.8rem";
        }
    }

    static get observedAttributes() {
        return ["diameter", "color"];
    }

    attributeChangedCallback(name, _oldValue, newValue) {
        switch (name) {
            case "diameter":
                this.style.width = newValue;
                this.style.height = newValue;
                break;
            case "color":
                this.style.backgroundColor = newValue;
                break;
        }
    }

    get diameter() {
        return this.getAttribute("diameter");
    }

    set diameter(diameter) {
        this.setAttribute("diameter", diameter);
    }

    get color() {
        return this.getAttribute("color");
    }

    set color(color) {
        this.setAttribute("color", color);
    }
}
