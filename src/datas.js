//export const images=[]

import { Meme } from "./Meme";


//ajout d'images dans le tableau
const loadDatas = () => {
  return fetch('http://localhost:5679/images').then((r) => r.json());
}




//ajout de memes dans le tableau
const loadMemesDatas = () => {
  return fetch('http://localhost:5679/memes')
  .then((r) => r.json())
  .then((array) => {
    const memeArray=[];

    for (const jsonMeme of array) {
      memeArray.push(  Object.assign(new Meme(), jsonMeme))  ;
    }
    return memeArray;
  });
};

export const promiseImage=loadDatas();
export const promiseMemes=loadMemesDatas();