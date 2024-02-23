class ForecastCard extends HTMLElement {
  static observedAttributes = ['high', 'low', 'current', 'condition', 'city'];

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
    <div>
      <span id="city">Loading</span>
      <span id="low">Loading</span>
      <span id="high">Loading</span>
      <span id="current">Loading</span>
      <span id="condition">Loading</span>
    </div>`;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      `Attribute ${name} has changed from ${oldValue} to ${newValue}.`
    );
    this.setTargetToValue(name, newValue);
  }

  setTargetToValue(targetId, value) {
    const target = this.shadowRoot.getElementById(targetId);

    if (!target) {
      console.warn('No target', targetId);
      return;
    }

    switch (targetId) {
      case 'high':
      case 'low':
      case 'current':
        if (isNaN(value)) {
          target.innerText = 'N/A';
        } else {
          target.innerText = `${value}°`;
        }
        break;
      default:
        target.innerText = value;
    }
  }
}

// Define the element
customElements.define('forecast-card', ForecastCard);
