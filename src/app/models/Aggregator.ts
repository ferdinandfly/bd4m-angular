export enum AggregateOperator {
  sum = 'SUM',
  count = 'COUNT',
  average = 'AVERGAGE',
  max = 'MAX',
  min = 'MIN'
}

export interface AggregateField  {
  operator: AggregateOperator;
  fieldName: string;
  outputName: string;
}

export interface EntriesAggregator {
  aggregateFields: Array<string>;
  aggregateOutputs?: Array<AggregateField>;
}
