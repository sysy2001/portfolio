// inspirations from:
// Polar Perlin Noise Loop
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/136-polar-perlin-noise-loops.html
// https://youtu.be/ZI1dmHv3MeM
// https://editor.p5js.org/codingtrain/sketches/sy1p1vnQn

// stalgiag
// https://editor.p5js.org/stalgiag/sketches/VYhzfpebY

import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const Sketch = ({ onLoad }) => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = new p5(p => {
      let phase = 0;
      let zoff = 0;
      let noiseMax = 0.7;
      let blinkDuration = 150;
      let interval = 4000;
      let lastBlink = 0;

      p.setup = () => {
        p.createCanvas(500, 395).parent(sketchRef.current);
        if (onLoad) {
          onLoad(); 
        }
      };

      p.draw = () => {
        p.clear();
        p.beginShape();
        p.translate(p.width / 2, p.height / 2);
        p.stroke(0);
        p.strokeWeight(2);
        p.fill(0);
        for (let a = 0; a < p.TWO_PI; a += p.radians(4)) {
          let xoff = p.map(p.cos(a + phase), -1, 1, 0, noiseMax);
          let yoff = p.map(p.sin(a + phase), -1, 1, 0, noiseMax);
          let r = p.map(p.noise(xoff, yoff, zoff), 0, 1, 100, p.height / 2);
          let x = r * p.cos(a);
          let y = r * p.sin(a);
          p.vertex(x, y);
        }
        p.endShape(p.CLOSE);
        phase += 0.002;
        zoff += 0.01;

        p.translate(-p.width / 2 + 190, -p.height / 2 + 200);
        if (p.millis() - lastBlink > interval) {
          p.strokeWeight(10);
          p.stroke(254, 127, 156);
          p.line(-30, 0, 30, 0);
          p.line(95, 0, 155, 0);
          if (p.millis() - lastBlink > interval + blinkDuration) {
            lastBlink = p.millis();
          }
        } else {
          p.noStroke();
          p.fill(255);
          p.circle(0, 0, 60);
          p.circle(125, 0, 60);
          p.fill(0);
          let eye_Y = p.map(p.mouseY, 0, p.height, -10, 10, true);
          let eye_Xleft = p.map(p.mouseX, 0, p.width, -10, 10, true);
          let eye_Xright = p.map(p.mouseX, 0, p.width, 115, 135, true);
          p.circle(eye_Xleft, eye_Y, 30);
          p.circle(eye_Xright, eye_Y, 30);
        }

        p.fill(255, 0, 0);
      };
    });

    return () => {
      sketch.remove();
    };
  }, [onLoad]);

  return <div ref={sketchRef} />;
};

export default Sketch;
