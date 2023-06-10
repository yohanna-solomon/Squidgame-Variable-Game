//Images & Font
let sqp
let sqp1
let sqp2
let sqp3
let font
//counters & accumelators
var screen = 0;
var question = 1;
var score = 0;
var lives = 1;
//random player#
let num
//Music
var song;
var slider;
//Questions Arrays
let qx = [30];
let qy = [110];

function preload(){
  sqp = loadImage('Squid Game #4.png');
  sqp1 = loadImage('Q #2.png')
  sqp2 = loadImage('Q #3.png')
  sqp3 = loadImage('Q #4.png')
  font = loadFont('GameOfSquids-1GMVL.ttf');
 }

function setup(){
  createCanvas(900, 500);
  background(sqp,0 , 0, 900, 500)
  Cookies();
  playerNumber();
  slider = createSlider(0, 1, 0, 0.02);
  song = loadSound("Question Sound.mp3", loaded); 
 }

function loaded() {
  song.loop();
}

function draw(){ 
if (lives > 0){
  song.setVolume(slider.value());
  if(screen == 0){
    homeScreen();
   }
  
  if(screen == 1){
    instructions();
   }
  
  if(screen == 2){
     //lives();
     ScoreText();
    if (question == 1){
      question1();
      answer1();
    }
    if (question == 2){
      question2();
      answer2();
    }
    if (question == 3){
      question3();
      answer3();
    }
    if (question == 4){
      question4();
      answer4();
    }
    if (question == 5){
      question5();
      answer5();
    }    
    if (question == 6){
       question6();
      answer6();
    }
    if (question == 7){
      question7();
      answer7();
    }
    if (question == 8){
      question8();
      answer8();
    }
    if (question == 9){
      question9();
      answer9();
    }
    if (question == 10){
      question10();
      answer10();
      nextButton();
    }
   }
  if(screen == 3){
    finalScreen();  
    }
 }  
 } 

function mouseClicked(){ 
  if (lives > 0){
  //checking for instruction button clicked
  if(screen == 0 && mouseX >= 5 && mouseX <= 133 && mouseY >= 20 && mouseY <= 170){
     screen = 1;
   } 
  //checking for instructions screen back button, set screen to home
   if(screen == 1 && mouseX >= 730 && mouseX <= 870 && mouseY >= 400 && mouseY <= 470){ 
     background(sqp,900, 500);
     Cookies();
     screen = 0;
   }
  //play button to question #1
   if(screen == 0 && mouseX >= 320 && mouseX <= 560 && mouseY >= 305 && mouseY <= 425){
     //background(sqp,0 , 0, 100, 100)
     screen = 2;
   }
   
   //transition between questions
   if(screen == 2 && mouseX >= 725 && mouseX <= 870 && mouseY >= 235 && mouseY <= 360){ 
      question =  question + 1
     }
    
    
    //question 1 answer 
    if(screen == 2 && question == 1 && mouseX >= 310 && mouseX <= 590 && mouseY >= 280 && mouseY <= 360){
       score = score + 100;
       }
    //question 2 answer 
    if(screen == 2 && question == 2 && mouseX >= 140 && mouseX <= 350 && mouseY  >= 360 && mouseY <= 440){
       score = score + 100;
       }
    //question 3 answer
    if(screen == 2 && question == 3 && mouseX >= 610 && mouseX <= 820 && mouseY  >= 360 && mouseY <= 440){
      score = score + 100;
      
    }
    //question 4 answer
     if(screen == 2 && question == 4 && mouseX >= 140 && mouseX <= 350 && mouseY  >= 360 && mouseY <= 440){
       score = score + 100;
     }
    //question 5 answer
    if(screen == 2 && question == 5 && mouseX >= 140 && mouseX <= 335 && mouseY >= 375 && mouseY <= 515){
      score = score + 100;
    }
     //question 6 answer
    if(screen == 2 && question == 6 && mouseX >= 370 && mouseX <= 580 && mouseY >= 355 && mouseY <= 435){
      score = score + 100;
    }
    //question 7 answer
    if(screen == 2 && question == 7 && mouseX >= 140 && mouseX <= 335 && mouseY >= 375 && mouseY <= 515){
      score = score + 100;
    }
    //question 8 answer
    if(screen == 2 && question == 8 && mouseX >= 140 && mouseX <= 335 && mouseY >= 375 && mouseY <= 515){
      score = score + 100;
    }
    //question 9 answer
    if(screen == 2 && question == 9 && mouseX >= 370 && mouseX <= 580 && mouseY >= 355 && mouseY <= 435){
      score = score + 100;
    }
    //question 10 answer
    if(screen == 2 && question == 10 && mouseX >= 610 && mouseX <= 820 && mouseY >= 375 && mouseY <= 455){
      score = score + 100;
    }
    
    //Final Scren
     if(screen == 2 && mouseX >= 725 && mouseX <= 870 && mouseY >= 235 && mouseY <= 360){
      finalScreen();
    } 
  }
}

