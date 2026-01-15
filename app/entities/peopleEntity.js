export class PeopleEntity {
    static async create(input) {
        if (!input) {
            throw new Error("Pámetro de entrada no puede ser null o undefined");
        }
        if (!input?.identificationNumber) {
            throw new Error('identificationNumber es obligatorio');
        }
        if (!input?.name) {
            throw new Error('name es obligatorio');
        }
        if (!input?.lastName) {
            throw new Error('lastName es obligatorio');
        }
        if (!input?.departamentId) {
            throw new Error('departamentId es obligatorio');
        }
        if (!input?.municipalityId) {
            throw new Error('municipalityId es obligatorio');
        }
        if (!input?.role) {
            throw new Error('role es obligatorio');
        }

        return{
            identificationNumber: input.identificationNumber,
            name: input.name,
            lastName: input.lastName,
            cellPhone: input?.cellPhone,
            phone: input?.phone,
            departamentId: input.departamentId,
            municipalityId: input.municipalityId,
            neighborhood: input?.neighborhood,
            sidewalk: input?.sidewalk,
            address: input?.address,
            birthdate: input?.birthdate,
            email: input?.email,
            leaderId: input?.leaderId,
            candidateId: input?.candidateId,
            voteplaceId: input?.voteplaceId,
            table: input?.table,
            gender: input?.gender,
            bloodType: input?.bloodType,
            occupation: input?.occupation,
            profession: input?.profession,
            population: input?.population,
            academicProfile: input?.academicProfile,
            description: input?.description,
            observations: input?.observations,
            politicalState: input?.politicalState,
            role: input.role,
            userId: input?.userId,
            campaignId: input.campaignId,
            createdBy: input?.createdBy
        }
    }
}