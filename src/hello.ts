import {LitElement, html} from "lit";
import {customElement, property} from "lit/decorators.js";
import {MyTWElement, adstyle} from "./my-element";

@customElement('hello-world')
export class Hello extends LitElement {
    @property()
    title = 'Hello, world!'

    static styles = [adstyle]

    render() {
        return html`
<h1 class="text-sm text-red-500 hover:text-blue-200 hover:cursor-pointer"><slot/></h1>
<p class="text-center text-4xl font-bold text-yellow-200">${this.title}</p>
`
    }
}
