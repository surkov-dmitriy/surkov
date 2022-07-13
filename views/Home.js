import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  async getHtml() {
    const data = await fetch('/pages')
      .then((res) => res.json())
      .then(data => data);

    return `
            <h1>${data.title}</h1>
            <p>
              ${data.text}
            </p>
            <p>
              <a href="/projects" data-link>View recent projects</a>.
            </p>
        `;
  }
}