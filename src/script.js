let temp = document.querySelector("#togglepassw");
let password = document.querySelector("#textpassword")

password.addEventListener("input", function() {
    // Verifica se há texto no campo de senha

    const isPasswordEmpty = password.value;


    // Se o campo de senha estiver vazio, oculta o ícone
    if (isPasswordEmpty) {
        temp.style.display = "block";
    } else {
        // Se houver texto, mostra o ícone
        temp.style.display = "none";
    }


});


temp.addEventListener("click", function() {

    //expression ternar
    const result = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", result);

    this.classList.toggle("bi-eye"); //boostrap icon

});