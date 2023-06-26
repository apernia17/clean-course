(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  class inputElement {
    public html: HtmlElement;
    public attributes: InputAttributes;
    public events: InputEvents;
    constructor(value: string, placeholder: string, id: string) {
        this.html = new HtmlElement(id, 'input');
        this.attributes = new InputAttributes(value, placeholder);
        this.events = new InputEvents();
    }
  }

  const nameField = new inputElement("Angelo", "Enter first name", "txtName");

  console.log({ nameField });
})();
