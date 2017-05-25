/**
 * Created by edhendil on 27.04.17.
 */
export class MouseEvents {

    static isLeftButtonPressed(event: any): boolean {
        if (event.buttons !== undefined) {
            return event.buttons === 1;
        }
        return event.which === 1;
    }

    static isRightButtonPressed(event: any): boolean {
        if (event.buttons !== undefined) {
            return event.buttons === 2;
        }
        return event.which === 3;
    }
    
}