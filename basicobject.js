'use strict' ;
// Erstellen der Klasse 
class BasicObject {
	//Hier werden die bei Ausführen eingegebenen werte übergeben
	constructor(canvas, img, startX = 500, startY = 500, speedX ){
		
		// Spielfeld + größe
		this.field = canvas;
		this.context = this.field.getContext('2d');
		this.fieldWidth = this.field.clientWidth;
		this.fieldHeight = this.field.clientHeight;
		//Positionsangeben des Objekts
		this.posX = startX;
		this.posY = startY;
		//Bewegegung
		this.left_speed = 0;
		this.right_speed = 0;
		//Darstellung
		this.sprite = document.createElement('img');
		this.sprite.src = './medien/'+img;
		this.sprite.className = 'BasicObject' ;
		this.sprite.basicobject = this;
		// warten bis das Sprite geladen ist
		this.sprite.onload = function (e)
        {
            this.basicobject.context.drawImage(this.basicobject.sprite, this.basicobject.posX, this.basicobject.posY,);
			//console.log(img.x);
        }	
	}
	
	//Methode refresh 
	//Hier werden alle nötigen weiteren Methoden eingefügt
	refreshObject(){
		this.movement();
		this.draw();
	}
	
	// Methode zur bewegung
	movement(){
		
	}
	// Sprite wird auf die gegebene Postition *geszeichnet*
	draw(){
		this.context.drawImage(this.sprite, this.posX, this.posY);	
		
	}
	
	// Methode um Sprites zu drehen
	// im moment noch ungenutzt
	//funktioniert aber :)
	rotate(posX,posY,angle){
		this.context.save();
		this.context.translate(this.posX,this.posY);
		this.context.rotate(angle*180);
		this.context.drawImage(this.sprite, this.posX, this.posY);
		this.context.restore();
			
	}
	
}