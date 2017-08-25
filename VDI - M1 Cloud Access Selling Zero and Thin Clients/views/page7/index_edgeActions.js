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
   var currentContent = 0;
   var current = 1;
   var is_showing_reset_button = false, is_first_time_play_content = false;
   var audio_1, audio_2, audio_3, incorrect_sound, correct_sound, response_1, response_2, response_3;

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

      if(actions.join(',') == '1,1,1') {
         //Complete
         stage_sym.play('show_continue');
      }
   }
	
   function endAudio(i) {
      parent.postMessage("hideAudioOverlay", "*");
      $("#Stage_content_" + i.toString() + "_incorrect_option_" + i.toString()).show();
      $("#Stage_content_" + i.toString() + "_correct_option_" + i.toString()).show();
      stage_sym.getSymbol("content_" + i.toString()).getSymbol("incorrect_option_" + i.toString()).play(0);
      stage_sym.getSymbol("content_" + i.toString()).getSymbol("correct_option_" + i.toString()).play(0);
   } 

   //Edge symbol: 'stage'
   (function(symbolName) {


      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         parent.postMessage("showAudioIcon", "*");
         parent.postMessage("hideAudioOverlay", "*");
         stage_sym = this;
         window.removeOverlay = function (){
            if (is_showing_reset_button == false) {
               parent.postMessage("unlock", "*");
               stage_sym.getSymbol("overlay").play('remove_overlay');
               $("#Stage_overlay").hide();
               stage_sym.getSymbol("content_1").play("play");
               parent.postMessage("showAudioOverlay", "*");  
            }
         }
         if(parent.window != window){
            parent.window.frameLoaded({"frameHeight" :$("#Stage").height()});
         }
      
         window.hideTransparentOverlay = function (){
            $("#Stage_transparent_overlay").hide();
         }
         window.showTransparentOverlay = function (){
            $("#Stage_transparent_overlay").show();
         }
			
         audio_1 = document.getElementById("Stage_content_1_audio_1");
         audio_2 = document.getElementById("Stage_content_2_audio_2");
         audio_3 = document.getElementById("Stage_content_3_audio_3");
         response_1 = document.getElementById("Stage_content_1_response_1");
         response_2 = document.getElementById("Stage_content_2_response_2");
         response_3 = document.getElementById("Stage_content_3_response_3");
         
         correct_sound = document.getElementById("Stage_correct_sound");
         incorrect_sound = document.getElementById("Stage_incorrect_sound");
			
         audio_1.onplay = function() { 
            parent.postMessage("showAudioOverlay", "*");
         }
			
         audio_2.onplay = function() { 
            parent.postMessage("showAudioOverlay", "*");
         }
			
         audio_3.onplay = function() { 
            parent.postMessage("showAudioOverlay", "*");
         }
			
         audio_1.onended = function() { 
            endAudio(1);
            parent.postMessage("hideAudioOverlay", "*");
         }
         audio_2.onended = function() { 
            endAudio(2);
            parent.postMessage("hideAudioOverlay", "*");
         }
         audio_3.onended = function() { 
            endAudio(3);
            parent.postMessage("hideAudioOverlay", "*");
         }
         
         response_1.onplay = function() { 
            parent.postMessage("showAudioOverlay", "*");
         }
			
         response_2.onplay = function() { 
            parent.postMessage("showAudioOverlay", "*");
         }
			
         response_3.onplay = function() { 
            parent.postMessage("showAudioOverlay", "*");
         }
         
         response_1.onended = function() { 
           stage_sym.getSymbol("button_continue").play();
           $("#Stage_button_continue").show();
           currentContent = 1;
           if (is_showing_reset_button == false) {
              is_showing_reset_button = true;
              stage_sym.getSymbol('button_reset').play();
              $('#Stage_button_reset').show();
           }
         }
			
         response_2.onended = function() { 
           stage_sym.getSymbol("button_continue").play();
           $("#Stage_button_continue").show();
           currentContent = 2;
         }
			
         response_3.onended = function() { 
           stage_sym.play('show_continue');
           $('#Stage_button_reset').css('display', '');
           currentContent = 3;
         }
      });
      //Edge binding end





      Symbol.bindElementAction(compId, symbolName, "${button_previous}", "click", function(sym, e) {
         prevPage();

      });
      //Edge binding end



      Symbol.bindElementAction(compId, symbolName, "${button_next}", "click", function(sym, e) {
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









      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         parent.postMessage("turnOnAudioBackground", "*");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${button_continue}", "click", function(sym, e) {
         $("#Stage_content_" + (currentContent + 1).toString()).show();
         stage_sym.getSymbol("content_" + (currentContent + 1).toString()).play("play");
         stage_sym.getSymbol("content_" + currentContent.toString()).play("hide_content");
         $("#Stage_content_" + currentContent.toString()).hide();
         stage_sym.getSymbol("button_continue").playReverse();
         $("#Stage_button_continue").hide();
         current = current + 1;
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button_reset}", "click", function(sym, e) {
         is_showing_reset_button = false;
         for (var i = 1; i < 4; i++) {
            eval('audio_' + i + '.pause();');
            eval('audio_' + i + '.currentTime = 0;');  
            eval('response_' + i + '.pause();');
            eval('response_' + i + '.currentTime = 0;');  
         }
         stage_sym.playReverse('show_continue');
         $('#Stage_button_reset').css('display', '');
         // stage_sym.getSymbol('button_reset').playReverse();
         // $('#Stage_button_reset').hide();
         // if (currentContent > 1) {
         //    stage_sym.getSymbol("content_" + currentContent.toString()).play("hide_content");
         //    $("#Stage_content_" + currentContent.toString()).hide();
         // }
         // $("#Stage_content_1").show();
         stage_sym.getSymbol("content_" + current).play("play");
         currentContent = 0;
         actions = [];
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

   //Edge symbol: 'overlay_1'
   (function(symbolName) {   

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("overlay");
   //Edge symbol end:'overlay'

   //=========================================================
   
   //Edge symbol: 'content'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11772, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {

         

      });
      //Edge binding end

   })("content_1");
   //Edge symbol end:'content_1'

   //=========================================================
   
   //Edge symbol: 'correct_option'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         response_1.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubble}", "click", function(sym, e) {
         sym.play("show_result");
         correct_sound.play();

      });
      //Edge binding end

   })("correct_option_1");
   //Edge symbol end:'correct_option_1'

   //=========================================================
   
   //Edge symbol: 'inccorrect_option'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubble}", "click", function(sym, e) {
         sym.play("show_result");
         incorrect_sound.play();
         

      });
      //Edge binding end

      

   })("incorrect_option_1");
   //Edge symbol end:'incorrect_option_1'

   //=========================================================
   
   //Edge symbol: 'correct_option_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.playReverse("show_result");

      });
      //Edge binding end

   })("incorrect_option");
   //Edge symbol end:'incorrect_option'

   //=========================================================
   
   //Edge symbol: 'incorrect_option_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${bubble}", "click", function(sym, e) {
         sym.play("show_result");
         incorrect_sound.play();
         

      });
      //Edge binding end

   })("incorrect_option_3");
   //Edge symbol end:'incorrect_option_3'

   //=========================================================
   
   //Edge symbol: 'incorrect_option_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${bubble}", "click", function(sym, e) {
         sym.play("show_result");
         incorrect_sound.play();
         

      });
      //Edge binding end

   })("incorrect_option_2");
   //Edge symbol end:'incorrect_option_2'

   //=========================================================
   
   //Edge symbol: 'correct_option_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         response_2.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubble}", "click", function(sym, e) {
         sym.play("show_result");
         correct_sound.play();

      });
      //Edge binding end

   })("correct_option_2");
   //Edge symbol end:'correct_option_2'

   //=========================================================
   
   //Edge symbol: 'correct_option_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         response_3.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubble}", "click", function(sym, e) {
         sym.play("show_result");
         correct_sound.play();

      });
      //Edge binding end

   })("correct_option_3");
   //Edge symbol end:'correct_option_3'

   //=========================================================
   
   //Edge symbol: 'content_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6355, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7183, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("content_3");
   //Edge symbol end:'content_3'

   //=========================================================
   
   //Edge symbol: 'button_next_1'
   (function(symbolName) {   
   
   })("button_continue");
   //Edge symbol end:'button_continue'

   //=========================================================
   
   //Edge symbol: 'button_reset_1'
   (function(symbolName) {   
   
   })("button_reset");
   //Edge symbol end:'button_reset'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-20515506");
