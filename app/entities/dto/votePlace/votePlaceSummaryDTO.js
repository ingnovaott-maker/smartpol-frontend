export class VotePlaceSummaryDTO {
    static create(votePlace) {
        return {
            id: votePlace.id,
            name: votePlace.name,
            tables: votePlace.table.split(',')
        } 
    }
}