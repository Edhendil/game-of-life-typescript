import {GameState} from "./game-state.model";
import {Injectable} from "@angular/core";
/**
 * Created by edhendil on 25.04.17.
 */
@Injectable()
export class GameStateFactory {

    createEmptyState(width: number, height: number): GameState {
        return GameState.empty(width, height);
    }

    createLineState(width: number, height: number): GameState {
        let result = GameState.empty(width, height);
        for (let i = 0; i < width; i++) {
            result.setField(i, i, true);
        }
        return result;
    }

    createRandomState(width: number, height: number): GameState {
        let result = GameState.empty(width, height);
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                result.setField(i, j, Math.random() < 0.5);
            }
        }
        return result;
    }

}