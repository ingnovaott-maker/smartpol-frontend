export class UserSummaryDTO {
    static create(user) {
        return {
            id: user.id,
            name: user.name,
            username: user.username,
            role: user.role
        } 
    }
}