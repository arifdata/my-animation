import {makeScene2D, Camera, Circle, Rect, Layout, Txt} from '@motion-canvas/2d';
import {all, chain, createRef, easeInOutCubic, waitFor } from '@motion-canvas/core';
import { appear, disappear, textDisappear } from '../../utils/anims';
import { ATxt } from '../../utils/nodes/ATxt';

export default makeScene2D(function* (view) {
  const cam = createRef<Camera>();
  const l = createRef<Layout>();
  const r = createRef<Rect>();
  const r1 = createRef<Rect>();
  const r2 = createRef<Rect>();
  const ww = createRef<Txt>();

  var v = view;

  v.fill('#0000ff');

  v.add(
    <>
      <Camera ref={cam}>

        <Layout layout ref={l} direction={'row'} alignItems={'center'} gap={100}>

          <Rect ref={r} size={300} fill={'#001219'} />
          <Rect layout ref={r1} size={300} fill={'#001219'} alignItems={'center'} direction={'column'}>
            <ATxt ref={ww}>Coba Custom Text</ATxt>
          </Rect>

          <Rect ref={r2} size={500} fill={'#001219'} />

        </Layout>

      </Camera>

    </>
  );

  yield* all(
    appear(r()),
    appear(r1()),
    appear(r2()),
  );

  // yield* waitFor(1);
  yield* cam().centerOn(r2(), 1);

  yield* r1().size(500, 1);
  // yield* r().ripple();
  yield* all(
    r().ripple(),
    cam().centerOn(r(), 1),
    cam().zoom(3, 1),
  );

  yield* cam().reset(1);

  yield* chain(
    // r().size(0, 0.3),
    // r1().size(0, 0.3),
    // r2().size(0, 0.3),
    disappear(r()),
    disappear(r1()),
    disappear(r2()),
  );
  yield* waitFor(1);

  yield* all(
    ww().scale(5, 1, easeInOutCubic),
    ww().rotation(-90, 1),
  );
  yield* ww().text("Coba ganti teks", 1);

  yield* textDisappear(ww());
  yield* waitFor(1);

});

