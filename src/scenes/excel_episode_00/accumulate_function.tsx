import {makeScene2D, Layout, Rect} from '@motion-canvas/2d';
import { ATxt } from '../../utils/nodes/ATxt';
import {all, createRef} from '@motion-canvas/core';
import { black, red } from '../../color-palettes/five-colorful';
import { CellContent } from '../../components/CellContents';

export default makeScene2D(function* (view) {
  const myCell = createRef<Layout>();

  view.fill('#ffffff');
  view.add(
    <CellContent itemName="Paraceamol Tablet" ref={myCell}></CellContent>
  );

  yield* all(
    myCell().children()[1].children()[0].text("1", 1),
  );
});
