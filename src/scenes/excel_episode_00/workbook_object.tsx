import {makeScene2D, Rect, Txt} from '@motion-canvas/2d';
import {all, createRef, chain, createSignal, loopFor, useLogger, useRandom, waitFor, easeInOutCubic } from '@motion-canvas/core';
import { ATxt } from '../../utils/nodes/ATxt';
import { white, black } from '../../color-palettes/five-colorful';
import { darkGreen, green, red, blue, orange } from '../../color-palettes/green-excel-zero';

export default makeScene2D(function* (view) {
  const workBookChild = ["active", "add_named_style()", "chartsheets", "close()", "copy_worksheet()", "create_chartsheet()", "create_named_range()", "create_sheet()", "data_only", "epoch", "excel_base_date", "Workbook.index()", "Workbook['sheet_name']", "Workbook.sheetnames", "index()", "mime_type", "move_sheet()", "named_styles", "path", "remove()", "remove_sheet()", "save()", "sheetnames", "style_names", "worksheets", "write_only"];
  const workBookChildRef = Array.from({length: workBookChild.length}, () => createRef<Txt>());
  const txt = createRef<Txt>();
  const txt2 = createRef<Txt>();
  const rect = createRef<Rect>();
  const xParent = createSignal(800);
  const yParent = createSignal(0);
  //
  view.fill(white);

  view.add(
    <>
      <Rect ref={rect} width={500} height={100} fill={orange} radius={15} x={() => xParent()} y={() => yParent()}></Rect>
      <ATxt ref={txt} fill={black} scale={1} text={'load_workbook'} x={() => xParent() - 140} y={() => yParent() - 80}></ATxt>
      <ATxt ref={txt2} fill={black} scale={1} text={'Excel File'} y={-300} x={800}></ATxt>
    </>
  );

  yield* xParent(0, 1, easeInOutCubic);

  yield* txt2().x(300, 0.7, easeInOutCubic);

  yield* waitFor(1);

  yield* txt2().text(`"drug_sales.xlsx"`, 0.7);

  yield* waitFor(1);

  yield* chain(
    all(
      txt2().x(xParent(), 0.7, easeInOutCubic),
      txt2().y(yParent(), 0.7),
    ),

    rect().ripple(),
  );

  yield* waitFor(1);

  yield* all(
    txt().text("Workbook", 0.5),
    txt().x(() => xParent() - 80, 0.5),
    rect().fill(darkGreen, 0.5),
    rect().width(300, 0.5),
    txt2().text("", 0.5),
  );

  yield* waitFor(1);

  yield* all(
    rect().width(700, 1, easeInOutCubic),
    rect().height(700, 1, easeInOutCubic),

    txt().x(() => xParent() - 280, 1),
    txt().y(() => yParent() - 380, 1),
  );

  yield* waitFor(1);

  workBookChild.forEach((item, index) => {
    if (index % 2) {
      rect().add(<ATxt ref={workBookChildRef[index]} text={`${item}`} scale={0.9} opacity={0} fill={black} x={-180} y={-330 + (index * 25)}></ATxt>)
    } else {
      rect().add(<ATxt ref={workBookChildRef[index]} text={`${item}`} scale={0.9} opacity={0} fill={black} x={180} y={-310 + (index * 25)}></ATxt>)
    }
  });

  yield* waitFor(1);

  yield* all(
    ...workBookChildRef.map(item => item().opacity(1, 0.5, easeInOutCubic)),
    txt().text("Inside Workbook Object 🔍", 0.5),
    txt().x(() => xParent() - 140, 0.5),
  );

  yield* waitFor(1);

  yield* all(
    ...workBookChildRef.map((item, index) =>
      (index === 7 || index === 12 || index === 21 ) ? all(item().scale(1.5, 0.5), item().x(() => xParent(), 0.5)) : item().opacity(0, 0.5)
    )
  );


  yield* waitFor(1);

  yield* all(
    ...workBookChildRef.map(item => item().scale(0 , 0.3)),
    rect().width(300, 0.5),
    rect().height(100, 0.5),
    txt().x(() => xParent() - 80, 0.5),
    txt().y(() => yParent() - 80, 0.5),
    txt().text("Workbook", 0.3),
  );

  yield* waitFor(1);

  yield* rect().ripple();

  yield* waitFor(1);
  yield* xParent(800, 0.5, easeInOutCubic);

  yield* waitFor(1);

});

