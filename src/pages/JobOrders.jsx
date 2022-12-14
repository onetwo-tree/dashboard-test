import React from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

const JobOrders = () => {
  const {} = useStateContext();

  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-left m-4 gap-3">
        <Link
          to="/create-joborder"
          type="button"
          className="bg-neutral-600 text-neutral-50 font-semibold py-2 px-4 border border-neutral-700 hover:text-neutral-200 hover:border-transparent rounded "
        >
          New Job Order
        </Link>
      </div>
    </div>
  );
};

export default JobOrders