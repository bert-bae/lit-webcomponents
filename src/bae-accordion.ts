import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('bae-accordion')
export class BaeAccordion extends LitElement {

  @property({ type: String })
  title = ''

  render() {
    return html`
      <div>
        <div class="accordion-title">
          <h3>${this.title}</h3>
        </div>
        <slot></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bae-accordion': BaeAccordion
  }
}
