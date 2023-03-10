let bg;
let specificFont;
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
let bananaTop;
let bananaBottom;
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
let isMusicMuted = true;
let isSoundMuted = true;
let remainingHealth = 4;
let gameOver = false;
let gravity = 0.1;
let gameScore = 0;
let bestScore = 0;
let starFruit;
let miss;
let song;
let playSound = false;
let sliceSound;
let dragonFruit;
let pomeGranate;

function preload(){
  song = loadSound('/audio/background-music.mp3');
  sliceSound = loadSound('/audio/splash.mp3');
  specificFont = loadFont('/fonts/go3v2.ttf')
}

function setup() {
  bg = loadImage('./img/background-image.jpg');
  title = loadImage('./img/gametitle-2.png');
  newGame3 = loadImage('./img/icons/settings-icon.png');
  newGame2 = loadImage('./img/icons/Icon_zen.png');
  newGame = loadImage('./img/icons/newgame.png');
  starFruit = loadImage('./img/fruits/Starfruit.png');
  pomeGranate = loadImage('./img/fruits/Pomegranate.png');
  dragonFruit = loadImage('./img/fruits/Dragon-fruit.png')
  peach = loadImage('./img/fruits/peach.png');
  peachTop = loadImage('./img/fruits/peach-top.png');
  peachBottom = loadImage('./img/fruits/peach-bottom.png');
  peachSplash = loadImage('./img/fruits/peach-splash.png')
  melon = loadImage('./img/fruits/melon.png');
  melonTop = loadImage('./img/fruits/melon-top.png');
  melonBottom = loadImage('./img/fruits/melon-bottom.png');
  melonSplash = loadImage('./img/fruits/melon-splash');
  apple = loadImage('./img/fruits/apple.png');
  appleTop = loadImage('./img/fruits/apple-top.png');
  appleBottom = loadImage('./img/fruits/apple-bottom.png');
  appleSplash = loadImage('./img/fruits/apple-splash.png');
  strawberry = loadImage('./img/fruits/strawberry.png');
  strawberryTop = loadImage('./img/fruits/strawberry-top.png');
  strawberryBottom = loadImage('./img/fruits/strawberry-bottom.png');
  strawberrySplash = loadImage('./img/fruits/strawberry-splash.png');
  bananaTop = loadImage('./img/fruits/banana-top.png');
  bananaBottom = loadImage('./img/fruits/banana-bottom.png');
  banana = loadImage('./img/fruits/Banana.png');
  bomb = loadImage('./img/icons/bomb.png')
  score = loadImage('./img/fruits/score.png');
  gameLife3 = loadImage('./img/gamelife-3.png');
  gameLife2 = loadImage('./img/gamelife-2.png');
  gameLife1 = loadImage('./img/gamelife-1.png');
  gameLife0 = loadImage('./img/gamelife-0.png');
  musicBtn = loadImage('./img/buttons/music-btn.png');
  soundEffectBtn = loadImage('./img/buttons/soundEffect-btn.png')
  musicMuted = loadImage('./img/buttons/music-muted.png')
  soundEffectMuted = loadImage('./img/buttons/soundEffect-muted.png')
  settingImg = loadImage('./img/fotor_2023-3-4_22_19_48.png');
  gameOverImg = loadImage('./img/gameover.png');
  miss = loadImage('./img/miss.png')
  go = loadImage('./img/go.png')
   createCanvas(1000, 800);
  angleMode(DEGREES);
}
let fruitArray = [];
let missedFruits = [];

