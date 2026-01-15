export class CandidateEntity {
    static async create(input) {
        return{
            identificationNumber: input?.identificationNumber,
            name: input?.name,
            lastName: input?.lastName,
            email: input?.email,
            cellPhone: input?.cellPhone,
            address: input?.address,
            politicParty: input?.politicParty,
            type: input?.type,
            main: input?.main ?? false,
            userId: input?.userId,
            campaignId: input?.campaignId,
        }
    }
}