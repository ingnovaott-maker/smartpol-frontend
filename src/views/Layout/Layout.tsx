import { DashboardNavbar, Sidebar } from '@/components';
import { Outlet, ScrollRestoration } from 'react-router-dom';

export const Layout = () => {
	return (
		<div className='min-h-screen bg-blue-gray-50/50'>
			<Sidebar />

			<div className='p-4 xl:ml-80'>
				<DashboardNavbar />

				<div className='p-4'>
					<Outlet />
					<ScrollRestoration />
				</div>
			</div>
		</div>
	);
};
