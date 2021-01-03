var navMenu = document.getElementById('nav-menu');
var menuIcon = document.getElementById('fa-bars');
var btn = false

function menu(){
    if(!btn){
        btn = true
        navMenu.style.display = 'block'
        return
    }
    if(btn){
        btn= false
        navMenu.style.display = 'none'
        return
    }
    
}