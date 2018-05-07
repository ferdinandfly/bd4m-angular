import {EntriesAggregator} from './Aggregator';
import {EntriesFilter} from './Filter';
import {EntriesList} from './EntriesList';
import {Field} from './Field';
import {Rule, RulesTypes} from './Rule';

export interface DomainEntriesArgs {
  filter?: EntriesFilter;
  fields?: Array<string>;
  aggregate?: EntriesAggregator;
}

export interface DomainRulesArgs {
  rulesTypes?: Array<RulesTypes>;
  filter?: EntriesFilter;
  fields?: Array<string>;
  aggregate: EntriesAggregator;
}

export interface Domain {
  id: string;
  name: string;
  fields: Array<Field>;
  entries: EntriesList;
  rules: Array<Rule>;
}

export interface ShortDomain {
  id: string;
  name: string;
}

export type DomainList = Array<ShortDomain>;


export class DomainEntries {
  id: string;
  entries: EntriesList;
}
