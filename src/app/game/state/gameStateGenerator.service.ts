import {Injectable} from "@angular/core";
import {GameStateFactory} from "./gameStateFactory.service";
import {GameStateGenerator} from "./gameStateGenerator.model";
/**
 * Created by edhendil on 27.04.17.
 */
@Injectable()
export class GameStateGeneratorService {

    constructor(private gameStateFactory: GameStateFactory) {}

    private availableStates: GameStateGenerator[] = [
        new GameStateGenerator('empty', this.gameStateFactory.createEmptyState),
        new GameStateGenerator('line', this.gameStateFactory.createLineState),
        new GameStateGenerator('random', this.gameStateFactory.createRandomState)
    ];

    getAllStateFactories(): GameStateGenerator[] {
        return this.availableStates;
    }

    getByName(name: string): GameStateGenerator {
        return this.availableStates.find(generator => generator.name === name);
    }

}