//export const images=[]


//ajout d'images dans le tableau
const loadDatas = () => {
  return fetch('http://localhost:5679/images').then((r) => r.json());
 /* return promise.then(array=>{
    images.push(...array)
   // Object.assign(images,array)
   return images;
  })*/
}
export const promiseImage=loadDatas();



