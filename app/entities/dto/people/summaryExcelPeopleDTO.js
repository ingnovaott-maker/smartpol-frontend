import { DateFormat } from '../../../utils/date/dateFormat.js';
import { ROLES_OBJECT } from '../../../utils/enums/rolesEnum.js';
export class SummaryExcelPeopleDTO {
  static create(people) {
    const candidate = people?.candidate?.name+' '+people?.candidate?.lastName;
    return {
      Id: people?.id,
      Identificacion: people?.identificationNumber,
      Nombres: people?.name,
      Apellidos: people?.lastName,
      Celular: people?.cellPhone,
      Telefono: people?.phone,
      Barrio: people?.neighborhood,
      Vereda: people?.sidewalk,
      Direccion: people?.address,
      Fecha_Nacimiento: DateFormat.yyyyMMDD(people?.birthdate),
      Correo: people?.email,
      Puesto_Votacion: people?.voteplace?.name,
      Mesa: people?.table,
      Genero: people?.gender,
      Tipo_SAngre: people?.bloodType,
      Ocupacion: people?.occupation,
      Profesion: people?.profession,
      Poblacion: people?.population,
      Perfil_Academico: people?.academicProfile,
      Descripcion: people?.description,
      Observaciones: people?.observations,
      Estado_Politico: people?.politicalState,
      Rol: people?.user?.role ?? ROLES_OBJECT.VOTANTE,
      Lider: people?.leader?.name,
      Candidato: candidate ?? 'NULL',
      Departamento: people?.departament?.name,
      Municipio: people?.municipality?.name
    };
  }
}
