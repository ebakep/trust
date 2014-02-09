
function Button(x, y){
	this.texture=PIXI.Texture.fromImage("bunny.png");
	this.sprite=new PIXI.Sprite(this.texture);

	// center the sprites anchor point
	this.sprite.anchor.x = 0.5;
	this.sprite.anchor.y = 0.5;

	// move the sprite to (x,y) position
	this.sprite.position.x = x;
	this.sprite.position.y = y;
}
