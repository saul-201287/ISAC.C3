function registrar() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var correo = document.getElementById("correo").value;
    if (user == "" || pass == "" || correo == "") {
        alert("Los campos se encuenran vacios")
    } else {
        alert("Usuario registrado exitosamenete")
        location.href = "/index.html";
    }
}