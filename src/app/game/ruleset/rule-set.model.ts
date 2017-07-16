/**
 * Created by edhendil on 25.04.17.
 */
export class RuleSet {

    constructor(public name: string, public survive: boolean[], public create: boolean[]) {
    }

    static empty(name: string): RuleSet {
        return new RuleSet(name, new Array(10).fill(false), new Array(10).fill(false));
    }

    static clone(ruleSet: RuleSet): RuleSet {
        return new RuleSet(ruleSet.name, ruleSet.survive, ruleSet.create);
    }

    static fromText(name: string, rulesText: string): RuleSet {
        let result = RuleSet.empty(name);
        let rulePart = result.survive;
        for (let i = 0; i < rulesText.length; i++) {
            let current = rulesText.charAt(i);
            if (current === '/') {
                rulePart = result.create;
            } else {
                let parsedInt = parseInt(current);
                rulePart[parsedInt] = true;
            }
        }
        return result;
    }

}