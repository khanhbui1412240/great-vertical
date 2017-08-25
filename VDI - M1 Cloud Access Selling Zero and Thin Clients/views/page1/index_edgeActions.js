/***********************
 * Adobe Edge Animate Composition Actions
 *
 * Edit this file with caution, being careful to preserve
 * function signatures and comments starting with 'Edge' to maintain the
 * ability to interact with these actions from within Adobe Edge Animate
 *
 ***********************/
(function($, Edge, compId){
  var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

  var stage_sym;
  var main_sym;

  //make element center on stage
  function makeItCenter(el)
  {
    if($("#Stage").width() < 1200){
      el.css("marginLeft","0px");
      el.css("left","76px");
    }else{
      el.css("marginLeft",(el.width()/2)*-1);
      el.css("left","50%");
    }

  }

  //jump to next page
  function nextPage(){
    parent.window.loadNextPage();
  }

  //get current page
  function getCurrentPg(){
    if(parent.window){
      return parent.window.getCurrentPage();
    }
  }

  function initVideo(){

    var videoTag = '<video id="tata-intro-video" src="./video/377024211.mp4" class="video-js vjs-default-skin" controls ' +
      'preload="auto" width="800" height="450" poster="./images/poster.jpg"></video>';
    stage_sym.$("video").html(videoTag);

    setTimeout(function(){
      var player = videojs('tata-intro-video', { "controls": true, "autoplay": false, "preload": "auto" }, function() {
        //console.log('Good to go!');

        this.play(); // if you don't trust autoplay for some reason

        // How about an event listener?
        this.on('ended', function() {
          //console.log('awww...over so soon?');
        });
      });
    }, 500);
  }

  //Edge symbol: 'stage'
  (function(symbolName) {

    Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
      parent.postMessage("lock", "*");
      stage_sym = this;
      window.removeOverlay = function (){
				parent.postMessage("unlock", "*");
        sym.play("remove_overlay");
      }
      if(parent.window != window){
        parent.window.frameLoaded({"frameHeight" :$("#Stage").height()});
      }
      
    });
    //Edge binding end







    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 790, function(sym, e) {
      // insert code here
      //initVideo();

    });
    //Edge binding end



    

    Symbol.bindElementAction(compId, symbolName, "${button_continue}", "click", function(sym, e) {
      nextPage();


    });
    //Edge binding end

      

  })("stage");
   //Edge symbol end:'stage'

  //=========================================================

  //=========================================================

  //Edge symbol: 'button_continue'
  (function(symbolName) {

  })("button_continue");
   //Edge symbol end:'button_continue'

  //=========================================================

  //Edge symbol: 'Preloader'
  (function(symbolName) {

  })("Preloader");
   //Edge symbol end:'Preloader'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-20515506");
