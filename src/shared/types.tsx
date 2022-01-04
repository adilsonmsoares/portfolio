// ============================== TYPES ==============================

export type ActionState<T> = {
  data: T
  pending: boolean
  error: boolean
}

export type ContactData = { [key: string]: string }

export type PersonalData = {
  title: string
  subtitle: string
  description: string
  contacts: ContactData
}

// ============================== FUNCTIONS ==============================

export function CreateActionState<T>(arg?: T): ActionState<T> {
  const type: ActionState<T> = {
    data: arg || ({} as T),
    pending: true,
    error: false
  }

  return type
}
