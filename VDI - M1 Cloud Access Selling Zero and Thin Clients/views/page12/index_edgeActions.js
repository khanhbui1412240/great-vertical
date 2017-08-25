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
	var is_showing_reset_button = false, is_first_time_play_content = false;
	var animation_sound;

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
  //function nextPage(){
  //	parent.window.loadNextPage();
  //}

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


  //Edge symbol: 'stage'
  (function(symbolName) {


    Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
      parent.postMessage("showAudioIcon", "*");
			parent.postMessage("hideAudioOverlay", "*");
      stage_sym = this;
			animation_sound = document.getElementById("Stage_animation_sound");
      window.removeOverlay = function (){
				parent.postMessage("unlock", "*");
        stage_sym.getSymbol("overlay").play('remove_overlay');
        $("#Stage_overlay").hide();
				if (is_first_time_play_content == false) {
					is_first_time_play_content = true;
					animation_sound.play();
					parent.postMessage("showAudioOverlay", "*");
					//stage_sym.getSymbol("button_reset").play("show_reset_button");
					sym.getSymbol("content").play("show_content");
				}
      }
      if(parent.window != window){
        parent.window.frameLoaded({"frameHeight" :$("#Stage").height()});
      }
      window.hideTransparentOverlay = function (){
        $("#Stage_overlay_button_reset").hide();
      }
      window.showTransparentOverlay = function (){
        $("#Stage_overlay_button_reset").show();
      }
      
			
			animation_sound.onended = function() { 
				parent.postMessage("hideAudioOverlay", "*");
				$("#Stage_overlay_button_reset").hide();
				if (is_showing_reset_button == false) {
					is_showing_reset_button = true;
					
					stage_sym.getSymbol("button_done").play();
				}
			}

    });
    //Edge binding end





    //





    Symbol.bindElementAction(compId, symbolName, "${button_previous}", "click", function(sym, e) {
      prevPage();

    });
    //Edge binding end

    

      

      Symbol.bindElementAction(compId, symbolName, "${button_done}", "click", function(sym, e) {
         parent.parent.postMessage({post_message_type: "exit-module"}, "*" );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button_reset}", "click", function(sym, e) {
				$("#Stage_overlay_button_reset").show();
        $("#Stage_overlay").hide();
        animation_sound.currentTime = 0;
				animation_sound.play();
				parent.postMessage("showAudioOverlay", "*");
				sym.getSymbol("content").play("show_content");

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

  //Edge symbol: 'button_done_test'
  (function(symbolName) {

  })("button_done");
   //Edge symbol end:'button_done'

   //=========================================================
   
   //Edge symbol: 'content_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         stage_sym.getSymbol("button_reset").play("show_reset_button");

      });
      //Edge binding end

   })("content");
   //Edge symbol end:'content'

   //=========================================================
   
   //Edge symbol: 'overlay'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 359, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("overlay");
   //Edge symbol end:'overlay'

   //=========================================================
   
   //Edge symbol: 'button_reset_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("button_reset");
   //Edge symbol end:'button_reset'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-20515506");
