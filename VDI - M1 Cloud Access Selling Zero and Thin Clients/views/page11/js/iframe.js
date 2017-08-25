AdobeEdge.ready(function(){
	//Pass the object iframeStatus to the parent
	var iframeStatus = {
		loaded: true,
		screen: window.screen
	}
	parent.window.iframeStatus = iframeStatus;
});
