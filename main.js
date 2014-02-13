	// create a renderer instance
	var renderer = PIXI.autoDetectRenderer(800, 600);

	// add the renderer view element to the DOM
	document.body.appendChild(renderer.view);

	requestAnimFrame( animate );

	function animate() {
	    requestAnimFrame( animate );

	    //console.log(stage.getBounds().width);
	    renderer.render(current_stage);
	}
