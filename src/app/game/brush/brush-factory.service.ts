import {Brush} from "./brush.model";
import {Injectable} from "@angular/core";
/**
 * Created by edhendil on 25.04.17.
 */
@Injectable()
export class BrushFactory {

    square(): Brush {
        let result = Brush.ofSize(11);
        result.pattern[5][5] = true;
        return result;
    }

    eraser(): Brush {
        let result = Brush.ofSize(11);
        result.pattern[5][5] = true;
        return result;
    }

    cross(): Brush {
        let result = Brush.ofSize(11);
        result.pattern[5][4] = true;
        result.pattern[4][5] = true;
        result.pattern[5][5] = true;
        result.pattern[6][5] = true;
        result.pattern[5][6] = true;
        return result;
    }

    missile(): Brush {
        let result = Brush.ofSize(11);
        result.pattern[6][6] = true;
        result.pattern[6][5] = true;
        result.pattern[6][4] = true;
        result.pattern[5][4] = true;
        result.pattern[4][5] = true;
        return result;
    }

    custom(): Brush {
        return Brush.ofSize(11);
    }

}