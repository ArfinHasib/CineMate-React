import { Link } from 'react-router-dom';

export const Footer = () => {
	return (
		<footer>
			<footer className='p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800'>
				<span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
					© 2023{' '}
					<Link to='/' className='hover:underline'>
						CineMate™
					</Link>
					. All Rights Reserved.
				</span>
				<ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
					<li>
						<a
							href='#'
							className='mr-4 hover:underline md:mr-6 '
							target='_blank'
						>
							Instagram
						</a>
					</li>
					<li>
						<a
							href='#'
							className='mr-4 hover:underline md:mr-6'
							target='_blank'
						>
							LinkeIn
						</a>
					</li>
					<li>
						<a
							href='#'
							className='mr-4 hover:underline md:mr-6'
							target='_blank'
						>
							Youtube
						</a>
					</li>
					<li>
						<a
							href='#'
							className='hover:underline'
							target='_blank'
						>
							GitHub
						</a>
					</li>
				</ul>
			</footer>
		</footer>
	);
};
