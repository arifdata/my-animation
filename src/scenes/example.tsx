import { createRef, all, easeInQuad, easeInOutBounce, linear, easeInOutCubic, easeOutBounce, easeOutCirc, easeOutElastic } from "@motion-canvas/core";
import { makeScene2D, Circle, Rect, Camera, Icon } from "@motion-canvas/2d";

export default makeScene2D(function* (view) {
  const c = createRef<Circle>();
  const r = createRef<Rect>();
  const cam = createRef<Camera>();
  const i = createRef<Icon>();

  view.fill("#212121");

  view.add(
    <>
      <Camera ref={cam}>
        <Rect
        ref={r}
        fill={'lightseagreen'}
        size={100}
        position={[100, -50]}
        />

        <Circle
        ref={c}
        size={0}
        position={[-100, -50]}
        fill={'hotpink'}
        />

        <Icon
          ref={i}
          icon={"twemoji:pizza"}
          position={[50, -200]}
          size={0}
        />
      </Camera>
    </>,

  );


  yield* cam().centerOn(r(), 1);
  yield* cam().zoom(3, 1);
  yield* cam().rotation(180, 2);

  yield* all(
    i().size(100, 1, easeInOutBounce),
    c().size(200, 1, easeInOutBounce),
  );

  yield* all(

    i().ripple(1),
    c().ripple(1),

  );


  yield* all(
    cam().reset(1),
  );

  yield* all(
    i().position.y(300, 1, easeOutBounce),
    i().position.x(500, 1.5),
    i().size(0, 1),
    i().rotation(360, 1.5),
  );

});

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
