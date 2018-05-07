import {Injectable} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

import {DomainEntries, DomainList} from './models/Domain';
import {EntriesList} from './models/EntriesList';
import {Observable} from 'rxjs/Observable';
import {ApolloQueryResult} from 'apollo-client';
import {MessageService} from './message.service';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class ApolloService {

  loading: boolean;
  isCollapsed = true;

  private querySubscription: Subscription;

  domainList: DomainList;
  entries: EntriesList;


  constructor(
    private apollo: Apollo,
    private messageService: MessageService
  ) {
  }

  getDomainList() {
    const listDomains = gql`
        query ListDomains {
            domains {
                id
                name
            }
        }
    `;
    this.querySubscription = this.apollo.watchQuery<any>({
      query: listDomains
    })
      .valueChanges
      .subscribe(({data, loading}) => {
        this.loading = loading;
        this.domainList = data.domains;
        console.log(data);
      });
  }

  getEntries(reset: boolean): Observable<ApolloQueryResult<EntriesList>> {
    const listEntries = gql`
        query getEntries(
        $domainId: ID!
        $aggregator: EntriesAggregator
        $filter: EntriesFilter
        $fields: [String!]
        ) {
            domain(id: $domainId) {
                id
                entries(aggregate: $aggregator, filter: $filter, fields: $fields) {
                    count
                    entries {
                        id
                        data {
                            key
                            type: __typename
                            ... on TextData {
                                value
                            }
                        }
                    }
                }
            }
        }
    `;
    return this.apollo.watchQuery<DomainEntries>({
      query: listEntries
    }).valueChanges
      .pipe(
        tap(result => {
          if (result.errors.length > 0) {
            this.log(result.errors.reduce((accumulator, error) => (error.message + '\n' + accumulator), ''));
          } else {
            this.log(`fetch Entries`);
          }
        }),
        map(result => ({...result, data: result.data.entries}))
      );
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('DomainService: ' + message);
  }
}
