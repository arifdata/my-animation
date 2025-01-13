import {Txt, withDefaults} from '@motion-canvas/2d';
import { black } from '../../color-palettes/five-colorful';

export const ATxt = withDefaults(Txt, {
  fill: black,
  fontFamily: 'JetBrains Mono',
  fontWeight: 700,
  height: 40,
  lineHeight: 48,
  fontSize: 28,
});
