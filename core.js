jQuery(function () {

  window.enTRtranslateWord = function enTRtranslateWord(word) {
    jQuery.get('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20170521T212252Z.33f08df3be1d1141.c3bd46ef5dfd991df280d61ddc015e625344982f&lang=en-tr&text=' + encodeURI(word), function (data) {
      data.def.forEach((item) => {
        if (item.pos === "noun") {
          jQuery('#noun').text(item.tr[0].text)
        }
        if (item.pos === "adverb") {
          jQuery('#adverb').text(item.tr[0].text)
        }
        if (item.pos === "verb") {
          jQuery('#verb').text(item.tr[0].text)
        }
        if (item.pos === "adjective") {
          jQuery('#adjective').text(item.tr[0].text)
        }
      })
    })
  }
  var keyword = document.location.search.replace('?word=', '');
  jQuery('.title').text(keyword)
  enTRtranslateWord(keyword);
});