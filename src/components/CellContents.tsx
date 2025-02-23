import {Layout, Circle, Rect} from '@motion-canvas/2d';
import { ATxt } from '../utils/nodes/ATxt';
import { black, red } from '../color-palettes/five-colorful';
import { darkGreen } from '../color-palettes/green-excel-zero';

export function CellContent({x = 0, y = 0, width = 100, gap = 10, color = red, ref = null, itemName = "", number = 0, opacity = 1}) {
  return (
  <>
      <Layout x={x} y={y} direction={"column"} width={width} gap={gap} layout ref={ref} scale={0.6} opacity={opacity}>
        <ATxt text={itemName} fill={black} justifyContent={"start"} />
        <Circle width={150} height={150} fill={color} layout alignItems={"center"} justifyContent={"center"}>
          <ATxt text={`${number}`} fill={black} scale={1.6}/>
        </Circle>
      </Layout>
  </>
  );
};

export function Object({ref = null, label = "Label", color = darkGreen, width = 250, height = 100}) {
  return (
    <>
      <Layout direction={"column"} gap={10} ref={ref} layout>
        <ATxt fill={black} text={label} />
        <Rect fill={color} width={width} height={height} radius={10}/>
      </Layout>
    </>
  );
};