//First 2 screens
function homeScreen(){
//Random Numbers
  strokeWeight(0)
//Play Button
  strokeWeight(2)
  stroke(3)
  fill(173,135,98,10)
  rect(320, 305, 240, 120)
  fill(0)
  textSize(50);
  textFont(font);
  text('Play!', 360, 380);

  //title and credit to makers 
  textSize(65);
  fill(0);
  stroke(255);
  text('Variables\n   In Java',150,170);
   textSize(25);
  text(' BY: EZINWA NWAKOBY AND YOHANNA SOLOMON',100,470)
  
//Guard's Face
  strokeWeight(10)
  stroke(255, 51, 51)
  fill(0);
  ellipse(70,90,120,150);// head
  strokeWeight(4.5)
  stroke(61, 61, 41);//
  line(18,105,122,105); // top line 
  line(70,105,70,157); // middle line 
  stroke(255);
  triangle(70,45,40,95,100,95) // big tri
  stroke(255, 51, 51);
  strokeWeight(10)
  line(35,30,103,30); //top line
  noStroke()
  fill(255, 51, 51)
  ellipse(70,30,80,20);// head
  //music Text
  fill(0)
  textSize(20);
  text('Music',10,490);
 }
function instructions(){
  background(173,135,98)
  
  //Guard Face
  strokeWeight(10)
  stroke(255, 51, 51)
  fill(0);
  ellipse(70,90,120,150);// head
  strokeWeight(4.5)
  stroke(61, 61, 41);//
  line(18,105,122,105); // top line 
  line(70,105,70,157); // middle line 
  stroke(255);
  triangle(70,45,40,95,100,95) // big tri
  stroke(255, 51, 51);
  strokeWeight(10)
  line(35,30,103,30); //top line
  noStroke();
  fill(255, 51, 51);
  ellipse(70,29,80,20);// head

  //Shapes in text bubble
  strokeWeight(10);
  stroke(0,0,0,70);
  noFill();
  ellipse(190,250,180,180);
  triangle(445,175,355,330,530,330);
  rect(630,170,180,160);
  
  //the words intructions 
  strokeWeight(1);
  fill(0)
  stroke(0);
  textSize(50);
  textFont(font);
  text('Instructions:',230,80);
  textSize(20);
  textFont('Helvetica');
  text('      “You will only have one chance to survive. There will be 10 questions regarding variables\n in java. As soon as you hit play it will show the first question. Each time you get a question\n right, you will get closer to the doll standing in front of you and add $100 to your balance.\n You are able to skip questions however, you will not recive any money for the questions you\n skip. Your goal is to make it all the way to the doll. You can click and hold on your answers to\n reveal if you got it correct or not. If you get a question wrong, you will restart from the\n beginning. You are putting your life on the line for the ultimate cash prize. There are no\n winners or losers. If you are able to reach the doll, you will walk away from this game with\n all the money you have made. As you can see others have failed before you, I’m sure you\n can survive the childhood game of redlight-greenlight and win a cash prize!', 50,200);
  textSize(50);
  fill(255,0,0)
  text(' Right?”',355,480)
    
  //back button
  strokeWeight(2)
  stroke(3)
  fill(255,214,117)
  rect(730,410,140,80);
  textSize(40);
  textFont(font);
  fill(0)
  text("BACK", 740,460);
 }
//Random Numbers
function playerNumber(){
//Player Number
  num = Math.round(random(1,456));
  //textbubble
  fill(255,214,117)
  stroke(0);
  ellipse(140,115,7,7);
  ellipse(150,90,10,10);
  ellipse(165,75,15,15);
  ellipse(337,40,345,80);
  //text
  fill(0)
  textSize(15)
  strokeWeight(1)
  text('              “Welcome Player #'+ num +',\n I’ll be the guard overseeing you today!"', 200,25);
  text('"Click me to view the instructions!"', 220, 65)
  
//
 }
