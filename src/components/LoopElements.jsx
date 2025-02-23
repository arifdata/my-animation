
import {Layout, Rect} from '@motion-canvas/2d';
import { ATxt } from '../utils/nodes/ATxt';
import { black } from '../color-palettes/five-colorful';
import { darkGreen } from '../color-palettes/green-excel-zero';

export function LoopElements({gap = 5, ref = null, elements = [{"Item 1": 10}, {"Item 2": 20}]}) {
  return (
    <>
      <Layout direction={"column"} gap={gap} layout ref={ref} scale={0.8}>
        {elements.map((item) => (
          <Rect radius={5} direction={"row"} fill={darkGreen} width={250} height={50} alignItems={"start"} justifyContent={"space-evenly"} alignContent={"start"} layout>
            <ATxt fill={black} scale={0.7} text={`${Object.keys(item)}:`} />
            <ATxt fill={black} scale={0.8} text={`${Object.values(item)}`} />
          </Rect>
        ))}
      </Layout>
    </>
  );
};

