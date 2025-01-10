import { makeScene2D, Rect } from "@motion-canvas/2d";
import { all, waitUntil, makeRef, range, loop, linear } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  view.fill("#FFFFFF");
  const rects: Rect[] = [];

  view.add(
    range(5).map(i => (
      <Rect
        ref={makeRef(rects, i)}
        width={10}
        height={10}
        x={-250 + 125 * i}
        stroke={"#FF0000"}
        lineWidth={1}
        // fill={"#ff0000"}
        // radius={10}
      />
    )),
  );

  yield* waitUntil('waktu tunggu');

  // yield loop(
    // () => view.fill("#ff0000", 0.5, linear).to("#00ff00", 0.5, linear),
  // );

  yield* all(
    // ...rects.map(rect => rect.position.y(200, 10)),
    ...rects.map(rect => rect.scale(10, 0.5)),
    // ...rects.map(rect => rect.position.y(200, 2)),
  );
});
