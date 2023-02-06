'use strict'

class Ball extends BasicObject{
	//eingang
	constructor(canvas,startX,startY){
		//weiterleitung an oberklasse
		super(canvas,'ball.png',startX,startY);
		//rechts links
		this.ball_speedX = 6;
		// oben unten
		this.ball_speedY = 6;
	}
	
	// Hier wird die Bewegeung der Kugel bestimmt
	// Als ersten wird durch zufall festgelegt in welche Richtung die kugel beim *abfeuern* startet
	// Danach ändert sie die richtung nach einer kolision mit einem Block, der Plattform oder der Wand
	movement(){
		// Startrichtung 
		if (start == true && launched == false){
			this.ball_speedY = -8;
			let direction = Math.floor(Math.random()*100);
			console.log(direction);
			if (direction < 50) this.ball_speedX = 6;
			if (direction > 50) this.ball_speedX = -6;
			launched = true;
			
		}
		// Kugel bewegt sich mit der Platform falls sie noch nicht abgefeuert wurde
		if (start == false){
			this.posX = Math.floor(player.posX + 110);
			this.posY = Math.floor(player.posY);
		}
		// neue Possition der Kugel 
		this.posX += this.ball_speedX;
		this.posY += this.ball_speedY;
		// Abbrallen an den wänden 
		if (this.posX < 25) {
			this.ball_speedX =- this.ball_speedX;
			this.posX += 10;
		}
		if (this.posY < 25) {
			this.ball_speedY =- this.ball_speedY;
			this.posY += 10;
		}
		// abrallen an der Decke
		if (this.posX > this.fieldWidth - 75) this.ball_speedX =- this.ball_speedX;
		// Feststellen ob die Kugel den Boden berüht und bei berührung ein Leben abziehen und die Kugel auf Startposition zurücksetzten 
		if (this.posY > this.fieldHeight + 125) {
			start = false;
			launched = false;
			life --;
			console.log(life);
		}
			
	}
}