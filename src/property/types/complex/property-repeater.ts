import { Properties, Property, PropertyType } from '../../property'

export type PropertyRepeater<T extends Properties> = Property & {
  properties: T
}

export function createPropertyRepeater<T extends Properties>(
  name: string,
  properties: T
): PropertyRepeater<T> {
  return {
    name,
    type: PropertyType.Repeater,
    properties,
  }
}
