let bg;
let title;
let newGame;
let newGame2;
let newGame3;
let peach;
let peachTop;
let peachBottom;
let peachSplash;
let melon;
let melonTop
let melonBottom;
let melonSplash;
let apple;
let appleTop;
let appleBottom;
let appleSplash;
let banana;
let strawberry;
let strawberryTop;
let strawberryBottom;
let strawberrySplash;
let volBtn;
let settingImg;
var angle = 0;
let score;
var angle2 = 0;
let startGame;
let musicBtn;
let mutedMusicBtn;
let volMuted;
let bomb;
let mutedVolBtn;
let go;
let goShow = true;
let gameLife3;
let gameLife2;
let gameLife1;
let gameLife0;
let gameOverImg;
let trail = [];
let a = 0;
let isSliced = "gamestart";
let isSettings = false;
let isVoiceMuted = false;
let isVolMuted = true;
let remainingHealth = 4;
let gameOver = false;
let gravity = 0.1;
let gameScore = 0;

function setup() {
   bg = loadImage('./img/background-image.jpg');
   title = loadImage('../img/gametitle-2.png');
   newGame3 = loadImage('../img/icons/settings-icon.png');
   newGame2 = loadImage('../img/icons/Icon_zen.png');
   newGame = loadImage('../img/icons/newgame.png');
   peach = loadImage('../img/fruits/peach.png');
   peachTop = loadImage('../img/fruits/peach-top.png');
   peachBottom = loadImage('../img/fruits/peach-bottom.png');
   peachSplash = loadImage('../img/fruits/peach-splash.png')
   melon = loadImage('../img/fruits/melon.png');
   melonTop = loadImage('../img/fruits/melon-top.png');
   melonBottom = loadImage('../img/fruits/melon-bottom.png');
   apple = loadImage('../img/fruits/apple.png');
   appleTop = loadImage('../img/fruits/apple-top.png');
   appleBottom = loadImage('../img/fruits/apple-bottom.png');
   appleSplash = loadImage('../img/fruits/apple-splash.png');
   strawberry = loadImage('../img/fruits/strawberry.png');
   strawberryTop = loadImage('../img/fruits/strawberry-top.png');
   strawberryBottom = loadImage('../img/fruits/strawberry-bottom.png');
   strawberrySplash = loadImage('../img/fruits/strawberry-splash.png');
   banana = loadImage('../img/fruits/Banana.png');
   bomb = loadImage('../img/icons/bomb.png')
   score = loadImage('../img/fruits/score.png');
   gameLife3 = loadImage('../img/gamelife-3.png');
   gameLife2 = loadImage('../img/gamelife-2.png');
   gameLife1 = loadImage('../img/gamelife-1.png');
   gameLife0 = loadImage('../img/gamelife-0.png');
   volBtn = loadImage('../img/buttons/volume-button.png');
   musicBtn = loadImage('../img/buttons/voice-btn.png')
   voiceBtnMuted = loadImage('../img/buttons/voice-btnMuted.png')
   volMuted = loadImage('../img/buttons/volume-muted.png')
   settingImg = loadImage('../img/fotor_2023-3-4_22_19_48.png');
   gameOverImg = loadImage('../img/gameover.png')
   go = loadImage('../img/go.png')
   createCanvas(1000, 800);
  angleMode(DEGREES);
}
let fruitArray = [];



