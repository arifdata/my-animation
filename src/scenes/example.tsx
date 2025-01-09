import {Circle, makeScene2D} from '@motion-canvas/2d';
import {all, createRef, ThreadGenerator} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const myCircle = createRef<Circle>();

  view.add(
    <Circle
      ref={myCircle}
      width={100}
      height={100}
    />
  );

  yield* flicker(myCircle());


});

function* flicker(c: Circle): ThreadGenerator {
  c.fill('red');
  yield;
  c.fill('blue');
  yield;
  c.fill('green');
  yield;
}
