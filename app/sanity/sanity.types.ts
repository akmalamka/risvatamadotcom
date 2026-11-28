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
}

export type LayoutQueryResult = {
  footer: LayoutFooter | null
}

export type HeroTitleBlock = {
  _key: string
  _type: 'heroTitle'
  title?: LocaleString
  subtitle?: LocaleString
}

export type PageComponent = HeroTitleBlock

export type PageQueryResult = {
  title?: string
  description?: string
  ogImage?: {
    asset?: {
      _ref?: string
    }
  }
  components?: PageComponent[] | null
}