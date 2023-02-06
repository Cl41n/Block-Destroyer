'use strict'

class Platform extends BasicObject{
	//eingang
	constructor(canvas,startX,startY){
		//weiterleitung an oberklasse
		super(canvas,'plattform.png',startX,startY);
		// geschindigkeit der Platform 
		this.platform_speed = 10;
		
		// Eventabfrage für Tastendruck
		// Tasencode für die gedrückte Taste wird an die Funktion control übergeben 
		window.platform = this;
		window.addEventListener('keydown', control ) ;
		window.addEventListener('keyup', control ) ; 
		
		// In der Funktion control befindet sich ein Swichtcase in dem die verschiedenen Tastencodes abfragt werden
		function control(control_input){
			switch(control_input.keyCode){
				// Abfrage tastencodes und bei überseinstimmung mit break das Switchcase verlassen
				case 37:
				case 65: this.platform.left_speed = (control_input.type == 'keydown'); break;
				case 39:
				case 68: this.platform.right_speed = (control_input.type == 'keydown'); break;
				// Kugel lässt sich nur abfeuern Falls Game Over nicht zutrifft 
				case 32: if (gameOver == false) start = true; break;
				// Falls Game Over zutrifft lässt sich das Spiel mit der Entertaste neu starten
				case 13: if (gameOver == true) window.location.reload();
			
			}	
		}

	}
	
	// Bewegung der Plattform 
	movement(){
		// Falls die Plattform die Außenwände berührt kann sie sich nicht weiter in diese Richtung bewegen
		if (this.posX < 25){
			this.posX = 25;
		}
		else if(this.posX > this.fieldWidth - 295){
			this.posX = this.fieldWidth -295;
		}
		//Wenn sie keine Wände berührt bewegt sie sich mit einer geschwindigkeit von 6 px pro frame
		
		else {
			if (this.left_speed == 1) this.posX -= this.left_speed *this.platform_speed;
			if (this.right_speed == 1) this.posX += this.right_speed *this.platform_speed;
		}
	}
	
	//Abfrage ob die Kugel die Plattform getroffen hat
	hit(){
		// platform Kanten 
		let l1 = this.posX;
		let r1 = this.posX + 270;
		let o1 = this.posY + 40;
		let u1 = this.posY + 80;
		//ball Kanten 
		let l2 = ball.posX;
		let r2 = ball.posX +40;
		let o2 = ball.posY;
		let u2 = ball.posY +40;
		
		
		// Kollisionsabfrage
		if (l1 < r2  && r1 > l2 && o1 < u2 && u1 > o2){
			// welche Kante kollidiert 
			if (l2+20 > r1 && u2 -20 > o1 || l2+20 < l1 && u2 -20 > o1){
				ball.ball_speedY =- ball.ball_speedY;
			}
			if (l2+20 > l1 && l2+20 < r1) ball.ball_speedY =- ball.ball_speedY;
			if (u2-20 < o1 && o2+20 > u1)ball.ball_speedX =- ball.ball_speedX;
			ball.posY = o1 -50;

		}
		
	}
		
}