function draw() {
  //Loads the menu for the game
   if(isSliced === 'gamestart'){
    gameScore = 0;
    imageMode(CORNER)
    background(bg);
    image(title, 0, 0, width + 200, 300);
  
    trail.push([mouseX, mouseY]);
    for(let i = 0; i < trail.length; i++) {
    noStroke();
    fill('0,255,0');
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
    image(newGame,0,0,250,250);
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
      if(playSound === true){
        sliceSound.play();
      }
      setTimeout(() => {
    isSettings = true;
      }, 500)
    }
    if(mouseY > 415 & mouseY < 490 & mouseX > 455 & mouseX < 515){
      if(playSound === true){
        sliceSound.play();
      }
      setTimeout(() => {
    isSliced = "game"
      }, 500)
    }
    if(mouseY > 415 & mouseY < 485 & mouseX > 165 & mouseX < 235){
      if(playSound === true){
        sliceSound.play();
      }
      setTimeout(() => {
    isSliced = "game"
      }, 500)
  }

  //Checks if user wants to close the menu window
  if(isSettings === true){
    let musicWidth = 110;
    let musicX = 650;
    
    window.addEventListener('keydown', (event) => {
      if(event.keyCode === 27){
        isSettings = false;
      }
    })
    image(settingImg,150,150,700,600);
    //Checks if user want's to mute/unmute the volume
     if (mouseIsPressed) {
      if(mouseX > musicX - musicWidth / 2 & mouseX < musicX + musicWidth / 2){
        if(isMusicMuted === true){
          isMusicMuted = false;
          playSound = true;
          song.play();
        }else if(isMusicMuted === false){
          isMusicMuted = true;
          playSound = false;
          song.stop();
        }
      }
    }

    if(isMusicMuted === false){
      image(musicBtn,670,260,80,70)
      musicWidth = 110;
      musicX = 560;
    }else{
      image(musicMuted,670,260,70,60)
      musicWidth = 90;
      musicX = 90;
    }
    //MusicMuted
    //SoundEffectMuted
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
      textSize(60)
      fill(239, 166, 35)
      text(gameScore, 140,65)
      fill(239, 166, 35)
      textSize(40)
      text("BEST:",55,130)
      textFont(specificFont)
      text(bestScore, 160,130);
      image(score, 50,15,70,70)
      if(remainingHealth === 4){
        image(gameLife3, 750,15,200,100)
      }else if(remainingHealth === 3){
        image(gameLife2, 750,15,200,100)
      }else if(remainingHealth === 2){
        image(gameLife1, 750,15,200,100)
      }else if(remainingHealth <= 1){
        image(gameLife0, 750,15,200,100)
        image(gameOverImg, 240, 300, 550, 200)
        gameOver = true;
      }

      
      missedFruits.forEach((item,index) => {
        push()
        tint(255, item[1]);
        item[1] -= 2;
        image(miss, item[0], 720, 80, 80);
        pop()
        if(item[1] === 0){
          missedFruits.splice(index,1);
        }
      },10)

      fruitArray.forEach((item,index) => {
         if(item.startY > item.endY & item.reachedPoint === false){
   
          //Checks if player has sliced the fruit
          if(item.startY -95 < mouseY & item.startY + 95 > mouseY & item.randomX - 95 < mouseX & item.randomX +95 > mouseX & item.sliced === false){
            if(playSound === true){
              sliceSound.play();
              setTimeout(() => {
                sliceSound.stop();
              },1500)
            }
            item.sliced = true;
            ++gameScore;
            item.splashedX = item.randomX;
            item.splashedY = item.startY;
            item.slicedTopX += item.splashedX + 15;
            item.slicedBottomX += item.splashedX -25;
            item.slicedY += item.splashedY;
            if(gameScore > bestScore){
              bestScore = gameScore;
            }
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
             image(item.imgSplash, item.splashedX, item.splashedY, 150,150);
             push();
             translate(item.slicedTopX, item.slicedY);
             rotate(item.angle);
             imageMode(CENTER);
             image(item.imgTop, 0,0, 80,80);
             pop()
             push();
             translate(item.slicedBottomX, item.slicedY);
             rotate(item.angle);
             imageMode(CENTER);
             image(item.imgBottom, 0,0, 80,80);
             pop()
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
          if(item.sliced === false & item.startY < 800){
            push();
            translate(item.randomX, item.startY);
            rotate(item.angle);
            imageMode(CENTER);
            image(item.fruit, 0, 0, 100,100);
            pop()
           } else if(item.startY > 800 & item.sliced === false){
             --remainingHealth;
             missedFruits.push([item.randomX,255]);
            fruitArray.splice(index,1);
         }
           else if(item.sliced === true){
            image(item.imgSplash, item.splashedX, item.splashedY, 150,150);
            image(item.imgTop, item.slicedX + 15, item.slicedY, 80,80);
            image(item.imgBottom, item.slicedX - 15, item.slicedY, 80,80);
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
    //Mouse trail effect
    trail.push([mouseX, mouseY]);
    for(let i = 0; i < trail.length; i++) {
    noStroke();
    fill('white');
    ellipse(trail[i][0], trail[i][1], 8);
      if(a > 255) {
        trail.shift();
        a = 0;
      }
      a += 6;
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
let fruits = [{type: banana, name: 'banana',splashedImg: peachSplash, topImg: bananaTop, bottomImg: bananaBottom}, {type: apple, name: 'apple', topImg: appleTop, bottomImg: appleBottom, splashedImg: appleSplash}, {type:peach, name: 'peach',topImg: peachTop, bottomImg: peachBottom, splashedImg: peachSplash},{type: melon, name: 'melon',topImg: melonTop, bottomImg: melonBottom, splashedImg: melonSplash},{type: strawberry, name: 'strawberry',topImg: strawberryTop, bottomImg: strawberryBottom, splashedImg: strawberrySplash},{type: bomb, name:'bomb'},{type: starFruit, name:'starFruit'},{type: dragonFruit, name:'Dragon Fruit'},{type: pomeGranate, name: 'Pomegranate'}];
let randomFruit = Math.floor(Math.random() * fruits.length);


//Pushes random fruits to the fruitArray
  if(isSliced === 'game'){
    if(fruitArray.length < 10){
      let fruit = {
        fruit: fruits[randomFruit].type,
        fruitName: fruits[randomFruit].name,
        imgTop: fruits[randomFruit].topImg,
        imgBottom: fruits[randomFruit].bottomImg,
        imgSplash: fruits[randomFruit].splashedImg,
        slicedTopX: 0,
        slicedBottomX: 0,
        slicedY: 0,
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
        speed: -11,
      }
      fruitArray.push(fruit);
      
    }
    
  }
}

/*
 3.Create better mouse trail effect
  1.Include animations for fruits & make fruits faster
 7. Create Breakpoint in Css File, make mobile, tablet and desktop versions
 */