import { Emitter } from "pixi-particles";
import { Container, DisplayObject, Texture } from "pixi.js";

export function goldRainEmitter(container: Container<DisplayObject>, texture: Texture): Emitter {
    const config = {
        alpha: {
            start: 1,
            end: 0.94
        },
        scale: {
            start: 0.9,
            end: 1,
            minimumScaleMultiplier: 1
        },
        color: {
            start: "#ffffff",
            end: "#ffffff"
        },
        speed: {
            start: 800,
            end: 1000,
            minimumSpeedMultiplier: 0.01
        },
        acceleration: {
            x: 0.1,
            y: 0.3
        },
        maxSpeed: 0,
        startRotation: {
            min: 65,
            max: 65
        },
        noRotation: false,
        rotationSpeed: {
            min: 0,
            max: 0
        },
        lifetime: {
            min: 3,
            max: 3
        },
        blendMode: "normal",
        frequency: 0.02,
        emitterLifetime: -1,
        maxParticles: 600,
        pos: {
            x: 0,
            y: 0
        },
        addAtBack: false,
        spawnType: "rect",
        spawnRect: {
            x: -600,
            y: -460,
            w: 900,
            h: 20
        }
    }
    const emitter = new Emitter(container, [texture], config);

    return emitter
}
