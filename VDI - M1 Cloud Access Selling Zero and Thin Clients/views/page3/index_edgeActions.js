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

	var stage_sym ;
	var dropArray = new Array();
	var dragArray = new Array();
	var ansArray = new Array();
	var alreadyPlays = new Array();
	
	var currentTab = 1;
	var indexTab1 = 1, indexTab2 = 4, indexTab3 = 7;
	
	var isReload = false, is_completed = false, is_show_reset_button = false;
	for(var i=1; i<10; i++){
		dropArray.push("drop_"+i);				
		dragArray.push("drag_"+i);
	}

	ansArray = [["drag_3", "drag_5", "drag_7"], //1
				["drag_2", "drag_4", "drag_8"], //4
				["drag_1", "drag_6"] //7
				]; //12
	window.counter = 0;
	
	function checkFunction(theObj){
    if(theObj.objectDragged == 'revert'){
      // play wrong
      stage_sym.getSymbol("wrong_feedback").play(0);
    } else {
  	  $("#Stage_drag_"+theObj.objectDragged).hide(); 
  	  currentTab = theObj.objectDragged;
	  actions[currentTab] = 1;
	  var indexTab = 0;
		if (theObj.objectAreaHit == 1) {
			//$("#Stage_drop_"+indexTab1).hide(); 			
			indexTab = indexTab1;
			indexTab1++;
		} else if (theObj.objectAreaHit == 2) {
			//$("#Stage_drop_"+indexTab2).hide(); 			
			indexTab = indexTab2;
			indexTab2++;
		} else {
			//$("#Stage_drop_"+indexTab3).hide(); 			
			indexTab = indexTab3;
			indexTab3++;
		}

	  stage_sym.getSymbol("drop_answer_"+indexTab).play("show_content_"+theObj.objectDragged);
	  
	  if (window.counter < 7) {
	  stage_sym.getSymbol("correct_feedback").play(0);	
	  }
	  
	  setTimeout(function() {
	  	$("#Stage_drag_"+(theObj.objectDragged+1)).show();
	  },1000)
      window.counter++;
	  registerAction(theObj.objectAreaHit);
	  if (window.counter == 1 && is_show_reset_button == false) {
		  stage_sym.getSymbol("button_reset").play(0);
		  is_show_reset_button = true;
	  }

			if(window.counter == 8){
				//stage_sym.$("VDI_3_end_audio")[0].play();
				stage_sym.play("play_audio");
				stage_sym.$("drop_answer_9").hide();
				// audio_closing.play();
				
			}
			// audio_closing.onended = function() {
			// 	if (is_completed == false) {
			// 		is_completed = true;
			// 		stage_sym.getSymbol("button_next").play("show");
			// 	}
			// };
    }
	}
  
  	function resetContentPage() {
		window.counter = 0;
		currentTab = 1;
		indexTab1 = 1;
		indexTab2 = 4;
		indexTab3 = 7;
		actions = [0,0,0,0,0,0,0,0,0];
		stage_sym.$("VDI_3_end_audio")[0].pause();		
		stage_sym.$("VDI_3_end_audio")[0].currentTime = 0;
		$("#Stage_drag_1").show();
		for (i=6; i<9; i++) {
			stage_sym.$("drop_answer_"+(i+1)).show();
		}
		for (var i=1; i<10; i++) {
			$("#Stage_drop_"+i).show();
			stage_sym.getSymbol("drop_answer_"+i).play(0);
			if (i != 1) {
				$("#Stage_drag_"+i).hide();	
			}
		}
  	}
  
	function unlockNextDrag() {
		currentTab++;
		if (currentTab > 12) {
			// end
			stage_sym.play("show_continue");
		} else {
			$("#Stage_drag_"+currentTab).show(); 	
		}
	}
  
	function checkAlldone(){
		if(window.counter == 3){
		  
			//audio out
		}
	}
  
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
  var actions = [0,0,0,0,0,0,0,0,0];
  function registerAction(i) {
    actions[i-1] = 1;

   // if (actions.join(',') == '1,1,1,1,1') {
   //    //Complete
   //    stage_sym.play('play_audio_close');
   //  }
  }
  
  function checkComplete() {
      if (actions.join(',') == '1,1,1,1,1') {
         //Complete
         stage_sym.play('play_audio_close');
       }
  }

  //Edge symbol: 'stage'
  (function(symbolName) {


    Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
			parent.postMessage("showAudioIcon", "*");
      stage_sym = this;
      window.removeOverlay = function (){
        stage_sym.getSymbol("overlay").play('remove_overlay');
		stage_sym.play("active_content");
        $("#Stage_overlay").hide();
				$('#Stage_gray_samsung').css('opacity', 0)
      }
      window.hideTransparentOverlay = function (){
        //$("#Stage_Rectangle").hide();
      }
      window.showTransparentOverlay = function (){
        //$("#Stage_Rectangle").show();
      }
      if(parent.window != window){
        parent.window.frameLoaded({"frameHeight" :$("#Stage").height()});
      }
			
			// audio_closing = document.getElementById("Stage_audio_closing");
			var dragDropObj = new DragAndDrop(sym, dragArray, dropArray, ansArray, false, checkFunction);
    });
    //Edge binding end


      

      Symbol.bindElementAction(compId, symbolName, "${button_next}", "click", function(sym, e) {
         nextPage();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button_previous}", "click", function(sym, e) {
         prevPage();
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${button_reset}", "click", function(sym, e) {
         // insert code for mouse click here
         resetContentPage();
         
         //sym.getSymbol("all_correct_feedback").play(0);
         

      });
      //Edge binding end

      

      

      

      

      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         parent.postMessage("turnOnAudioBackground", "*");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28870, function(sym, e) {
         // insert code here
         
         sym.getSymbol("correct_feedback").play("hide_content");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         // insert code here
         
         sym.getSymbol("correct_feedback").play("show_content");

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
   
   //Edge symbol: 'correct_feedback_1'
   (function(symbolName) {   
   
      })("reset_button");
   //Edge symbol end:'reset_button'

   //=========================================================
   
   //Edge symbol: 'overlay'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
      sym.stop();

    });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
      sym.stop();

    });
      //Edge binding end

   })("overlay");
   //Edge symbol end:'overlay'

   //=========================================================
   
   //Edge symbol: 'button_reset'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("button_reset");
   //Edge symbol end:'button_reset'

   //=========================================================
   
   //Edge symbol: 'content_type_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("content_type_1");
   //Edge symbol end:'content_type_1'

   //=========================================================
   
   //Edge symbol: 'content_type_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      })("content_type_2");
   //Edge symbol end:'content_type_2'

   //=========================================================
   
   //Edge symbol: 'content_type_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      })("content_type_3");
   //Edge symbol end:'content_type_3'

   //=========================================================
   
   //Edge symbol: 'wrong_feedback'
   (function(symbolName) {   
   
   })("wrong_feedback");
   //Edge symbol end:'wrong_feedback'

   //=========================================================
   
   //Edge symbol: 'correct_feedback'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("correct_feedback");
   //Edge symbol end:'correct_feedback'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-20515506");
