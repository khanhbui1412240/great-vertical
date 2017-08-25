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
  var main_sym, video;
  var audio, audio_1, audio_2, audio_3, audio_4;
  var isShowContinueButton = false, isShowingContent = false;

  //make element center on stage
  function makeItCenter(el)
  {
    if($("#Stage").width() < 1200){
      el.css("marginLehiddenpx");
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

  //jump to previous page
  function prevPage() {
    parent.window.loadPrevPage();
  }

  //get current page
  function getCurrentPg(){
    if(parent.window){
      return parent.window.getCurrentPage();
    }
  }
  var actions = [];
  function registerAction(i) {
    actions[i-1] = 1;
    eval('audio_' + i + '.play();');
    for (var x = 1; x < 5; x++) {
      if (x != i && actions[x-1] == 0) {
        stage_sym.getSymbol('content').getSymbol('content_' + x).play('deactive_content');
      }
    }
  }
  
  function keyPointAudioEnded(i) {
    for (var x = 1; x < 5; x++) {
      if (x != i && actions[x-1] == 0) {
        stage_sym.getSymbol('content').getSymbol('content_' + x).play('active_content');
      }
    }
    if(actions.join(',') == '1,1,1,1') {
      //Complete
      $('#Stage_video_control_overlay').hide();
      if (isShowContinueButton == false) {
        isShowContinueButton = true;
        stage_sym.play('show_continue'); 
      }
    }
  }

  //Edge symbol: 'stage'
  (function(symbolName) {


    Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
      parent.postMessage("hideAudioIcon", "*");
      stage_sym = this;
      if(parent.window != window){
        parent.window.frameLoaded({"frameHeight" :$("#Stage").height()});
      }
      
      for (var i = 0; i < 4; i++) {
        actions[i] = 0;
      }
      video = document.getElementById('Stage_video');
      audio = document.getElementById('Stage_audio');
      audio_1 = document.getElementById('Stage_audio_1');
      audio_2 = document.getElementById('Stage_audio_2');
      audio_3 = document.getElementById('Stage_audio_3');
      audio_4 = document.getElementById('Stage_audio_4');
      
  		video.onended = function() {
        stage_sym.getSymbol('content').play(0);
  		};
      
      video.onplay = function() {
        if (isShowingContent == true) {
          isShowingContent = false;
          stage_sym.getSymbol('content').play('hide_content');
        }
      }
      
  		audio.onended = function() {
        stage_sym.getSymbol('content').getSymbol('content_1').play('active_content');
        stage_sym.getSymbol('content').getSymbol('content_2').play('active_content');
        stage_sym.getSymbol('content').getSymbol('content_3').play('active_content');
        stage_sym.getSymbol('content').getSymbol('content_4').play('active_content');
        isShowingContent = true;
  		};
      
      audio_1.onended = function() {
        keyPointAudioEnded(1);
      };
      audio_2.onended = function() {
        keyPointAudioEnded(2);
      };
      audio_3.onended = function() {
        keyPointAudioEnded(3);
      };
      audio_4.onended = function() {
        keyPointAudioEnded(4);
      };
    });
    //Edge binding end





    Symbol.bindElementAction(compId, symbolName, "${button_previous}", "click", function(sym, e) {
      prevPage();

    });
    //Edge binding end



    Symbol.bindElementAction(compId, symbolName, "${button_continue}", "click", function(sym, e) {
			parent.postMessage("hideAudioIcon", "*");
      nextPage();
    });
    //Edge binding end









    Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
      sym.$("video").bind("ended", function(e){
        // sym.play('show_continue');
      });

    });
    //Edge binding end

    

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 164076, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

  })("stage");
   //Edge symbol end:'stage'

  //=========================================================

  //Edge symbol: 'Preloader'
  (function(symbolName) {

  })("Preloader");
   //Edge symbol end:'Preloader'

  //=========================================================

  //Edge symbol: 'button_continue_1'
  (function(symbolName) {

  })("button_previous");
   //Edge symbol end:'button_previous'

  //=========================================================

  //Edge symbol: 'button_continue_1'
  (function(symbolName) {

  })("button_next");
   //Edge symbol end:'button_next'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'overlay'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("overlay");
   //Edge symbol end:'overlay'

   //=========================================================
   
   //Edge symbol: 'content_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         registerAction(1);
         sym.play('show_content');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("content_1");
   //Edge symbol end:'content_1'

   //=========================================================
   
   //Edge symbol: 'content_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         registerAction(2);
         sym.play('show_content');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("content_2");
   //Edge symbol end:'content_2'

   //=========================================================
   
   //Edge symbol: 'content_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         registerAction(3);
         sym.play('show_content');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("content_3");
   //Edge symbol end:'content_3'

   //=========================================================
   
   //Edge symbol: 'content_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         registerAction(4);
         sym.play('show_content');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("content_4");
   //Edge symbol end:'content_4'

   //=========================================================
   
   //Edge symbol: 'content'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         audio.play();
         $('#Stage_video_control_overlay').show();
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         stage_sym.getSymbol('content').getSymbol('content_1').play(0);
         stage_sym.getSymbol('content').getSymbol('content_1').stop();
         stage_sym.getSymbol('content').getSymbol('content_2').play(0);
         stage_sym.getSymbol('content').getSymbol('content_2').stop();
         stage_sym.getSymbol('content').getSymbol('content_3').play(0);
         stage_sym.getSymbol('content').getSymbol('content_3').stop();
         stage_sym.getSymbol('content').getSymbol('content_4').play(0);
         stage_sym.getSymbol('content').getSymbol('content_4').stop();

      });
      //Edge binding end

   })("content");
   //Edge symbol end:'content'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-20515506");
