import { makeScene2D, Circle } from "@motion-canvas/2d";
import { createRef, all, easeInQuad, easeInOutBounce } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const c = createRef<Circle>();

  view.fill("#212121");
  view.add(
    <Circle
      ref={c}
      fill={"#A35C7A"}
      width ={1}
      height={1}
      x={getRandomNumber(-500, 500)}
      y={getRandomNumber(-500, 500)}
    />
  );

  yield* all(
    c().position([getRandomNumber(-1000, 1000), getRandomNumber(-500, 500)], 1, easeInQuad),
    c().scale(100, 1),
  );
});

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
