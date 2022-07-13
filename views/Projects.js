import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Projects");
  }

  async getHtml() {
    const data = await fetch('/pages/projects')
      .then((res) => res.json())
      .then(data => data);

    return `
            <h1>${data.title}</h1>
            ${data.list.map((p) => `<div><h2>${p.title}</h2><p>${p.text}</p></div>`).join('')}
          `;
  }
}