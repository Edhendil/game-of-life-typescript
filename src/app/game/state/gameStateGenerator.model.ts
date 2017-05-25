import {GameState} from "./gameState.model";
/**
 * Created by edhendil on 27.04.17.
 */
export class GameStateGenerator {

    constructor(public name: string, private factory: {(width: number, height: number): GameState}) {}

    create(width: number, height: number): GameState {
        return this.factory(width, height);
    }

}