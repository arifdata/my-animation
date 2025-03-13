
import {Layout, Rect} from '@motion-canvas/2d';
import { ATxt } from '../utils/nodes/ATxt';
import { black } from '../color-palettes/five-colorful';
import { darkGreen } from '../color-palettes/green-excel-zero';
import { reddish, darkBlue, blue, lightBlue, gray, yellow, orange, thickOrange, maroon } from '../color-palettes/ten-colorful';

const LINE_COLORS = [reddish, darkBlue, blue, lightBlue, gray, yellow, orange, thickOrange, maroon, darkGreen];

function chooseRandomColor(color_list) {
  return color_list[Math.floor(Math.random() * color_list.length)]

}

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

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function CodeLinesVisual({gap = 40, ref = null, numberOfLines = 5}) {
  let lines = [];
  for (let i = 0; i < numberOfLines; i++) {
    lines.push(
      <Rect fill={() => chooseRandomColor(LINE_COLORS)} width={() => randomIntFromInterval(300, 800)} height={50} radius={numberOfLines} />
    );
  }
  return (
    <>
      <Layout direction={"column"} gap={gap} layout ref={ref} scale={0.8}>
        {lines}
      </Layout>
    </>
  );
};

