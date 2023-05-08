import { Emitter, upgradeConfig } from "@pixi/particle-emitter"
import { Container, DisplayObject, ParticleContainer, utils } from "pixi.js"
import { store } from "../../store/store"


export function goldShower(position: "left" | "right") {
    const particleContainer = new ParticleContainer()
    particleContainer.name = "particleContainer"
    const { fullSize } = store.getState().screenSize.symbol
    let startRotation = { min: 0, max: 60 }
    let pos = { x: 0, y: -fullSize }
    if (position === "right") {
        startRotation = { min: 120, max: 180 }
        pos = { x: fullSize * 7, y: -fullSize }
    }
    let elapsed = Date.now();


    let update = function () {


        requestAnimationFrame(update);

        let now = Date.now();


        emitter.update((now - elapsed) * 0.001);
        elapsed = now;
    };

    const config = {
        alpha: {
            start: 1,
            end: 1
        },
        scale: {
            start: 0.7,
            end: 1,
        },
        color: {
            start: "#ffffff",
            end: "#ffffff"
        },
        speed: {
            start: 100, // Decreased from 200
            end: 150, // Decreased from 300
            minimumSpeedMultiplier: 0.001
        },
        acceleration: {
            x: 0, // Removed x acceleration
            y: 250 // Increased y acceleration
        },
        maxSpeed: 0,
        startRotation,
        noRotation: true,
        rotationSpeed: {
            min: 0,
            max: 0
        },
        lifetime: {
            min: 4, // Increased from 3
            max: 6, // Increased from 5
        },
        blendMode: "normal",
        frequency: 0.1,
        emitterLifetime: -0.9,
        maxParticles: 3000,
        pos,
        addAtBack: true,
        spawnType: "rect",
        spawnRect: {
            x: 0,
            y: 0,
            w: 10,
            h: 10
        }
    };
    const GOLD_0 = utils.TextureCache['./assets/GOLD_0.png']
    const GOLD_1 = utils.TextureCache['./assets/GOLD_1.png']
    const GOLD_2 = utils.TextureCache['./assets/GOLD_2.png']
    const GOLD_3 = utils.TextureCache['./assets/GOLD_3.png']
    const GOLD_4 = utils.TextureCache['./assets/GOLD_4.png']
    const GOLD_5 = utils.TextureCache['./assets/GOLD_5.png']
    const GOLD_6 = utils.TextureCache['./assets/GOLD_6.png']
    const GOLD_7 = utils.TextureCache['./assets/GOLD_7.png']
    const GOLD_8 = utils.TextureCache['./assets/GOLD_8.png']
    const GOLD_9 = utils.TextureCache['./assets/GOLD_9.png']


    const newConfig = upgradeConfig(config, [GOLD_0, GOLD_1, GOLD_2, GOLD_3, GOLD_4, GOLD_5, GOLD_6, GOLD_7, GOLD_8, GOLD_9])


    let emitter = new Emitter(particleContainer, newConfig);
    // Start emitting
    emitter.emit = true;

    // Start the update
    update();

    return particleContainer
}

