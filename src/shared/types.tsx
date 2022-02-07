export type ContactModel = { [key: string]: string }

export type PersonalModel = {
  title: string
  subtitle: string
  shortDescription: string
  description: string[]
  contacts: ContactModel
}

export type DetailViewModel = {
  id: string
  title: string
  entity: {
    name: string
    logoUrl: string
  }
  startDate: string
  endDate: string
  shortDescription: string
  sectionDescription: [
    {
      title: string
      description: string[]
    }
  ]
  images: [
    {
      url: string
      alt: string
    }
  ]
  visitButton: {
    text: string
    url: string
  }
}

export type SkillModel = {
  type: string
  section: [
    {
      title: string
      skills: [
        {
          name: string
          iconName: string
        }
      ]
    }
  ]
}
