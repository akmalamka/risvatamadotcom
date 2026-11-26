export type LocaleString = {
  en?: string
  id?: string
}

export type FooterImage = {
  _key: string
  alt?: string
  url?: string
  width?: number
  height?: number
}

export type FooterAddress = {
  text?: string
  mapUrl?: string
}

export type LayoutFooter = {
  _id?: string
  _type?: 'layoutFooter'
  tagline1?: LocaleString
  tagline2?: LocaleString
  images?: FooterImage[] | null
  address?: FooterAddress
  phone1?: string
  phone2?: string
  email?: string
  backToTop?: string
  copyright?: string
  credit?: string
}

export type LayoutQueryResult = {
  footer: LayoutFooter | null
}