function draw() {
  
  //Loads the menu for the game
   if(isSliced === 'gamestart'){
    imageMode(CORNER)
    background(bg);
    image(title, 0, 0, width + 200, 300);
    
  
    trail.push([mouseX, mouseY]);
    for(let i = 0; i < trail.length; i++) {
    noStroke();
    fill('white');
    ellipse(trail[i][0], trail[i][1], 8);
      if(a > 255) {
        trail.shift();
        a = 0;
      }
      a += 8;
    }
   //Generates menu items
    push()
    translate(480,480);
    rotate(angle);
    imageMode(CENTER);
    image(newGame,0,0,220,220);
    image(strawberry,0,0,80,80);
    pop();
  
    push()
    translate(750,450);
    rotate(angle);
    imageMode(CENTER);
    image(newGame3,0,0,320,420);
    image(apple,0,0,70,70);
    pop()
  
    push()
    translate(200,450);
    rotate(angle);
    imageMode(CENTER);
    image(newGame2,0,0,210,210);
    image(peach,0,0,70,70);
    pop()
    angle = angle + 0.9;
    //Checks if user has "sliced" fruits in the menu items
    if(mouseY > 415 & mouseY < 490 & mouseX > 715 & mouseX < 785){
      setTimeout(() => {
    isSettings = true;
      }, 500)
    }
    if(mouseY > 415 & mouseY < 490 & mouseX > 455 & mouseX < 515){
      setTimeout(() => {
    isSliced = "game"
      }, 500)
    }
    if(mouseY > 415 & mouseY < 485 & mouseX > 165 & mouseX < 235){
      setTimeout(() => {
    isSliced = "game"
      }, 500)
  }

  //Checks if user wants to close the menu window
  if(isSettings === true){
    window.addEventListener('keydown', (event) => {
      if(event.keyCode === 27){
        isSettings = false;
      }
    })
    image(settingImg,150,150,700,600);
    //Checks if user want's to mute/unmute the volume
     if (mouseIsPressed) {
      if(mouseX > 450 & mouseX < 670){
        if(isVoiceMuted === true){
          isVoiceMuted = false;
        }else if(isVoiceMuted === false){
          isVoiceMuted = true;
        }
      }
      if(mouseX > 510 & mouseX < 790){
        if(isVolMuted === true){
          isVolMuted = false;
        }else if(isVolMuted === false){
          isVolMuted = true;
        }
      }
    }
    if(isVolMuted === false){
      image(volBtn,650,250,140,120)
    }else{
      image(volMuted,670,270,80,100)
    }

    if(isVoiceMuted === false){
      image(musicBtn,560,260,110,100)
    }else{
      image(voiceBtnMuted,560,270,90,90)
    }
  }
  //Checks if the start item in the menu was clicked on
   }else if(isSliced === 'game'){
    if(gameOver === true){
      clearInterval(setFruitRendering)
       setTimeout(() => {
         isSliced = 'gamestart';
         gameOver = false;
         remainingHealth = 4;
       }, 4000);
    }
    background(bg);
    if(fruitArray.length === 0){

    }else{
      //Checks and updates the player health
      textSize(40)
      text(gameScore, 150,65)
      image(score, 50,15,70,70)
      if(remainingHealth === 4){
        image(gameLife3, 750,15,150,120)
      }else if(remainingHealth === 3){
        image(gameLife2, 750,15,150,120)
      }else if(remainingHealth === 2){
        image(gameLife1, 750,15,150,120)
      }else if(remainingHealth <= 1){
        image(gameLife0, 750,15,150,120)
        image(gameOverImg, 240, 300, 500, 150)
        gameOver = true;
      }

      fruitArray.forEach((item) => {
         if(item.startY > item.endY & item.reachedPoint === false){
          //Checks if player has sliced the fruit
          if(item.startY -95 < mouseY & item.startY + 95 > mouseY & item.randomX - 95 < mouseX & item.randomX +95 > mouseX & item.sliced === false){
            item.sliced = true;
            ++gameScore;
            item.splashedX = item.randomX;
            item.splashedY = item.startY;
          }
          //If it is not sliced renders the normal fruit
           if(item.sliced === false){
            push();
            translate(item.randomX, item.startY);
            rotate(item.angle);
            imageMode(CENTER);
            image(item.fruit, 0, 0, 100,100);
            pop()
            //If it is sliced renders a splash instead of it
           }else if(item.sliced === true){
            image(appleSplash, item.splashedX, item.splashedY, 140, 140)
           }

          if(item.rotation === 'right'){
            if(item.spin === 'minSpin' & item.randomX > 50 & item.randomX < 700){
              if(item.randomX !== item.randomX + 25){
                item.randomX += 1.5;
              }
            }else if(item.spin === 'maxSpin' & item.randomX > 50 & item.randomX < 700){
              if(item.randomX !== item.randomX + 25){
                item.randomX += 2;
              }
            }
            item.angle = item.angle + 4;
          }else if(item.rotation === 'left'){
            if(item.spin === 'minSpin' & item.randomX > 50 & item.randomX < 700){
              if(item.randomX !== item.randomX - 25){
                item.randomX -= 1.5;
              }
            }else if(item.spin === 'maxSpin' & item.randomX > 50 & item.randomX < 700){
              if(item.randomX !== item.randomX - 25){
                item.randomX -= 2;
              }
            }
            item.angle = item.angle - 4;
          }

          //When the the item doesn't reached the point it decreseas -6 each 10 miliseconds from Y
          item.startY = item.startY + item.speed;
          item.speed = item.speed + gravity;
         }else{
          item.reachedPoint = true;
          if(item.sliced === false){
            push();
            translate(item.randomX, item.startY);
            rotate(item.angle);
            imageMode(CENTER);
            image(item.fruit, 0, 0, 100,100);
            pop()
           }else if(item.sliced === true){
            image(appleSplash, item.splashedX, item.splashedY, 120, 120)
           }

          if(item.rotation === 'right'){
            if(item.spin === 'minSpin' & item.randomX > 50 & item.randomX < 700){
              if(item.randomX !== item.randomX + 20){
                item.randomX += 1.5;
              }
            }else if(item.spin === 'maxSpin' & item.randomX > 50 & item.randomX < 700){
              if(item.randomX !== item.randomX + 35){
                item.randomX += 2;
              }
            }
            item.angle = item.angle + 4;
          }else if(item.rotation === 'left'){
            item.angle = item.angle - 4;
          }
          //When the the item reached the point it increases y +6 each 10 miliseconds
          item.startY = item.startY + item.speed;
          item.speed = item.speed + gravity;

         }   
      })
    }
    if(goShow === true){
      image(go, 330,250,350,250);
    }else{

    }
    setTimeout(() => {
      goShow = false;
    }, 700)
    trail.push([mouseX, mouseY]);
    for(let i = 0; i < trail.length; i++) {
    noStroke();
    fill('white');
    ellipse(trail[i][0], trail[i][1], 8);
      if(a > 255) {
        trail.shift();
        a = 0;
      }
      a += 8;
    }
  }
}

    //Every 1 seconds renders a new fruit
    const setFruitRendering = setInterval(() => {
      renderFruits();
    }, 900)

