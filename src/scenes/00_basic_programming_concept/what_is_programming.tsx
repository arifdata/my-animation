import { createRef, all, easeInQuad, easeInOutBounce, linear, easeInOutCubic, easeOutBounce, easeOutCirc, easeOutElastic, easeInBounce, waitFor, sequence, createSignal } from "@motion-canvas/core";
import { makeScene2D, Circle, Rect, Camera, Icon, Txt, Spline } from "@motion-canvas/2d";
import { ATxt } from "../../utils/nodes/ATxt";
import { appear, disappear } from "../slamaDev/utilities";
import {white, black, blue, red, orange} from "../../color-palettes/five-colorful";

export default makeScene2D(function* (view) {
  view.fill(white);

  const txt = createRef<Txt>();

  view.add(
    <ATxt text={"What You Do In Programming?"} ref={txt} fill={black} scale={2}/>
  );

  yield* all(
    appear(txt()),
  );

  yield* waitFor(1);

  yield* txt().text("Input -> Process -> Output", 1);
  
  yield* waitFor(1);
  yield* disappear(txt());

  const input = [];
  input.push(createRef<Icon>());
  view.add(
    <Icon ref={input[0]} icon={"twemoji:cow"} x={-400} scale={10} zIndex={0}/>
  );

  const process = [];
  process.push(createRef<Rect>());
  view.add(
    <Rect ref={process[0]} fill={blue} width={300} height={200} radius={10} zIndex={2}>
      <ATxt text={"Process"} fill={black} scale={2}/>
    </Rect>
  );

  yield* all(
    appear(input[0]()),
    appear(process[0]()),
  );

  const output = [];
  output.push(createRef<Icon>());
  view.add(
    <Icon ref={output[0]} icon={"twemoji:glass-of-milk"} scale={10} zIndex={0}/>
  );

  yield* sequence(0.5,
    input[0]().x(0, 0.5, easeInOutCubic),
    process[0]().ripple(),
    output[0]().x(400, 0.5, easeInOutCubic),
  );

  yield* waitFor(0.5);

  process.push(createRef<Rect>());
  view.add(
    <Rect ref={process[1]} fill={red} width={300} height={200} radius={10} zIndex={1}>
      <ATxt text={"Process"} fill={black} scale={2}/>
    </Rect>
  );
  process.push(createRef<Rect>());
  view.add(
    <Rect ref={process[2]} fill={orange} width={300} height={200} radius={10} zIndex={1}>
      <ATxt text={"Process"} fill={black} scale={2}/>
    </Rect>
  );

  const spline1 = createRef<Spline>();
  const progress1 = createSignal(0);
  view.add(
    <Spline
      ref={spline1}
      // lineWidth={1}
      // stroke={black}
      points={[[400, 0], [200, -800], [-400, -500]]}
      smoothness={1}
    />
  );

  yield* output[0]().position(() => spline1().getPointAtPercentage(progress1()).position);

  yield* sequence(0.5,
    all(

    process[1]().y(-500, 0.5, easeInOutCubic),
    process[2]().y(500, 0.5, easeInOutCubic),
    ),
    progress1(1, 1, easeInOutCubic),
    // output[0]().x(-400, 0.5, easeInOutCubic),
    // output[0]().y(-500, 0.5, easeInOutCubic),
  );


  yield* waitFor(1);
});
