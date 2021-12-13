// ============================== TYPES ==============================

export type ActionState<T> = {
  data?: T
  pending: boolean
  error: boolean
}

export type PersonalData = {
  title: string
  subtitle: string
  description: string
}

// ============================== FUNCTIONS ==============================

export function CreateActionState<T>(arg?: T): ActionState<T> {
  const type: ActionState<T> = {
    data: arg,
    pending: false,
    error: false
  }

  return type
}
