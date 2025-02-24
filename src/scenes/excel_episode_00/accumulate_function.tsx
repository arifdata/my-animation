// RENDER DENGAN RESOLUSI 970 X 1080
import {makeScene2D, Layout, Img, Rect, Txt, Circle, fillRect} from '@motion-canvas/2d';
import {all, chain, createRef, delay, easeInOutExpo, sequence, useLogger, waitFor} from '@motion-canvas/core';
import { CellContent, Object } from '../../components/CellContents';
import { LoopElements } from '../../components/LoopElements';
import { createSignal } from '@motion-canvas/core';
import gambar from './exce_file.png';
import {  gray, maroon, darkBlue, orange, thickOrange, reddish, yellow } from '../../color-palettes/ten-colorful'; 
import { ATxt } from '../../utils/nodes/ATxt';
import { black } from '../../color-palettes/five-colorful';
import sheet2_png_0 from './sheet_2_0.png';
import sheet2_png_1 from './sheet_2_1.png';
import sheet2_png_2 from './sheet_2_2.png';
import sheet2_png_3 from './sheet_2_3.png';

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
    workBookObject().rotation(360, 0.5, easeInOutExpo),
    workBookObject().opacity(0, 0.5),

    image().rotation(360, 0.5, easeInOutExpo),
    image().scale(1, 0.5),
  );

  yield view.add(
    <Rect fill={orange} width={80} height={25} ref={customRect} opacity={0.5} radius={10} x={800} y={145}/>
  );

  yield* customRect().x(-125, 0.5, easeInOutExpo);

  yield* waitFor(0.5);

  yield* customRect().ripple(0.5);

  yield* waitFor(0.5);

  yield* all(
    customRect().opacity(0, 0.5),
    image().rotation(0, 0.5, easeInOutExpo),
    image().opacity(0, 0.5),

    loopElements().rotation(360, 0.5, easeInOutExpo),
    loopElements().scale(1, 0.5),
  );

  yield* waitFor(0.5);

  yield* all(
    posX(-300, 0.5, easeInOutExpo),
    posY(500, 0.5, easeInOutExpo),
    loopElements().gap(30, 0.5),
  );

  view.add(
    <Object label='data' color={yellow} width={400} height={200} ref={dataObject} />
  );
  dataObject().x(100);
  dataObject().y(-800);

  yield* dataObject().y(-400, 0.5, easeInOutExpo);

  yield* waitFor(0.5);

  yield* all(
    customRect().opacity(0.5, 0.5),
    customRect().width(150, 0.5, easeInOutExpo),
    customRect().height(50, 0.5, easeInOutExpo),
    customRect().fill(reddish, 0.5),
    customRect().opacity(0.5, 0.5),
    customRect().x(-320, 0.5, easeInOutExpo),
    customRect().y(140, 0.5,easeInOutExpo),
  );

  yield* waitFor(0.5);

  yield* customRect().ripple(0.5);

  cellReferences.push(createRef<Layout>());
  view.add(
    <CellContent color={reddish} opacity={0} ref={cellReferences[0]} itemName={"Paracetamol"} number={30} x={() => customRect().x()} y={() => customRect().y()}/>
  );

  yield* all(
    cellReferences[0]().x(0, 0.5, easeInOutExpo),
    cellReferences[0]().y(-400, 0.5, easeInOutExpo),
    cellReferences[0]().opacity(1, 0.5),
  );

  yield* posY(420, 0.5, easeInOutExpo);

  yield* customRect().ripple(0.5);

  cellReferences.push(createRef<Layout>());

  view.add(
    <CellContent color={reddish} opacity={0} ref={cellReferences[1]} itemName={"Ambroxol"} number={20} x={() => customRect().x()} y={() => customRect().y()}/>
  );

  yield* all(
    cellReferences[1]().x(150, 0.5, easeInOutExpo),
    cellReferences[1]().y(-370, 0.5, easeInOutExpo),
    cellReferences[1]().opacity(1, 0.5),
  );

  yield* posY(340, 0.5, easeInOutExpo);

  cellReferences.push(createRef<Txt>());

  view.add(
    <ATxt text={"30"} ref={cellReferences[2]} opacity={0} scale={0.8} x={() => customRect().x() + 120} y={() => customRect().y()} fill={black} />
  );

  yield* chain(
    all(
      cellReferences[2]().x(() => cellReferences[0]().x(), 0.5, easeInOutExpo),
      cellReferences[2]().y(() => cellReferences[0]().y(), 0.5, easeInOutExpo),
      cellReferences[2]().opacity(1, 0).to(0, 0.5),
    ),

    all(
      cellReferences[0]().children()[1].children()[0].text("60", 0),
      cellReferences[0]().children()[1].ripple(0.5),
    ),
  );

  yield* posY(260, 0.5, easeInOutExpo);

  yield* customRect().ripple(0.5);

  cellReferences.push(createRef<Layout>());

  view.add(
    <CellContent color={reddish} opacity={0} ref={cellReferences[3]} itemName={"Metformin"} number={20} x={() => customRect().x()} y={() => customRect().y()}/>
  );

  yield* all(
    dataObject().children()[1].width(500, 0.5, easeInOutExpo),
    dataObject().children()[1].height(400, 0.5, easeInOutExpo),
    dataObject().x(170, 0.5, easeInOutExpo),
    dataObject().y(-300, 0.5, easeInOutExpo),

    cellReferences[3]().x(300, 0.5, easeInOutExpo),
    cellReferences[3]().y(-400, 0.5, easeInOutExpo),
    cellReferences[3]().opacity(1, 0.5),
  );

  yield* posY(180, 0.5, easeInOutExpo);

  cellReferences.push(createRef<Txt>());

  view.add(
    <ATxt text={"10"} ref={cellReferences[4]} opacity={0} scale={0.8} x={() => customRect().x() + 120} y={() => customRect().y()} fill={black} />
  );

  yield* chain(
    all(
      cellReferences[4]().x(() => cellReferences[1]().x(), 0.5, easeInOutExpo),
      cellReferences[4]().y(() => cellReferences[1]().y(), 0.5, easeInOutExpo),
      cellReferences[4]().opacity(1, 0).to(0, 0.5),
    ),

    all(
      cellReferences[1]().children()[1].children()[0].text("30", 0),
      cellReferences[1]().children()[1].ripple(0.5),
    ),
  );

  yield* posY(100, 0.5, easeInOutExpo);

  yield* customRect().ripple(0.5);

  cellReferences.push(createRef<Layout>());

  view.add(
    <CellContent color={reddish} opacity={0} ref={cellReferences[5]} itemName={"Ibuprofen"} number={20} x={() => customRect().x()} y={() => customRect().y()}/>
  );

  yield* all(
    cellReferences[5]().x(50, 0.5, easeInOutExpo),
    cellReferences[5]().y(-250, 0.5, easeInOutExpo),
    cellReferences[5]().opacity(1, 0.3),
  );

  yield* posY(20, 0.5, easeInOutExpo);
  cellReferences.push(createRef<Txt>());

  view.add(
    <ATxt text={"30"} ref={cellReferences[6]} opacity={1} scale={0.8} x={() => customRect().x() + 120} y={() => customRect().y()} fill={black} />
  );

  yield* chain(
    all(
      cellReferences[6]().x(() => cellReferences[3]().x(), 0.5, easeInOutExpo),
      cellReferences[6]().y(() => cellReferences[3]().y(), 0.5, easeInOutExpo),
      cellReferences[6]().opacity(1, 0).to(0, 0.5),
    ),

    all(
      cellReferences[3]().children()[1].children()[0].text("50", 0),
      cellReferences[3]().children()[1].ripple(0.5),
    ),
  );

  yield* posY(-60, 0.5, easeInOutExpo);

  yield* customRect().ripple(0.5);

  cellReferences.push(createRef<Layout>());

  view.add(
    <CellContent color={reddish} opacity={0} ref={cellReferences[7]} itemName={"Amlodipine"} number={80} x={() => customRect().x()} y={() => customRect().y()}/>
  );

  yield* all(
    cellReferences[7]().x(250, 0.5, easeInOutExpo),
    cellReferences[7]().y(-200, 0.5, easeInOutExpo),
    cellReferences[7]().opacity(1, 0.3),
  );

  yield* posY(-140, 0.5, easeInOutExpo);

  cellReferences.push(createRef<Txt>());

  view.add(
    <ATxt text={"30"} ref={cellReferences[8]} opacity={1} scale={0.8} x={() => customRect().x() + 120} y={() => customRect().y()} fill={black} />
  );

  yield* chain(
    all(
      cellReferences[8]().x(() => cellReferences[5]().x(), 0.5, easeInOutExpo),
      cellReferences[8]().y(() => cellReferences[5]().y(), 0.5, easeInOutExpo),
      cellReferences[8]().opacity(1, 0).to(0, 0.5),
    ),

    all(
      cellReferences[5]().children()[1].children()[0].text("50", 0),
      cellReferences[5]().children()[1].ripple(0.5),
    ),
  );

  yield* posY(-220, 0.5, easeInOutExpo);

  cellReferences.push(createRef<Txt>());

  view.add(
    <ATxt text={"30"} ref={cellReferences[9]} opacity={1} scale={0.8} x={() => customRect().x() + 120} y={() => customRect().y()} fill={black} />
  );

  yield* chain(
    all(
      cellReferences[9]().x(() => cellReferences[0]().x(), 0.5, easeInOutExpo),
      cellReferences[9]().y(() => cellReferences[0]().y(), 0.5, easeInOutExpo),
      cellReferences[9]().opacity(1, 0).to(0, 0.5),
    ),

    all(
      cellReferences[0]().children()[1].children()[0].text("90", 0),
      cellReferences[0]().children()[1].ripple(0.5),
    ),
  );

  yield* all(
    posY(-1000, 1, easeInOutExpo),
    customRect().opacity(0, 0.5, easeInOutExpo),
  );

  yield* chain(
    all(
      cellReferences[7]().scale(0, 0.5, easeInOutExpo),
      cellReferences[5]().scale(0, 0.5, easeInOutExpo),
      cellReferences[3]().scale(0, 0.5, easeInOutExpo),
      cellReferences[1]().scale(0, 0.5, easeInOutExpo),
      cellReferences[0]().scale(0, 0.5, easeInOutExpo),
    ),

    all(
      dataObject().children()[1].width(150, 0.5),
      dataObject().children()[1].height(80, 0.5),

      dataObject().scale(0.7, 0.5, easeInOutExpo),

    ),

    all(
      dataObject().x(-400, 0.5, easeInOutExpo),
      dataObject().y(-470, 0.5, easeInOutExpo),
    ),
  );

  yield* all(
    workBookObject().opacity(1, 0.5),
    workBookObject().x(0, 0.5),
    workBookObject().y(0, 0.5),
  );

  yield* workBookObject().children()[0].text("Workbook.create_sheet()", 0.5);
  
  const sheet2_txt = createRef<Txt>();
  view.add(
    <ATxt fill={black} y={0} x={700} ref={sheet2_txt} text={'"Sheet2"'} />
  );

  yield* all(
    sheet2_txt().x(-65, 0.5, easeInOutExpo),
    sheet2_txt().y(17, 0.5, easeInOutExpo),
  );

  yield* all(
    workBookObject().children()[1].add(sheet2_txt()),
    workBookObject().scale(0, 0.5),
    image().x(0, 0),
    image().y(0, 0),
    image().opacity(1, 0.5),
    image().scale(0, 0).to(1, 0.5),
  );

  yield* all(
    image().ripple(0.5),
    image().src(sheet2_png_0, 0),
  );

  view.add(
    <ATxt fill={black} y={-200} x={300} ref={sheet2_txt} text={`counter: 1`} />
  );

  yield* all(
    dataObject().scale(1, 0.5),
    dataObject().children()[1].width(150, 0.5),
    dataObject().children()[1].height(150, 0.5),
    dataObject().y(-430, 0.5),
    dataObject().x(-370, 0.5),
  );

  const explainer = createRef<Txt>();

  view.add(
    <ATxt ref={explainer} fill={black} text={''} scale={1.2} y={250}/>
  );

  yield* all(
    cellReferences[0]().scale(0, 0).to(0.6, 0.5),
    cellReferences[0]().x(-390, 0),
    cellReferences[0]().y(-410, 0),
    explainer().text(`f"A{counter}" = drug_name\nf"B{counter}" = amount`, 1),
  );

  yield* waitFor(0.5);

  yield* chain(
    all(
      cellReferences[0]().x(0, 0.5, easeInOutExpo),
      cellReferences[0]().y(0, 0.5, easeInOutExpo),
      cellReferences[0]().scale(0, 0.3),
      sheet2_txt().ripple(0.5),
      explainer().text(`A1 = Paracetamol\nB1 = 90`, 1),
    ),

    all(
      image().ripple(0.5),
      image().src(sheet2_png_1, 0),
      explainer().text("", 0.5),
    ),
  );

  yield* all(
    sheet2_txt().text(`counter : 2`, 0.5),
    cellReferences[1]().scale(0, 0).to(0.6, 0.5),
    cellReferences[1]().x(-390, 0),
    cellReferences[1]().y(-410, 0),
    explainer().text(`f"A{counter}" = drug_name\nf"B{counter}" = amount`, 0.5),
  );

  yield* chain(
    all(
      cellReferences[1]().x(0, 0.5, easeInOutExpo),
      cellReferences[1]().y(0, 0.5, easeInOutExpo),
      cellReferences[1]().scale(0, 0.3),
      sheet2_txt().ripple(0.5),
      explainer().text(`A1 = Ambroxol\nB1 = 30`, 0.5),
    ),
    all(
      image().ripple(0.5),
      image().src(sheet2_png_2, 0),
      explainer().text("", 0.3),
    ),
  );

  const three_circles = Array.from({length: 3}, () => createRef<Circle>());

  three_circles.forEach((ref) => {
    view.add(<Circle ref={ref} fill={reddish} width={50} height={50} x={-370} y={-400} />);
  });

  const counter = createSignal(2);

  yield sheet2_txt().text(() => `counter: ${counter()}`, 0.3);

  yield* sequence(0.3,
    ...three_circles.map(ref => all(
      ref().scale(0, 0).to(1, 0.3),
      ref().x(-100, 0.3, easeInOutExpo),
      ref().y(-100, 0.3, easeInOutExpo),
      image().ripple(0.3),
      counter(() => counter() + 1, 0),
      delay(0.3, ref().scale(0, 0.3)),
    ))
  );

  yield* all(
    image().ripple(0.5),
    image().src(sheet2_png_3, 0)
  );

  workBookObject().children()[1].children()[0].scale(0);

  yield* all(
    dataObject().x(-800, 0.5, easeInOutExpo),
    sheet2_txt().x(800, 0.5, easeInOutExpo),
    image().size(0, 0.5, easeInOutExpo),
    workBookObject().scale(1, 0.5, easeInOutExpo),
  );

  yield* waitFor(0.5);

  yield* chain(
    workBookObject().children()[0].text("Workbook.save()", 0.5, easeInOutExpo),
    workBookObject().children()[1].ripple(),
    all(
      workBookObject().scale(0, 0.5),
      workBookObject().x(800, 0.5, easeInOutExpo),
    ),
  );

  yield* waitFor(1);

});
