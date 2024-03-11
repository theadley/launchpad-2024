import { Outlet } from 'react-router-dom';
import Seasons from './Seasons';

const Root = () => {
  return (
    <>
      <div className='navbar bg-neutral text-neutral-content'>
        <a className='btn btn-ghost text-xl'>daisyUI</a>
      </div>
      <div className='text-sm breadcrumbs p-4'>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>Add Document</li>
        </ul>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <Seasons />
        <Outlet />
      </div>
    </>
  );
};

export default Root;
