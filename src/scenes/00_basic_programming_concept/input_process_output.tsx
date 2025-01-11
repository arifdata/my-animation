import {makeScene2D, Camera, Circle, Rect, Layout, Txt} from '@motion-canvas/2d';
import {all, chain, createRef, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const cam = createRef<Camera>();
  const l = createRef<Layout>();
  const r = createRef<Rect>();
  const r1 = createRef<Rect>();
  const r2 = createRef<Rect>();

  var v = view;

  v.fill('#f5f3f4');

  v.add(
    <>
      <Camera ref={cam}>

        <Layout layout ref={l} direction={'row'} alignItems={'center'} gap={100}>

          <Rect ref={r} size={300} fill={'#001219'} />
          <Rect layout ref={r1} size={0} fill={'#001219'} alignItems={'center'} direction={'column'}>
            <Circle size={100} fill={'#ff0000'} />
            {/* <Txt fill={'ff0000'}>Hahaha</Txt> */}
          </Rect>

          <Rect ref={r2} size={500} fill={'#001219'} />

        </Layout>

      </Camera>

    </>
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

  yield* cam().zoom(0.5, 1);

  yield* chain(
    r().size(0, 0.3),
    r1().size(0, 0.3),
    r2().size(0, 0.3),
  );
  yield* waitFor(1);

});