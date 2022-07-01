import { VideoProperty } from './types/basic/video-property'
import { TextProperty } from './types/basic/text-property'
import { SelectProperty } from './types/basic/select-property'
import { RichTextProperty } from './types/basic/rich-text-property'
import { ImageProperty } from './types/basic/image-property'
import { CheckboxProperty } from './types/basic/checkbox-property'

export enum PropertyType {
  Text = 'Text',
  RichText = 'RichText',
  Image = 'Image',
  Video = 'Video',
  File = 'File',
  Select = 'Select',
  Checkbox = 'Checkbox',
  Repeater = 'Repeater',
}

export type Property = {
  name: string
  type: PropertyType
}

export interface Properties {
  [slug: string]: Property
}

export type BasicProperty =
  | CheckboxProperty
  | ImageProperty
  | RichTextProperty
  | SelectProperty
  | TextProperty
  | VideoProperty
