import {Domain} from './Domain';
import {EntriesFilter} from './Filter';
import {EntriesList} from './EntriesList';

export interface QueryDomainArgs {
  id: string,
}

export interface QueryReferencesArgs {
  reference: string,
  filter?: EntriesFilter,
}

export interface Query {
  domains: Array<Domain>,
  domain: Domain,
  references: EntriesList,
}
