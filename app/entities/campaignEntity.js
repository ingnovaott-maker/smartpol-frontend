export class CampaignEntity {
  static async create(input) {
    return {
      name: input?.name,
      startDate: input?.startDate,
      endDate: input?.endDate,
      description: input?.description,
    };
  }
}
