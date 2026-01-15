import sequelize  from '../database/sequelize.js'

export class VotePlaceRepository {

    async getAll(campaignId) {
        const { VotePlace } = sequelize.models
        let valueMunicipality;
        if(campaignId === "3"){
            valueMunicipality = 773;
        } else if(campaignId === "4") {
            valueMunicipality = 2;
        }else {
            valueMunicipality = 773;
        }
        return await  VotePlace.findAll({
            attributes: ['id', 'name', 'table'],
            where: {
                municipality_id: valueMunicipality
            }
        });
    }
}