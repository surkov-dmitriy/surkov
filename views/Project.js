import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.projectId = params.id;
    this.setTitle("Viewing Project");
  }

  async getHtml() {
    return `
            <h1>Project</h1>
            <p>You are viewing Project #${this.projectId}.</p>
        `;
  }
}
