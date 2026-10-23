const usuarios = [
    {
        nombre:"Jaime Zapata Valencia",
        telefono:"3058577789",
        correo:"correro@correo.com",
        contrasena:"12345678",
        id:"id1234567890"
    },
    {
        nombre:"Emanuel Montaño Marín",
        telefono:"3195648987",
        correo:"em@correo.com",
        contrasena:"87654321",
        id:"id0987654321"
    }

];

export function guardarUsuario(){

}

export function buscarUsuario(correo, contrasena){
    let auth = usuarios.find((usuario)=> correo === usuario.correo && contrasena === usuario.contrasena )

    return auth
}