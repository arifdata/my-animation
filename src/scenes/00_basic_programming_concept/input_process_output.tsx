import {makeScene2D, Circle, Txt} from '@motion-canvas/2d';
import {all, createRef, createSignal, loopFor, useLogger, useRandom, waitFor } from '@motion-canvas/core';
import { ATxt } from '../../utils/nodes/ATxt';
import { gray, black, maroon } from '../../color-palettes/ten-colorful';

export default makeScene2D(function* (view) {
  const myCircle = createRef<Circle>();
  const rnd = useRandom();
  const txt = createRef<Txt>();
  // const xVal = createSignal(0);
  // const yVal = createSignal(() => linearFunction(xVal()));
  //
  const sizeSignal = createSignal(0);
  const xTextVal = createSignal(0);
  const yTextVal = createSignal(0);
  // const log = useLogger();
  view.fill(black);

  view.add(
    <>
    <Circle
      ref={myCircle}
      // try changing these properties:
      // x={() => xVal()}
      // y={() => yVal()}
      // width={20}
      // height={20}
      size={() => sizeSignal()}
      fill={maroon}
    />

      <ATxt
        ref={txt}
        text={() => `Size: ${sizeSignal().toFixed()}`}
        x={() => xTextVal()}
        y={() => yTextVal()}
      />

      </>
  );

  // yield* txt().filters.blur(2);

  // yield* all(
    // xVal((xVal() * 10) + 1, 1),
  // );
  yield* loopFor(
    30,
    // () => sizeSignal(rnd.nextInt(300, 1000), 1)
    () => all(
      sizeSignal(rnd.nextInt(300, 1000), 1),
      xTextVal(rnd.nextInt(-800, 800), 1),
      yTextVal(rnd.nextInt(-500, 500), 1),
    )
  );
  // yield* xVal(-10, 5).to(-50, 5).to(-1000, 5);
  // yield* sizeSignal(rnd.nextInt(0, 100), 1).to(rnd.nextInt(0, 100), 1).to(rnd.nextInt(0, 100), 1);
  yield* waitFor(1);

});

function linearFunction(xValue: number): number {
  return xValue + 50;
}
