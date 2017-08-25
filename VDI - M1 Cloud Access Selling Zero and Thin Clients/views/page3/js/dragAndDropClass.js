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

	var attemptCont = new Array(dropArray.length);
	for (i=0;i<dragArray.length;i++){	
 		//initialise draggables
		var class_name = dragArray[i]+"_cl";
    targSym.$(dragArray[i]).addClass(class_name);
    targSym.$(dragArray[i]).data({
      'originalLeft': targSym.$(dragArray[i]).css('left'),
      'originalTop': targSym.$(dragArray[i]).css('top')
    });
    targSym.$("."+class_name).draggable({
      revert: function(validRes){
        if(callBack != null){
            callBack({
              "objectDragged": "revert"
            });
        }
        if(!validRes){
          //console.log("WRONG");
        }
        return true;
      },
      start: function(event, ui){
        //finds the center at which the line will start
        if(allowLine){
          yv = ui.offset.top + targSym.$("."+class_name).height()*start_pt_vert;
          xv = ui.offset.left + targSym.$("."+class_name).width()*start_pt_horiz;
        }
      }
    });

    //assign a unique id to the individual draggables
    targSym.$("."+class_name).data("theID", i);

    //assign unique id to the individual drop area
	}


  var tStr = "";
  for(var i = 0; i<ansArray.length; i++){
	  tStr = "";
    if(ansArray[i].length > 1){
      for(var z = 0; z<ansArray[i].length; z++){
        var tComma ="";
        if(z!=0){
          tComma = ",";
        }
        tStr += tComma+"."+ansArray[i][z]+"_cl";
      }
    }else{
      tStr = "."+ansArray[i][0]+"_cl";
    }
    targSym.$(dropArray[i]).data("areaID", i);
    targSym.$(dropArray[i]).droppable({
      tolerance: "pointer",
      accept: tStr,
      drop: function(event, ui){
        var tID =ui.draggable.data("theID"); //dragged obj ID
        var dropNumber = $(this).data("areaID"); //hit area obj ID
        ui.draggable.draggable( 'option', 'revert', 'invalid' );

        //drag to middle of the drag area, animating in
        ui.draggable.position({ of: $(this), my: 'center', at: 'middle',
                  using: function(css, calc) {
                      $(this).animate(css, 200, "linear");
                  }
        });
        if(callBack != null){
            callBack({
              "objectDragged": tID+1,
              "objectAreaHit": dropNumber+1,
              "attemptsArr": attemptCont
            });
			setTimeout(function() {
				ui.draggable.draggable({
		
					revert: function(validRes){
						if(callBack != null){
							callBack({
								"objectDragged": "revert"
							});
						}
						if(!validRes){
							//console.log("WRONG");
						}
						return true;
					},
					start: function(event, ui){
						//finds the center at which the line will start
						if(allowLine){
							yv = ui.offset.top + targSym.$("."+class_name).height()*start_pt_vert;
							xv = ui.offset.left + targSym.$("."+class_name).width()*start_pt_horiz;
						}
					}
				});
			}, 1000);
        }
        // console.log(dropNumber);
        if( dropNumber >= 0) {
          $(this).droppable( 'disable' ); //disables the droparea
          var _this = $(this)
          setTimeout(function(){
            var t = ui.draggable.data("originalTop");
  				  var l = ui.draggable.data("originalLeft");
            ui.draggable.animate({top: t, left: l}, 200, 'linear');
            _this.droppable("enable");
          }, 1200);
        }
        
        
      },
      out: function(event, ui){
        // console.log(ui.draggable.data("originalTop"));

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


DragAndDrop.prototype.setStart = function(str){
	switch(str){
		case "L":
			this.start_pt_horiz = 0;
			break;
		case "T":
			this.start_pt_vert = 0;
			break;
		case "R":
			this.start_pt_horiz = 1;
			break;
		case "B":
			this.start_pt_vert = 1;
			break;
	}
}

DragAndDrop.prototype.setEnd = function(str){
	switch(str){
		case "L":
			this.end_pt_horiz = 0;
			break;
		case "T":
			this.end_pt_vert = 0;
			break;
		case "R":
			this.end_pt_horiz = 1;
			break;
		case "B":
			this.end_pt_vert = 1;
			break;
	}
}