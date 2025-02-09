let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
let resultDiv = document.getElementById("result");
let gifImage = document.querySelector(".gif"); // Селектор для гифки

let noTexts = ["Ты уверена?", "Подумай еще!", "Последний шанс!", "Ну пожалуйста!", "Ну ладно..."];
let noClickCount = 0;

noButton.addEventListener("click", function() {
    if (noClickCount < noTexts.length) {
        noButton.innerText = noTexts[noClickCount];
        noClickCount++;
    }

    yesButton.style.fontSize = (parseInt(window.getComputedStyle(yesButton).fontSize) + 5) + "px"; // Увеличиваем размер текста

    if (noClickCount >= 4) {
        yesButton.style.width = "300px"; // Увеличиваем ширину кнопки "Да"
        yesButton.style.height = "80px"; // Увеличиваем высоту кнопки "Да"
        noButton.style.opacity = 0; // Исчезаем кнопку "Нет"
    }
});

yesButton.addEventListener("click", function() {
    // Скрываем гифку
    gifImage.style.display = "none";

    // Скрываем заголовок и кнопки
    document.querySelector("h1").style.display = "none"; 
    document.querySelector(".buttons").style.display = "none"; 

    resultDiv.classList.remove("hidden"); // Показываем финальный текст и гифку
    setTimeout(() => {
        resultDiv.classList.add("show"); // Плавно показываем результат
    }, 200);
});
