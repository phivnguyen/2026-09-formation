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
  wrapper.innerHTML = "<h1>Editor</h1>";
}
function loadDOMThumbnail() {
  wrapper.innerHTML = "<h1>Thumbnail</h1>";
}

function loadDOMHome() {
  wrapper.innerHTML = "<h1>Home</h1>";
}


function loadDOMHome() {
  const promise=fetch('/src/pages/home/home.html').then((response)=>{return response.text()})
  promise.then(html=>{wrapper.innerHTML = html})
   
}