import { TestBed, inject } from '@angular/core/testing';

import { GraphqlMockerService } from './graphql-mocker.service';

describe('GraphqlMockerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphqlMockerService]
    });
  });

  it('should be created', inject([GraphqlMockerService], (service: GraphqlMockerService) => {
    expect(service).toBeTruthy();
  }));
});
