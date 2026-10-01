export class Meme {
  titre = "";
  text = "";
  x = 0;
  y = 20;
  fontWeight = "500";
  fontSize = 30;
  underline = false;
  italic = false;
  imageId = -1; //par defaut pas d'image séléctionnée
  color = "#000000";
  frameSizeX = 0;
  frameSizeY = 0;
  getSVGNode() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 500 500");
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    // text.attributes["x"].value=this.x
    // text.attributes["y"].value=this.y
    text.setAttribute("x", this.x);
    text.setAttribute("y", this.y);
    text.innerHTML = this.text;
    text.setAttribute("fill", this.color);
    text.setAttribute("font-size", this.fontSize);
    text.setAttribute("font-weight", this.fontWeight);

    svg.appendChild(text)
    return svg;
  }
}

//  const meme =
//   {
//      "id": 0;
//      "titre": "React n'roll";
//      "text": "React n'roll";
//      "x": 100;
//      "y": 20;
//      "fontWeight": "500";
//      "fontSize": 30;
//      "underline": false;
//      "italic": false;
//      "imageId": 0;
//      "color": "#000000";
//      "frameSizeX": 0;
//     "frameSizeY": 0
//   }
