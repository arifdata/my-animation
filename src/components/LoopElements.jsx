
import {Layout, Rect} from '@motion-canvas/2d';
import { ATxt } from '../utils/nodes/ATxt';
import { black, red } from '../color-palettes/five-colorful';
import { darkGreen } from '../color-palettes/green-excel-zero';

export function LoopElements({width = 100, gap = 5, color = red, ref = null, elements = [{"Item 1": 10}, {"Item 2": 20}]}) {
  return (
    <>
      <Layout direction={"column"} gap={gap} layout ref={ref} scale={1}>
        {elements.map((item) => (
          <Rect radius={5} direction={"row"} fill={darkGreen} width={300} height={50} alignItems={"center"} justifyContent={"space-evenly"} layout>
            <ATxt fill={black} text={`${Object.keys(item)}:`} />
            <ATxt fill={black} text={`${Object.values(item)}`} />
          </Rect>
        ))}
      </Layout>
    </>
  );
};

