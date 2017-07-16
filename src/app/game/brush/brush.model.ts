/**
 * Created by edhendil on 25.04.17.
 */
export class Brush {

    pattern: boolean[][];

    private constructor(public size: number, public scale: number) {
        let pattern = new Array(size);
        for (let i = 0; i < size; i++) {
            pattern[i] = new Array(size).fill(null);
        }
        this.pattern = pattern;
    }

    static ofSize(size: number): Brush {
        return new Brush(size, 1);
    }

}