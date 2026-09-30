export const images=[]

//ajout d'images dans le tableau
const loadDatas=()=>{
  const promise = fetch('http://localhost:5679/images').then(r=>r.json())
  promise.then(array=>{
    images.push(...array)
   // Object.assign(images,array)
  })
}