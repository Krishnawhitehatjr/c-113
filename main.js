function preload(){
}
function setup(){
canvas = createCanvas(1000,550);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide()
//circle(0,0,50)

}
function draw(){
    image(video,100+150,150,500,300);
  rect(40+125,65,660,60);
  rect(40+125,465,660,60);
  rect(15+125,125,50,400);
  rect(675+125,125,50,400);
  fill(200,20,30);
  circle(40+125,100,70);
  circle(700+125,100,70);
  circle(40+125,500,70);
  circle(700+125,500,70);
  fill(225,150,5);
}
function take_snapshot(){
    save('myFilterImage.png')
}