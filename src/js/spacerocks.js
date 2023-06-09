import { Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";
import { Player } from './player'

export class Rock extends Actor{
    constructor() {
        super({
            width: Resources.Rock.width,
            height: Resources.Rock.height
        });
        this.graphics.use(Resources.Rock.toSprite());
        this.vel = new Vector(-35,1);
        this.scale = new Vector(0.3, 0.3);
    }
    onInitialize(){
        this.on('collisionstart', (event) => this.hitSpaceShip(event))
        this.pointer.useGraphicsBounds = true;
        this.on("pointerup", function (e) {
            this.kill();
        });
    }
    hitSpaceShip(event) {
        if (event.other instanceof Player) {
            event.other.kill()
        }
    }
}