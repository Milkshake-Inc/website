import './style.css'

import { Application, Graphics } from 'pixi.js'

const app = new Application({
  resizeTo: window,
  backgroundAlpha: 0,
  autoStart: true,
  antialias: true,
});


var graphic = new Graphics();

graphic.position.y = 700;
graphic.moveTo(0, 0);
graphic.lineStyle({
  width: 1,
  color: 0xff0000,
})

const height = 2000;

const horizontalCount = 1000;
const horizontalSegment = window.innerWidth / horizontalCount;


app.stage.addChild(graphic);

document.body.appendChild(app.view);

app.view.style.position = "absolute";
app.view.style.zIndex = "-1";

let time = 0;

app.ticker.add((deltaTime) => {

  time += deltaTime;
  graphic.clear();
  drawMilk(graphic, 0xfdeedf, 0.5, 0, -30);
  drawMilk(graphic, 0xfdeedf, 1, 1000, 0);
});

const drawMilk = (graphic: Graphics, color: number, alpha:number, offset: number, yOffset: number) => {
  
  graphic.beginFill(color, alpha);

  for (let index = 0; index < horizontalCount; index++) {
    graphic.lineTo(horizontalSegment * index,  yOffset + Math.sin(((time + offset) / 60) + (index / 100)) * Math.sin((time + offset) / 50) * 50);
  }
  
  graphic.lineTo( yOffset + horizontalSegment * horizontalCount , height);
  graphic.lineTo(0, height);
  
  graphic.endFill();
}