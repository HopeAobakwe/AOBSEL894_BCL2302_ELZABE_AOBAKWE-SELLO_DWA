
function createBookElement(book) {
    const { author, id, image, title } = book;
    const previewElement = document.createElement('button');
   previewElement.classList.add('preview');
    previewElement.setAttribute('data-preview', id);
 
   const imageElement = document.createElement('img');
   imageElement.classList.add('preview__image');
    imageElement.src = image;
    previewElement.appendChild(imageElement);
 
    const infoElement = document.createElement('div');
    infoElement.classList.add('preview__info');
 
    const titleElement = document.createElement('h3');
    titleElement.classList.add('preview__title');
    titleElement.textContent = title;
    infoElement.appendChild(titleElement);
 
   const authorElement = document.createElement('div');
  authorElement.classList.add('preview__author');
   authorElement.textContent = authors[author];
    infoElement.appendChild(authorElement);
 
   previewElement.appendChild(infoElement);
 
    return previewElement;
 }


//function createBookElement(book) {
//     const { author, id, image, title } = book;
//     const element = document.createElement('button')
//     element.classList = 'preview'
//     element.setAttribute('data-preview', id)
//     element.innerHTML = `
//         <img
//             class="preview__image"
//             src="${image}"
//         />
//         <div class="preview__info">
//             <h3 class="preview__title">${title}</h3>
//             <div class="preview__author">${authors[author]}</div>
//         </div>
//     `
//     return element;
//   }

