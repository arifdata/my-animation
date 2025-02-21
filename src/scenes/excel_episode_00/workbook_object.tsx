import {makeScene2D, Circle, Rect, Txt} from '@motion-canvas/2d';
import {all, createRef, chain, createSignal, loopFor, useLogger, useRandom, waitFor, easeInOutCubic } from '@motion-canvas/core';
import { ATxt } from '../../utils/nodes/ATxt';
import { white, black, blue, red, orange } from '../../color-palettes/five-colorful';

export default makeScene2D(function* (view) {
  // const myCircle = createRef<Circle>();
  // const rnd = useRandom();
  const txt = createRef<Txt>();
  const txt2 = createRef<Txt>();
  const rect = createRef<Rect>();
  //
  view.fill(white);

  view.add(
    <>
      <Rect ref={rect} width={500} height={100} fill={red} radius={15} x={-1000}>
        <ATxt ref={txt} fill={black} scale={0.8} text={"load_workbook()"}></ATxt>
        <ATxt ref={txt2} fill={black} scale={0.8} text={'"sales_data.xlsx"'} y={-500} x={-800}></ATxt>
      </Rect>
    </>
  );

  yield* rect().x(0, 1, easeInOutCubic);
  yield* waitFor(1);
  yield* txt2().x(-350, 0.4, easeInOutCubic);
  // yield* txt().text('load_workbook("sales_data.xlsx")', 0.5);
  yield* waitFor(1);
  yield* chain(
    all(
      txt2().x(0, 0.7, easeInOutCubic),
      txt2().y(0, 0.7),
      txt2().text("", 0.7),
    ),


    all(
      txt().text('load_workbook("sales_data.xlsx")', 0.3),
      rect().ripple(),
    )
  );

  yield* waitFor(1);

  yield* all(
    rect().rotation(360, 0.8, easeInOutCubic),
    txt().text("Workbook()", 0.8),
    rect().fill(orange, 0.8, easeInOutCubic),
    rect().width(200, 0.8),
  );

  yield* waitFor(1);


});

