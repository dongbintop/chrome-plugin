function load() {
    window.console.info('ready.....');

    chrome.tabs.query({
        "active" : true
    }, function(tabArr) {
        var tab = tabArr[0];
        window.console.info("title=" + tab.title);
        window.console.info("url=" + tab.url);

        var qrcode = new QRCode(document.getElementById("qr_code"), {
            width: 150,
            height: 150,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });

        qrcode.clear();
        qrcode.makeCode(tab.url);
    });
};
window.onload = load();