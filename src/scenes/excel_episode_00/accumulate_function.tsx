// RENDER DENGAN RESOLUSI 970 X 1080
import {makeScene2D, Layout, Img, Rect} from '@motion-canvas/2d';
import {all, createRef, easeInOutExpo, waitFor} from '@motion-canvas/core';
import { CellContent, Object } from '../../components/CellContents';
import { LoopElements } from '../../components/LoopElements';
import { createSignal } from '@motion-canvas/core';
import gambar from './exce_file.png';
import { maroon, darkBlue, orange, thickOrange, reddish } from '../../color-palettes/ten-colorful'; 

export default makeScene2D(function* (view) {
  const loopItems = [{"Paracetamol": 30}, {"Ambroxol": 20}, {"Paracetamol": 30}, {"Metformin": 20}, {"Ambroxol": 10}, {"Ibuprofen": 20}, {"Metformin": 30}, {"Amlodipine": 80}, {"Ibuprofen": 30}, {"Paracetamol": 30}];

  const image = createRef<Img>();
  const loopElements = createRef<Layout>();
  const workBookObject = createRef<Layout>();
  const customRect = createRef<Rect>();
  const dataObject = createRef<Layout>();
  const cellReferences = [];
  const posX = createSignal(700);
  const posY = createSignal(0);


  view.fill('#ffffff');

  view.add(
    <Object ref={workBookObject} label='Workbook'/>
  );
  workBookObject().x(() => posX());
  workBookObject().y(() => posY());


  view.add(
    <Img ref={image} src={gambar} x={() => posX()} y={() => posY()} scale={1} radius={20}/>
  );
  image().scale(0);

  view.add(
    <LoopElements ref={loopElements} elements={loopItems}/>
  );
  loopElements().x(() => posX());
  loopElements().y(() => posY());
  loopElements().scale(0);

  yield* posX(0, 1, easeInOutExpo);

  yield* waitFor(0.5);

  yield* all(
    workBookObject().rotation(360, 1, easeInOutExpo),
    workBookObject().opacity(0, 1),

    image().rotation(360, 1, easeInOutExpo),
    image().scale(1, 1),
  );

  yield view.add(
    <Rect fill={orange} width={100} height={30} ref={customRect} opacity={0.5} radius={10} x={800} y={150}/>
  );

  yield* customRect().x(-120, 1, easeInOutExpo);

  yield* waitFor(0.5);

  yield* customRect().ripple();

  yield* waitFor(0.5);

  yield* all(
    customRect().opacity(0, 0.5),
    image().rotation(0, 1, easeInOutExpo),
    image().opacity(0, 1),

    loopElements().rotation(360, 1, easeInOutExpo),
    loopElements().scale(1, 1),
  );

  yield* waitFor(0.5);

  yield* all(
    posX(-300, 1, easeInOutExpo),
    posY(500, 1, easeInOutExpo),
  );

  view.add(
    <Object label='data' color={darkBlue} width={400} height={200} ref={dataObject} />
  );
  dataObject().x(100);
  dataObject().y(-800);

  yield* dataObject().y(-400, 1, easeInOutExpo);

  yield* waitFor(0.5);

  yield* all(
    customRect().opacity(0.5, 1),
    customRect().width(150, 1, easeInOutExpo),
    customRect().height(50, 1, easeInOutExpo),
    customRect().fill(reddish, 1),
    customRect().opacity(0.3, 1),
    customRect().x(-320, 1, easeInOutExpo),
    customRect().y(250, 1 ,easeInOutExpo),
  );

  yield* waitFor(0.5);

  yield* customRect().ripple();

  cellReferences.push(createRef<Layout>());
  view.add(
    <CellContent opacity={0} ref={cellReferences[0]} itemName={"Paracetamol"} number={30} x={() => customRect().x()} y={() => customRect().y()}/>
  );

  yield* all(
    cellReferences[0]().x(0, 1, easeInOutExpo),
    cellReferences[0]().y(-400, 1, easeInOutExpo),
    cellReferences[0]().opacity(1, 0.5),
  );

  yield* waitFor(0.5);




});
