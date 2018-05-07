import {Component, OnDestroy, OnInit} from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs/Subscription';

const domain = gql`
 query domain($id: ID!) {
    domain(id: $id) {
      id
      name
      fields {
        id
        key
        label
        type: __typename
      }
    }
  }
`

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.less']
})
export class DomainComponent implements OnInit, OnDestroy {
  loading: boolean;
  domainList: any;

  private querySubscription: Subscription;

  constructor(
    private apollo: Apollo,
  ) {}


  refreshData(reset = false) {
    if (reset) {
      this._current = 1;
    }
    this._loading = true;
    this.querySubscription = this.apollo.watchQuery<any>({
      query: listEntries
    })
      .valueChanges
      .subscribe(({data, loading}) => {
        this._loading = loading;
        this._total = 200;
        this.entries = data.domain.entries;
        this._dataSet = data.results;
      });
  }

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: domain
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.domainList = data.domain;
        console.log(data);
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
