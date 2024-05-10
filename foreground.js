const button = document.createElement('button');
button.innerText = "altyazıyı ekle";
document.querySelector('header').appendChild(button);


var totalWordCount = 0;

button.addEventListener('click', ()=> {
    var subtitleDiv = document.querySelector('.c-player-subtitle');
    console.log(subtitleDiv.textContent);

    var text = subtitleDiv.textContent.trim();
    // Boşluk karakterlerine göre metni parçalayarak kelime sayısını bulma
    var wordCount = text.split(/\s+/).length;
    console.log("Kelime Sayısı:", wordCount);

    totalWordCount += wordCount;
    console.log("Toplam Kelime sayısı:", totalWordCount);
})

