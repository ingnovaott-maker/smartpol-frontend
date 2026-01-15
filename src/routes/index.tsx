import { ProtectedRoutes, PublicRoutes } from '@/components';
import { SignIn } from '@/views/Auth';
import { createBrowserRouter } from 'react-router-dom';
export const router = createBrowserRouter([
	{
		path: '/iniciar-sesion',
		element: (
			<PublicRoutes>
				<SignIn />
			</PublicRoutes>
		),
	},
	// {
	// 	path: '/registro',
	// 	element: (
	// 		<PublicRoutes>
	// 			<SignUp />
	// 		</PublicRoutes>
	// 	),
	// },
	{
		path: '/',
		element: <ProtectedRoutes />,
		children: [
			{
				path: '/',
				async lazy() {
					const { Layout } = await import(
						/* webpackChunkName: 'Layout' */ '@/views'
					);
					return {
						Component: Layout,
					};
				},
				children: [
					{
						path: '/',
						async lazy() {
							const { Dashboard } = await import(
								/* webpackChunkName: 'Dashboard' */ '@/views'
							);
							return {
								Component: Dashboard,
							};
						},
					},
					{
						path: '/personas',
						async lazy() {
							const { Voter } = await import(
								/* webpackChunkName: 'Voter' */ '@/views'
							);
							return {
								Component: Voter,
							};
						},
					},
					{
						path: '/crear-persona',
						async lazy() {
							const { CreateVoter } = await import(
								/* webpackChunkName: 'CreateVoter' */ '@/views'
							);
							return {
								Component: CreateVoter,
							};
						},
					},
					{
						path: '/detalle-persona/:id',
						async lazy() {
							const { DetailVoter } = await import(
								/* webpackChunkName: 'DetailVoter' */ '@/views'
							);
							return {
								Component: DetailVoter,
							};
						},
					},
					{
						path: '/editar-persona/:id',
						async lazy() {
							const { EditVoter } = await import(
								/* webpackChunkName: 'EditVoter' */ '@/views'
							);
							return {
								Component: EditVoter,
							};
						},
					},
					{
						path: '/informe-filtros',
						async lazy() {
							const { Report } = await import(
								/* webpackChunkName: 'Report' */ '@/views'
							);
							return {
								Component: Report,
							};
						},
					},
					{
						path: '/informe-candidatos',
						async lazy() {
							const { ReportCandidates } = await import(
								/* webpackChunkName: 'ReportCandidates' */ '@/views'
							);
							return {
								Component: ReportCandidates,
							};
						},
					},
					{
						path: '/informe-lugar-de-votaciones',
						async lazy() {
							const { ReportVotePlaces } = await import(
								/* webpackChunkName: 'ReportVotePlaces' */ '@/views'
							);
							return {
								Component: ReportVotePlaces,
							};
						},
					},
					{
						path: '/informe-partidos-politicos',
						async lazy() {
							const { ReportPoliticalParties } = await import(
								/* webpackChunkName: 'ReportPoliticalParties' */ '@/views'
							);
							return {
								Component: ReportPoliticalParties,
							};
						},
					},
					{
						path: '/informe-barrios',
						async lazy() {
							const { ReportNeighborhoods } = await import(
								/* webpackChunkName: 'ReportNeighborhoods' */ '@/views'
							);
							return {
								Component: ReportNeighborhoods,
							};
						},
					},
					{
						path: '/informe-lideres',
						async lazy() {
							const { ReportLeaders } = await import(
								/* webpackChunkName: 'ReportLeaders' */ '@/views'
							);
							return {
								Component: ReportLeaders,
							};
						},
					},
				],
			},
		],
	},
	{
		path: '*',
		async lazy() {
			const { ErrorView } = await import(
				/* webpackChunkName: 'ErrorView' */ '@/views'
			);
			return {
				Component: ErrorView,
			};
		},
	},
]);
