import {makeScene2D, Code, Layout, word} from '@motion-canvas/2d';
import {all, createRef, DEFAULT, easeInOutCubic, sequence, waitFor} from '@motion-canvas/core';
import { white, black, blue, red, orange } from '../../color-palettes/five-colorful';
import { Object } from '../../components/CellContents';
import { appear, disappear } from '../slamaDev/utilities';

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
  const code = createRef<Code>();

  view.add(
    <Code
      ref={code}
      fontSize={42}
      fontFamily={'JetBrains Mono, monospace'}
      offsetX={-1}
      x={-500}
      code={''}
    />,
  );

  yield* appear(code());

  yield* all(
    code().code.append(0.6)`def function_name():\n    pass`,
  );

  yield* waitFor(0.6);
  yield* code().selection(code().findFirstRange('def'), 0.6);
  // yield* code().selection(code().findFirstRange('function_name()'), 0.6);
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
  yield* code().code('def greet() -> str:\n    return "Hello world!"', 1);
  yield* code().selection(code().findFirstRange('str'), 0.6);
  yield* code().selection(code().findFirstRange('return'), 0.6);
  yield* code().selection(code().findFirstRange('"Hello world!"'), 0.6);
  yield* code().selection(DEFAULT, 0.6);

  yield* code().code('def greet(name: str, age: int) -> str:\n    return "Hello world!"', 1);
  yield* code().selection(code().findFirstRange('name'), 0.6);
  yield* code().selection(code().findFirstRange('str'), 0.6);
  yield* code().selection(code().findFirstRange('age'), 0.6);
  yield* code().selection(code().findFirstRange('int'), 0.6);
  yield* code().selection(DEFAULT, 0.6);
  yield* all(
    code().code(`def greet(name: str, age: int) -> str:\n    return f"Hello! My name is {name}. I'am {age} years old."`, 1),
    // code().code(`def greet() -> None:\n    print("Hello! My name is {name}. I'am {age} years old.`, 1),
    code().fontSize(28, 1),
  );
  yield* code().selection(word(1, 32, 4), 0.6);
  yield* code().selection(word(1, 45, 3), 0.6);
  yield* code().selection(DEFAULT, 0.6);
    // code().code('def greet():\n    print("Hello world!)', 1),
  //
  yield* all(
    fx().children()[0].text("greet(name: str, age: int)"),
    disappear(code()),
    fx().children()[1].width(250, 1, easeInOutCubic),
    fx().children()[1].height(100, 1, easeInOutCubic),
  );

  yield* fx().children()[0].text("Function", 1);

  yield* disappear(fx());

  yield* waitFor(1);
});
