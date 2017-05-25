/**
 * Created by edhendil on 25.04.17.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'range'})
export class RangePipe implements PipeTransform {
    transform(value: number) : any {
        let res = [];
        for (let i = 0; i < value; i++) {
            res.push(i);
        }
        return res;
    }
}