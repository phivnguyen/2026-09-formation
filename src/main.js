console.log('coucoutest')
function LoadDate(){
  setInterval(function(){
    document.querySelector('footer').innerHTML=new Date().toLocaleString()
   },1000)

}

document.addEventListener('DOMContentLoaded',function(){
      LoadDate();
  
})