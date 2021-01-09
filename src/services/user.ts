import { pick } from './utils'

export const modelToUser = (model: UserModel): User =>
  pick(model, ['id', 'firstName', 'lastName', 'avatar', 'email', 'type'])

export default {
  modelToUser,
}
