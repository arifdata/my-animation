import {makeScene2D, Camera, Circle, Rect, Layout, Txt} from '@motion-canvas/2d';
import {all, chain, createRef, easeInOutCubic, linear, waitFor } from '@motion-canvas/core';
import { appear, disappear, textDisappear } from '../../utils/anims';
import { ATxt } from '../../utils/nodes/ATxt';
import { white, black, blue, orange, red } from '../../color-palettes/five-colorful';

export default makeScene2D(function* (view) {
  const cam = createRef<Camera>();
  const r1 = createRef<Rect>();
  const ww = createRef<Txt>();
  const cc = createRef<Circle>();

  var v = view;

  v.fill(white);

  v.add(
    <>
      <Camera ref={cam}>


          <Rect ref={r1} size={300} fill={red} radius={30}>
            <ATxt ref={ww} scale={0}>Input</ATxt>
          </Rect>

          <Circle ref={cc}
          size={900}
          // fill={'#ffff00'}
          
          />



      </Camera>

    </>
  );

  yield* all(
    appear(r1()),
  );

  yield* ww().scale(1, 1);

  yield* r1().size(500, 1);

  // yield* r().ripple();
  yield* all(
    cam().zoom(2, 1),
  );

  yield* cam().reset(1);

  yield* chain(
    // r().size(0, 0.3),
    // r1().size(0, 0.3),
    // r2().size(0, 0.3),
    disappear(r1()),
  );
  yield* waitFor(1);

  yield* all(
    ww().scale(5, 1, easeInOutCubic),
  );
  yield* ww().text("Coba ganti 😎 teks", 1);

  yield* cam().followCurve(cc(), 5, linear);

  yield* textDisappear(ww());
  yield* waitFor(1);

});

