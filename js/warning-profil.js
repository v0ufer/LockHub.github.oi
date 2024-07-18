const btnProfil = document.querySelector(".profil-btn-wraper .image-btn");
const warningMessageProfil = document.querySelector(".warning-message-profil");

btnProfil.addEventListener("click", function(){
    if (warningMessageProfil.classList.contains("hidden")) {
        // Сообщение скрыто, показываем его
        warningMessageProfil.classList.remove("hidden");
        setTimeout(() => {
            warningMessageProfil.classList.add("hidden");
        }, 5000);
    } else {
        // Сообщение видимо, переходим на https://discord.gg/YdBrbzgHp2
        window.location.href = "https://discord.gg/YdBrbzgHp2";
    }
});