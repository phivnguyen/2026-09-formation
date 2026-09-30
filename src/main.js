console.log("coucoutest");
var wrapper;

// donne le temps actuel dans le footer:
function LoadDate() {
  var footer = document.querySelector("footer");
  setInterval(function () {
    footer.innerHTML = new Date().toLocaleString();
  }, 1000);
}

//chargement du DOM:
document.addEventListener("DOMContentLoaded", function () {
  LoadDate();
  wrapper = document.querySelector("#wrapper");
  initNavbar();
  constructMainRouteContent(location.pathname);
});

//fonctions:
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

//fonction pour qu'en fonction du pathname dans l'url cela change le wrapper
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
  loadWrapperContent('/src/pages/editor/editor.html');
}
function loadDOMThumbnail() {
  wrapper.innerHTML = "<h1>Thumbnail</h1>";
}

function loadDOMHome() {
  loadWrapperContent('/src/pages/home/home.html');
}

/**
 * fonction de chargement du wrapper par une page html provenant d'une adrese en param
 * @param {*} pageUrl url de la page html à charger par appel http
 */

const loadWrapperContent=(pageUrl)=>{

    const promise=fetch(pageUrl).then((response)=>{return response.text()})
     promise.then(html=>{wrapper.innerHTML = html})



}