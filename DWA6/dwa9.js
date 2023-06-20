class BookPreview extends HTMLElement {
    constructor() {
      super();
  
      // Create a shadow root for the component
      this.attachShadow({ mode: 'open' });
  
      // Create a template element
      const template = document.createElement('template');
  
      // Define the HTML structure of the component
      template.innerHTML = `
        <style>
        .preview {
            border-width: 0;
            width: 100%;
            font-family: Roboto, sans-serif;
            padding: 0.5rem 1rem;
            display: flex;
            align-items: center;
            cursor: pointer;
            text-align: left;
            border-radius: 8px;
            border: 1px solid rgba(var(--color-dark), 0.15);
            background: rgba(var(--color-light), 1);
          }
          
          @media (min-width: 60rem) {
            .preview {
              padding: 1rem;
            }
          }
          
          .preview_hidden {
            display: none;
          }
          
          .preview:hover {
            background: rgba(var(--color-blue), 0.05);
          }
          
          .preview__image {
            width: 48px;
            height: 70px;
            object-fit: cover;
            background: grey;
            border-radius: 2px;
            box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
          }
          
          .preview__info {
            padding: 1rem;
          }
          
          .preview__title {
            margin: 0 0 0.5rem;
            font-weight: bold;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;  
            overflow: hidden;
            color: rgba(var(--color-dark), 0.8)
          }
          
          .preview__author {
            color: rgba(var(--color-dark), 0.4);
          }
        </style>
        <button class="preview" data-preview="">
          <img class="preview__image" src="" />
          <div class="preview__info">
            <h3 class="preview__title"></h3>
            <div class="preview__author"></div>
          </div>
        </button>
      `;
  
      // Append the template content to the shadow root
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    connectedCallback() {
      // Set the book data as attributes of the component
      this.setAttribute('data-preview', this.book.id);
      this.setAttribute('data-image', this.book.image);
      this.setAttribute('data-title', this.book.title);
      this.setAttribute('data-author', this.book.author);
  
      // Update the component's content
      this.updateContent();
    }
  
    static get observedAttributes() {
      return ['data-preview', 'data-image', 'data-title', 'data-author'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      // Update the component's content when the observed attributes change
      this.updateContent();
    }
  
    updateContent() {
      // Get the component's elements from the shadow root
      const buttonElement = this.shadowRoot.querySelector('.preview');
      const imageElement = this.shadowRoot.querySelector('.preview__image');
      const titleElement = this.shadowRoot.querySelector('.preview__title');
      const authorElement = this.shadowRoot.querySelector('.preview__author');
  
      // Set the content of the elements based on the attribute values
      buttonElement.setAttribute('data-preview', this.getAttribute('data-preview'));
      imageElement.src = this.getAttribute('data-image');
      titleElement.textContent = this.getAttribute('data-title');
      authorElement.textContent = authors[this.getAttribute('data-author')];
    }
  }
  
  // Define the custom element
  customElements.define('book-preview', BookPreview)