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
  const xParent = createSignal(800);
  const yParent = createSignal(0);
  //
  view.fill(white);

  view.add(
    <>
      <Rect ref={rect} width={500} height={100} fill={red} radius={15} x={() => xParent()} y={() => yParent()}></Rect>
      <ATxt ref={txt} fill={black} scale={0.8} text={'load_workbook'} x={() => xParent() - 160} y={() => yParent() - 70}></ATxt>
      <ATxt ref={txt2} fill={black} scale={0.8} text={'Excel File'} y={-300} x={800}></ATxt>
    </>
  );

  yield* xParent(0, 1, easeInOutCubic);

  yield* txt2().x(350, 0.7, easeInOutCubic);

  yield* waitFor(1);

  yield* txt2().text(`"drug_sales.xlsx"`, 0.7);

  yield* waitFor(1);

  yield* chain(
    all(
      txt2().x(xParent(), 0.7, easeInOutCubic),
      txt2().y(yParent(), 0.7),
    ),

    rect().ripple(),
  );

  yield* waitFor(1);

  yield* all(
    txt().text("Workbook", 0.5),
    txt().x(() => xParent() - 90, 0.5),
    // rect().rotation(360, 0.5, easeInOutCubic),
    rect().fill(orange, 0.5),
    rect().width(300, 0.5),
    txt2().text("", 0.5),
  );


  yield* waitFor(1);



});