function Cookies(){
  xC1 = Math.round(random(1,600));
  yC1 = Math.round(random(1,200));
  xC2 = Math.round(random(1,600));
  yC2 = Math.round(random(1,200));
  xC3 = Math.round(random(1,600));
  yC3 = Math.round(random(1,200));
  
    stroke(0)
  strokeWeight(1)
  fill(160)
  ellipse(xC1+50,yC1+50,70,70)
  
  noStroke()
  fill(255,214,117);
  ellipse(xC1+50,yC1+50,60,60);//top cookie (50,50,60,60)
  
  stroke(0,0,0,70)
  strokeWeight(1.5)
  rect(xC1+35,yC1+35,30,30)
  
  /////////////////////////////
   
  //noStroke()
  //fill(255,214,117);
  stroke(0)
  strokeWeight(1)
  fill(160)
  ellipse(xC2+50,yC2+150,70,70)
  
  noStroke()
  fill(255,214,117);
  ellipse(xC2+50,yC2+150,60,60); //middle cookie
  
  stroke(0,0,0,70)
  strokeWeight(1.5)
  triangle(xC2+50,yC2+133,xC2+33,yC2+162,xC2+67,yC2+162)

  /////////////////////////////////
  
  stroke(0)
  strokeWeight(1)
  fill(160)
  ellipse(xC3+50,yC3+250,70,70)
  
  noStroke()
  fill(255,214,117);
  ellipse(xC3+50,yC3+250,60,60); // bottom cookie
  
  stroke(0,0,0,70)
  strokeWeight(1.5)
  
  strokeWeight(2)
  beginShape()
  vertex(xC3+29,yC3+245);
  vertex(xC3+40,yC3+245);
  vertex(xC3+45,yC3+245);
  vertex(xC3+50,yC3+230);
  vertex(xC3+55,yC3+245);
  vertex(xC3+70,yC3+245);
  vertex(xC3+58,yC3+255);
  vertex(xC3+63,yC3+268);
  vertex(xC3+50,yC3+263);
  vertex(xC3+37,yC3+269);
  vertex(xC3+42,yC3+255);
  vertex(xC3+30,yC3+245);
  endShape()
}


//Score Keeper
function ScoreText(){
  //Lives counter
  fill(255, 0, 0, 190)
  rect(10, 457, 155, 30, 25)
  fill(0)
  textSize(18)
  text('Balance:', 25, 477)
  textSize(17)
  textStyle(BOLD);
  text('$' + score , 115, 477);
}

//Next & Skip Question Button
function nextButton(){
  fill(255,214,117)
  rect(725, 240, 140, 70);
  fill(0)
  textSize(22);
  text('   Next\nQuestion', 750, 270)
 }
function skipButton(){
  fill(255,214,117)
  rect(725, 240, 140, 70);
  fill(0)
  textSize(22);
  text('   Next\nQuestion', 750, 270)
 }

//Question Functions
function question1(){
  background(sqp,0, 0, 900, 500);
  ScoreText();
  skipButton();
  textFont('Helvetica');
 //header & question
  fill(0)
  textSize(60)
  text('Question #1:',qx[0], qy[0])
  textSize(26)
  text('Which variable is legal?', 65, 140)
//answeroptions
  fill(255, 190)
  rect(80, 360, 240, 80, 25)//left
  rect(580, 360, 240, 80, 25)//right
  rect(310, 260, 270, 80, 25)//top
  fill(0)
   textSize(23)
  text('456Playernumber',110, 405);
  text('Seong Gi-hun', 628, 405);
   textSize(20)
  text('number456_seonggihunz', 332, 305);
 }
