/**
 * Created by edhendil on 27.04.17.
 */
import {RuleSet} from "./rule-set.model";
import {Injectable} from "@angular/core";
@Injectable()
export class RuleSetService {

    private availableRules: RuleSet[] = [
        RuleSet.fromText('conway', '23/3'),
        RuleSet.fromText('seed', '/2'),
        RuleSet.fromText('ameba', '1358/357'),
        RuleSet.fromText('daynight', '34678/3678'),
        RuleSet.fromText('longlife', '5/345'),
        RuleSet.fromText('coral', '45678/3'),
        RuleSet.fromText('34', '34/34'),
        RuleSet.fromText('diameba', '5678/3'),
        RuleSet.fromText('highlife', '23/36'),
        RuleSet.fromText('replicator', '1357/1357'),
        RuleSet.fromText('labirynth', '12345/3'),
        RuleSet.fromText('cancer', '1/1'),
        RuleSet.fromText('petals', '012345678/3'),
        RuleSet.fromText('wolfram', '018/018'),
        RuleSet.fromText('traycloth', '/234'),
        RuleSet.fromText('coagulation', '235678/378'),
        RuleSet.fromText('pesudolife', '238/357')
    ];

    getAllRules(): RuleSet[] {
        return this.availableRules;
    }

}