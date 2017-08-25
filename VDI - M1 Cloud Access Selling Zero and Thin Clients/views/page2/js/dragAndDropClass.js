/**
 * @author CN @ QuadM 2014
 *  * Required js needed: 
 * - jquery.ui.touch-punch.min.js
 * - jquery-ui-1.10.4.custom.min.js
 * DragAndDrop Class to initialise drag and drop functionality in edge animate
 * @type {Object} targSym target area where the draggables and droppables are located
 * @type {Array} dragArray an array containing the names of the objects
 * @type {Array} dropArray an array containing the names of the landing/drop area
 * @type {Array} ansArray a 2D array containing answers. 1st object represents the first landing/drop area. 2nd level contains an array of possible answers to the landing/drop area.
 * @type {Boolean} allowLine indicate to show lines. Note that answer array will be ignored if this is set to true
 * @type {Function} callBack (Object): Object {
 											objectAreaHit @type {String} The ID according to the position in the given array of 
 											objectDragged @type {String}
 *       								}
 * @type {String} (optional) startpt . Start point of the link on the element. L,T,R,B
 * @type {String} (optional) endpt . End point of the link on the element. L,T,R,B
 */
var DragAndDrop = function (targSym, dragArray, dropArray, ansArray, allowLine, callBack, startpt, endpt){
	
	var xv = 0;
	var yv = 0;
	var start_pt_vert = 0.5;
	var start_pt_horiz = 0.5;
	var end_pt_vert = 0.5;
	var end_pt_horiz = 0.5;
	var currDropAns = 0;
	var dropNumber = null;
	var attemptCont = new Array(dropArray.length);

	if(startpt != null){
		switch(startpt){
			case "L":
				start_pt_horiz = 0;
				break;
			case "T":
				start_pt_vert = 0;
				break;
			case "R":
				start_pt_horiz = 1;
				break;
			case "B":
				start_pt_vert = 1;
				break;
		}
	}

	if(endpt != null){
		switch(endpt){
			case "L":
				end_pt_horiz = 0;
				break;
			case "T":
				end_pt_vert = 0;
				break;
			case "R":
				end_pt_horiz = 0.5;
				break;
			case "B":
				end_pt_vert = 1;
				break;
		}
	}

	for (i=0;i<dragArray.length;i++){	
 		//initialise draggables
		var class_name = dragArray[i]+"_cl";

		targSym.$(dragArray[i]).addClass(class_name);
		targSym.$("."+class_name).draggable({
			revert: function(event){
				if(!allowLine){
					var droppedArea = null;

					//test if its dropped to an area
					if(dropNumber != null){
						droppedArea = targSym.$(dropArray[dropNumber]);
					}else{
						//no hit, exit function
						dropNumber = null;
						return true;
					}
					

					//iterates through the available answers for a correct hit
					var correctAns = false;
					for(var iterZ = 0; iterZ<currDropAns.length; iterZ++){
						console.log(">>> " + currDropAns[iterZ]);
						console.log(">>> " + $(this).data("theID"));
						if(currDropAns[iterZ] == $(this).data("theID")){
							correctAns = true;
							break;
						}
					}
					

					if(correctAns){
						//check if it has been disabled			
						var disabled = droppedArea.droppable( "option", "disabled" );
						
						if(!disabled){
							//$(this).fadeOut("fast");
							console.log("CORRECT!");
							//animates to middle of the drag area
					    	$(this).position({ of: droppedArea, my: 'center', at: 'middle',
					    						using: function(css, calc) {
											        $(this).animate(css, 200, "linear");
											        
											    }
											 });

					    	//disable functionality for both draggable and droppable
					    	$(this).draggable( 'disable' ); 
					    	droppedArea.droppable( "option", "disabled", true );

					    	//lastly call back the function
						    if(callBack != null){
						    	callBack({
						    		"droppableAnswers": currDropAns,
						    		"objectDragged": $(this).data("theID"),
						    		"objectAreaHit": dropNumber+1,
				    				"attemptsArr": attemptCont,
				    				"correctAtt": 1
						    	});
							}

							return false;
				    	}else{
				    		//reject, droppable has an object
				    		dropNumber = null;
							return true;
				    	}
				    	
					}else{
						console.log("WRONG!");
						
						//lastly call back the function
					    if(callBack != null){
					    	callBack({
					    		"droppableAnswers": currDropAns,
					    		"objectDragged": $(this).data("theID"),
					    		"objectAreaHit": dropNumber+1,
			    				"attemptsArr": attemptCont,
			    				"correctAtt": -1
					    	});
						}
						dropNumber = null;
						
						return true;
					}

				}else{
					//line effect, always revert back to position
					return true;
				}
				
			},
			start: function(event, ui){
				
				//finds the center at which the line will start
				if(allowLine){
					console.log("cclass_nameclass_nameclass_name = " + class_name);
					console.log("yv = " , ui);
					
					yv = ui.offset.top + targSym.$("."+class_name).height()*start_pt_vert;
					xv = ui.offset.left + targSym.$("."+class_name).width()*start_pt_horiz;
				}

				if(callBack != null){
			    	callBack({
			    		"startDrag": true
			    	});
				}
			},
			stop: function(event, ui){
				if(callBack != null){
			    	callBack({
			    		"startDrag": false
			    	});
				}
			}
		});
		
		//assign unique id to the individual drop area
		targSym.$(dropArray[i]).data("areaID", i);
		
		//assign a unique id to the individual draggables
		if(!allowLine){ 
			targSym.$("."+class_name).data("theID", dragArray[i]);
			targSym.$(dropArray[i]).data("answerArr", ansArray[i]);
		}else{
			targSym.$("."+class_name).data("theID", i);
		}

		
		targSym.$(dropArray[i]).droppable({
			drop: function(event, ui){
				
				var tID = ui.draggable.data("theID"); //dragged obj ID
				dropNumber = $(this).data("areaID"); //hit area obj ID
				currDropAns = $(this).data("answerArr");
				
				if(allowLine){
					//LINE EFFECT
				   	//set up individual canvas for each line
				   	if(document.getElementById('forLine'+tID) == null){
				    	$('<canvas id="forLine'+tID+'" width="'+targSym.$("Rectangle2").width()+'px" height= "'+targSym.$("Rectangle2").height()+'px"  style="position:absolute;"/>').appendTo(targSym.$("Rectangle2"));
					}

					//clear the existing canvas to this drop area if any
					clearRect(document.getElementById('forLine'+attemptCont[dropNumber]));
					
					//counter the dynamic positioning in edge by makeItCenter function
					$('#forLine'+tID).offset({top: 1, left: 0})

					//clear the existing line in this canvas
					clearRect(document.getElementById('forLine'+tID));


					//start drawing
					var myline = document.getElementById('forLine'+tID).getContext('2d');
					myline.lineWidth = 2;
					myline.strokeStyle = '#333';
					myline.beginPath();
					myline.moveTo(xv,yv);
					myline.lineTo(($(this).offset().left + $(this).width()*end_pt_horiz), ($(this).offset().top + $(this).height()*end_pt_vert));
					
					myline.stroke();

					for(var iter=0; iter<attemptCont.length; iter++){
						if(attemptCont[iter] == tID){
							attemptCont[iter] = -1;
						}
					}
					//assign the droppable number to this droparea
					attemptCont[dropNumber] = tID;

					 //lastly call back the function
			   		if(callBack != null){
				    	callBack({
				    		"objectDragged": tID+1,
				    		"objectAreaHit": dropNumber+1,
				    		"attemptsArr": attemptCont
				    	});
					}
					//targSym.makeItCenter($(".centerEL"));
				}

			}
		});

	}
};

//CanvasRenderingContext2D
clearRect = function(canvasObj){
	if(canvasObj != null){
		var context = canvasObj.getContext('2d');
		context.clearRect(0, 0, canvasObj.width, canvasObj.height);
		var w = canvasObj.width;
		canvasObj.width = 1;
		canvasObj.width = w;
	}
}
