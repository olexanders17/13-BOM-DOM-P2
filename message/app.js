var navigatorMessageMap = {
    'mac': 'macos',
    'iphone': 'macos',
    'win': 'windows'
};

var platform = navigator.platform.toLowerCase();


for (var key in navigatorMessageMap) {
    key = key.toLowerCase();
    var version = navigatorMessageMap[key];
    console.log(navigatorMessageMap);

    if (platform.indexOf(key) >= 0) {
        document.querySelector('.download-message[data-version=' + version + ']').style.display = "block";
    }

}