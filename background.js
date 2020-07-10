window.Notification = (function () {
  var notification = null;

  return {
    display: function (frmURL, opt) {
      var notifId = ""
      chrome.notifications.create(frmURL, opt, function (notificationId) {
        notifId = notificationId
      });
      // create a on Click listener for notifications
      /* Respond to the user's clicking one of the buttons */
      var open_editor_in_tab = function (notifId, btnIdx) {
        if (btnIdx === 0) {
          chrome.notifications.onButtonClicked.removeListener(open_editor_in_tab);
          window.open(frmURL);
        }
      }
      chrome.notifications.onButtonClicked.addListener(open_editor_in_tab);
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
    iconUrl: "thewordinary.png",
    buttons: [{
      title: "More Detail!"
    }]
  };
  Notification.display('https://mstfbiccer.github.io/thewordinary/?word=' + content.split(':')[0].trim(), opt);
}

setInterval(function () {
  jQuery.get('https://spreadsheets.google.com/feeds/list/1snDXBX4mHP9VE6ZZRG-A4UAcFYH5XzC_lN9hqk1lkos/od6/public/values?alt=json', function (data) {
    var wordsArray = data.feed.entry
    enTRtranslateWord(wordsArray[Math.round(Math.random() * wordsArray.length - 2)].title.$t);
  });
}, 2000000);
function enTRtranslateWord(word) {
  jQuery.get('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20170521T212252Z.33f08df3be1d1141.c3bd46ef5dfd991df280d61ddc015e625344982f&lang=en-tr&text=' + encodeURI(word), function (data) {
    var control = false;
    data.def.forEach((item) => {
      if (item.pos === "noun") {
        control = true;
        gonder(word + " : " + item.tr[0].text);
      }
    })
    if (!control) {
      data.def.forEach((item) => {
        if (item.pos === "adverb") {
          control = true;
          gonder(word + " : " + item.tr[0].text);
        }
      })
    }
    if (!control) {
      data.def.forEach((item) => {
        if (item.pos === "verb") {
          control = true;
          gonder(word + " : " + item.tr[0].text);
        }
      })
    }
    if (!control) {
      data.def.forEach((item) => {
        if (item.pos === "adjective") {
          control = true;
          gonder(word + " : " + item.tr[0].text);
        }
      })
    }
    if (!control) {
      data.def.forEach((item) => {
        if (item.pos === "participle") {
          control = true;
          gonder(word + " : " + item.tr[0].text);
        }
      })
    }
    if (!control) {
      data.def.forEach((item) => {
        if (item.pos === "preposition") {
          control = true;
          gonder(word + " : " + item.tr[0].text);
        }
      })
    }
  })
}