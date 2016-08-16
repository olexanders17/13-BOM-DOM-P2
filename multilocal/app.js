var applyLanguage = function (lang) {
    alert('now language is: ' + lang);
}

var getCurrentLanguage = function () {
    var defaultLanguage = 'ua';
    //

    var lang = document.querySelector('input[type="radio"][name="lang"][checked]').value;

    if (lang) {
        defaultLanguage = lang;
    }
    console.log(lang);
    return defaultLanguage;
}

var currentLang = getCurrentLanguage();
var langEls = document.getElementsByClassName('lang-' + currentLang);

for (var i = 0; i < langEls.length; i++) {
    var langEl = langEls[i];

    // langEl.style.display = 'inline';
    langEl.classList.add('visible');
}


// $<prefix> == DOMElement
var $save = document.querySelector('html body button#save')

$save.addEventListener('click', function () {

    location.hash=currentLang;
});
