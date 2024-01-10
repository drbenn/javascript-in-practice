class HelloWorld extends HTMLElement {
    constructor() {
        super();
        this.name = 'World';
        this.emotion = 'Happy'
      }

    // connect component
    // BASIC connected callback
    connectedCallback() {
      this.textContent = `Hello World!..and ${this.emotion} ${this.name}`;
    }

    // component attributes
    // Returns an array of attributes that the browser will observe.
    static get observedAttributes() {
        return ['name', 'emotion'];
    }

    // attribute change
    // Called whenever an observed attribute is changed. Those defined in HTML are passed immediately, but JavaScript can modify them:
    attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
        this[ property ] = newValue;
    }
  
  }

  customElements.define( 'hello-world', HelloWorld );