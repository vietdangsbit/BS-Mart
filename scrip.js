const optionMenu = document.querySelector(".form"),
        selectBtn = optionMenu.querySelector(".icon-muiten"),
        options = optionMenu.querySelectorAll(".option"),
        sBtn_text = optionMenu.querySelector(".chu");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
