function Game(){
	this.ground_texture=PIXI.Texture.fromImage("rsz_42_55343e49ff327ab009114ae0b63eab3f.png");
        this.grass_texture=PIXI.Texture.fromImage("rsz_image792.png");
	this.ground=[];
        this.grass=[];

	this.Set_ground=function(tile_w,tile_h){
		for(var i=0,position_x=tile_w/2.0;i<2*800.0/tile_w;++i,position_x+=tile_w)
		{
			this.ground.push();
                        this.ground[i]=[];
                        
                        this.grass.push();
                        this.grass[i]=[];
                        
			for(var j=0,position_y=tile_h/2.0;j<2*600.0/tile_h;++j,position_y+=tile_h)
			{
				ground_sprite=new PIXI.Sprite(this.ground_texture);
				ground_sprite.anchor.x=0.5;
				ground_sprite.anchor.y=0.5;
				ground_sprite.position.x=position_x;
				ground_sprite.position.y=position_y;
				this.ground[i].push(ground_sprite);
                                
                                grass_sprite=new PIXI.Sprite(this.grass_texture);
				grass_sprite.anchor.x=0.5;
				grass_sprite.anchor.y=0.5;
				grass_sprite.position.x=position_x;
				grass_sprite.position.y=position_y;
                                grass_sprite.alpha=0.5;
				this.grass[i].push(grass_sprite);
			}
		}
	}
	
	this.Stage_add=function(){
                for(var i=0;i<this.ground.length;++i)
			for(var j=0;j<this.ground[i].length;++j)
				game_stage.addChild(this.ground[i][j]);
                
                for(var i=0;i<this.grass.length;++i)
			for(var j=0;j<this.grass[i].length;++j)
				game_stage.addChild(this.grass[i][j]);
	}
};

    var game=new Game();
    game.Set_ground(40,30);
    game.Stage_add();