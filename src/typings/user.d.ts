type UserType = import('./enums/User').UserType

interface User {
  id: ID
  firstName: string
  lastName: string
  email: string
  avatar: string
  type: UserType
}
