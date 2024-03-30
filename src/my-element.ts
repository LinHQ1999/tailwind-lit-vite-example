import {LitElement, css, unsafeCSS} from 'lit'
import {customElement} from 'lit/decorators.js'
import style from './element.css?inline'; //vite3 需要

@customElement('my-element')
export class MyTWElement extends LitElement {
    connectedCallback(): void {
        super.connectedCallback()
        // console.log('xxxd', style)
    }

    static styles = [css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }`, unsafeCSS(style)]
}

declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyTWElement
    }
}
