export type ContactModel = { [key: string]: string }

export type PersonalModel = {
  title: string
  subtitle: string
  shortDescription: string
  description: string[]
  contacts: ContactModel
  location: string
}

export type DetailViewModel = {
  id: string
  title: string
  entity: {
    name: string
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

export type SkillViewModel = {
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

export type ExperienceViewModel = DetailViewModel & {
  entity: {
    name: string
    logoUrl: string
  }
}

export type ProjectViewModel = DetailViewModel & {
  stack: string[]
  categories: string[]
}

export type SimpleCardViewModel = ExperienceViewModel

export type ThumbnailCardViewModel = ProjectViewModel
