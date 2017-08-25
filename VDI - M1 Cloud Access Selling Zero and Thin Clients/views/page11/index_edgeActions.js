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

	var currentTab = 0;

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

var actions = [0,0,0,0];
  function registerAction(i) {
    actions[i-1] = 1;
	//currentTab = i;
    if(actions.join(',') == '1,1,1,1') {
      //Complete
      stage_sym.play('show_continue');
    }
  }
  
  function animationGroupWithTab(tabIndex) {
	  registerAction(tabIndex)
	  
	  //currentTab = 4 			tabIndex = 2
	  if (currentTab == 0) {
		  stage_sym.getSymbol("tab_"+tabIndex).play("show_content_down");
		  for (var i = tabIndex+1; i<5; i++) {
			  stage_sym.getSymbol("tab_"+ i).play("active_move_down");
		  }
	  } else {
		  stage_sym.getSymbol("tab_"+ currentTab).play("hide_content_up");
		  for (var i = currentTab+1; i<5; i++) {
			  if (actions[i-1] == 0) {
				  stage_sym.getSymbol("tab_"+ i).play("active_move_up");
			  } else {
				  stage_sym.getSymbol("tab_"+ i).play("deactive_move_up");
			  }
		  }
		  setTimeout(function() {
			  stage_sym.getSymbol("tab_"+ tabIndex).play("show_content_down");
			  for (var i = tabIndex+1; i<5; i++) {
				  if (actions[i-1] == 0) {
					  stage_sym.getSymbol("tab_"+ i).play("active_move_down");
				  } else {
					  stage_sym.getSymbol("tab_"+ i).play("deactive_move_down");
				  }
			  }
		  },250);
	  }
	  currentTab = tabIndex;
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


  //Edge symbol: 'stage'
  (function(symbolName) {


    Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
      parent.postMessage("showAudioIcon", "*");
			parent.postMessage("hideAudioOverlay", "*");
      stage_sym = this;
	  
      window.removeOverlay = function (){
				parent.postMessage("unlock", "*");
        stage_sym.getSymbol("overlay").play('remove_overlay');
        $("#Stage_overlay").hide();
    		stage_sym.getSymbol("tab_1").play("active_tab");
    		stage_sym.getSymbol("tab_2").play("active_tab");
    		stage_sym.getSymbol("tab_3").play("active_tab");
    		stage_sym.getSymbol("tab_4").play("active_tab");
      }
      if(parent.window != window){
        parent.window.frameLoaded({"frameHeight" :$("#Stage").height()});
      }
      
    });
    //Edge binding end





    //





    Symbol.bindElementAction(compId, symbolName, "${button_previous}", "click", function(sym, e) {
      prevPage();

    });
    //Edge binding end

    

      

      

      
      
	    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
	       parent.postMessage("turnOnAudioBackground", "*");

	    });
	    //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button_continue}", "click", function(sym, e) {
         			parent.postMessage("hideAudioIcon", "*");
               nextPage();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.stop()

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
   
   //Edge symbol: 'overlay'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 359, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("overlay");
   //Edge symbol end:'overlay'

   //=========================================================
   
   //Edge symbol: 'button_next'
   (function(symbolName) {   
   
   })("button_next");
   //Edge symbol end:'button_next'

   //=========================================================
   
   //Edge symbol: 'tab_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleClick}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("show_content_down");
         animationGroupWithTab(4);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("tab_4");
   //Edge symbol end:'tab_4'

   //=========================================================
   
   //Edge symbol: 'tab_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleClick}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("show_content_down");
         animationGroupWithTab(3);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("tab_3");
   //Edge symbol end:'tab_3'

   //=========================================================
   
   //Edge symbol: 'tab_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleClick}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("show_content_down");
         animationGroupWithTab(2);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("tab_2");
   //Edge symbol end:'tab_2'

   //=========================================================
   
   //Edge symbol: 'tab_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleClick}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("show_content_down");
         animationGroupWithTab(1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("tab_1");
   //Edge symbol end:'tab_1'

   //=========================================================
   
   //Edge symbol: 'click_tab'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

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

      Symbol.bindElementAction(compId, symbolName, "${click_1}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("show_1");
         animationGroupWithTab(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${click_2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("show_2");
         animationGroupWithTab(2);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${click_3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("show_3");
         animationGroupWithTab(3);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${click_4}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("show_4");
         animationGroupWithTab(4);

      });
      //Edge binding end

   })("click_tab");
   //Edge symbol end:'click_tab'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-20515506");
