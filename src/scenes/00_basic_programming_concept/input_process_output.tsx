import {makeScene2D, Camera, Circle, Rect, Layout, Txt} from '@motion-canvas/2d';
import {all, chain, createRef, easeInOutCirc, easeInOutCubic, easeInOutExpo, linear, waitFor } from '@motion-canvas/core';
import { appear, disappear, textDisappear } from '../../utils/anims';
import { ATxt } from '../../utils/nodes/ATxt';
import { black, gray, darkBlue, lightBlue, blue, orange, maroon, yellow, reddish, thickOrange } from '../../color-palettes/ten-colorful';

export default makeScene2D(function* (view) {
  const cam = createRef<Camera>();
  const r1 = createRef<Rect>();
  const ww = createRef<Txt>();
  const cc = createRef<Circle>();

  var v = view;

  v.fill(black);

  v.add(
    <>
      <Camera ref={cam}>


          <Rect layout paddingTop={20} paddingLeft={20} ref={r1} width={300} height={300} fill={thickOrange} smoothCorners={true} radius={30} >
            <ATxt ref={ww} scale={0} fill={gray}>Input</ATxt>
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



  yield* r1().size(500, 1);

  // yield* ww().position(r1().topLeft().add([70, 30]), 1, easeInOutCirc);

  yield* ww().scale(1, 1);
  yield* r1().ripple();

  yield* ww().text("Menyengsarakan", 1);

  yield* all(
    r1().rotation(360, 2, easeInOutCubic),
    r1().position.x(300, 2, easeInOutCubic),
  );

  // yield* r1().rotation(360, 2, easeInOutCubic);

  // yield* r().ripple();
  yield* all(
    cam().zoom(2, 1),
  );

  yield* cam().reset(1);

  yield* r1().scale(0.1, 1);

  yield* all(
    // r().size(0, 0.3),
    // r1().size(0, 0.3),
    // r2().size(0, 0.3),
    disappear(r1()),
    textDisappear(ww()),
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

