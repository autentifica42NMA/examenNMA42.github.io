class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Morales Andrade Noemi.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
