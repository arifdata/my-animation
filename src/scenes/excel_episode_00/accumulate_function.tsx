import {makeScene2D, Layout, Rect, Circle} from '@motion-canvas/2d';
import { ATxt } from '../../utils/nodes/ATxt';
import {all, createRef} from '@motion-canvas/core';
import { black, red } from '../../color-palettes/five-colorful';

function CellContent({width = 100, gap = 10, color = red, ref = null, itemName = "", number = 0}) {
  return (
  <>
      <Layout direction={"column"} width={width} gap={gap} layout ref={ref} scale={0.6}>
        <ATxt text={itemName} fill={black} justifyContent={"start"} />
        <Rect radius={10} height={100} width={200} fill={color} layout alignItems={"center"} justifyContent={"center"}>
          <ATxt text={`${number}`} fill={black} scale={1.6}/>
        </Rect>
      </Layout>
  </>
  );
};

export default makeScene2D(function* (view) {
  const myCell = createRef<Layout>();

  view.fill('#ffffff');
  view.add(
    <CellContent itemName="Paracetamol Tablet" ref={myCell}></CellContent>
  );

  yield* all(
    myCell().children()[1].children()[0].text("1", 1),
  );
});
