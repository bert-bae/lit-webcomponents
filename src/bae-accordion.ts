import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";

@customElement("bae-accordion")
export class BaeAccordion extends LitElement {
  static override styles = css`
    :host {
      width: 100%;
      display: block;
    }

    :host .accordion-paper {
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
    }

    :host .accordion-title {
      cursor: pointer;
      background-color: black;
      color: white;
      border-radius: 4px;
      padding: 8px;
    }

    :host h3 {
      margin: 0;
      padding: 0;
    }

    :host .accordion-content {
      height: 0;
      transition: 0.2s all ease-in;
      &[data-open="true"] {
        height: 150px;
        padding: 8px;
        overflow-y: auto;
      }
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
      <div class="accordion-paper">
        <div class="accordion-title" @click="${this.toggleView}">
          <h3>${this.title}</h3>
        </div>

        <div class="accordion-content" data-open="${this.open}">
          ${when(this.open, () => html`<slot></slot>`)}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bae-accordion": BaeAccordion;
  }
}
