import { Property, PropertyType } from '../../property'

const textPropertyDefaultValue = 'Lorem Ipsum dollor met'

export type TextProperty = Property & {
  defaultValue: string
}

export function createTextProperty(
  name: string,
  defaultValue = textPropertyDefaultValue
): TextProperty {
  return {
    name,
    type: PropertyType.Text,
    defaultValue,
  }
}
