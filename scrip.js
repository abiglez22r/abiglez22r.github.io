
function toggleMenu(){
    var menu = document.getElementById('navbar');
    if (menu.style.display === 'block'){
        menu.style.display = 'none';
    } else {
        menu.style.display = "block";
    }
    
}






function muestra_oclta (id) {
    let div = document.getElementById(id);
    if (div.style.display == "none"){
        div.style.display = "flex";}
    else {
        div.style.display = "none";
    }
}

function muestra_oculta (id) {
    let div = document.getElementById(id);
    if (div.style.display == "flex"){
        div.style.display = "none";}
    else {
        div.style.display = "flex";
    }
}