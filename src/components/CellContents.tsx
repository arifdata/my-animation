import {Layout, Circle} from '@motion-canvas/2d';
import { ATxt } from '../utils/nodes/ATxt';
import { black, red } from '../color-palettes/five-colorful';

export function CellContent({width = 100, gap = 10, color = red, ref = null, itemName = "", number = 0}) {
  return (
  <>
      <Layout direction={"column"} width={width} gap={gap} layout ref={ref} scale={0.6}>
        <ATxt text={itemName} fill={black} justifyContent={"start"} />
        <Circle width={150} height={150} fill={color} layout alignItems={"center"} justifyContent={"center"}>
          <ATxt text={`${number}`} fill={black} scale={1.6}/>
        </Circle>
      </Layout>
  </>
  );
};

