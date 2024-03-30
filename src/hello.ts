import {customElement, property} from "lit/decorators.js";
import {MyTWElement} from "./my-element";
import {html} from "lit";

@customElement('hello-world')
export class Hello extends MyTWElement {
    @property()
    title = 'Hello, world!'

    render() {
        return html`<p class="text-4xl font-bold text-yellow-200">${this.title}</p>`
    }
}
