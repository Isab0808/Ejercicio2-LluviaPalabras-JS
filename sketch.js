let texts = [];
let words = [];
let matchWords = [];
let palabra; 

function preload(){
  texts = loadStrings('./assets/strings.txt');
}

function setup() {
  createCanvas(400, 400);
  console.log(texts);
  for (let index = 0; index < texts.length; index++) {
    let arrayWords = texts[index].split(' '); 
    for (let index = 0; index < arrayWords.length; index++) {
      words.push(new Palabra(arrayWords[index],(random(20, 340)), (random(-200, 370))));
    }
  }

  console.log(words);

  for (let index = 0; index <= 4; index++) {
   matchWords.push((words[random(0,words.length)]))
    
  }
}

function draw() {
  background(220);

 for (let index = 0; index < words.length; index++) {
  words[index].draw();
  words[index].mover();
  }
}
