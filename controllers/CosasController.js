import { getLocalStorage, removeLocalStorage } from "../utils/local-storage.js";
import { generalAlert } from "../utils/alerts.js";

if (!localStorage.getItem("token")) {
        window.location.replace("/index.html");
    }

let usuario = getLocalStorage('usuario')
console.log(usuario)

document.querySelector('#info-usuario').textContent = 'USUARIO: ' + usuario

document.querySelector('#btn-salir').addEventListener('click', function(){
    removeLocalStorage('usuario')
    window.location.href = '/index.html'
})