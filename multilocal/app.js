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
    });
    console.log(i);
}


var $save = document.querySelector('html body button#save');

//save write to hash
$save.addEventListener('click', function () {

});


/*
 var applyLanguage = function (lang) {
 alert('now language is: ' + lang);
 }

 var getCurrentLanguage = function () {

 var defaultLanguage = 'ua';
 var rawLang = location.hash.slice(1);

 if (rawLang) {
 defaultLanguage = rawLang;
 document.querySelector('input[type="radio"][value=' + defaultLanguage + "]").setAttribute('checked','true' );
 }

 var lang = document.querySelector('input[type="radio"][name="lang"][checked]');

 if (lang) {
 defaultLanguage = lang.value;
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
 */


// // $<prefix> == DOMElement
// var $save = document.querySelector('html body button#save')
//
// $save.addEventListener('click', function () {
//     location.hash = currentLang;
// });
