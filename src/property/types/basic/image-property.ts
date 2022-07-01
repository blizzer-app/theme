import { Property, PropertyType } from '../../property'

export type ImageProperty = Property & {
  defaultValue: string | undefined
}

export function createImageProperty(
  name: string,
  defaultValue = undefined
): ImageProperty {
  return {
    name,
    type: PropertyType.Image,
    defaultValue,
  }
}
