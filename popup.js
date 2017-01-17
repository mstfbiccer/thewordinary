window.Notification=(function(){
    var notification=null;
  
    return {
        display:function(opt){
            notification=chrome.notifications.create(opt);
            notification.show();
        },
        hide:function(){
            notification.close();
        }
    };
})();
function gonder(content) {

  var opt = {
        type: "basic",
        title: "Hello World",
        message: content,
        iconUrl: "thewordinary.png"
    };
    Notification.display(opt);
}
jQuery(document).ready(function() {
  jQuery('#content,#sel1').change(function() {
    if(jQuery("#sel1").val()==="0") {
      TRENtranslate(jQuery('#content').val());
    }else {
      enTRtranslate(jQuery('#content').val());
    }
});
  });
function TRENtranslate (word) {
  jQuery.get("https://translate.yandex.net/api/v1.5/tr/translate?key=trnsl.1.1.20170115T215035Z.2067705a21a23db0.e9644dc2a0da269d204df1c2009d0599159f5433&text="+encodeURI(word)+"&lang=tr-en", function( data ) {
    jQuery('#result').val(jQuery(data).find('text').text())
  });
}
   
function enTRtranslate (word) {
  jQuery.get("https://translate.yandex.net/api/v1.5/tr/translate?key=trnsl.1.1.20170115T215035Z.2067705a21a23db0.e9644dc2a0da269d204df1c2009d0599159f5433&text="+encodeURI(word)+"&lang=en-tr", function( data ) {
    //gonder(jQuery(data).find('text').text());
    jQuery('#result').val(jQuery(data).find('text').text())
  });
}


