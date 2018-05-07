// @flow
import {Association} from './Association';
import {Blacklist} from './Blacklist';
import {TextInputAssociator} from './TextInputAssociator';

export interface MutationCreateAssociationArgs {
  ruleId: string;
  textInputs: Array<TextInputAssociator>;
  outputId: string;
}

export interface MutationCreateBlacklistArgs {
  ruleId: string;
  textInputs: Array<TextInputAssociator>;
}

export interface Mutation {
  createAssociation: Association;
  createBlackList: Blacklist;
}
