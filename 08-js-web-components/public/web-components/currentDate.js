class CurrentDate extends HTMLElement {
    // The browser calls this method when the element is
    // added to the DOM.

    // connectedCallback: Called when the element is first added to the DOM
    // disconnectedCallback: Called when the element is removed from the DOM
    // attributeChangedCallback: Called when one of the element's watched attributes change. For an attribute to be watched, you must add it to the component class's static observedAttributes property.
    
    connectedCallback() {
        // Create a Date object representing the current date.
        const now = new Date();
        
        // Format the date to a human-friendly string, and set the
        // formatted date as the text content of this element.
        this.textContent = now.toLocaleDateString();
    }
}

// Register the CurrentDate component using the tag name <current-date>.
customElements.define('current-date', CurrentDate);