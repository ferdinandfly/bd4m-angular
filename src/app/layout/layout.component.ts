import {Component, OnDestroy, OnInit} from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs/Subscription';

const listDomains = gql`
query ListDomains {
    domains {
      id
      name
    }
  }
`

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit, OnDestroy {
  loading: boolean;
  domainList: any;
  isCollapsed = true;
  private querySubscription: Subscription;

  constructor(
    private apollo: Apollo,
  ) {}

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: listDomains
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.domainList = data.domains;
        console.log(data);
      });
  }
  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
