import { setLocalStorage } from "../utils/local-storage.js"

export let kosas = []

export function guardarKosa(Key, value){
    setLocalStorage(Key, value)


}

export function buscarKosa(){

}