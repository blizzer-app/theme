import { Property, PropertyType } from '../../property'

export type SelectProperty<T = string> = Property & {
  options: SelectOptions<T>
  defaultValue: T
}

export type SelectOptions<T> = {
  [slug: string]: T
}

export function createSelectProperty<T>(
  name: string,
  options: SelectOptions<T>,
  defaultValue: T
): SelectProperty<T> {
  return {
    name,
    type: PropertyType.Select,
    options,
    defaultValue,
  }
}
