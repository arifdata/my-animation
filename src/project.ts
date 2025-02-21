import {makeProject} from '@motion-canvas/core';

import example from './scenes/example?scene';
// import inputProcessOutput from './scenes/00_basic_programming_concept/input_process_output?scene';
import workBookObject from './scenes/excel_episode_00/workbook_object?scene';

export default makeProject({
  // scenes: [example, inputProcessOutput],
  // scenes: [inputProcessOutput],
  scenes: [workBookObject],
});
