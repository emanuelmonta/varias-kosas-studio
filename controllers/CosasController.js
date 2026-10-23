import { getLocalStorage, removeLocalStorage } from "../utils/local-storage.js";
import { generalAlert } from "../utils/alerts.js";
let usuario = getLocalStorage('usuario')
console.log(usuario)

document.querySelector('#info-usuario').textContent = 'USUARIO: ' + usuario

document.querySelector('#btn-salir').addEventListener('click', function(){
    removeLocalStorage('usuario')
    window.location.href = '/index.html'ñ
})