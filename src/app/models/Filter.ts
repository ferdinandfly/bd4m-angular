export interface Filter {
  name: string,
}

export interface IntFilter extends Filter {
  eq?: number,
  lt?: number,
  gt?: number,
  in?: Array<number>,
}

export interface StringFilter extends Filter {
  eq?: string,
  like?: string,
  in?: Array<string>,
}

export interface NullFilter extends Filter {
  name: string,
}

// TODO: Better typing
export type ZonedDateTime = string

export interface DateFilter extends Filter {
  eq?: ZonedDateTime,
  lt?: ZonedDateTime,
  gt?: ZonedDateTime,
}

export interface EntriesFilter extends Filter {
  and?: Array<EntriesFilter>,
  or?: Array<EntriesFilter>,
  intFilter?: IntFilter,
  stringFilter?: StringFilter,
  dateFilter?: DateFilter,
  nullFilter?: NullFilter,
}
