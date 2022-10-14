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

var t = document.getElementById('mostrar_opt_plugin');

function mostra_opt_plugins(){
  if (t.style.display === 'none') {
  t.style.display = 'block';
  } else {
    t.style.display = 'none';
  }
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
    mostra_copy();
}

function copiar_imp_xls(){
  document.querySelector("#importa_xls").select();  
  document.execCommand("copy");
  mostra_copy();
}

function copiar_imp_promob_plus(){
  document.querySelector("#importa_promob_plus").select();  
  document.execCommand("copy");
  mostra_copy();
}

function copiar_imp_domus(){
  document.querySelector("#importa_domus").select();  
  document.execCommand("copy");
  mostra_copy();
}

function copiar_imp_projje(){
  document.querySelector("#importa_projje").select();  
  document.execCommand("copy");
  mostra_copy();
}

function copiar_imp_systarp(){
  document.querySelector("#importa_systarp").select();  
  document.execCommand("copy");
  mostra_copy();
}

function copiar_imp_dinabox_api(){
  document.querySelector("#importa_dinabox_api").select();  
  document.execCommand("copy");
  mostra_copy();
}

function copiar_imp_optimik(){
  document.querySelector("#importa_optimik").select();  
  document.execCommand("copy");
  mostra_copy();
}

function copiar_exp_cvl(){
  document.querySelector("#exporta_cvl").select();  
  document.execCommand("copy");
  mostra_copy();
}

function copiar_exp_icut(){
  document.querySelector("#exporta_icut").select();  
  document.execCommand("copy");
  mostra_copy();
}

function copiar_exp_wincut(){
  document.querySelector("#exporta_wincut").select();  
  document.execCommand("copy");
  mostra_copy();
}

function copiar_exp_usikraft_2010(){
  document.querySelector("#exporta_usikraft_2010").select();  
  document.execCommand("copy");
  mostra_copy();
}

function copiar_exp_usikraft_2014(){
  document.querySelector("#exporta_usikraft_2014").select();  
  document.execCommand("copy");
  mostra_copy();
}

function copiar_exp_usikraft_2021(){
  document.querySelector("#exporta_usikraft_2021").select();  
  document.execCommand("copy");
  mostra_copy();
}

function copiar_exp_giben(){
  document.querySelector("#exporta_giben").select();  
  document.execCommand("copy");
  mostra_copy();
}

function copiar_exp_inmes(){
  document.querySelector("#exporta_inmes").select();  
  document.execCommand("copy");
  mostra_copy();
}

function copiar_exp_alca_cnc(){
  document.querySelector("#exporta_alca_cnc").select();
  document.execCommand("copy");
  mostra_copy();  
}

function copiar_exp_inmes_auto(){
  document.querySelector("#exporta_inmes_auto").select();  
  document.execCommand("copy");
  mostra_copy();
}

function copiar_exp_nanxing(){
  document.querySelector("#exporta_nanxing").select();  
  document.execCommand("copy");
  mostra_copy();
}

function copiar_exp_putsch(){
  document.querySelector("#exporta_putsch").select();  
  document.execCommand("copy");
  mostra_copy();
}

function copiar_exp_dxf(){
  document.querySelector("#exporta_dxf").select();  
  document.execCommand("copy");
  mostra_copy();
}

function esconder_plugin_imp(){
  var imp = document.getElementsByClassName('plugin_imp')[0];
  imp.style.display = "none";
}

function esconder_plugin_imp(){
  mostra_todos_plugins();
  var imp = document.getElementsByClassName('plugin_imp'),i,len;
  for (i = 0, len = imp.length; i < len; i++) {  
  imp[i].style.display = "none";
  }
}


function esconder_plugin_exp(){
  mostra_todos_plugins();
  var exp = document.getElementsByClassName('plugin_exp'),i,len;
  for (i = 0, len = exp.length; i < len; i++) {  
  exp[i].style.display = "none";
  }
}

function mostra_todos_plugins(){
  var imp = document.getElementsByClassName('plugin_imp'),i,len;
  for (i = 0, len = imp.length; i < len; i++) {  
  imp[i].style.display = "inline";
  };
  var exp = document.getElementsByClassName('plugin_exp'),i,len;
  for (i = 0, len = exp.length; i < len; i++) {  
  exp[i].style.display = "inline";
  };
}

function search_animal(){
  let input = document.getElementById('search-plugin').value
  input=input.toLowerCase();
  let x2 = document.getElementsByClassName('buttonClass2');
    
  for (i = 0; i < x2.length; i++) { 
      if (!x2[i].innerHTML.toLowerCase().includes(input)) {
          x2[i].style.display="none";
      }
      else {
          x2[i].style.display="inline";                 
      }
  }
}

var tela_plugin = document.getElementById('slide_tela_plugins');
var tela_etiqueta = document.getElementById('slide_tela_etiqueta');
var tela_planilha = document.getElementById('slide_tela_planilha');

function mostra_slide_plugin(){
  tela_plugin.style.display = "block";
  tela_etiqueta.style.display = "none";
  tela_planilha.style.display = "none";
}

