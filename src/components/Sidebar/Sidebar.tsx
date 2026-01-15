import { useAuthStore, useLayoutStore } from '@/store';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	List,
	ListItem,
	Typography,
} from '@material-tailwind/react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

interface Nav {
	name: string;
	path: string;
}
interface NavList extends Nav {
	isMultilevel: boolean;
	levels: Nav[];
}

export const Sidebar = () => {
	const { isVisible, setVisible } = useLayoutStore();
	const { user } = useAuthStore();
	const [open, setOpen] = useState(0);

	const handleOpen = (value: number) => {
		setOpen(open === value ? 0 : value);
	};

	const navList: NavList[] = [
		{
			path: '/',
			name: 'Inicio',
			isMultilevel: false,
			levels: [],
		},
		{
			path: '/personas',
			name: 'Personas',
			isMultilevel: false,
			levels: [],
		},
	];

	if (user?.role === 'CANDIDATO_PRINCIPAL' || user?.role === 'ADMINISTRADOR ') {
		navList.push({
			name: 'Informes',
			isMultilevel: true,
			path: '',
			levels: [
				{
					path: '/informe-filtros',
					name: 'Filtros',
				},
				{
					path: '/informe-candidatos',
					name: 'Candidatos',
				},
				{
					path: '/informe-lugar-de-votaciones',
					name: 'Lugar de Votaciones',
				},
				{
					path: '/informe-partidos-politicos',
					name: 'Partidos Políticos',
				},
				{
					path: '/informe-barrios',
					name: 'Barrios',
				},
				{
					path: '/informe-lideres',
					name: 'Líderes',
				},
			],
		});
	}

	const activeClassName = {
		backgroundColor: '#e18100',
		borderRadius: '0.5rem',
		color: 'white',
	};

	return (
		<aside
			className={`bg-white shadow-lg overflow-y-auto overflow-x-hidden fixed top-20 lg:top-0 inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 p-4 ${
				isVisible ? 'translate-x-0' : '-translate-x-80 '
			}`}
		>
			<div className='mb-2 flex items-center gap-4 p-4'>
				<img src='/img/icono.png' alt='brand' className='h-10 w-10' />
				<Link to='/'>
					<Typography variant='h5' color='blue-gray'>
						SmartPol
					</Typography>
				</Link>
				{/* <IconButton
					variant='text'
					color='white'
					size='sm'
					ripple={false}
					className='absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden'
					onClick={() => setVisible(!isVisible)}
				>
					<XMarkIcon strokeWidth={2.5} className='h-5 w-5 text-black' />
				</IconButton> */}
			</div>
			{navList.map((item: NavList) => (
				<List key={item?.name}>
					{item?.isMultilevel ? (
						<Accordion
							open={open === 1}
							icon={
								<ChevronDownIcon
									strokeWidth={2.5}
									className={`mx-auto h-4 w-4 transition-transform ${
										open === 1 ? 'rotate-180' : ''
									}`}
								/>
							}
						>
							<ListItem className='p-0' selected={open === 1}>
								<AccordionHeader
									onClick={() => handleOpen(1)}
									className='border-b-0 p-3'
								>
									<Typography color='blue-gray' className='mr-auto font-normal'>
										{item?.name}
									</Typography>
								</AccordionHeader>
							</ListItem>
							<AccordionBody className='py-1'>
								<List className='p-0'>
									{item?.levels.map((level: Nav) => (
										<NavLink
											to={level?.path}
											key={level?.name}
											onClick={() => setVisible(!isVisible)}
											style={({ isActive }) =>
												isActive ? activeClassName : undefined
											}
										>
											<ListItem className='focus:bg-[#e18100] focus:bg-opacity-100 focus:text-white'>
												{level?.name}
											</ListItem>
										</NavLink>
									))}
								</List>
							</AccordionBody>
						</Accordion>
					) : (
						<NavLink
							to={item?.path}
							key={item?.name}
							onClick={() => setVisible(!isVisible)}
							style={({ isActive }) => (isActive ? activeClassName : undefined)}
						>
							<ListItem className='focus:bg-[#e18100] focus:bg-opacity-100 focus:text-white'>
								{item?.name}
							</ListItem>
						</NavLink>
					)}
				</List>
			))}
		</aside>
	);
};
