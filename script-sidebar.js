document.addEventListener("DOMContentLoaded", function() {
    var prontuarioItem = document.getElementById("prontuario_item");

    // Função para alternar a exibição do submenu
    function toggleDropdown() {
        var submenu = prontuarioItem.querySelector(".submenu");
        submenu.classList.toggle("open");
    }

    // Abrir/fechar barra lateral ao clicar no botão de abertura/fechamento
    document.getElementById('open_btn').addEventListener('click', function () {
        document.getElementById('sidebar').classList.toggle('open-sidebar');
        
        // Fechar o submenu ao abrir/fechar a barra lateral
        var submenu = prontuarioItem.querySelector(".submenu");
        submenu.classList.remove("open");
    });

    // Fechar o submenu ao clicar fora dele
    document.addEventListener("click", function(event) {
        var prontuarioItem = document.getElementById("prontuario_item");
        var submenu = prontuarioItem.querySelector(".submenu");
        if (!prontuarioItem.contains(event.target)) {
            submenu.classList.remove("open");
        }
    });
}); 