import { Property, PropertyType } from '../../property'

const richTextDefaultValue =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si mala non sunt, iacet omnis ratio Peripateticorum.'

export type RichTextProperty = Property & {
  defaultValue: string
}

export function createRichTextProperty(
  name: string,
  defaultValue = richTextDefaultValue
): RichTextProperty {
  return {
    name,
    type: PropertyType.RichText,
    defaultValue,
  }
}
