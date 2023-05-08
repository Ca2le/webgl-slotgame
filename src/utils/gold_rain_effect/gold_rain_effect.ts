import { Emitter, upgradeConfig } from "@pixi/particle-emitter";
import { Container, DisplayObject, Texture, utils } from "pixi.js";

export function goldRainEmitter(container: Container<DisplayObject>) {
    const texture = utils.TextureCache[`./assets/GOLD.png`]
    

    // Calculate the current time
    let elapsed = Date.now();

    // Update function every frame
    let update = function () {

        // Update the next frame
        requestAnimationFrame(update);

        let now = Date.now();

        // The emitter requires the elapsed
        // number of seconds since the last update
        emitter.update((now - elapsed) * 0.001);
        elapsed = now;
    };


    
    const workingConfig = {
        lifetime: {
            min: 0.5,
            max: 0.5
        },
        frequency: 0.008,
        spawnChance: 1,
        particlesPerWave: 1,
        emitterLifetime: 0.31,
        maxParticles: 1000,
        pos: {
            x: 0,
            y: 0
        },
        addAtBack: false,
        behaviors: [
            {
                type: 'alpha',
                config: {
                    alpha: {
                        list: [
                            {
                                value: 0.8,
                                time: 0
                            },
                            {
                                value: 0.1,
                                time: 1
                            }
                        ],
                    },
                }
            },
            {
                type: 'scale',
                config: {
                    scale: {
                        list: [
                            {
                                value: 1,
                                time: 0
                            },
                            {
                                value: 0.3,
                                time: 1
                            }
                        ],
                    },
                }
            },
            {
                type: 'color',
                config: {
                    color: {
                        list: [
                            {
                                value: "fb1010",
                                time: 0
                            },
                            {
                                value: "f5b830",
                                time: 1
                            }
                        ],
                    },
                }
            },
            {
                type: 'moveSpeed',
                config: {
                    speed: {
                        list: [
                            {
                                value: 200,
                                time: 0
                            },
                            {
                                value: 100,
                                time: 1
                            }
                        ],
                        isStepped: false
                    },
                }
            },
            {
                type: 'rotationStatic',
                config: {
                    min: 0,
                    max: 360
                }
            },
            {
                type: 'spawnShape',
                config: {
                    type: 'torus',
                    data: {
                        x: 0,
                        y: 0,
                        radius: 10
                    }
                }
            },
            {
                type: 'textureSingle',
                config: {
                    texture: texture
                }
            }
        ],
    }
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

   const newConfig = upgradeConfig(config, [texture])

    let emitter = new Emitter(container, newConfig);
    // Start emitting
    emitter.emit = true;

    // Start the update
    update();
}