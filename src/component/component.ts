import { Properties } from 'property'
import { FunctionComponent } from 'react'

export enum ComponentScope {
  Page,
  Blog,
  Global,
}

export interface Component {
  name: string
  scope: ComponentScope
  preview: string
  component: FunctionComponent
  properties: Properties
}

export type Components = {
  [slug: string]: Component
}
