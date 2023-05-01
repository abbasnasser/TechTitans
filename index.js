function myFunction() {
    var x=document.getElementById('menus')
    if (x.style.display === "block") {
        x.style.animation='animatemenuout 0.5s'
        setTimeout(hide,400)
        function hide() {
            x.style.display = "none";
        }
       
      } else {
        x.style.animation='animatemenuin 0.5s'
        x.style.display = "block";
      } 
}





var x=document.getElementById('mnu')
var x2=document.getElementById('menus')
x.addEventListener('click',myFunction)

window.addEventListener('mouseup' ,function(event) {
    if(event.target!=x2){
       
        x2.style.display='none'
        
    }
    
})


