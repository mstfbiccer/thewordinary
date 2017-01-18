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
jQuery(document).ready(function() {
  jQuery('#content,#sel1').change(function() {
    if(jQuery("#sel1").val()==="0") {
      TRENtranslate(jQuery('#content').val());
    }else {
      enTRtranslate(jQuery('#content').val());
    }
});
  jQuery('#randomWords').click(function() {
    indis=Math.round(Math.random()*998);
    enTRtranslateWord(window.enWords[indis]);
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
    jQuery('#result').val(jQuery(data).find('text').text());
  });
}
function enTRtranslateWord (word) {
  jQuery.get("https://translate.yandex.net/api/v1.5/tr/translate?key=trnsl.1.1.20170115T215035Z.2067705a21a23db0.e9644dc2a0da269d204df1c2009d0599159f5433&text="+encodeURI(word)+"&lang=en-tr", function( data ) {
  gonder(word+" : "+jQuery(data).find('text').text());
  });
}

window.enWords=["able","about","above","across","act","action","actually","add","addition","adjective","afraid","Africa","after","again","against","age","ago","agreed","ahead","air","all","allow","almost","alone","along","already","also","although","always","America","among","amount","an","and","angle","animal","another","answer","any","anything","appear","apple","are","area","arms","army","around","arrived","art","as","ask","at","away","baby","back","bad","ball","bank","base","be","bear","beat","beautiful","became","because","become","bed","been","before","began","begin","behind","being","believe","bell","belong","below","beside","best","better","between","big","bill","birds","bit","black","block","blood","blow","blue","board","boat","body","bone","book","born","both","bottom","box","boy","branch","break","bright","bring","British","broken","brother","brought","brown","build","building","built","burn","business","but","buy","by","call","came","can","cannot","can't","capital","captain","car","care","carefully","carry","case","cat","catch","cattle","caught","cause","cell","center","cent","century","certain","chance","change","chart","check","chief","child","children","choose","church","circle","city","class","clean","clear","climb","close","cloth","cloud","coast","cold","color","column","come","common","company","compare","complete","compound","condition","consider","consonant","contain","continue","control","cook","cool","copy","corn","corner","correct","cost","cotton","could","couldn't","count","country","course","cover","cow","create","cry","crop","cross","crowd","current","cut","dance","dark","day","dead","deal","death","decide","decimal","deep","describe","desert","design","details","determine","develope","dictionary","did","didn't","died","difference","different","difficult","direct","direction","discover","distance","divided","division","do","doctor","does","doesn't","dog","dollar","done","don't","door","down","draw","drawing","dress","drive","drop","dry","during","each","early","ear","earth","east","easy","eat","edge","effect","egg","eight","either","electric","element","else","end","energy","engine","England","English","enjoy","enough","enter","entire","equal","equation","especially","Europe","even","evening","ever","every","everyone","everything","exactly","example","except","exciting","exercise","expect","experience","experiment","explain","express","eye","face","fact","factoriy","factors","fall","family","famous","far","farm","farmer","fast","father","fear","feel","feeling","feet","fell","felt","few","field","fig","fight","figure","filled","finally","find","fine","fingers","finished","fire","first","fish","fit","five","flat","floor","flow","flowers","fly","follow","food","foot","for","force","forest","form","forward","found","four","fraction","France","free","French","fresh","friends","from","front","fruit","full","fun","game","garden","gas","gave","general","get","girl","give","glass","go","God","gold","gone","good","got","government","grass","great","Greek","green","grew","ground","group","grow","guess","gun","had","hair","halt","hand","happen","happy","hard","has","hat","have","he","head","hear","heard","heart","heat","heavy","held","help","her","here","high","hill","him","himself","his","history","hit","hold","hole","home","hope","horse","hot","hour","house","how","however","huge","human","hundred","hunting",,"ice","idea","if","I'll","important","in","inches","include","increase","Indian","indicate","industry","information","insect","inside","instead","instruments","interest","interesting","into","iron","is","island","isn't","it","its","it's","itself","Japanese","job","join","jump","just","keep","kept","key","kill","kind","king","knew","know","known","lady","lake","land","language","large","last","later","laugh","law","lay","lead","learn","least","leave","led","left","leg","length","less","let","let's","letter","level","lie","life","lift","light","like","line","list","listen","little","live","location","long","look","lost","lot","loud","love","low","machine","made","main","major","make","man","many","map","march","mark","match","material","matter","may","maybe","me","mean","measure","meat","meet","melody","member","men","metal","method","middle","might","mile","milk","million","mind","mine","minute","miss","modern","molecules","moment","money","month","moon","more","morning","most","mother","mountain","mouth","move","movement","much","music","must","my","name","nation","natural","near","necessary","need","never","new","next","night","no","nor","north","northern","nose","not","note","nothing","notice","noun","now","number","numeral","object","observe","ocean","of","off","office","often","oh","oil","old","on","once","one","only","open","opposite","or","order","other","our","out","outside","over","own","oxygen","page","paint","pair","paper","paragraph","park","part","particular","party","passed","past","pattern","pay","people","per","perhaps","period","person","phrase","pick","picture","piece","place","plain","plan","plane","plant","plants","play","please","plural","poem","point","pole","poor","position","possible","pound","power","practice","prepare","president","pretty","printed","probably","problem","process","produce","product","property","provide","pull","push","put","question","quickly","quiet","quite","race","radio","rain","raise","ran","rather","reach","read","ready","really","reason","receive","record","red","region","remain","remember","repeat","report","represent","resent","rest","result","return","rhythm","rich","ride","right","ring","rise","river","road","rock","rolled","room","root","rope","rose","round","row","rule","run","safe","said","sail","same","sand","sat","save","saw","say","scale","school","science","scientist","score","sea","seat","second","section","see","seed","seem","seen","sell","send","sense","sent","sentence","separate","serve","set","settled","seven","several","shall","shape","sharp","she","ship","shoes","shop","short","should","shoulder","shout","show","shown","side","sight","sign","signal","silent","similar","simple","since","sing","sir","sister","sit","six","size","skin","sky","sleep","sleep","slowly","small","smell","smile","snow","so","soft","soil","soldier","solution","some","someone","something","sometimes","son","song","soon","sound","south","southern","space","speak","special","speed","spell","spot","spread","spring","square","stand","star","start","state","statement","stay","steel","step","stick","still","stone","stood","stop","store","story","straight","strange","stream","street","stretch","string","strong","student","study","subject","substance","such","suddenly","suffix","sugar","suggested","sum","summer","sun","supply","suppose","sure","surface","surprise","swim","syllables","symbols","system","table","tail","take","talk","tall","teacher","team","tell","temperature","ten","term","test","than","that","the","their","them","themselves","then","there","these","they","thick","thin","thing","think","third","this","those","though","thought","thousands","three","through","thus","tied","time","tiny","to","today","together","told","tone","too","took","tool","top","total","touch","toward","town","track","trade","train","train","travel","tree","triangle","trip","trouble","truck","true","try","tube","turn","two","type","uncle","under","underline","understand","unit","until","up","upon","us","use","usually","valley","value","various","verb","very","view","village","visit","voice","vowel","wait","walk","wall","want","war","warm","was","wash","Washington","wasn't","watch","water","waves","way","we","wear","weather","week","weight","well","we'll","went","were","west","western","what","wheel","when","where","whether","which","while","white","who","whole","whose","why","wide","wife","wild","will","win","wind","window","wing","winter","wire","wish","with","within","without","woman","women","wonder","won't","wood","word","work","worker","world","would","wouldn't","write","written","wrong","wrote","yard","year","yellow","yes","yet","you","young","your","you're","yourself"];
setInterval(function() {
  indis=Math.round(Math.random()*998);
  enTRtranslateWord(window.enWords[indis]);
},300000);
