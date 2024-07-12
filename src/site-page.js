import { html, css, LitElement } from './lit-core.min.js';
import './table-of-contents.js';

export class SitePage extends LitElement {

  static styles = [
    css`
      header, section {
        max-width: 600px;
        margin: auto;
      }

      span.backToTop {
        cursor: pointer;
        color: blue;
      }
    `
  ];

  async firstUpdated() {
    if (window.location.hash) {
      this.updateComplete.then((finished) => {
        if (finished) {
          this._scrollToHash();
        }
      });
    }
  }

  scrollToId(id) {
    window.location.hash = id;
    navigator.clipboard.writeText(window.location.href);
    this._scrollToHash(true);
  }

  _scrollToHash(smooth = false) {
    const selector = window.location.hash;
    const element = this.shadowRoot.querySelector(selector);

    if (element) {
      // Simply calling scrollIntoView() will not work. I have not been able
      // to figure out why. Dropping into the debugger and then calling
      // scrollIntoView will work, so there's something about the timing.
      // I tried waiting until all the children are updated, but that wasn't it.
      // The result is this kludge: putting in a short, imperceptible delay,
      // then scrolling.
      const waitTimeMs = 100;
      setTimeout(() => element.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
      }), waitTimeMs);
    } else {
      console.log('Element not found for selector ', selector);
    }
  }


  renderHeader(pageTitle) {
    return html`
    <header>
    <h1>CS315 Fall 2024 ${pageTitle}</h1>
    <nav>
      <a href="index.html">Course Overview</a>
      &middot;
      <a href="exercises.html">Exercises</a>
      <table-of-contents id="toc" .context="${this}"></table-of-contents>
    </nav>
    </header>
    `
  }

  renderSection(id, name, content) {
    const backToTop = () =>  window.scrollTo({ top: 0, behavior: 'smooth' });

    return html`
      <section id="${id}" toc-name="${name}">
        <h2>${name} <img src="images/link.svg" @click="${()=>this.scrollToId(id)}"></h2>
        ${content}
        <p>
          <span class="backToTop" @click="${backToTop}">Back to top</span>
        </p>
      </section>
  `};

}
