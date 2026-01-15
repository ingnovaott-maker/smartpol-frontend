import { DateFormat } from "../../../utils/date/dateFormat.js";
export class SummaryPeopleDTO {
  static create(people) {
    if (!people) return {};
    return {
      id: people?.id,
      identificationNumber: people?.identificationNumber,
      name: people?.name,
      lastName: people?.lastName,
      cellPhone: people?.cellPhone,
      phone: people?.phone,
      departamentId: people?.departamentId,
      municipalityId: people?.municipalityId,
      neighborhood: people?.neighborhood,
      sidewalk: people?.sidewalk,
      address: people?.address,
      birthdate: DateFormat.yyyyMMDD(people?.birthdate),
      email: people?.email,
      leaderId: people?.leaderId,
      candidateId: people?.candidateId,
      votePlace: people?.votePlace,
      table: people?.table,
      gender: people?.gender,
      bloodType: people?.bloodType,
      occupation: people?.occupation,
      profession: people?.profession,
      population: people?.population,
      academicProfile: people?.academicProfile,
      description: people?.description,
      observations: people?.observations,
      politicalState: people?.politicalState,
      userId: people?.userId,
      role: people?.user?.role,
      isVoted: people?.isVoted === null ? false : people.isVoted,
      votedDate:  DateFormat.yyyyMMDDHHMMSS(people?.votedDate),
      leader: !people?.leader
        ? null
        : {
            id: people?.leader?.id,
            name: people?.leader?.name,
            username: people?.leader?.username,
          },
      candidate: !people?.candidate
        ? null
        : {
            id: people?.candidate?.id,
            name: people?.candidate?.name,
            lastName: people?.candidate?.lastName,
          },
      departament: {
        id: people?.departament?.id,
        name: people?.departament?.name,
      },
      municipality: {
        id: people?.municipality?.id,
        name: people?.municipality?.name,
      },
      voteplace: !people?.voteplace
        ? null
        : {
            id: people?.voteplace?.id,
            name: people?.voteplace?.name,
            table: people?.voteplace?.table,
            address: people?.voteplace?.address,
          },
    };
  }
}
