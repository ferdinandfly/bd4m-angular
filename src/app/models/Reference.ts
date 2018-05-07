import { Field } from './Field'

export interface Reference {
  id: string,
  name: string,
  fields: Array<Field>,
}