function mostra_slide_etiqueta(){
  tela_etiqueta.style.display = "block";
  tela_plugin.style.display = "none";
  tela_planilha.style.display = "none";
}

function mostra_slide_planilha(){
  tela_etiqueta.style.display = "none";
  tela_plugin.style.display = "none";
  tela_planilha.style.display = "block";
}

var campos_dinabox = document.getElementById('detalhe_campos_dinabox');
var campos_promob = document.getElementById('detalhe_campos_promob_start');

function mostra_campos_etiqueta_promob(){
  campos_promob.style.display = "block"
}

function mostra_campos_etiqueta_dinabox(){
campos_dinabox.style.display = "block";
}

function esconde_campos_etiqueta_dinabox(){
  campos_dinabox.style.display = "none"
}

function esconde_campos_etiqueta_promob(){
  campos_promob.style.display = "none"
}

var txt_nome_cliente = document.getElementById('txt_nome_cliente')
var table = document.getElementById('tabela_criada')
var form_novo_campo = document.getElementById('form_novo_campo');
var txt_nome_campo = document.getElementById('txt_nome_campo');
var btn_fita_4l = document.getElementById('btn_fita_4_lados');
var btn_fita_peca = document.getElementById('btn_fita_peca');

function limpa_input_campo(){
  txt_nome_campo.value = "";
}

function criar_id_campo(){
  for ([i=2]; [i < id_criado_campo]; [i++]){

  }
}

var linha_colunas_tabela = document.getElementById('linha_coluna_tabela');


function novo_campo_tabela(){
  var novo_campo = document.createElement("th");
  novo_campo.innerHTML = txt_nome_campo.value;
  limpa_input_campo();
  linha_colunas_tabela.appendChild(novo_campo);
  preencher_nome_campo_script();
  
}

txt_nome_campo.addEventListener('keyup', function(e){
  var key = e.which || e.keycode;
  if (key == 13){
    novo_campo_tabela();
    limpa_input_campo();
  }
});



function desabilitar_btn_fita_4lados(){
  btn_fita_4l.setAttribute("disabled","disabled");
}
function desabilitar_btn_fita_peca(){
  btn_fita_peca.setAttribute("disabled","disabled");
}

function gerar_campo_fita_unico(){
  var fita_peca = document.createElement("th");
  var fita_peca_campo_script = document.createElement("p");
  var lista_campo_fita_peca = document.createElement("li");
  fita_peca.innerHTML = 'Fita de Borda';
  parametro_fita_peca = 'fita'
  lista_campo_fita_peca.innerHTML = parametro_fita_peca;
  fita_peca_campo_script.innerHTML = 'part.putAddField("'+parametro_fita_peca+'", array[testando].trim());';
  linha_colunas_tabela.appendChild(fita_peca);
  div_lista_campos_criados.appendChild(lista_campo_fita_peca);
  desabilitar_btn_fita_4lados();
  desabilitar_btn_fita_peca();
}

function gerar_campo_fita_lados(){
  var fita_sup = document.createElement("th");
  var fita_inf = document.createElement("th");
  var fita_esq = document.createElement("th");
  var fita_dir = document.createElement("th");
  var fita_sup_campo_script = document.createElement("p")
  var fita_inf_campo_script = document.createElement("p")
  var fita_esq_campo_script = document.createElement("p")
  var fita_dir_campo_script = document.createElement("p")
  var lista_campo_fita_inf = document.createElement("li")
  var lista_campo_fita_sup = document.createElement("li")
  var lista_campo_fita_dir = document.createElement("li")
  var lista_campo_fita_esq = document.createElement("li")
          fita_sup.innerHTML = 'Fita Superior'
          fita_inf.innerHTML = 'Fita Inferior'
          fita_esq.innerHTML = 'Fita Esquerda'
          fita_dir.innerHTML = 'Fita Direita'
          parametro_fita_sup = 'fita_superior'
          parametro_fita_inf = 'fita_inferior'
          parametro_fita_dir = 'fita direita'
          parametro_fita_esq = 'fita_esquerda'
          lista_campo_fita_inf.innerHTML = parametro_fita_inf;
          lista_campo_fita_sup.innerHTML = parametro_fita_sup;
          lista_campo_fita_esq.innerHTML = parametro_fita_esq;
          lista_campo_fita_dir.innerHTML = parametro_fita_dir;
  fita_sup_campo_script.innerHTML = 'part.putAddField("'+parametro_fita_sup+'", array[testando].trim());';
  fita_inf_campo_script.innerHTML = 'part.putAddField("'+parametro_fita_inf+'", array[testando].trim());';
  fita_esq_campo_script.innerHTML = 'part.putAddField("'+parametro_fita_dir+'", array[testando].trim());';
  fita_dir_campo_script.innerHTML = 'part.putAddField("'+parametro_fita_esq+'", array[testando].trim());';
        linha_colunas_tabela.appendChild(fita_sup);
        linha_colunas_tabela.appendChild(fita_inf);
        linha_colunas_tabela.appendChild(fita_esq);
        linha_colunas_tabela.appendChild(fita_dir);
        div_lista_campos_script.appendChild(fita_sup_campo_script);
        div_lista_campos_script.appendChild(fita_inf_campo_script);
        div_lista_campos_script.appendChild(fita_dir_campo_script);
        div_lista_campos_script.appendChild(fita_esq_campo_script);
        div_lista_campos_criados.appendChild(lista_campo_fita_inf);
        div_lista_campos_criados.appendChild(lista_campo_fita_sup);
        div_lista_campos_criados.appendChild(lista_campo_fita_dir);
        div_lista_campos_criados.appendChild(lista_campo_fita_esq);

  desabilitar_btn_fita_4lados();
  desabilitar_btn_fita_peca();
}
// function excluir(){

  
//     for(i=0; i < contatos.length; i++){
//         var contato = contatos[i];
//         if(contato.id == input_linha_excluir.value){
//             contatos.splice(i , 1);
//         }
         
