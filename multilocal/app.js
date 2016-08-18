var lang;
lang = 'ua';


function clacLanguage() {
    var rawLang = location.hash.slice(1);

    if (rawLang) {
        lang = rawLang;
    }
    else {
        lang = "ua";
    }
    var radio = document.querySelector('input[type="radio"][value=' + lang + "]");
    radio.setAttribute('checked', 'checked');

    var langCl = ".lang-" + lang;


    var langDiv = document.querySelector(langCl);
    var allSpan = document.querySelectorAll('.lang');
    for (var i = 0; i < allSpan.length; i++) {
        allSpan[i].classList.remove('visible');

    }

    console.log(langDiv);
    langDiv.className += ' visible';
    location.hash = lang;
    return lang;
}


clacLanguage();

var radioButtons = document.querySelectorAll('input[type="radio"]');
for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', function (e) {
        e.target.setAttribute('checked', 'checked');
        location.hash = e.target.value;
        clacLanguage();
    });
    console.log(i);
}


var $save = document.querySelector('html body button#save');
$save.addEventListener('click', function () {

});


