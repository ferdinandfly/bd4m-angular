export enum FieldType  {
  textField= 'TextField',
  intField = 'IntField',
}

export interface Field  {
  id: string,
  key: string,
  label: string,
  __typename: FieldType,
}

export interface TextField extends Field {
  __typename: FieldType.textField
}
