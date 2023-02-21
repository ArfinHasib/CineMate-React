import { useSearchParams } from 'react-router-dom';
import { Card } from '../components/Card';
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';

export const Search = ({ apiPath }) => {
	const [searchParams] = useSearchParams();
	const queryTerm = searchParams.get('q');

	const { data: movies } = useFetch(apiPath, queryTerm);
	useTitle(`Search result for ${queryTerm} | CineMate`);

	return (
		<main>
			<section className='py-7 ml-4'>
				<p className='text-3xl font-bold text-gray dark:text-white'>
					{movies.length === 0
						? `No result found for '${queryTerm}'`
						: `Result for '${queryTerm}'`}
				</p>
			</section>
			<section className='max-w-7xl mx-auto py-7'>
				<div className='flex justify-start flex-wrap '>
					{movies.map((movie) => (
						<Card key={movie.id} movie={movie} />
					))}
				</div>
			</section>
		</main>
	);
};
