const btn = document.getElementById("btn-cadastro");
const Email = document.getElementById('email')
const Senha = document.getElementById('senha')


btn.addEventListener("click", () => {
  //   location.href = "../pages/cep2.html";

if(Email != ""  && Senha != ""){
  location.href = "../index.html";
  }
});


// /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;