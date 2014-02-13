	var menu_stage = new PIXI.Stage(0xFFFFFFFF);
        var game_stage = new PIXI.Stage(0xFFFFFFFF);
        var current_stage = new PIXI.Stage(0xFFFFFFFF);
        
        current_stage=menu_stage;

	function Menu(){
		this.bg_texture=PIXI.Texture.fromImage("izzy-a_stylized-landscape.png");//menu bg_texture
		this.bg_sprite= new PIXI.Sprite(this.bg_texture);//menu bg_sprite		
		this.buttons=[];//menu buttons
	
	
		this.bg_sprite.anchor.x=0.5;
		this.bg_sprite.anchor.y=0.5;

		this.bg_sprite.position.x=400;
		this.bg_sprite.position.y=300;
	
		//scale sprite proportional to renderer size
		this.bg_sprite.scale.x=10.0/8.0;
		this.bg_sprite.scale.y=600.0/636.0;

		menu_stage.addChild(this.bg_sprite);
		
		this.Add_buttons=function(number){	//create some number of menu buttons
			for(var i=0;i<number;++i)
			{
				var button=new Button(400,50+100*(i+1));
				this.buttons.push(button);
				menu_stage.addChild(button.sprite);
			}
                }
		this.Mouse_over=function(){
                    for(var i=0;i<this.buttons.length;++i)
                    {
                        this.buttons[i].sprite.interactive=true;
                        this.buttons[i].sprite.mouseover=function(data){
                            this.isOver=true;
                            if(this.isdown)
                                return;
                            this.height+=5;
                            this.width+=5;
                            console.log("Mouse over");
                        }
                    }
                }
                
                this.Mouse_out=function(){
                    for(var i=0;i<this.buttons.length;++i)
                    {
                        this.buttons[i].sprite.interactive=true;
                        this.buttons[i].sprite.mouseout=function(data){
                            this.isOver=false;
                            if(this.isdown)
                                return;
                            this.height-=5;
                            this.width-=5;
                            console.log("Mouse over");
                        }
                    }
                }
                
                this.Mouse_click=function(){
                    this.buttons[0].sprite.click=function(data){ //start button on_click
                        current_stage=game_stage;
                    }
                }
                
	};

	var menu=new Menu();//create menu object
	menu.Add_buttons(4);//create 4 menu bottons
        menu.Mouse_over();
        menu.Mouse_out();
        menu.Mouse_click();