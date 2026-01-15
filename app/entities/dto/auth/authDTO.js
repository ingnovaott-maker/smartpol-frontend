import { DateFormat } from '../../../utils/date/dateFormat.js'
export class AuthDTO {
    static create(input) {
        const { campaign } = input;
        return {
            id: input.id,
            username: input.username,
            name: input.name,
            role: input.role,
            active: input.active,
            campaignId: input.campaignId,
            electionDay: DateFormat.isToday(campaign?.endDate)
        }
    }
}