function answer1(){
  if(mouseIsPressed){
       //question #1
      if(screen == 2 && question == 1 && mouseX >= 310 && mouseX <= 590 && mouseY >= 260 && mouseY <= 340){ 
      fill(0,155,0);
      rect(310, 260, 270, 80, 25); 
      fill(0)
      text('number456_seonggihunz', 332, 305);//correct answer
     }
       else if(screen == 2 && question == 1 && mouseX >= 580 && mouseX <= 820 && mouseY >= 360 && mouseY <= 438){
      fill(0,155,0);
      rect(310, 260, 270, 80, 25); 
      fill(0)
      text('number456_seonggihunz', 332, 305);//correct answer
         
      fill(155,0,0); 
      rect(580, 360, 240, 80, 25);
      fill(0);
      textSize(25)
      text('Seong Gi-hun', 623, 405);//incorrect answer   
     }
       else if(screen == 2 && question == 1 && mouseX >= 80 && mouseX <= 320 && mouseY >= 360 && mouseY <= 438){
      fill(0,155,0);
      rect(310, 260, 270, 80, 25); 
      fill(0)
      text('number456_seonggihunz', 332, 305);//correct answer
         
      fill(155,0,0); 
      rect(80, 360, 240, 80, 25);
      fill(0);
      textSize(25);
      text('456Playernumber',100, 405);//incorrect answer
     }
    nextButton();
 }
 }

function question2(){
  image(sqp,0, 0, 900, 500);
  ScoreText();
  skipButton();
//nextButton();
   textFont('Helvetica');
 //header & question
  fill(0)
  textSize(60)
  text('Question #2:',qx[0], qy[0])
  textSize(26)
  text('Which variable is legal,\n      but not proper?', 65, 140)
//answeroptions
  fill(255, 190)
  rect(140, 360, 210, 80, 25)//left
  rect(610, 360, 210, 80, 25)//right
  rect(370, 310, 210, 80, 25)//top
  fill(0)
   textSize(29)
  text('Player_001',170, 410);//correct answer
  text('player 001', 645, 410);
  text('player001', 410, 360);
}
function answer2(){
  if(mouseIsPressed){
   if(screen == 2 && question == 2 && mouseX >= 140 && mouseX <= 350 && mouseY  >= 360 && mouseY <= 440){
        fill(0,155, 0);
        rect(140, 360, 210, 80, 25);
        fill(0);
        text('Player_001',170, 410);//correct answer
     }
        else if(screen == 2 && question == 2 && mouseX >= 610 && mouseX <= 820 && mouseY  >= 360 && mouseY <= 440){
          fill(0,155, 0);
          rect(140, 360, 210, 80, 25);
          fill(0);
          text('Player_001',170, 410);//correct answer
          
          fill(155,0,0);
          rect(610, 360, 210, 80, 25);
          fill(0);
          text('player 001', 645, 410);
     }
        else if(screen == 2 && question == 2 && mouseX >= 370 && mouseX <= 580 && mouseY >= 310 && mouseY <= 390){
          fill(0,155, 0);
          rect(140, 360, 210, 80, 25);
          fill(0);
          text('Player_001',170, 410);//correct answer 
          
          fill(155,0,0);
          rect(370, 310, 210, 80, 25);
          fill(0);
          text('player001', 410, 360);
     }
 }
 }

function question3(){
  image(sqp,0, 0, 900, 500);
  ScoreText();
  skipButton();
  textFont('Helvetica');
  //header & question
  fill(0)
  textSize(60)
  text('Question #3:',qx[0], qy[0])
  textSize(26)
  text('Which variable is\n         illegal?', 90, 140)
//answeroptions
  fill(255, 190)
  rect(140, 360, 210, 80, 25)//left
  rect(610, 360, 210, 80, 25)//right
  rect(370, 310, 210, 80, 25)//top
  fill(0)
   textSize(29)
  text('myNAme',185, 410);
  text('67sLife//', 660, 410);//correct answer
   textSize(23)
  text('thisNameIsIllegal', 390, 360);
}
function answer3(){
  if(mouseIsPressed){
   if(screen == 2 && question == 3 && mouseX >= 610 && mouseX <= 820 && mouseY  >= 360 && mouseY <= 440){
        fill(0,155, 0);
        rect(610, 360, 210, 80, 25);
        fill(0);
        textSize(29)
        text('67sLife//', 660, 410);//correct answer
     }
        else if(screen == 2 && question == 3 && mouseX >= 140 && mouseX <= 350 && mouseY  >= 360 && mouseY <= 440){
          fill(0,155, 0);
          rect(610, 360, 210, 80, 25);
          fill(0);
          textSize(29)
          text('67sLife//', 660, 410);//correct answer
          
          fill(155, 0, 0);
          rect(140, 360, 210, 80, 25);
          fill(0);
          textSize(29)
          text('myNAme',185, 410);
     }
        else if(screen == 2 && question == 3 && mouseX >= 370 && mouseX <= 580 && mouseY >= 310 && mouseY <= 390){
          fill(0,155, 0);
          rect(610, 360, 210, 80, 25);
          fill(0);
          textSize(29)
          text('67sLife//', 660, 410);//correct answer
          
          fill(155, 0, 0);
          rect(370, 310, 210, 80, 25)
          fill(0);
          textSize(23)
          text('thisNameIsIllegal', 390, 360);
     }
 }
}

