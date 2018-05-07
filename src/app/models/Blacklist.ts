// @flow
import { Associator } from './Association'
import { BlacklistRule } from './Rule'

export interface Blacklist  {
  id: string,
  rule: BlacklistRule,
  inputs: Array<Associator>,
}
