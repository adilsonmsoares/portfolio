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