function question4(){
  image(sqp,0, 0, 900, 500);
  ScoreText();
  skipButton();
  textFont('Helvetica');
  //header & question
  fill(0)
  textSize(60)
  text('Question #4:',qx[0], qy[0])
  textSize(26)
  text('Which variable is legal,\n      but not proper?', 70, 145)
//answeroptions
  fill(255, 190)
  rect(140, 360, 210, 80, 25)//left
  rect(610, 360, 210, 80, 25)//right
  rect(370, 310, 210, 80, 25)//top
  fill(0)
   textSize(29)
  text('SquidGames',165, 410);//correct answer
  text('squidGames', 635, 410);
  text('gamesSquid', 395, 360);
 }
function answer4(){
  if(mouseIsPressed){
   if(screen == 2 && question == 4 && mouseX >= 140 && mouseX <= 350 && mouseY  >= 360 && mouseY <= 440){
        fill(0,155, 0);
        rect(140, 360, 210, 80, 25);
        fill(0);
        text('SquidGames',165, 410);//correct answer
     }
        else if(screen == 2 && question == 4 && mouseX >= 610 && mouseX <= 820 && mouseY  >= 360 && mouseY <= 440){
          fill(0,155, 0);
          rect(140, 360, 210, 80, 25);
          fill(0);
          text('SquidGames',165, 410);//correct answer
          
          fill(155,0,0);
          rect(610, 360, 210, 80, 25);
          fill(0);
          text('squidGames', 635, 410);
     }
        else if(screen == 2 && question == 4 && mouseX >= 370 && mouseX <= 580 && mouseY >= 310 && mouseY <= 390){
          fill(0,155, 0);
          rect(140, 360, 210, 80, 25);
          fill(0);
          text('SquidGames',165, 410);//correct answer 
          
          fill(155,0,0);
          rect(370, 310, 210, 80, 25);
          fill(0);
          text('gamesSquid', 395, 360);
     }
 }
 }

function question5(){
  background(sqp1,0, 0, 900, 500);
  ScoreText();
  skipButton();
  textFont('Helvetica');
  //header & question
  fill(0)
  textSize(60)
  text('Question #5:',qx[0], qy[0])
  textSize(26)
  text('Which variable is illegal?', 70, 145)
//answeroptions
  fill(255, 190)
  rect(140, 375, 210, 80, 25)//left
  rect(610, 375, 210, 80, 25)//right
  rect(370, 355, 210, 80, 25)//top
  fill(0)
   textSize(29)
  text('218_dies',185, 430);//correct answer
  text('sg218', 675, 430);
  text('sGisGreat', 410, 410)
}
function answer5(){
  if(mouseIsPressed){
   if(screen == 2 && question == 5 && mouseX >= 140 && mouseX <= 335 && mouseY >= 375 && mouseY <= 515){
     fill(0,155,0);
     rect(140, 375, 210, 80, 25);
     fill(0)
     textSize(29)
     text('218_dies',185, 430);//correct answer
   }
    else if(screen == 2 && question == 5 && mouseX >= 610 && mouseX <= 820 && mouseY >= 375 && mouseY <= 515){
     fill(0,155,0);
     rect(140, 375, 210, 80, 25);
     fill(0)
     textSize(29)
     text('218_dies',185, 430);//correct answer
      
     fill(155,0,0);
     rect(610, 375, 210, 80, 25);
     fill(0)
     textSize(29)
     text('sg218', 675, 430);
   }
     if(screen == 2 && question == 5 && mouseX >= 370 && mouseX <= 580 && mouseY >= 355 && mouseY <= 435){
     fill(0,155,0);
     rect(140, 375, 210, 80, 25);
     fill(0)
     textSize(29)
     text('218_dies',185, 430);//correct answer 
      
     fill(155,0,0);
     rect(370, 355, 210, 80, 25);
     fill(0)
     textSize(29)
     text('sGisGreat', 410, 410);
    }
 }
 }

