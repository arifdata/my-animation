import {Shape} from '@motion-canvas/2d';
import {all, Color, createRef, ThreadGenerator} from '@motion-canvas/core';

export function* appear(object: Shape, duration = 1): ThreadGenerator {
    let scale = object.scale();

    yield* all(
        object.scale(0).scale(scale, duration),
        object.opacity(0).opacity(1, duration),
    );
}
