import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";

@customElement("bae-accordion")
export class BaeAccordion extends LitElement {
  static override styles = css`
    :host {
      border: 1px solid red;
      width: 100%;
      display: block;
      padding: 8px;
    }

    :host h3 {
      margin: 0;
      padding: 0;
    }
  `;

  @property({ type: String })
  title = "";

  @property({ type: Boolean })
  open = false;

  toggleView(e: MouseEvent) {
    e.stopPropagation();
    this.open = !this.open;
  }

  render() {
    return html`
      <div>
        <div class="accordion-title" @click="${this.toggleView}">
          <h3>${this.title}</h3>
        </div>
        ${when(this.open, () => html`<slot></slot>`)}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bae-accordion": BaeAccordion;
  }
}
