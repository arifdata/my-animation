import { createRef, all, easeInOutCubic, waitFor, sequence, createSignal } from "@motion-canvas/core";
import { makeScene2D, Rect, Icon, Txt, Spline } from "@motion-canvas/2d";
import { ATxt } from "../../utils/nodes/ATxt";
import { appear, disappear } from "../slamaDev/utilities";
import {white, black, blue, red, orange} from "../../color-palettes/five-colorful";
import { darkBlue } from "../../color-palettes/ten-colorful";

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
    process[0]().fill(darkBlue, 0.5),

    process[1]().y(-500, 0.5, easeInOutCubic),
    process[2]().y(500, 0.5, easeInOutCubic),
    ),
    progress1(1, 1, easeInOutCubic),
    // output[0]().x(-400, 0.5, easeInOutCubic),
    // output[0]().y(-500, 0.5, easeInOutCubic),
  );

  yield* waitFor(0.5);

  output.push(createRef<Icon>());
  view.add(
    <Icon ref={output[1]} icon={"emojione:cheese-wedge"} x={0} y={-500} scale={10} zIndex={0}/>
  );
  yield* sequence(0.5,
    output[0]().x(0, 0.5, easeInOutCubic),
    process[1]().ripple(),
    output[1]().x(400, 0.5, easeInOutCubic),
    disappear(output[0]()),
  );

  const spline2 = createRef<Spline>();
  progress1(0);
  view.add(
    <Spline
      ref={spline2}
      // lineWidth={5}
      // stroke={black}
      points={[[400, -500], [0, -250], [-500, -50], [0, 0]]}
      // smoothness={2}
    />
  );

  yield* output[1]().position(() => spline2().getPointAtPercentage(progress1()).position);

  output.push(createRef<Icon>());
  view.add(
    <Icon ref={output[2]} icon={"emojione:pizza"} x={0} y={0} scale={10} zIndex={0}/>
  );
  input.push(createRef<Icon>());
  view.add(
    <Icon ref={input[1]} icon={"emojione:tomato"} x={-800} y={0} scale={10} zIndex={0}/>
  );
  input.push(createRef<Icon>());
  view.add(
    <Icon ref={input[2]} icon={"twemoji:flatbread"} x={-800} y={0} scale={10} zIndex={0}/>
  );

  yield* sequence(0.5,
    progress1(1, 0.5, easeInOutCubic),
    input[1]().x(0, 0.5, easeInOutCubic),
    input[2]().x(0, 0.5, easeInOutCubic),
    process[0]().ripple(),
    output[2]().x(400, 0.5, easeInOutCubic),
  );


  const spline3 = createRef<Spline>();
  const progress2 = createSignal(0);
  view.add(
    <Spline
      ref={spline3}
      lineWidth={5}
      // stroke={black}
      points={[[400, 0], [0, 250], [-500, 500], [0, 500]]}
      // smoothness={2}
    />
  );

  yield* output[2]().position(() => spline3().getPointAtPercentage(progress2()).position);
  output.push(createRef<Icon>());
  view.add(
    <Icon ref={output[3]} icon={"noto-v1:pile-of-poo"} x={0} y={500} scale={10} zIndex={0}/>
  );
  yield* sequence(0.5,
    progress2(1, 1, easeInOutCubic),
    process[2]().ripple(),
    all(
      output[3]().x(800, 1.5, easeInOutCubic),
      output[3]().rotation(360, 1.5),
    ),

    all(
      disappear(process[0]()),
      disappear(process[1]()),
      disappear(process[2]()),
      disappear(input[2]()),
      disappear(input[1]()),
      disappear(input[0]()),
      disappear(output[1]()),
      disappear(output[2]()),
    ),
    // output[3]().x(800, 1, easeInOutCubic),
  );


  yield* waitFor(1);
});
