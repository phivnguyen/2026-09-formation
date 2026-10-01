
import {promiseImage, promiseMemes} from './datas.js'
import { fillForm, loadImageSelectOptions } from './pages/editor/editor.js';
console.log("coucoutest");
var wrapper;

/**
 * donne le temps actuel dans le footer:
 */
function LoadDate() {
  var footer = document.querySelector("footer");
  setInterval(function () {
    footer.innerHTML = new Date().toLocaleString();
  }, 1000);
}

/**
 * chargement du DOM:
 */
document.addEventListener("DOMContentLoaded", function () {
  LoadDate();
  wrapper = document.querySelector("#wrapper");
  initNavbar();
  constructMainRouteContent(location.pathname);
  promiseImage.then(images => {
    console.log('images',images)
  })
});

/**
 * fonctions:
 */
function initNavbar() {
  var links = document.querySelectorAll("nav a");
  links.forEach(function (link) {
    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      console.log(evt);
      constructMainRouteContent(evt.target.attributes["href"].value);
      history.pushState(null, "", evt.target.attributes["href"].value);
    });
  });
}

/**
 * fonction pour qu'en fonction du pathname dans l'url cela change le wrapper
 */
function constructMainRouteContent(path) {
  switch (path) {
    case "/editor":
      loadDOMEditor();
      break;
    case "/thumbnail":
      loadDOMThumbnail();
      break;
    default:
      loadDOMHome();
      break;
  }
}

function loadDOMEditor() {
  const promiseLoadingPage=loadWrapperContent(
    '/src/pages/editor/editor.html'
  );
  promiseLoadingPage.then((r) => {
    console.log('fin de chargement Editor');
  });
  Promise.all([promiseImage, promiseLoadingPage]).then(arrayDesReponses=>{
    console.log('tous les chargements sont effectués',arrayDesReponses)
    loadImageSelectOptions(arrayDesReponses[0])
    fillForm();

  })
}
function loadDOMThumbnail() {
  const promiseLoadingPage=loadWrapperContent(
    '/src/pages/thumbnail/thumbnail.html'
  );
  promiseLoadingPage.then((r) => {
    console.log('fin de chargement thumbnails');
  });
  Promise.all([promiseMemes, promiseLoadingPage]).then(
    (arrayDesReponses)=>{
    console.log('tous les chargements Thumbnails sont effectués',arrayDesReponses)
    const thumbanailDiv=document.querySelector('#thumbnail');
    arrayDesReponses[0].forEach((meme)=>{
      const div=document.createElement("div");
      div.className ="preview";
      const h3 = document.createElement("h3");
      h3.innerHTML = meme.titre;
      div.appendChild(h3);

      div.appendChild(meme.getSVGNode());
      thumbanailDiv.appendChild(div);

    });
});
}

function loadDOMHome() {
  loadWrapperContent('/src/pages/home/home.html');
}

/**
 * fonction de chargement du wrapper par une page html provenant d'une adrese en param
 * @param {string} pageUrl url de la page html à charger par appel http
 * @param {Function?} callback excution post chargement DOM
 * @returns {Promise<HTMLElement} aucun retour
 */

const loadWrapperContent=(pageUrl)=>{
    const promise=fetch(pageUrl).then((response)=>{
      return response.text()
    });
    return  promise.then(html=>{
      wrapper.innerHTML = html;
      return wrapper;
    });

};


