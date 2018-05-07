import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit, OnDestroy {
  private entries: any;
  loading: boolean;
  private querySubscription: Subscription;

  _current = 1;
  _pageSize = 10;
  _total = 1;
  _dataSet = [];
  _loading = true;
  _sortValue = null;
  _filterGender = [
    {name: 'male', value: false},
    {name: 'female', value: false}
  ];

  @Output() refreshData = new EventEmitter<boolean>();
  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.refreshData();
  }

  sort(value) {
    this._sortValue = value;
    this.refreshData();
  }

  reset() {
    this._filterGender.forEach(item => {
      item.value = false;
    });
    this.refreshData(true);
  }

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


  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
