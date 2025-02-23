import {makeScene2D, Layout, Img} from '@motion-canvas/2d';
import {all, createRef, easeInExpo, easeInOutExpo, waitFor, u} from '@motion-canvas/core';
import { CellContent, WorkbookObject } from '../../components/CellContents';
import { LoopElements } from '../../components/LoopElements';
import { createSignal } from '@motion-canvas/core';
import { useLogger } from '@motion-canvas/core';
import gambar from './exce_file.png';

export default makeScene2D(function* (view) {
  const loopItems = [{"Paracetamol tablet 500 mg": 30}, {"Ambroxol tablet 30 mg": 20}, {"Paracetamol tablet 500 mg": 30}, {"Metformin tablet 500 mg": 20}, {"Ambroxol tablet 30 mg": 10}, {"Ibuprofen tablet 400 mg": 20}, {"Metformin tablet 500 mg": 30}, {"Amlodipine tablet 5 mg": 80}, {"Ibuprofen tablet 400 mg": 30}, {"Paracetamol tablet 500 mg": 30}];

  const image = createRef<Img>();
  const loopElements = createRef<Layout>();
  const workBookObject = createRef<Layout>();
  const posX = createSignal(0);
  const posY = createSignal(0);


  view.fill('#ffffff');

  view.add(
    <WorkbookObject />
  );

  view.add(
    <Img ref={image} src={gambar} x={() => posX()} y={() => posY()} scale={1} radius={20}/>
  );
  yield image().scale(0);

  view.add(
    <LoopElements ref={loopElements} elements={loopItems}/>
  );
  yield loopElements().x(() => posX());
  yield loopElements().y(() => posY());
  yield loopElements().scale(0);

  // yield* all(
  //   posX(-300, 1, easeInOutExpo),
  //   posY(-500, 1, easeInOutExpo),
  // );


  yield* waitFor(1);


});
