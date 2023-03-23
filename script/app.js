function validarForm() {
    var nombre = document.getElementById("user").value;
    var email = nombre.indexOf("@");
    var password = document.getElementById("pass").value;
    var user = "juan@gmail.com";
    var pass = "Alfa23";
    var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(nombre == "" || password == ""){
        alert("Los campos se encuenran vacios")
}else{
        if (email < 1 || email < +2) {
            alert("El correo debe de contener el @");
            return false;
        } else {
            if (password.length != 6) {
                alert("La contraseña debe tener al menos 6 caracteres");
                return false;
            } else {
                if (mayusculas.indexOf(password.charAt(0)) != -1) {
                    if (user == nombre && pass == password) {
                        location.href = "/pages/menu.html";
                        return true;
                    } else {
                        alert("Usuario o contraseña incorrectos");
                        return false;
                    }
                } else {
                    alert("La contraseña debe tener la primera letra en mayuscula");
                    return false;
                }
            }
        }
}
   
}
function recuperarPass(){
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    if(pass1 == "" || pass2 == ""){
        alert("Los campos se encuenran vacios")
}else{
    if(pass1 != pass2){
        alert("Las contraseñas no coinciden");
    }else{
        alert("La contraseña fue restaurada");
        location.href = "/index.html"
    }
    
}
}
