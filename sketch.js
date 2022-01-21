function setup() {
	createCanvas(800, 600); // make an HTML canvas element width x height pixels
}

function draw() {
	background(225);
	textSize(32);
	strokeWeight(1);
	text(('0'+hour()).slice(-2) + ":" + ('0'+minute()).slice(-2) + ":" + ('0'+second()).slice(-2), 50, 50)
	stroke(0);
	textSize(24);
	text("Connected-dial Analog Clock", 50, 90);
	
	// Dimensions of each line
	hourLength = 70;
	minLength  = 100;
	secLength  = 150;
	
	// Hour hand base/pivot position
	hourDegree = radians(hour() / 24 * 720 + minute() / 60 * 30);
	hourX_s = 400;
	hourY_s = 300;
	hourX_e = hourX_s + hourLength * sin(hourDegree);
	hourY_e = hourY_s - hourLength * cos(hourDegree);
	
	fill(255, 0, 0, 15);
	stroke(255, 0, 0);
	strokeWeight(1);
	circle(hourX_s, hourY_s, hourLength * 2);
	stroke(255, 0, 0);
	strokeWeight(7);
	line(hourX_s, hourY_s, hourX_e, hourY_e);
	
	// Minute hand pivot position (end of hour hand)
	minDegree = radians(minute() / 60 * 360 + second() / 60 * 6);
	minX_s = hourX_e;
	minY_s = hourY_e;
	minX_e = minX_s + minLength * sin(minDegree);
	minY_e = minY_s - minLength * cos(minDegree);
	
	
	fill(0, 255, 0, 15);
	stroke(0, 255, 0);
	strokeWeight(1);
	circle(minX_s, minY_s, minLength * 2);
	stroke(0, 255, 0);
	strokeWeight(4.5);
	line(minX_s, minY_s, minX_e, minY_e);
	
	
	// Second hand pivot position (End of minute hand)
	millis = (new Date()).getMilliseconds();
	secDegree = radians(second() / 60 * 360 + millis / 1000 * 6);
	
	secX_s = minX_e;
	secY_s = minY_e;
	secX_e = secX_s + secLength * sin(secDegree);
	secY_e = secY_s - secLength * cos(secDegree);
	
	
	fill(0, 0, 255, 15);
	stroke(0, 0, 255);
	strokeWeight(1);
	circle(secX_s, secY_s, secLength * 2);
	stroke(0, 0, 255);
	strokeWeight(2.5);
	line(secX_s, secY_s, secX_e, secY_e);
	
	stroke(0);
	
	// Print to console when minute changes
	if (second() == 0) console.log("Minute updated: " + second())
}