let index = 0;
function renderFruits(){
  //Selecting random rotate Side
  let rotation = ['left', 'right'];
  let spin = ['minSpin', 'maxSpin','noSpin'];
  let randomSpin = spin[Math.floor(Math.random() * spin.length)];
let randomRotation = rotation[Math.floor(Math.random() * rotation.length)];
//Random Y coordinate
  let randomY = Math.floor(Math.random() * (300 - 50) + 50);
  //Generate random X number
  let randomX = Math.floor(Math.random() * (750 - 100) + 100);
//Selecting random fruit
  let fruits = [banana, apple, peach,melon,strawberry,bomb];
let randomFruit = Math.floor(Math.random() * fruits.length);


//Pushes random fruits to the fruitArray
  if(isSliced === 'game'){
    if(fruitArray.length < 10){
      let fruit = {
        fruit: fruits[randomFruit],
        rotation: randomRotation,
        endY: randomY,
        startY: 800,
        randomX: randomX,
        reachedPoint: false,
        angle: 0,
        spin: randomSpin,
        spinTime: 0,
        sliced: false,
        splashedX: 0,
        splashedY: 0,
        speed: -11
      }
      fruitArray.push(fruit);
      
    }
   //Loops trough the fruitArray and removes the items that have gone off the screen
      fruitArray.forEach((item,index) => {
        if(item.reachedPoint === true & item.startY > 800){
        
           fruitArray.splice(index,1);
           if(item.sliced === false){
            --remainingHealth;
            
           }
           console.log(remainingHealth)
        }
      })
    
  }
}

/*
 1.Include animations for fruits & make fruits faster
 2.Add image X or Miss where a fruit hasn't been sliced
 3.Create better mouse trail effect
 4. Create counter for bestScore
 5. Need to add sound effects to the game
 6. Settings buttons needs to be fixed & need to include name
 */