function question6(){
  image(sqp1,0, 0, 900, 500);
  ScoreText();
  skipButton();
  textFont('Helvetica');
 //header & question
  fill(0)
  textSize(60)
  text('Question #6:',qx[0], qy[0])
  textSize(26)
  text('What is the value of the variable\n                 “player”:', 20, 145)
  textSize(20)
  text( 'int player = 50\n     player /= 5;\n     player *= 2;\n     player += 3;', 120, 230);
//answeroptions
  fill(255, 190)
  rect(140, 375, 210, 80, 25)//left
  rect(610, 375, 210, 80, 25)//right
  rect(370, 355, 210, 80, 25)//top
  fill(0)
   textSize(29)
  text('player = 25',170, 425);
  text('player = 62', 645, 425);
  text('player = 23', 405, 405);//correct answer
}
function answer6(){
   if(mouseIsPressed){
   if(screen == 2 && question == 6 && mouseX >= 370 && mouseX <= 580 && mouseY >= 355 && mouseY <= 435){
     fill(0,155,0);
     rect(370, 355, 210, 80, 25);
     fill(0)
     textSize(29)
     text('player = 23', 405, 405);//correct answer
   }
    else if(screen == 2 && question == 6 && mouseX >= 610 && mouseX <= 820 && mouseY >= 375 && mouseY <= 515){
     fill(0,155,0);
     rect(370, 355, 210, 80, 25);
     fill(0)
     textSize(29)
     text('player = 23', 405, 405);//correct answer
      
     fill(155,0,0);
     rect(610, 375, 210, 80, 25);
     fill(0)
     textSize(29)
     text('player = 62', 645, 425);
   }
     if(screen == 2 && question == 6 && mouseX >= 140 && mouseX <= 335 && mouseY >= 375 && mouseY <= 515){
     fill(0,155,0);
     rect(370, 355, 210, 80, 25);
     fill(0)
     textSize(29)
     text('player = 23', 405, 405);//correct answer 
      
     fill(155,0,0);
     rect(140, 375, 210, 80, 25);
     fill(0)
     textSize(29)
     text('player = 25',170, 425);
    }
  }
}

function question7(){
  image(sqp1,0, 0, 900, 500);
  ScoreText();
  skipButton();
  textFont('Helvetica');
  //header & question
  fill(0)
  textSize(60)
  text('Question #7:',qx[0], qy[0])
  textSize(26)
  text('What is the value of the variable\n                 “player 067”:', 20, 145)
  textSize(20)
  text( 'double player067 = 20.10;\n            player067 = player067/5;\n            player067 -= 2;', 90, 230);
//answeroptions
  fill(255, 190)
  rect(140, 375, 210, 80, 25)//left
  rect(610, 375, 210, 80, 25)//right
  rect(370, 355, 210, 80, 25)//top
  fill(0)
   textSize(25)
  text('player067 = 2.02',152, 425);//correct answer
  text('player067 = 2.03', 623, 425);
  text('player067 = 2.05', 383, 405);
}
function answer7(){
  if(mouseIsPressed){
   if(screen == 2 && question == 7 && mouseX >= 140 && mouseX <= 335 && mouseY >= 375 && mouseY <= 515){
     fill(0,155,0);
     rect(140, 375, 210, 80, 25);
     fill(0)
     textSize(25)
     text('player067 = 2.02',152, 425);//correct answer
   }
    else if(screen == 2 && question == 7 && mouseX >= 610 && mouseX <= 820 && mouseY >= 375 && mouseY <= 515){
     fill(0,155,0);
     rect(140, 375, 210, 80, 25);
     fill(0)
     textSize(25)
     text('player067 = 2.02',152, 425);//correct answer
      
     fill(155,0,0);
     rect(610, 375, 210, 80, 25);
     fill(0)
     textSize(25)
     text('player067 = 2.03', 623, 425);
   }
     if(screen == 2 && question == 7 && mouseX >= 370 && mouseX <= 580 && mouseY >= 355 && mouseY <= 435){
     fill(0,155,0);
     rect(140, 375, 210, 80, 25);
     fill(0)
     textSize(25)
     text('player067 = 2.02',152, 425);//correct answer 
      
     fill(155,0,0);
     rect(370, 355, 210, 80, 25);
     fill(0)
     textSize(25)
     text('player067 = 2.05', 383, 405);
    }
 }
}

