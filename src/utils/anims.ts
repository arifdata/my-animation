import { ThreadGenerator, all, easeInOutCubic } from "@motion-canvas/core";
import { Shape } from "@motion-canvas/2d";

export function* appear(object: Shape, duration = 0.5): ThreadGenerator {
    let objSize = object.size();

    yield* all(
        object.size(0).size(objSize, duration, easeInOutCubic),
    );
}

export function* disappear(object: Shape, duration = 0.5): ThreadGenerator {
    let objSize = object.size();

    yield* all(
        object.size(objSize).size(0, duration, easeInOutCubic),
    );
}
