import { ChipStatus } from '@/components';
import { Columns } from '@/components/TableComponent/types';

export interface Action {
	module?: {
		path: string;
	};
	create?: {
		path: string;
		permission: boolean;
	};
	detail?: {
		path: string;
		permission: boolean;
	};
	update?: {
		path: string;
		permission: boolean;
	};
	delete?: {
		permission: boolean;
	};
	report?: {
		permission: boolean;
	};
	voter?: {
		permission: boolean;
	};
	search?: {
		permission: boolean;
	};
	pagination?: {
		permission: boolean;
	};
}

export interface ModuleAction {
	headers: Columns[];
	actions: Action;
}

interface ModuleActions {
	[module: string]: ModuleAction;
}

export const moduleActions: ModuleActions = {
	'module-voter': {
		headers: [
			{
				name: 'Cédula',
				selector: (row: { identificationNumber: any }) =>
					row.identificationNumber,
				sortable: true,
				width: '150px',
			},
			{
				name: 'Nombres',
				selector: (row: { name: any }) => row.name,
				sortable: true,
				width: '200px',
			},
			{
				name: 'Apellidos',
				selector: (row: { lastName: any }) => row.lastName,
				sortable: true,
				width: '200px',
			},
			{
				name: 'Departamento',
				selector: (row: { departament: { name: string } }) =>
					row?.departament?.name,
				sortable: true,
			},
			{
				name: 'Municipio',
				selector: (row: { municipality: { name: string } }) =>
					row.municipality?.name,
				sortable: true,
			},
			{
				name: 'Género',
				selector: (row: { gender: any }) => row.gender,
				sortable: true,
			},
			{
				name: '¿Voto registrado?',
				sortable: true,
				width: '180px',
				cell: (row: { isVoted: boolean }) => (
					<ChipStatus status={row?.isVoted} message1='Si' message2='No' />
				),
			},
			{
				name: 'Fecha de registro del voto',
				width: '250px',
				selector: (row: { votedDate: any }) => row.votedDate,
				sortable: true,
			},
		],
		actions: {
			module: {
				path: '/personas',
			},
			create: {
				path: '/crear-persona',
				permission: true,
			},
			detail: {
				path: '/detalle-persona',
				permission: true,
			},
			update: {
				path: '/editar-persona',
				permission: true,
			},
			delete: {
				permission: false,
			},
			voter: {
				permission: false,
			},
			search: {
				permission: true,
			},
			pagination: {
				permission: true,
			},
		},
	},
	'module-report': {
		headers: [
			{
				name: 'Cédula',
				selector: (row: { identificationNumber: any }) =>
					row.identificationNumber,
				sortable: true,
				width: '150px',
			},
			{
				name: 'Nombres',
				selector: (row: { name: any }) => row.name,
				sortable: true,
				width: '200px',
			},
			{
				name: 'Apellidos',
				selector: (row: { lastName: any }) => row.lastName,
				sortable: true,
				width: '200px',
			},
			{
				name: 'Departamento',
				selector: (row: { departament: { name: string } }) =>
					row?.departament?.name,
				sortable: true,
			},
			{
				name: 'Municipio',
				selector: (row: { municipality: { name: string } }) =>
					row.municipality?.name,
				sortable: true,
			},
			{
				name: 'Género',
				selector: (row: { gender: any }) => row.gender,
				sortable: true,
			},
		],
		actions: {
			report: {
				permission: true,
			},
			pagination: {
				permission: true,
			},
		},
	},
	'module-report-candidates': {
		headers: [
			{
				name: 'Nombres',
				selector: (row: { name: any }) => row.name,
				sortable: true,
			},
			{
				name: 'Apellidos',
				selector: (row: { last_name: any }) => row.last_name,
				sortable: true,
			},
			{
				name: 'Inscritos',
				selector: (row: { inscritos: any }) => row.inscritos,
				sortable: true,
			},
			{
				name: 'Reportados',
				selector: (row: { reportados: any }) => row.reportados,
				sortable: true,
			},
			{
				name: 'Pendientes',
				selector: (row: { pendientes: any }) => row.pendientes,
				sortable: true,
			},
		],
		actions: {
			search: {
				permission: false,
			},
			pagination: {
				permission: false,
			},
		},
	},
	'module-report-leaders': {
		headers: [
			{
				name: 'Nombres',
				selector: (row: { name: any }) => row.name,
				sortable: true,
			},
			{
				name: 'Inscritos',
				selector: (row: { inscritos: any }) => row.inscritos,
				sortable: true,
			},
			{
				name: 'Reportados',
				selector: (row: { reportados: any }) => row.reportados,
				sortable: true,
			},
			{
				name: 'Pendientes',
				selector: (row: { pendientes: any }) => row.pendientes,
				sortable: true,
			},
		],
		actions: {
			search: {
				permission: false,
			},
			pagination: {
				permission: false,
			},
		},
	},
	'module-report-vote-places': {
		headers: [
			{
				name: 'Nombre',
				width: '500px',
				selector: (row: { name: any }) => row.name,
				sortable: true,
			},
			{
				name: 'Inscritos',
				selector: (row: { inscritos: any }) => row.inscritos,
				sortable: true,
			},
			{
				name: 'Reportados',
				selector: (row: { reportados: any }) => row.reportados,
				sortable: true,
			},
			{
				name: 'Pendientes',
				selector: (row: { pendientes: any }) => row.pendientes,
				sortable: true,
			},
		],
		actions: {
			search: {
				permission: false,
			},
			pagination: {
				permission: false,
			},
		},
	},
	'module-report-political-parties': {
		headers: [
			{
				name: 'Nombre',
				width: '500px',
				selector: (row: { politic_party: any }) => row.politic_party,
				sortable: true,
			},
			{
				name: 'Inscritos',
				selector: (row: { inscritos: any }) => row.inscritos,
				sortable: true,
			},
			{
				name: 'Reportados',
				selector: (row: { reportados: any }) => row.reportados,
				sortable: true,
			},
			{
				name: 'Pendientes',
				selector: (row: { pendientes: any }) => row.pendientes,
				sortable: true,
			},
		],
		actions: {
			search: {
				permission: false,
			},
			pagination: {
				permission: false,
			},
		},
	},
	'module-report-neighborhoods': {
		headers: [
			{
				name: 'Nombre',
				width: '500px',
				selector: (row: { neighborhood: any }) => row.neighborhood,
				sortable: true,
			},
			{
				name: 'Inscritos',
				selector: (row: { inscritos: any }) => row.inscritos,
				sortable: true,
			},
			{
				name: 'Reportados',
				selector: (row: { reportados: any }) => row.reportados,
				sortable: true,
			},
			{
				name: 'Pendientes',
				selector: (row: { pendientes: any }) => row.pendientes,
				sortable: true,
			},
		],
		actions: {
			search: {
				permission: false,
			},
			pagination: {
				permission: false,
			},
		},
	},
};
