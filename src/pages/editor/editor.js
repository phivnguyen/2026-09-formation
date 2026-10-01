import { Meme } from "../../Meme.js";
let current=new Meme();

/**
 * selection des images
 */
export const loadImageSelectOptions=(images)=>{
  const select=document.forms['meme-form']['imageId']
  select.innerHTML='<option value="-1">no img</option>';
  images.forEach((image) => {
    console.log(image)
    const opt=document.createElement('option');
    opt.value=image.id;
    opt.textContent=image.name;
    select.appendChild(opt)
    });
};

/**
 * permet d'avoir la valeur du texte tapé dans le formulaire
 */
export const fillForm=()=>{
  const form = document.forms["meme-form"];
  for (let i = 0; i < form.length - 2; i++){
    const name = form[i].name;
    const input = form[i];
    if (input.type == "checkbox"){
      input.checked = current[name];
      input.addEventListener("change", (evt) => {
        current[name] = input.checked;
    });
  } else { 
      input.value = current[name];
      input.addEventListener("input", (evt) => {
        current[name] = input.value;
    });
  }
  }
};





 // const inputText=document.forms['meme-form']['text'];
 // inputText.value=current.text
 // inputText.addEventListener('input',(evt)=>{
 //   console.log(evt.target.value);
 // })