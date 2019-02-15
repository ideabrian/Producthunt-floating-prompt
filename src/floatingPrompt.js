export default class FloatingPrompt {
  constructor(
    name,
    url,
    text = `Hi, do you like ${name} ? Don't forget to show your love on Product Hunt 🚀`,
    buttonText = `${name} on Product Hunt`,
    colorOne = '#da552f',
    colorTwo = '#ea8e39'
  ) {
    /* eslint-disable */
    this._id = `product-hunt-${name.toLowerCase().replace(/[^a-zA-Z]+/g, "-")}`;
    this._html = `<div class="producthunt" id="${this._id}"> <span class="producthunt__close" id="${this._id}-close">×</span><p class="producthunt__text">${text}</p> <a href="${url}" class="button producthunt__button" target="_blank">${buttonText}</a></div>`;
    /* eslint-enable */

    const prompt = document.createElement('div');

    prompt.innerHTML = this._html;
    document.body.appendChild(prompt);

    const producthuntModal = document.getElementById(this._id);
    const producthuntCloseButton = document.getElementById(`${this._id}-close`);

    producthuntCloseButton.addEventListener('click', () => {
      producthuntModal.parentNode.removeChild(producthuntModal);
    });
  }
}
