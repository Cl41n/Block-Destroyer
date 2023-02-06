'use strict'
// DAS UI hat eine neue Klasse bekommen da das basicobjekt.js keine brauchbaren Methoden für das UI bietet
class UI {
	//eingang
	constructor(canvas){
			
		// Spielfeld + größe
		this.field = canvas;
		this.context = this.field.getContext('2d');
		this.fieldWidth = this.field.clientWidth;
		this.fieldHeight = this.field.clientHeight;
		// Schriftart
		this.context.font = "40px Comic Sans MS";
		this.context.fillStyle = "cyan";
		//Positionsangeben des Objekts 1
		this.ob1_posX = 50;
		this.ob1_posY = 800;
		//Positionsangeben des Objekts 2
		this.ob2_posX = 100;
		this.ob2_posY = 800;
		//Positionsangeben des Objekts 3
		this.ob3_posX = 150;
		this.ob3_posY = 800;
		//Positionsangeben des Objekts 4
		this.ob4_posX = 1125;
		this.ob4_posY = 830;
		//Darstellung Game Over
		this.go_sprite = document.createElement('img');
		this.go_sprite.src = './medien/gameover_1200.png';
		this.go_sprite.className = 'Game Over' ;
		
		//Darstellung HP
		this.hp_sprite = document.createElement('img');
		this.hp_sprite.src = './medien/hp.png';
		this.hp_sprite.className = 'Hp' ;
		this.hp_sprite.hp = this;
		this.hp_sprite.onload = function (e)
        {
			
            this.hp.context.drawImage(this.hp.hp_sprite, this.hp.ob1_posX, this.hp.ob1_posY);
			this.hp.context.drawImage(this.hp.hp_sprite, this.hp.ob2_posX, this.hp.ob2_posY);
			this.hp.context.drawImage(this.hp.hp_sprite, this.hp.ob3_posX, this.hp.ob3_posY);
		
        }	
		
	}
	
	//Methode zu refreshen des Userinterface 
	refreshUi(){
		this.draw();
		
	}
	// Darstellung der verschiedenen Sprites auf der Canvas 
	draw(){
		//Falls Game Over nicht zutrifft werden Leben und Punkte im UI dargestellt
		if (gameOver == false){
			if (life == 3){
				this.context.drawImage(this.hp_sprite, this.ob1_posX, this.ob1_posY);
				this.context.drawImage(this.hp_sprite, this.ob2_posX, this.ob2_posY);
				this.context.drawImage(this.hp_sprite, this.ob3_posX, this.ob3_posY);
			}
			else if (life == 2){
				this.context.drawImage(this.hp_sprite, this.ob1_posX, this.ob1_posY);
				this.context.drawImage(this.hp_sprite, this.ob2_posX, this.ob2_posY);	
			}
			else if (life ==1){
				this.context.drawImage(this.hp_sprite, this.ob1_posX, this.ob1_posY);		
			}
			this.context.fillText(points, this.ob4_posX- 70,this.ob4_posY );
		}
		//Falls Game Over zutrifft wird der Game Over Screen dargestellt 
		if (gameOver == true){
			this.context.drawImage(this.go_sprite, 0, 0);
			this.context.fillText('Score:', 500,500 );
			this.context.fillText(points, 650,500 );
		}
	}
	
	
	
}