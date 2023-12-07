//Mostrar menu responsive

function responsiveMenu(){
    let x = document.getElementById("nav")
    if(x.className===""){
        x.className = "responsive"
    }
    else{
        x.className = ""
    }
}

//Aplicar estilo a la opción seleccionada 

function seleccionar(link){
    let opciones = document.querySelectorAll("#links a")
    opciones[0].className = ""
    opciones[1].className = ""
    opciones[2].className = ""
    opciones[3].className = ""
    opciones[4].className = ""

    link.className = "seleccionado"
    
    let x = document.getElementById("nav")
    x.className = "";
    
}


/*Aplicar animación de la barra de habilidades*/

window.onscroll = function(){
    efectoHabilidades()
}


//Función que aplica la animación a la barra de habilidades 

function efectoHabilidades(){
    let skills = document.getElementById("skills")
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top
    if(distancia_skills>= 300){
        document.getElementById("react").classList.add("barra-progreso")
        document.getElementById("vue").classList.add("barra-progreso2")
        document.getElementById("nest").classList.add("barra-progreso3")
        document.getElementById("node").classList.add("barra-progreso4")
       
    }
}

//Proyectos

const pgFrontendCandidate = document.getElementById("pg-fr-candidate");
pgFrontendCandidate.addEventListener('click',()=>redirectToGitHub("https://github.com/Ernech/proyecto-grado-web-candidate"));

const pgFrontendReclutador = document.getElementById("pg-frontend");
pgFrontendReclutador.addEventListener('click',()=>redirectToGitHub("https://github.com/Ernech/proyecto-grado-web"));

const medicClubApp = document.getElementById("alternova-shop");
medicClubApp.addEventListener('click',()=>redirectToGitHub("https://github.com/Ernech/alternova-shop-react"));

const pgBackend = document.getElementById("pg-backend");
pgBackend.addEventListener('click',()=>redirectToGitHub("https://github.com/Ernech/proyecto-grado-api"));

const restServerNest = document.getElementById("cofee-nestjs");
restServerNest.addEventListener('click',()=>redirectToGitHub("https://github.com/Ernech/rest-server-nestjs-mongodb"));

const restServerNode = document.getElementById("coffe-nodejs");
restServerNode.addEventListener('click',()=>redirectToGitHub("https://github.com/Ernech/rest-server-nodejs"));

const restServerNodeTs = document.getElementById("nodejs-ts-mysql");
restServerNodeTs.addEventListener('click',()=>redirectToGitHub("https://github.com/Ernech/anylist-node-ts"));

const restServerNodeTsCA = document.getElementById("nodejs-ts-mongodb");
restServerNodeTsCA.addEventListener('click',()=>redirectToGitHub("https://github.com/Ernech/rest-server-nodejs-clean-architecture"));

const vueTanStackQuery = document.getElementById("vue-tanstack-ts");
restServerNodeTsCA.addEventListener('click',()=>redirectToGitHub("https://github.com/Ernech/github-issues-app-vue"));



function redirectToGitHub(url){
    window.open(url,"_blank");
}


