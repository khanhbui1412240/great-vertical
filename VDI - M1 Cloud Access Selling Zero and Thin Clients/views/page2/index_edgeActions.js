      
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes
	
	var stage_sym;
	var main_sym;
	var soundPlaying = true;
	var dragDropInitialized = false;
	var colors = {
			'first': '#7ab800',
			'second': '#009ca6',
			'third':'#00a9e0'
		};
	var ui_reset;
	var dragCounter = 0;
	var uiElements = [];
	var correctDrag = [];
	var isFirstTimeShowResetButton = false, isFirstTimeShowNextButton = false;
	var svg = $('<svg width="100%" height="100%" id="svg"></svg>');
	

  // function showOverlay(currentBox){
  //   for (var i = 1; i < 4; i++) {
  // 			if (i != currentBox && correctDrag[i - 1] == 0) {
  // 				$(".ui-draggable.set" + i).css('z-index' , 0);
  // 				$("#Stage_overlay_drag" + i).show().css('opacity' , 0.75);
  // 			}
  // 			else {
  // 				$("#Stage_overlay_drag" + currentBox).css('opacity' , 0);
  // 			}
  //   }
  // }
	
	function initDragDrop(){
		stage_sym.$("svg-holder").append(svg);
		$( ".draggables" ).draggable({
			scroll: false,
			revert: function(valid) {
					if(!valid) {
						stage_sym.getSymbol('wrong_feedback').play();
						line1.remove();
						dragCounter--;
						return true;
					}else{
						if (dragCounter == 3){
						stage_sym.getSymbol('right_feedback').play();
						}
					}
			},
			start: function(event, ui) {
				uiElements[uiElements.length] = ui;
				dragCounter++;
				dragging = true;
				$(event.target).css('z-index', dragCounter);
				var offset_x = $(event.target).width()/2;
				var offset_y = $(event.target).height()/2;
				var color = $(event.target).attr('id').replace('Stage_', '').replace('cross-', '');
				line1 = $(document.createElementNS('http://www.w3.org/2000/svg','line'));
				svg.append(line1);
				line1.attr('stroke', colors[color]);
				line1.attr('stroke-width', '3');
				line1.attr('stroke-dasharray', '10');
				line1.attr('stroke-linecap', "round");

				line1.attr('x1', ui.position.left + offset_x).attr('y1', ui.position.top + offset_y);
			},
			drag: function(event, ui) {
				var offset_x = $(event.target).width()/2;
				var offset_y = $(event.target).height()/2;
				line1.attr('x2', ui.position.left + offset_x).attr('y2', ui.position.top + offset_y);
			},
			stop: function(ev, ui){}
		});
		$( ".droppable3" ).droppable({
				tolerance: 'intersect',
				accept: ".set1",
				classes: {
				  "ui-droppable-active": "ui-state-active",
				  "ui-droppable-hover": "ui-state-hover"
				},
				drop: function( event, ui ) {
		  		  //ui.draggable.draggable('option','revert','valid'); 
		  		  //ui.draggable.animate(ui.draggable.data().origPosition,"slow");
					ui_reset=ui
				  var drop_p = $(".constraint3").offset();
				  var drag_p = ui.draggable.offset();

				  var offset_left = ($(".constraint3").width() - ui.draggable.width()) / 2;
				  var offset_top = ($(".constraint3").height() - ui.draggable.height()) / 2;

				  var left_end = drop_p.left - drag_p.left + offset_left;
				  var top_end = drop_p.top - drag_p.top + offset_top;

				  var offset_x = ui.draggable.width() / 2;
				  var offset_y = ui.draggable.height() / 2;
				  ui.draggable.animate({
						top: '+=' + top_end,
						left: '+=' + left_end
				  }, function(){
						parent.postMessage("showAudioOverlay", "*");
					  // audio_1.play();
					  // showOverlay(1);
					  var line_end_left = ui.draggable.position().left + offset_x;
					  var line_end_top = ui.draggable.position().top + offset_y;
					  line1.attr('x2', line_end_left).attr('y2', line_end_top);
				  });
				}
			 });
		$( ".droppable2" ).droppable({
				tolerance: 'intersect',
				accept: ".set3",
				classes: {
				  "ui-droppable-active": "ui-state-active",
				  "ui-droppable-hover": "ui-state-hover"
				},
				drop: function( event, ui ) {
				  var drop_p = $(".constraint2").offset();
				  var drag_p = ui.draggable.offset();

				  var offset_left = ($(".constraint2").width() - ui.draggable.width()) / 2;
				  var offset_top = ($(".constraint2").height() - ui.draggable.height()) / 2;

				  var left_end = drop_p.left - drag_p.left + offset_left;
				  var top_end = drop_p.top - drag_p.top + offset_top;

				  var offset_x = ui.draggable.width() / 2;
				  var offset_y = ui.draggable.height() / 2;

				  ui.draggable.animate({
						top: '+=' + top_end,
						left: '+=' + left_end
				  }, function(){
					  parent.postMessage("showAudioOverlay", "*");
					  // audio_3.play()
					  // showOverlay(3);
						var line_end_left = ui.draggable.position().left + offset_x;
						var line_end_top = ui.draggable.position().top + offset_y;
						line1.attr('x2', line_end_left).attr('y2', line_end_top);
				  });
				}
			 });

	 		$( ".droppable1" ).droppable({
	 				tolerance: 'intersect',
	 				accept: ".set2",
	 				classes: {
	 				  "ui-droppable-active": "ui-state-active",
	 				  "ui-droppable-hover": "ui-state-hover"
	 				},
	 				drop: function( event, ui ) {
	 				  var drop_p = $(".constraint1").offset();
	 				  var drag_p = ui.draggable.offset();

	 				  var offset_left = ($(".constraint1").width() - ui.draggable.width()) / 2;
	 				  var offset_top = ($(".constraint1").height() - ui.draggable.height()) / 2;

	 				  var left_end = drop_p.left - drag_p.left + offset_left;
	 				  var top_end = drop_p.top - drag_p.top + offset_top;

	 				  var offset_x = ui.draggable.width() / 2;
	 				  var offset_y = ui.draggable.height() / 2;

	 				  ui.draggable.animate({
	 						top: '+=' + top_end,
	 						left: '+=' + left_end
	 				  }, function(){
	 					  parent.postMessage("showAudioOverlay", "*");
	 					  // audio_3.play()
	 					  // showOverlay(3);
	 						var line_end_left = ui.draggable.position().left + offset_x;
	 						var line_end_top = ui.draggable.position().top + offset_y;
	 						line1.attr('x2', line_end_left).attr('y2', line_end_top);
	 				  });
	 				}
	 			 });
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
	
	function previousPage(){
		parent.window.loadPrevPage();
	}
	
	//get current page
	function getCurrentPg(){
		if(parent.window){
			return parent.window.getCurrentPage();
		}
	}
	
	function audioClosingEnd() {
		
		if (!isFirstTimeShowResetButton) {
			stage_sym.$("button_reset").show();
			stage_sym.play('next');
			stage_sym.getSymbol("button_reset").play();
			isFirstTimeShowResetButton = true;	
		}
		$("#Stage_draggables").show();
	}
	
	function resetRightFeedback() {
		stage_sym.getSymbol("right_feedback").$("VDI_2VocabReview_Closing")[0].pause();
		stage_sym.getSymbol("right_feedback").$("VDI_2VocabReview_Closing")[0].currentTime = 0;
		stage_sym.getSymbol("right_feedback").play("hide_feedback");
	}
	
   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
	      parent.postMessage("showAudioIcon", "*");
				parent.postMessage("hideAudioOverlay", "*");
	      stage_sym = this;
	      window.removeOverlay = function (){
					stage_sym.play("active_content");
	        stage_sym.getSymbol("overlay").play('remove_overlay');
	        $("#Stage_overlay").hide();
			
			$("#Stage_draggables").show();
			stage_sym.getSymbol("tab_1").play("show_content_tab");
			stage_sym.getSymbol("tab_2").play("show_content_tab");
			stage_sym.getSymbol("tab_3").play("show_content_tab");
	      }
	      if(parent.window != window){
	        parent.window.frameLoaded({"frameHeight" :$("#Stage").height()});
	      }
	      window.hideTransparentOverlay = function (){
	        $("#Stage_transparent_overplay").hide();
	      }
	      window.showTransparentOverlay = function (){
	        $("#Stage_transparent_overplay").show();
	      }
	      
				
				// audio_1 = document.getElementById("Stage_audio_1");
				// audio_2 = document.getElementById("Stage_audio_2");
				// audio_3 = document.getElementById("Stage_audio_3");

			  for (var i = 1; i < 4; i++) {
					correctDrag[i - 1] = 0;
				  // document.getElementById("Stage_audio_" + i).onplay = function() {
				  // 	$( ".set" + i).css('pointer-events','none');
                       // parent.postMessage("showAudioOverlay", "*");
				  // 						stage_sym.$("overlay_button_reset").show();
				  // };
			  }
    
         if(!dragDropInitialized) {
         	initDragDrop();
         	dragDropInitialized = true;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "window", "resize", function(sym, e) {
         // insert code for resize event here
         
         if(!dragDropInitialized) {
         	initDragDrop();
         	dragDropInitialized = true;
         }
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button_previous}", "click", function(sym, e) {
         previousPage();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${button_reset}", "click", function(sym, e) {
				$("svg#svg line").remove();
				dragCounter = 0;
				resetRightFeedback();
				for (var i = 0; i < uiElements.length; i ++) {
					uiElements[i].helper.draggable().css("left", uiElements[i].originalPosition.left);
					uiElements[i].helper.draggable().css("top", uiElements[i].originalPosition.top);
				}
				
				for (var i = 1; i < 4; i ++) {
					correctDrag[i - 1] = 0;
					$("#Stage_overlay_drag" + i).hide();
					$(".set" + i).css('pointer-events','auto')
				}
				
       	initDragDrop();
       	dragDropInitialized = true;


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button_next}", "click", function(sym, e) {
         parent.postMessage("hideAudioIcon", "*");
         nextPage();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         // insert code here
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
   
   //Edge symbol: 'button_continue'
   (function(symbolName) {   
   
   })("button_next");
   //Edge symbol end:'button_next'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'button_previous'
   (function(symbolName) {   
   
   })("button_previous");
   //Edge symbol end:'button_previous'

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
   
   //Edge symbol: 'button_reset'
   (function(symbolName) {   
   
   })("button_reset");
   //Edge symbol end:'button_reset'

   //=========================================================
   
   //Edge symbol: 'tab_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("tab_1");
   //Edge symbol end:'tab_1'

   //=========================================================
   
   //Edge symbol: 'tab_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("tab_2");
   //Edge symbol end:'tab_2'

   //=========================================================
   
   //Edge symbol: 'tab_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("tab_3");
   //Edge symbol end:'tab_3'

   //=========================================================
   
   //Edge symbol: 'wrong_feedback'
   (function(symbolName) {   
   
   })("wrong_feedback");
   //Edge symbol end:'wrong_feedback'

   //=========================================================
   
   //Edge symbol: 'right_feedback'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30026, function(sym, e) {
         // insert code here
         audioClosingEnd();
         sym.stop();

      });
      //Edge binding end

      

   })("right_feedback");
   //Edge symbol end:'right_feedback'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-20515506");