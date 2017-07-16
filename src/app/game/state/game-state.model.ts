import {RuleSet} from "../ruleset/rule-set.model";
/**
 * Created by edhendil on 25.04.17.
 */
export class GameState {

    private constructor(public width: number, public height: number, public lifeData: boolean[][]) {
    }

    static empty(width: number, height: number): GameState {
        let data = new Array(width + 2);
        for (let i = 0; i < width + 2; i++) {
            data[i] = new Array(height + 2).fill(false);
        }
        return new GameState(width, height, data);
    }

    updateLife(rules: RuleSet): GameState {
        let newState = GameState.empty(this.width, this.height);
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                var neighbours = this.countNeighbours(i, j);
                var newValue;
                if (this.getField(i, j)) {
                    newValue = rules.survive[neighbours];
                } else {
                    newValue = rules.create[neighbours];
                }
                newState.setField(i, j, newValue);
            }
        }
        return newState;
    }

    getField(x: number, y: number): boolean {
        return this.lifeData[x + 1][y + 1];
    }

    setField(x: number, y:number, value: boolean): void {
        this.lifeData[x + 1][y + 1] = value;
    }

    countNeighbours(x: number, y: number) {
        let counter = 0;
        x++;
        y++;
        if (this.lifeData[x - 1][y]) {
            counter++;
        }
        if (this.lifeData[x + 1][y]) {
            counter++;
        }
        if (this.lifeData[x][y - 1]) {
            counter++;
        }
        if (this.lifeData[x - 1][y - 1]) {
            counter++;
        }
        if (this.lifeData[x + 1][y - 1]) {
            counter++;
        }
        if (this.lifeData[x][y + 1]) {
            counter++;
        }
        if (this.lifeData[x - 1][y + 1]) {
            counter++;
        }
        if (this.lifeData[x + 1][y + 1]) {
            counter++;
        }
        return counter;
    }

    countLive(): number {
        let liveCount = 0;
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                if (this.getField(i, j)) {
                    liveCount++;
                }
            }
        }
        return liveCount;
    }

    countDead(): number {
        return this.count() - this.countLive();
    }

    count(): number {
        return this.width * this.height;
    }

}