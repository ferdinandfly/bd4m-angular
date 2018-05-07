// @flow
import {Domain} from './Domain';
import {EdgeRuleField} from './EdgeRuleField';
import {Field} from './Field';
import {Reference} from './Reference';

export enum RulesTypes {
  association = 'ASSOCIATION',
  blacklist = 'BLACKLIST',
  creation = 'CREATION',
}

export interface Rule {
  id: string,
  label: string,
  domain: Domain,
  inputs: Array<EdgeRuleField>,
  __typename: RulesTypes
}

export interface AssociationRule extends Rule {
  output: EdgeRuleField,
  reference: Reference,
  referenceOutput: Field,
  __typename: RulesTypes.association
}

export interface BlacklistRule extends Rule {
  __typename: RulesTypes.blacklist
}
