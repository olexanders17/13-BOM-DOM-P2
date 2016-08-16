var navigatorMessageMap = {
    'mac': 'macos',
    'iphone': 'macos',
    'win': 'windows'
};

var platform = navigator.platform.toLowerCase();

var isexistsOS = false;
for (var key in navigatorMessageMap) {
    key = key.toLowerCase();
    var version = navigatorMessageMap[key];

    if (platform.indexOf(key) >= 0) {
        document.querySelector('.download-message[data-version=' + version + ']').style.display = "block";
        isexistsOS = true;
    }
}
if (!isexistsOS) {
    document.querySelector('.download-message[data-version=' + "noname" + ']').style.display = "block";
}