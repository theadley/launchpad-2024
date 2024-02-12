class ProgressBar extends HTMLElement {
  /**
   * An instance of the element is created or upgraded.
   * Useful for initializing state, settings up event listeners,
   * or creating shadow dom.
   * See the spec for restrictions on what you can do in the constructor.
   */
  static observedAttributes = ["percent"];

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
        <style>
          .parent{
            display: block;
            height: 5px;
            width: 100%;
            background: lightgrey;
          }

          .bar {
            height: 100%;
            width: 0%;
            background: blue;
            transition: all 0.2s ease;
          }
        </style>
        <div class="parent">
          <div class="bar"></div>
        </div>
        <slot></slot>
        `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      `Attribute ${name} has changed from ${oldValue} to ${newValue}.`
    );

    if (
      name === "percent" &&
      !isNaN(newValue) &&
      newValue > 0 &&
      newValue <= 100
    ) {
      const bar = this.shadowRoot.querySelector(".bar");
      if (bar) {
        bar.style.width = newValue + "%";
      }
    }
  }
}

// Define the element
customElements.define("progress-bar", ProgressBar);
