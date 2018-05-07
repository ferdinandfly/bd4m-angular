
/* import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';
import { SchemaLink } from 'apollo-link-schema'
import { InMemoryCache } from 'apollo-cache-inmemory';

// see https://github.com/angular/angular-cli/issues/8106
const schemaString = require('graphql-tag/loader!./schema.graphql');


const schema = makeExecutableSchema({ typeDefs: schemaString });

export const  mockOptions = {
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache()
  } */