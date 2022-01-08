export type ContactData = { [key: string]: string }

export type PersonalData = {
  title: string
  subtitle: string
  description: string
  contacts: ContactData
}

export type AboutData = {
  description: string[]
}
