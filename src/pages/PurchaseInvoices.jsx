import React from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

const PurchaseInvoices = () => {
  const {} = useStateContext();

  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-left m-4 gap-3">
        <Link
          to="/create-purchaseinvoice"
          type="button"
          className="bg-neutral-600 text-neutral-50 font-semibold py-2 px-4 border border-neutral-700 hover:text-neutral-200 hover:border-transparent rounded "
        >
          New Purchase Invoice
        </Link>
      </div>
    </div>
  );
};

export default PurchaseInvoices;
