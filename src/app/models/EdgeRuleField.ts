import {Field} from './Field';

export enum EdgeRuleFieldWeight {
  weak = 'WEAK',
  strong = 'STRONG',
}

export interface EdgeRuleField {
  id: string,
  node: Field,
  weight: EdgeRuleFieldWeight,
}
