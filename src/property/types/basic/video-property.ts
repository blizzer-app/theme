import { Property, PropertyType } from '../../property'

export type VideoProperty = Property & {
  defaultValue: string | undefined
}

export function createVideoProperty(
  name: string,
  defaultValue = undefined
): VideoProperty {
  return {
    name,
    type: PropertyType.Video,
    defaultValue,
  }
}
