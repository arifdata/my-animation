import {Shape} from '@motion-canvas/2d';
import {all, Color, createRef, ThreadGenerator} from '@motion-canvas/core';

export function* appear(object: Shape, duration = 0.5): ThreadGenerator {
    let scale = object.scale();

    yield* all(
        object.scale(0).scale(scale, duration),
        object.opacity(0).opacity(1, duration),
    );
}

export function* disappear(object: Shape, duration = 0.5): ThreadGenerator {
    let scale = object.scale();

    yield* all(
        object.scale(scale).scale(0, duration),
        object.opacity(1).opacity(0, duration),
    );
}
