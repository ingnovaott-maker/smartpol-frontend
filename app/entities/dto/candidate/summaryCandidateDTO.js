export class SummaryCandidateDTO {
    static create(input) {
        return {
            id: input.id,
            identificationNumber: input.identificationNumber,
            name: input.name,
            lastName: input.lastName,
            email: input.email,
            cellphone: input.cellphone,
            address: input.address,
            politicParty: input.politicParty,
            type: input.type,
            userId: input.userId,
        }
    }
}