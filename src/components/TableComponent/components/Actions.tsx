import { useAuth } from '@/hooks';
import { useModalStore } from '@/store';
import { Action } from '@/utils';
import {
	EyeIcon,
	PencilIcon,
	TrashIcon,
	CheckBadgeIcon,
} from '@heroicons/react/24/outline';
import { IconButton, Tooltip } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

interface Props {
	item: any;
	actions: Action;
}
export const Actions = ({ item, actions }: Props) => {
	const navigate = useNavigate();
	const { setOpen, setUser } = useModalStore();
	const { user } = useAuth();

	const handleDetail = () => {
		navigate(`${actions?.detail?.path}/${item?.id}`);
	};

	const handleEdit = () => {
		navigate(`${actions?.update?.path}/${item?.id}`);
	};

	const handleDelete = () => {
		console.log(item?.id);
	};

	const handleOpenModal = () => {
		setOpen();
		setUser({
			id: item?.id,
			name: item?.name,
			lastName: item?.lastName,
			identificationNumber: item?.identificationNumber,
			table: item?.table,
			candidate: item?.candidate
				? { name: item?.candidate?.name, lastName: item?.candidate?.lastName }
				: null,
			voteplace: item?.voteplace
				? {
						name: item?.voteplace?.name,
				  }
				: null,
		});
	};

	const isElectionDay = () => {
		let status = false;
		if (user?.electionDay && !item?.isVoted) status = true;
		return status;
	};

	return (
		<div className='flex items-center p-1'>
			{isElectionDay() && (
				<Tooltip content='Registrar Voto'>
					<IconButton
						color='green'
						size='sm'
						className='mr-2'
						onClick={handleOpenModal}
					>
						<CheckBadgeIcon className='h-5 w-5' />
					</IconButton>
				</Tooltip>
			)}
			{actions?.detail?.permission && (
				<Tooltip content='Ver'>
					<IconButton
						color='blue'
						size='sm'
						className='mr-2'
						onClick={handleDetail}
					>
						<EyeIcon className='h-5 w-5' />
					</IconButton>
				</Tooltip>
			)}
			{actions?.update?.permission && (
				<Tooltip content='Editar'>
					<IconButton
						color='amber'
						size='sm'
						className='mr-2'
						onClick={handleEdit}
					>
						<PencilIcon className='h-5 w-5' />
					</IconButton>
				</Tooltip>
			)}
			{actions?.delete?.permission && (
				<Tooltip content='Eliminar'>
					<IconButton color='red' size='sm' onClick={handleDelete}>
						<TrashIcon className='h-5 w-5' />
					</IconButton>
				</Tooltip>
			)}
		</div>
	);
};