//      }
    
        
//      limpa_tabela();
//     carregar_tabela();
//     fechar_excluir();
// }

var div_lista_campos_script = document.getElementById('lista_campos_script');
var div_lista_campos_criados = document.getElementById('lista_campos_criados_parametros');

function preencher_nome_campo_script(){
  var linha_campo_script = document.createElement("p")
  var lista_nome_campo_parametro = document.createElement("li");
  lista_nome_campo_parametro.innerHTML = txt_nome_campo.value.toLowerCase();
  linha_campo_script.innerHTML = 'part.putAddField("'+txt_nome_campo.value.toLowerCase()+'", array[].trim());';
      div_lista_campos_criados.appendChild(lista_nome_campo_parametro);
      div_lista_campos_script.appendChild(linha_campo_script);

}


let text_area = document.getElementById('textAreaTest')

function init(){
  var arqSele = document.getElementById('fileCsvUp');
  arqSele.addEventListener('change',function(e){
    let reader = new FileReader();
    console.log("passou aqui");
    reader.onload = (e) => {
      const str = e.target.result;
      const lines = str.split(/\r\n|\n/);
      const linha1 = lines[0];
      const colunas = linha1.split(";");
      for (var i = 0; i < colunas.length; i++){
        var linha_campo_script = document.createElement("p");
        var lista_nome_campo_parametro = document.createElement("li");
        lista_nome_campo_parametro.innerHTML = colunas[i].toLowerCase();
        linha_campo_script.innerHTML = 'part.putAddField("'+colunas[i]+'", array[','].trim());';
        console.log("puxou aqui"+colunas[i]);
        div_lista_campos_criados.appendChild(lista_nome_campo_parametro);
        div_lista_campos_script.appendChild(linha_campo_script);
      }

      

      console.log(colunas[1]);
      console.log(colunas.length);
    };
    reader.readAsText(arqSele.files[0]);

  });
}

init();

function gerar_planilha(){
  var html = table.outerHTML;
  let data = html;
  let blob = new Blob([data], { type: 'text/plain;charset=utf-8;' });
  const link= window.document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = txt_nome_cliente.value +" planilha.xls";
  link.click();
  window.URL.revokeObjectURL(link.href);
}

var estrutura_script = document.getElementById('estrutura_script');

function download_script(){
  var script = estrutura_script.textContent;
  let data = script;
  let blob = new Blob([data], { type: 'text/plain;charset=utf-8;' });
  const link= window.document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = txt_nome_cliente.value  +"-script.script";
  link.click();
  window.URL.revokeObjectURL(link.href);
  }

var div_lista_campos_parametros = document.getElementById('div_lista_campos_parametros');

  function mostra_lista_campos_par(){

    if (div_lista_campos_parametros.style.display === 'none') {
      div_lista_campos_parametros.style.display = 'block';
    } else {
      div_lista_campos_parametros.style.display = 'none';
    }
  }

// function download_txt(){
// let data = 'Um conteudo qualquer';
// let blob = new Blob([data], { type: 'text/plain;charset=utf-8;' });
// const link= window.document.createElement('a');
// link.href = window.URL.createObjectURL(blob);
// link.download = 'export.script';
// link.click();
// window.URL.revokeObjectURL(link.href);
// }



// $(document).ready(function () {

//   $('#btnConverter').click(function(){

//       // veja mais em: http://papaparse.com/docs#jquery
//       $('input[type=file]').parse({
        
//           //definindo configuração
//           config : buildConfig()
//       });
//   });

//   function buildConfig()
//   {
//       // função chamada quando completar a conversão
//       return {complete: Complete};
//   }

//   function Complete(results)
//   {
//       // limpando conteudo da div
//       $('#tabela_aqui').html('');
//       // inserindo tabela na div
//       $('<table id="tabela"></table>').appendTo('#tabela_aqui');
//       // inserindo linhas
//       for (var i = 0; i < results.data.length; i++) {
//           $('<tr></tr>').appendTo('#tabela');
//       }
//       // inserindo celulas nas linhas
//       $('tr').each(function(key, val) {
//           for (var j = 0; j < results.data[0].length; j++) {
//               $(this).append('<td>'+results.data[key][j]+'</td>');
//           }
//       });

//   }
// });
