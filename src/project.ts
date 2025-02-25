import {makeProject} from '@motion-canvas/core';

// import example from './scenes/example?scene';
// import inputProcessOutput from './scenes/00_basic_programming_concept/input_process_output?scene';
// import workBookObject from './scenes/excel_episode_00/workbook_object?scene';
// import accumulate_function from './scenes/excel_episode_00/accumulate_function?scene';
import firstAnimation from './scenes/slamaDev/firstAnimation-0?scene';
import noAnimateSyntax from './scenes/slamaDev/noAnimateSyntax-1?scene';
import noAnimateSyntax2 from './scenes/slamaDev/noAnimateSyntax-1-2?scene';
import aligningObjects from './scenes/slamaDev/aligningObjects-2?scene';
import moveTo from './scenes/slamaDev/moveTo-3?scene';
import alignTo from './scenes/slamaDev/alignTo-4?scene';
import flexbox from './scenes/slamaDev/flexbox-5?scene';
import saveAndRestore from './scenes/slamaDev/saveAndRestore-6?scene';
// import typesettingTextAndMath from './scenes/slamaDev/typesettingTextAndMath-7?scene';
import taskSort from './scenes/slamaDev/taskSort-8?scene';
import taskSearch from './scenes/slamaDev/taskSearch-9?scene';
import groupingObjects from './scenes/slamaDev/groupingObjects-10?scene';
import groupingObjects2 from './scenes/slamaDev/groupingObjects-10-2?scene';
import gridChromaJS from './scenes/slamaDev/gridChromaJS-11?scene';

export default makeProject({
  // scenes: [example, inputProcessOutput],
  // scenes: [inputProcessOutput],
  // scenes: [/*workBookObject*/ accumulate_function],
  scenes: [gridChromaJS, groupingObjects2, groupingObjects, taskSearch, taskSort,/*typesettingTextAndMath,*/ saveAndRestore, flexbox, alignTo, moveTo, aligningObjects, noAnimateSyntax2, noAnimateSyntax, firstAnimation]
});
