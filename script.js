function setup()
{
    createCanvas(1000,700)
}
function draw()
{
    house();
    sun();
}
function house()
{
    //house body
    fill("green");
    rect(150,299,400,350);
    //windows
    fill("blue");
    rect(390,350,50,90);
    fill("blue");
    rect(450,350,50,90);
    //door
    fill("red");
    rect(250,500,80,149);
    //roof
    fill("fuchsia");
    triangle(350,150,75,299,625,299);
    //roof window
    fill("white");
    circle(350,180,30);
    line(335,180,365,180);
    line(350,165,350,195);
    //chimney
    fill("green");
    rect(440,140,50,90);
}
function sun()
{
    //sun body
    fill("yellow");
    circle(700,100,90);
    //razele
    fill("yellow");
    triangle(700,25,690,50,710,50);    
    triangle(700,175,690,150,710,150);
}