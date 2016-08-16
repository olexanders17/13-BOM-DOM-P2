var lang;
lang = 'ua';


function clacLanguage() {
    var rawLang = location.hash.slice(1);
    if (rawLang) {
        lang = rawLang;
    }
    var radio = document.querySelector('input[type="radio"][value=' + lang + "]");
    if (radio) radio.setAttribute('checked', 'true');
    location.hash = radio.getAttribute('value');
}


//
//defaul action
//

clacLanguage();
var checkedRadio;
var $save = document.querySelector('html body button#save');

$save.addEventListener('click', function () {


    checkedRadio = document.querySelector('input[type="radio"][name="lang"][checked="true"]');
    console.log('clicked  ' + lang);

    location.hash=checkedRadio.getAttribute('value');
    console.log("location.hash: " + location.hash);
    //location.hash = attribute;

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
