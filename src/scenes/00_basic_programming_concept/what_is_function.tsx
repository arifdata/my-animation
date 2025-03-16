import {makeScene2D, Code, Layout, word, Icon, Circle, Txt, Line} from '@motion-canvas/2d';
import {all, createRef, DEFAULT, easeInOutCubic, sequence, waitFor, createSignal, Vector2} from '@motion-canvas/core';
import { white, black, blue} from '../../color-palettes/five-colorful';
import { maroon} from '../../color-palettes/ten-colorful';
import { Object } from '../../components/CellContents';
import { appear, disappear } from '../slamaDev/utilities';
import { CodeLinesVisual } from '../../components/LoopElements';
import { ATxt } from '../../utils/nodes/ATxt';

export default makeScene2D(function* (view) {
  view.fill(white);
  const fx = createRef<Layout>();
  
  view.add(
    <Object
      ref={fx}
      label={"Function"}
      color={black}
    />
  );
  fx().scale(1.5);

  yield* appear(fx());

  yield* fx().children()[0].text("Method", 1);
  yield* fx().children()[0].text("Function", 1);

  yield* all(
    fx().children()[1].width(1000, 1, easeInOutCubic),
    fx().children()[1].height(1350, 1, easeInOutCubic),
  );

  yield* waitFor(1);
  const lines = createRef<Layout>();
  view.add(
    <CodeLinesVisual ref={lines} numberOfLines={8} gap={60}/>
  );
  lines().y(300);
  
  const arrow = createRef<Icon>();
  view.add(
    <Icon ref={arrow} icon={"material-symbols:line-end-arrow-notch"} scale={8} x={-400} y={-1000} zIndex={0}/>
  );

  
  yield* sequence(0.5,
    appear(lines()),
    arrow().y(-10, 0.5, easeInOutCubic),
  );

  yield* lines().children()[0].ripple();

  yield* lines().y(-300, 0.7, easeInOutCubic);

  yield* lines().children()[lines().children().length - 1].ripple();

  yield* all(
    disappear(lines()),
    disappear(arrow()),
  );

  const code = createRef<Code>();

  view.add(
    <Code
      ref={code}
      fontSize={36}
      fontFamily={'JetBrains Mono, monospace'}
      offsetX={-1}
      x={-500}
      code={''}
      zIndex={2}
    />,
  );

  yield* appear(code());

  yield* all(
    code().code.append(0.6)`def function_name():\n    pass`,
  );

  yield* waitFor(0.6);
  yield* code().selection(code().findFirstRange('def'), 0.6);
  yield* code().selection(word(0, 4, 15), 0.6);
  yield* code().selection(word(0, 19, 1), 0.6);
  yield* code().selection(code().findFirstRange('pass'), 0.6);
  yield* code().selection(DEFAULT, 0.6);

  yield* waitFor(0.6);

  yield* code().code('def greet():\n    pass', 1);
  yield* code().code('def greet():\n    print("Hello world!)', 1);
  yield* code().code('def greet() -> None:\n    print("Hello world!)', 1);
  yield* code().selection(code().findFirstRange('None'), 0.6);
  yield* code().selection(DEFAULT, 0.6);

  yield* code().code('def calc_circle_area(radius: float) -> float:\n    import math\n    circle_area = math.pi * radius * radius\n    return circle_area', 1);
  yield* code().selection(code().findFirstRange('radius'), 0.6);
  yield* code().selection(code().findFirstRange('float'), 0.6);
  yield* code().selection(word(3, 4, 18), 0.6);
  yield* code().selection(word(0, 39, 5), 0.6);
  yield* code().selection(word(2, 4, 39), 0.6);
  yield* code().selection(DEFAULT, 0.6);

  yield* code().y(-850, 1, easeInOutCubic);

  const radius = createSignal(3);
  const area = createSignal(() => Math.PI * radius() * radius());
  const funcCall = createRef<Txt>();
  const circle = createRef<Circle>();
  const line = createRef<Line>();
  const scale = 100;
  const label1 = createRef<Txt>();
  const label2 = createRef<Txt>();

  view.add(
    <ATxt
      fill={blue}
      text={() => `calc_circle_area(${radius().toFixed(2)})`}
      fontSize={42}
      zIndex={2}
      y={-650}
      x={-220}
      ref={funcCall}
    />
  );

  view.add(
    <>
      <Circle
        ref={circle}
        width={() => radius() * scale * 2}
        height={() => radius() * scale * 2}
        fill={maroon}
        zIndex={0}
      />
      <Line
        ref={line}
        points={[
          Vector2.zero,
          () => Vector2.right.scale(radius() * scale),
        ]}
        lineDash={[5, 5]}
        startArrow
        endArrow
        arrowSize={15}
        endOffset={8}
        lineWidth={8}
        stroke={black}
      />
      <ATxt
        text={() => `radius = ${radius().toFixed(2)}`}
        x={() => (radius() * scale) / 2}
        y={() => radius() * scale * 0.1 }
        fill={black}
        ref={label1}
      />
      <ATxt
        text={() => `circle_area = ${area().toFixed(2)}`}
        y={() => radius() * scale * 1.1}
        fill={white}
        ref={label2}
      />
    </>,
  );

  yield* radius(5, 1);
  yield* radius(6, 1);
  yield* radius(2, 1);
  yield* radius(4, 1);
  yield* radius(1, 1);
  yield* radius(3, 1);
  yield* radius(10, 1);

  yield* all(
    disappear(circle()),
    disappear(label1()),
    disappear(line()),
    disappear(label2()),
    disappear(funcCall()),
    disappear(code()),
    fx().children()[1].width(250, 1, easeInOutCubic),
    fx().children()[1].height(100, 1, easeInOutCubic),
  );

  yield* disappear(fx());

  yield* waitFor(1);
});
