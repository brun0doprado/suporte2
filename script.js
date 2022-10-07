document.addEventListener("DOMContentLoaded", function(event) {
   
  const showNavbar = (toggleId, navId, bodyId, headerId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId),
  bodypd = document.getElementById(bodyId),
  headerpd = document.getElementById(headerId)
  
  // Validate that all variables exist
  if(toggle && nav && bodypd && headerpd){
  toggle.addEventListener('click', ()=>{
  // show navbar
  nav.classList.toggle('show')
  // change icon
  toggle.classList.toggle('bx-x')
  // add padding to body
  bodypd.classList.toggle('body-pd')
  // add padding to header
  headerpd.classList.toggle('body-pd')
  })
  }
  }
  
  showNavbar('header-toggle','nav-bar','body-pd','header')
  
  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll('.nav_link')
  
  function colorLink(){
  if(linkColor){
  linkColor.forEach(l=> l.classList.remove('active'))
  this.classList.add('active')
  }
  }
  linkColor.forEach(l=> l.addEventListener('click', colorLink))
  
   // Your code to run since DOM is loaded and ready
  });



  var x = document.getElementById('page_proc');
  var y = document.getElementById('page_home');

function esconde_recurso(){
  x.style.display = "none";
}

function esconde_tela_proc(){
  y.style.display = "none";
}

  function mostra_recursos() {

    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
    esconde_tela_proc();
  }

  function mostra_tela_proc(){

    if (y.style.display === 'none') {
      y.style.display = 'block';
    } else {
      y.style.display = 'none';
    }
    esconde_recurso();
  }

function importar_txt(){
  alert("copiado!");
}

z = document.getElementById('txt_copiado')

function esconde_copy(){
  setTimeout(function(){
  z.style.display = "none"
  }, 700);
};

function mostra_copy(){
  if (z.style.display === 'none') {
    z.style.display = 'block';
  } else {
    z.style.display = 'none';
  }
  esconde_copy();
}

function copiar_imp_txt(){
    document.querySelector("#importa_txt").select();  
    document.execCommand("copy");
}

