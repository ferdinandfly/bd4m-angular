import {Data} from './Data';
import {Domain} from './Domain';
import {EdgeRuleField} from './EdgeRuleField';
import {Field, TextField} from './Field';
import {Reference} from './Reference';

export interface AssociationRule {
  id: string,
  label: string,
  domain: Domain,
  reference: Reference,
  inputs: Array<EdgeRuleField>,
  output: EdgeRuleField,
  referenceOutput: Field,
}

export enum AssociatorType {
  textAssociator = 'TextAssociator',
  intAssociator = 'IntAssociator',
}

export interface Associator {
  field: Field,
  __typename: AssociatorType
}

export interface TextAssociator extends Associator {
  field: TextField,
  eq: string,
  __typename: AssociatorType.textAssociator,
}

export interface Association {
  id: string,
  field: Field,
  rule: AssociationRule,
  inputs: Array<Associator>,
  output: Data,
}


export interface TextInputAssociator {
  textFieldId: string,
  eq: string,
}
