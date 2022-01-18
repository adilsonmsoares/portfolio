export type ContactData = { [key: string]: string }

export type PersonalData = {
  title: string
  subtitle: string
  shortDescription: string
  description: string[]
  contacts: ContactData
}

export type ViewerData = {
  id: string
  title: string
  entity: string
  startDate: string
  endDate: string
  shortDescription: string
  sectionDescription: [
    {
      title: string
      description: string[]
    }
  ]
  images: string[]
  visitButton: {
    text: string
    url: string
  }
}
