const canvas: HTMLCanvasElement = document.getElementById("canvas1")! as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

const CANVAS_WIDTH = (canvas.width = 300);
const CANVAS_HEIGHT = (canvas.height = 300);
const spriteWidth = 6876 / 12;
const spriteHeight = 5230 / 10;

const playerImage = new Image();
playerImage.src = "./assets/shadow_dog.png"
const dog_states = {
    idle: {
        frame_no: 0,
        count: 7
    },
    float_up: {
        frame_no: 1,
        count: 7
    },
    float_dw: {
        frame_no: 2,
        count: 7
    },
    run: {
        frame_no: 3,
        count: 9
    },
    dizzy: {
        frame_no: 4,
        count: 11
    },
    sit: {
        frame_no: 5,
        count: 5
    },
    roll: {
        frame_no: 6,
        count: 7
    },
    bark: {
        frame_no: 7,
        count: 7
    },
    ko: {
        frame_no: 8,
        count: 12
    },
    lift_leg: {
        frame_no: 9,
        count: 4
    }
}

let frameX = 0;
let frameY = 0;

let gameFrame = 0;
const staggerFrame = 5;
let curr_anim = dog_states.idle;

const dropdown = document.getElementById("animations");
dropdown?.addEventListener("change", (e) => {
    type States = "idle" | "float_up" | "float_dw" | "run" | "dizzy" | "sit" | "roll" | "bark" | "ko" | "lift_leg"
    const state: States = (e.target as HTMLInputElement).value as States
    curr_anim = dog_states[state]
})

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrame) % curr_anim.count;
    frameX = position * spriteWidth;
    ctx.drawImage(playerImage, frameX, curr_anim.frame_no * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    requestAnimationFrame(animate);
    gameFrame++
}
animate();
