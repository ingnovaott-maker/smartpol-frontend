export const useDataGlobal = () => {
	const municipalities = [
		{
			id: 1,
			value: '1',
			name: 'Sincelejo',
		},
		{
			id: 2,
			value: '2',
			name: 'Tolú',
		},
	];

	const occupations = [
		{
			value: 'Empleado',
			label: 'Empleado',
		},
		{
			value: 'Desempleado',
			label: 'Desempleado',
		},
		{
			value: 'Independiente - Informal Ambulante',
			label: 'Independiente - Informal Ambulante',
		},
		{
			value: 'Independiente - Formal',
			label: 'Independiente - Formal',
		},
		{
			value: 'Empresario',
			label: 'Empresario',
		},
		{
			value: 'Estudiante',
			label: 'Estudiante',
		},
	];

	const populations = [
		{
			value: 'Ninguno',
			label: 'Ninguno',
		},
		{
			value: 'Afrodecendiente',
			label: 'Afrodecendiente',
		},
		{
			value: 'Madre cabeza de hogar',
			label: 'Madre cabeza de hogar',
		},
		{
			value: 'LGTBIQ+',
			label: 'LGTBIQ+',
		},
		{
			value: 'Indigena',
			label: 'Indigena',
		},
		{
			value: 'Campesina',
			label: 'Campesina',
		},
		{
			value: 'Tercera edad',
			label: 'Tercera edad',
		},
		{
			value: 'Desplazados',
			label: 'Desplazados',
		},
		{
			value: 'Victimas',
			label: 'Victimas',
		},
		{
			value: 'Desmovilizados',
			label: 'Desmovilizados',
		},
		{
			value: 'Reinsertados',
			label: 'Reinsertados',
		},
	];

	const statusPolicies = [
		{
			value: 'Pendiente',
			label: 'Pendiente',
		},
		{
			value: 'Comprometido - equipo',
			label: 'Comprometido - equipo',
		},
		{
			value: 'Indeciso',
			label: 'Indeciso',
		},
		{
			value: 'Contactado comprometido',
			label: 'Contactado comprometido',
		},
		{
			value: 'Contactado no apoya',
			label: 'Contactado no apoya',
		},
	];

	const genders = [
		{
			value: 'M',
			label: 'Masculino',
		},
		{
			value: 'F',
			label: 'Femenino',
		},
		{
			value: 'O',
			label: 'Otro',
		},
	];

	const typeRol = [
		{
			value: 'LIDER',
			label: 'Lider',
		},
		{
			value: 'DIGITADOR',
			label: 'Digitador',
		},
		{
			value: 'VOTANTE',
			label: 'Votante',
		},
	];

	const typeBlood = [
		{
			value: 'A+',
			label: 'A+',
		},
		{
			value: 'A-',
			label: 'A-',
		},
		{
			value: 'B+',
			label: 'B+',
		},
		{
			value: 'B-',
			label: 'B-',
		},
		{
			value: 'AB+',
			label: 'AB+',
		},
		{
			value: 'AB-',
			label: 'AB-',
		},
		{
			value: 'O+',
			label: 'O+',
		},
		{
			value: 'O-',
			label: 'O-',
		},
	];

	const departaments = [
		{
			id: '1',
			name: 'Antioquia',
		},
		{
			id: '2',
			name: 'Boyacá',
		},
		{
			id: '3',
			name: 'Córdoba',
		},
		{
			id: '4',
			name: 'Chocó',
		},
		{
			id: '5',
			name: 'Nariño',
		},
		{
			id: '6',
			name: 'Santander',
		},
		{
			id: '7',
			name: 'Meta',
		},
		{
			id: '8',
			name: 'Atlántico',
		},
		{
			id: '9',
			name: 'Bolívar',
		},
		{
			id: '10',
			name: 'Caldas',
		},
		{
			id: '11',
			name: 'Caquetá',
		},
		{
			id: '12',
			name: 'Cauca',
		},
		{
			id: '13',
			name: 'Cesar',
		},
		{
			id: '14',
			name: 'Cundinamarca',
		},
		{
			id: '15',
			name: 'Huila',
		},
		{
			id: '16',
			name: 'La Guajira',
		},
		{
			id: '17',
			name: 'Magdalena',
		},
		{
			id: '18',
			name: 'Quindío',
		},
		{
			id: '19',
			name: 'Risaralda',
		},
		{
			id: '20',
			name: 'Sucre',
		},
		{
			id: '21',
			name: 'Tolima',
		},
		{
			id: '22',
			name: 'Arauca',
		},
		{
			id: '23',
			name: 'Casanare',
		},
		{
			id: '24',
			name: 'Putumayo',
		},
		{
			id: '25',
			name: 'Amazonas',
		},
		{
			id: '26',
			name: 'Guainía',
		},
		{
			id: '27',
			name: 'Vaupés',
		},
		{
			id: '28',
			name: 'Vichada',
		},
		{
			id: '29',
			name: 'Guaviare',
		},
		{
			id: '30',
			name: 'Archipiélago de San Andrés, Providencia y Santa Catalina',
		},
		{
			id: '31',
			name: 'Bogotá D.C.',
		},
		{
			id: '32',
			name: 'Norte de Santander',
		},
		{
			id: '33',
			name: 'Valle del Cauca',
		},
	];

	return {
		municipalities,
		occupations,
		populations,
		statusPolicies,
		genders,
		typeRol,
		typeBlood,
		departaments,
	};
};
