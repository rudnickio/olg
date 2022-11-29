var bg,bgImg;
var bruxa
var ba
var bau
var caab
var caabe
var fan 
var fant
var vam
var vamp
var esq
var esque
var mum
var mumi
var plv
var szo
var brux
var p1
var p2
var p3
var p4
var p5
var p6
var p7
var p8
var ping
var ani

var zombieGroup;



function preload(){
  

  bgImg = loadImage("fu.jpg")
ping=loadAnimation("p.png")
brux=loadImage("b.png") 
caab=loadImage("cb.png")
fan=loadImage("f.png")
vam=loadImage("v.png")
esq=loadImage("e.png")
mum=loadImage("m.png")
plv=loadImage("pvz.png")
ani=loadAnimation("p3.png","p2.png")
ani.looping=false
ba=loadImage("ba.png") 
}
  
function setup() {

  
  createCanvas(windowWidth,windowHeight);

  caabe=createSprite(350,200)
  caabe.addImage(caab)
  caabe.scale=0.3

  p1=createSprite(350,200)
  p1.addAnimation("ping",ping)
  p1.scale=0.85
  p1.addAnimation("ani",ani)

mumi=createSprite(550,200)
mumi.addImage(mum)
mumi.scale=0.25
  p2=createSprite(550,200)
  p2.addAnimation("ping",ping)
  p2.scale=0.85
  p2.addAnimation("ani",ani)


fant=createSprite(747,200)
fant.addImage(fan)
fant.scale=0.3

  p3=createSprite(750,200)
  p3.addAnimation("ping",ping)
  p3.scale=0.85
  p3.addAnimation("ani",ani)

  esque=createSprite(950,200)
  esque.addImage(esq)
  esque.scale=0.50

  p4=createSprite(950,200)
  p4.addAnimation("ping",ping)
  p4.scale=0.85
  p4.addAnimation("ani",ani)

vamp=createSprite(250,500)
vamp.addImage(vam)
vamp.scale=0.25

  p5=createSprite(250,500)
  p5.addAnimation("ping",ping)
  p5.scale=0.85
  p5.addAnimation("ani",ani)

  szo=createSprite(500,500)
  szo.addImage(plv)
  szo.scale=0.25

  p6=createSprite(500,500)
  p6.addAnimation("ping",ping)
  p6.scale=0.85
  p6.addAnimation("ani",ani)

bau=createSprite(750,525)
bau.addImage(ba)
bau.scale=0.25

  p7=createSprite(750,500)
  p7.addAnimation("ping",ping)
  p7.scale=0.85
  p7.addAnimation("ani",ani)

bruxa=createSprite(999,500)
  bruxa.addImage(brux)
  bruxa.scale=0.3

  p8=createSprite(1000,500)
  p8.addAnimation("ping",ping)
  p8.scale=0.85
  p8.addAnimation("ani",ani)

  

}
function draw() {
  background(bgImg); 


drawSprites();

if(keyDown("q")){
console.log("hhh")
p1.changeAnimation("ani")
caabe.depth=10
}

if(keyDown("w")){
  console.log("hhh")
  p2.changeAnimation("ani")
  mumi.depth=10
  }

  if(keyDown("r")){
    console.log("hhh")
    p3.changeAnimation("ani")
    fant.depth=10
    }

    if(keyDown("t")){
      console.log("hhh")
      p4.changeAnimation("ani")
      esque.depth=15
      }

      if(keyDown("y")){
        console.log("hhh")
        p5.changeAnimation("ani")
        vamp.depth=20
        }

        if(keyDown("u")){
          console.log("hhh")
          p6.changeAnimation("ani")
          szo.depth=20
          }

          if(keyDown("i")){
            console.log("hhh")
            p7.changeAnimation("ani")
            bau.depth=20
          }

            if(keyDown("o")){
              console.log("hhh")
              p8.changeAnimation("ani")
              bruxa.depth=20
              }

}