function question8(){
  background(sqp2,0, 0, 900, 500);
  ScoreText();
  skipButton();
  textFont('Helvetica');
  //header & question
  fill(0)
  textSize(60)
  text('Question #8:',qx[0], qy[0])
  textSize(26)
  text('What is the value of the variable\n                   “ali199”:', 20, 145)
  textSize(25)
  text( 'int ali199  = 150;\n     ali199 /= 2;\n     ali199 %= 2;', 130, 230);
//answeroptions
  fill(255, 190)
  rect(140, 375, 210, 80, 25)//left
  rect(610, 375, 210, 80, 25)//right
  rect(370, 355, 210, 80, 25)//top
  fill(0)
   textSize(29)
  text('ali199 = 1',185, 425);//correct answer
  text('ali199 = 5', 653, 425);
  text('Ali199 = 1', 410, 405);
}
function answer8(){
  if(mouseIsPressed){
   if(screen == 2 && question == 8 && mouseX >= 140 && mouseX <= 335 && mouseY >= 375 && mouseY <= 515){
     fill(0,155,0);
     rect(140, 375, 210, 80, 25);
     fill(0)
     textSize(29)
     text('ali199 = 1',185, 425);//correct answer
   }
    else if(screen == 2 && question == 8 && mouseX >= 610 && mouseX <= 820 && mouseY >= 375 && mouseY <= 515){
     fill(0,155,0);
     rect(140, 375, 210, 80, 25);
     fill(0)
     textSize(29)
     text('ali199 = 1',185, 425);//correct answer
      
     fill(155,0,0);
     rect(610, 375, 210, 80, 25);
     fill(0)
     textSize(29)
     text('ali199 = 5', 653, 425);
   }
     if(screen == 2 && question == 8 && mouseX >= 370 && mouseX <= 580 && mouseY >= 355 && mouseY <= 435){
     fill(0,155,0);
     rect(140, 375, 210, 80, 25);
     fill(0)
     textSize(29)
     text('ali199 = 1',185, 425);//correct answer 
      
     fill(155,0,0);
     rect(370, 355, 210, 80, 25);
     fill(0)
     textSize(29)
     text('Ali199 = 1', 410, 405);
    }
  }
}

function question9(){
  image(sqp2,0, 0, 900, 500);
  ScoreText();
  skipButton();
  textFont('Helvetica');
  //header & question
  fill(0)
  textSize(60)
  text('Question #9:',qx[0], qy[0])
  textSize(26)
  text('Which of the following statements\n                      is true:', 20, 145)
  ;
//answeroptions
  fill(255, 190)
  rect(140, 375, 210, 80, 25)//left
  rect(610, 375, 210, 80, 25)//right
  rect(370, 355, 210, 80, 25)//top
  fill(0)
   textSize(16)
  text('It cannot contain\n         ANY\nspecial characters',185, 405);
  text('Variable names\n        CAN\nbegin with a number', 653, 405);
  text('A variable name\n       MUST\nbegin with a letter', 415, 380);//correct answer
}
function answer9(){
  if(mouseIsPressed){
    if(screen == 2 && question == 9 && mouseX >= 370 && mouseX <= 580 && mouseY >= 355 && mouseY <= 435){
     fill(0,155,0);
     rect(370, 355, 210, 80, 25);
     fill(0)
     textSize(16)
     text('A variable name\n       MUST\nbegin with a letter', 415, 380); // correct answer
    }
    else if(screen == 2 && question == 9 && mouseX >= 610 && mouseX <= 820 && mouseY >= 375 && mouseY <= 455){
     fill(0,155,0);
     rect(370, 355, 210, 80, 25);
     fill(0)
     textSize(16)
     text('A variable name\n       MUST\nbegin with a letter', 415, 380); // correct answer    
      
     fill(155,0,0);
     rect(610, 375, 210, 80, 25);
     fill(0)
     textSize(16)   
     text('Variable names\n        CAN\nbegin with a number', 653, 405);
    }
    if (screen == 2 && question == 9 && mouseX >= 140 && mouseX <= 350 && mouseY >= 375 && mouseY <= 455){
     fill(0,155,0);
     rect(370, 355, 210, 80, 25);
     fill(0)
     textSize(16)
     text('A variable name\n       MUST\nbegin with a letter', 415, 380); // correct answer
      
     fill(155,0, 0);
     rect(140, 375, 210, 80, 25);
     fill(0)
     textSize(16)
     text('It cannot contain\n         ANY\nspecial characters',185, 405);
    }
 }
 }  

