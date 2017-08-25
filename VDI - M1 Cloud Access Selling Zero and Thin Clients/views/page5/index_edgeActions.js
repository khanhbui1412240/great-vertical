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

  var is_show_reset_button = false;

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

    if (!is_show_reset_button) {
      is_show_reset_button = true;
      stage_sym.getSymbol("button_reset_activity").play();
    }

    if(actions.join(',') == '1,1') {
      //Complete
      stage_sym.play('show_continue');
    }
  }

  function resetContentPage() {
    actions = [];
    stage_sym.getSymbol("Symbol_1").play("reset_content");
    stage_sym.getSymbol("Symbol_2").play("reset_content");
	stage_sym.getSymbol("Symbol_1").$("VDI_5")[0].pause();
	stage_sym.getSymbol("Symbol_1").$("VDI_5")[0].currentTime = 0;
	$("#Stage_RectangleLock").hide();
  }

  //Edge symbol: 'stage'
  (function(symbolName) {


    Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
      parent.postMessage("showAudioIcon", "*");
	  parent.postMessage("hideAudioOverlay", "*");
      stage_sym = this;
      window.removeOverlay = function (){
		    parent.postMessage("unlock", "*");
        stage_sym.getSymbol("overlay").play('remove_overlay');
        console.log($("#Stage_overlay"))
		    $("#Stage_overlay").hide();
        stage_sym.getSymbol("Symbol_1").play("action_1");
        stage_sym.getSymbol("Symbol_2").play("action_1");
      }
      if(parent.window != window){
        parent.window.frameLoaded({"frameHeight" :$("#Stage").height()});
      }
      
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

    

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         parent.postMessage("turnOnAudioBackground", "*");

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
   
   //Edge symbol: 'overlay_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("overlay_1");
   //Edge symbol end:'overlay_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Click_area}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.play("action_2");
         
         registerAction(2);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2550, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2883, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3050, function(sym, e) {
         // insert code here
         
         // Show an element 
         sym.getComposition().getStage().$("RectangleLock").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17684, function(sym, e) {
         // insert code here
         
         // Hide an element 
         sym.getComposition().getStage().$("RectangleLock").hide();
         
         sym.getComposition().getStage().play("show_continue");

      });
      //Edge binding end

      

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'button_next_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleClick}", "click", function(sym, e) {
         // insert code for mouse click here
         resetContentPage();

      });
      //Edge binding end

     })("button_reset_activity");
   //Edge symbol end:'button_reset_activity'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2550, function(sym, e) {
         // insert code here
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Click_area}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.play("action_2");
         
         registerAction(2);
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2855, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      })("Symbol_2");
   //Edge symbol end:'Symbol_2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-20515506");
