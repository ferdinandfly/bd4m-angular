export enum DataType {
  textData = 'TextData',
  intData = 'IntData',
}

export interface Data {
  key: string,
  value: any,
  __typename: DataType,
}

export interface TextData {
  key: string,
  value: string,
  __typename: DataType.textData,
}
