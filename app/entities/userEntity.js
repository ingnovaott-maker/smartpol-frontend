
import { hashPassword } from '../utils/encrypt/passwordEncriptUtils.js'
export class UserEntity {
  static async create(name, username, role, campaignId) {
    const password = await hashPassword(username);
    return {
        name,
        username,
        password,
        role: role.toUpperCase(),
        campaignId
    }
  }
}
