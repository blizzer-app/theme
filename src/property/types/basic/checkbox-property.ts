import { Property, PropertyType } from '../../property'

export type CheckboxProperty = Property & {
  defaultValue: boolean
}

export function createCheckboxProperty(
  name: string,
  defaultValue = false
): CheckboxProperty {
  return {
    name,
    type: PropertyType.Checkbox,
    defaultValue,
  }
}
