'use strict'

class Block extends BasicObject{
	//eingang
	constructor(canvas,startX,startY){
		//weiterleitung an oberklasse
		super(canvas,sprite_versions[sprite_version],startX,startY);
	}
	
	// In der Hit Methode werden zuerst die Außenkanten des Sprites berechnet
	// danach wird geschaut ob eine Kolision stattgefunden hat
	// und wenn ja von welcher Seite/ Winkel
	// um dann entsprechend darauf zu reagieren
	hit(){
		//block Katen 
		let l1 = this.posX;
		let r1 = this.posX + 125;
		let o1 = this.posY;
		let u1 = this.posY + 40;
		//ball Katen 
		let l2 = ball.posX;
		let r2 = ball.posX +40;
		let o2 = ball.posY;
		let u2 = ball.posY +40;
		
		//Kollisionabfrage
		if ( l1 < r2 && r1 > l2 && o1 < u2 && u1 > o2){
			points +=10;
			console.log('POA');
			console.log(points);
			
			//Welche Kanten kolliedieren 
			// 	rechtes eck unten  		linkes eck unten 				rechtes eck oben 			linkes eck oben
			if (l2+20 > r1 && o2+20 < u1 ||l2+20 < l1 && o2+20 < u1 || l2+20 > r1 && u2-20 > o1 || l2+20 < l1 && u2-20 > o1 ){
				ball.ball_speedY =- ball.ball_speedY;
				ball.ball_speedX =- ball.ball_speedX;
			}
				//oben // unten 
			if (l2+20 > l1 && l2+20 < r1) ball.ball_speedY =- ball.ball_speedY;
				//links // rechts 
			if (o2 +20 > o1 && o2+20 < u1)ball.ball_speedX =- ball.ball_speedX;
			
			//Positions veränderung 
			ball.posX += ball.ball_speedX;
			ball.posY += ball.ball_speedY;
			
			//Den getroffenen Block aus dem Array entfernen 
			blocks.splice(block_counter, 1);
			
		}
			
	}
		
}