function question10(){
  image(sqp3,0, 0, 900, 500);
  ScoreText();
  skipButton();
  textFont('Helvetica');
  //header & question
  fill(0)
  textSize(60)
  text('Question #10:',qx[0], qy[0])
  textSize(26)
  text('What is the value of the variable\n               “dalgonaSG”:', 20, 145)
  textSize(20)
  text( 'int  dalgonaSG = 200 ;\n     dalgonaSG += 50;\n     dalgonaSG /= 5;', 130, 230);
//answeroptions
  fill(255, 190)
  rect(140, 375, 210, 80, 25)//left
  rect(610, 375, 210, 80, 25)//right
  rect(370, 355, 210, 80, 25)//top
  fill(0)
   textSize(23)
  text('dalgonaSG = 100',160, 425);
  text('dalgonaSG = 50', 633, 425);//correct answer
  text('dalgonaSG = 25', 390, 405);
}
function answer10(){
  if(mouseIsPressed){
    if(screen == 2 && question == 10 && mouseX >= 610 && mouseX <= 820 && mouseY >= 375 && mouseY <= 455){
      fill(0,155,0);
      rect(610, 375, 210, 80, 25);
      fill(0)
      textSize(23)
      text('dalgonaSG = 50', 633, 425);//correct answer
    }
    else if(screen == 2 && question == 10 && mouseX >= 140 && mouseX <= 350 && mouseY >= 375 && mouseY <= 455){
      fill(0,155,0);
      rect(610, 375, 210, 80, 25);
      fill(0)
      textSize(23)
      text('dalgonaSG = 50', 633, 425);//correct answer
      fill(155,0, 0);
      rect(140, 375, 210, 80, 25);
      fill(0)
      textSize(23)
      text('dalgonaSG = 100',160, 425);
    }
    if(screen == 2 && question == 10 && mouseX >= 370 && mouseX <= 580 && mouseY >= 355 && mouseY <= 435){
      fill(0,155,0);
      rect(610, 375, 210, 80, 25);
      fill(0)
      textSize(23)
      text('dalgonaSG = 50', 633, 425);//correct answer      
      
      fill(155,0 ,0)
      rect(370, 355, 210, 80, 25);
      fill(0)
      textSize(23)
      text('dalgonaSG = 25', 390, 405);
    }
  }
  }
//final Creen function 
function finalScreen(){
  // ending Screen 
  background(13,13,13);
  strokeWeight(3)
  textSize(20);
  stroke(255,0,0,130);
  
  // background screen(game over )
  fill(155)
    for (y = 0; y < 10; y++) {
    for (x = 0; x < 10; x++) {
    text('GAME OVER',x*100, y*100, 40, 60);
    }
  }

  
  textFont('Gerogia');
  strokeWeight(3)
  textStyle(BOLD);
  textSize(30);
  fill(255)
  stroke(0);
  text('Thank you for participating in\n Squid Games. During this game, you\n have won $' + score+'. However, We hope you\n come back to play Squid Games.\n Who knows, you may potentially win\n some more money, or maybe you will\n lose your life. The risk is yours to take.',200,140);
  
  
  strokeWeight(6);
  stroke(140, 140, 140);
  
  line(140,130,170,90);//upper line
  
  line(140,130,175,160);//bottom line
  
  line(170,90,170,50);//line going up line
  
  line(170,50,700,50);//line going up right
  
  line(700,50,700,450);//line going far right
  
  line(700,450,175,450);//very bottom// 
  
  line(175,450,175,160);//line going far left up
  
  //Guard's Face
  strokeWeight(10)
  stroke(255, 51, 51)
  fill(0);
  ellipse(70,90,120,150);// head
  strokeWeight(4.5)
  stroke(61, 61, 41);//
  line(18,105,122,105); // top line 
  line(70,105,70,157); // middle line 
  stroke(255);
  triangle(70,45,40,95,100,95) // big tri
  stroke(255, 51, 51);
  strokeWeight(10)
  line(35,30,103,30); //top line
  noStroke()
  fill(255, 51, 51)
  ellipse(70,30,80,20);// head
}





