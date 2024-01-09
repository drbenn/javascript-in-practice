// Extend the HTMLElement class to create the web component
class GreetingMessage extends HTMLElement {
	// We'll create our web component here


    // The constructor() method is run when the element is created, before its injected into the UI.
    // The connectedCallback() method is run when the element is injected into the DOM, and again whenever it’s moved or appended elsewhere.
    // The disconnectedCallback() method is run whenever the element is removed from the DOM.

    // If you were to move your element using something like the Element.append() method, the disconnectedCallback() function would run, followed by the connectedCallback() function.
    // If you removed it with the Element.remove() method, just the disconnectedCallback() function would run.


	/**
	 * The class constructor object
	 */
	constructor () {

		// Always call super first in constructor
		super();

        // Render HTML
        this.innerHTML =
        `<p>
            <button>Hi there!</button>
        </p>
        <div class="message" aria-live="polite"></div>`;

		console.log('Constructed', this);

	}

	/**
	 * Runs each time the element is appended to or moved in the DOM
	 */
	connectedCallback () {
		console.log('connected!', this);
	}

	/**
	 * Runs when the element is removed from the DOM
	 */
	disconnectedCallback () {
		console.log('disconnected', this);
	}

}

// Define the new web component
if ('customElements' in window) {
	customElements.define('greeting-message', GreetingMessage);
}
