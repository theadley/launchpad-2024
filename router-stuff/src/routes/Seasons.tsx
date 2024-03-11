import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeasonAPIResponse } from '../models/types';

const Seasons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { isLoading, data } = useQuery({
    queryKey: ['seasons'],
    queryFn: async () => {
      const response = await fetch(
        'https://ergast.com/api/f1/seasons.json?limit=75'
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json() as Promise<SeasonAPIResponse>;
    },
  });

  return (
    <div className='flex flex-col gap-2'>
      <label className='input input-bordered flex items-center gap-2'>
        <input
          type='text'
          className='grow'
          placeholder='Search'
          value={searchTerm}
          onInput={(event) =>
            setSearchTerm((event.target as HTMLInputElement).value)
          }
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          fill='currentColor'
          className='w-4 h-4 opacity-70'>
          <path
            fillRule='evenodd'
            d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
            clipRule='evenodd'
          />
        </svg>
      </label>
      <>
        {isLoading ? (
          <span className='loading loading-spinner loading-lg'></span>
        ) : (
          data?.MRData?.SeasonTable?.Seasons?.filter((season) =>
            searchTerm.length > 1
              ? season.season.indexOf(searchTerm) > -1
              : true
          ).map((season) => (
            <Link
              className='btn btn-neutral'
              key={season.season}
              to={`season/${season.season}`}>
              {season.season}
            </Link>
          ))
        )}
      </>
    </div>
  );
};

export default Seasons;
