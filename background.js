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
        title: "Learn it !",
        message: content,
        iconUrl: "thewordinary.png"
    };
    Notification.display(opt);
}
var contextMenu = function(e) {
    if (e.selectionText) {
        // The user selected some text, put this in the message.
    jQuery.get("https://translate.yandex.net/api/v1.5/tr.json/detect?key=trnsl.1.1.20170115T215035Z.2067705a21a23db0.e9644dc2a0da269d204df1c2009d0599159f5433&text="+encodeURI(e.selectionText), function( data ) {   
        var lang=data['lang'];
        jQuery.get("https://translate.yandex.net/api/v1.5/tr/translate?key=trnsl.1.1.20170115T215035Z.2067705a21a23db0.e9644dc2a0da269d204df1c2009d0599159f5433&text="+encodeURI(e.selectionText)+"&lang="+lang+"-tr", function( data2 ) {
          gonder(e.selectionText+" : "+jQuery(data2).find('text').text());
        });
    });
    }
};
chrome.contextMenus.create({
    "title": "The Wordinary Translate",
    "contexts": ["selection"],
    "onclick" : contextMenu
  });
