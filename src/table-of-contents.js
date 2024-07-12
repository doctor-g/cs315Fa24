import { html, css, LitElement } from './lit-core.min.js';

export class TableOfContents extends LitElement {
  static get properties() {
    return {
      context: { type: Object },
    };
  }

  static get styles() {
    return [
      css`
        .toc {
          cursor: pointer;
          color: blue;
        }
      `,
    ];
  }

  render() {
    const contents = Array.from(this.context.shadowRoot.querySelectorAll('section'));
    return html`
      <h2>Contents</h2>
      <ul>
        ${contents.map(entry =>
          entry.hasAttribute('toc-name')
            ? html`
                <li>
                  <span
                    class="toc"
                    @click="${(event) => this._onEntryClick(event)}"
                    data-target="${entry.id}"
                    >${entry.getAttribute('toc-name')}</span
                  >
                </li>
              `
            : html``
        )}
      </ul>
    `;
  }

  _onEntryClick(event) {
    const id = event.target.getAttribute('data-target');
    const element = this.context.shadowRoot.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    } else {
      console.log('Cannot find element with id ', id);
    }
  }
}

customElements.define('table-of-contents', TableOfContents);