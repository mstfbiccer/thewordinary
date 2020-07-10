window.Notification = (function () {
    var notification = null;

    return {
        display: function (opt) {
            try {
                notification = chrome.notifications.create(opt);
                notification.show();
            }catch(err) {}

            
        },
        hide: function () {
            notification.close();
        }
    };
})();

function gonder(content) {

    var opt = {
        type: "basic",
        title: "Learn it !",
        message: content,
        iconUrl: "thewordinary.png"
    };
    Notification.display(opt);
}

setInterval(function () {
    jQuery.get('https://spreadsheets.google.com/feeds/list/1snDXBX4mHP9VE6ZZRG-A4UAcFYH5XzC_lN9hqk1lkos/od6/public/values?alt=json', function (data) {
        var wordsArray = data.feed.entry
        enTRtranslateWord(wordsArray[Math.round(Math.random() * wordsArray.length - 2)].title.$t);
    });
}, 2000000);

function enTRtranslateWord(word) {
    jQuery.get('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20170521T212252Z.33f08df3be1d1141.c3bd46ef5dfd991df280d61ddc015e625344982f&lang=en-tr&text=' + encodeURI(word), function (data) {
        data.def.forEach((item) => {
            if (item.pos === "noun") {
                gonder(word + " : " + item.tr[0].text);
            }
        })
    })
}