//import { Meme } from "../../Meme.js";
//let current=new Meme();

/**
 * selection des memes
 */
export const loadMemesSelectOptions=(memes)=>{
  const select=document.forms['meme-form']['imageId']
  select.innerHTML='<option value="-1">no img</option>';
  images.forEach((memes) => {
    console.log(memes)
    const opt=document.createElement('option');
    opt.value=image.id;
    opt.textContent=image.name;
    select.appendChild(opt)
    });
};
