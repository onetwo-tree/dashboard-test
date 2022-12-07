import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Inventory',
    links: [
      { name: 'item setup' },
      { name: 'employees' },
      { name: 'customers' },
    ],
  },
  {
    title: 'Purchases',
    links: [
      { name: 'vendors' },
      { name: 'purchase orders' },
      { name: 'purchase received' },
      { name: 'purchase invoices' },
      { name: 'purchase returns' },
    ],
  },
  {
    title: 'Sales',
    links: [
      { name: 'customers' },
      { name: 'sales quotations' },
      { name: 'sales orders' },
      { name: 'delivery orders' },
      { name: 'sales invoice' },
    ],
  },
  {
    title: 'Manufacturing',
    links: [
      { name: 'Build Of Material' },
      { name: 'Job Orders' },
      { name: 'Manufacturing Orders' },
      { name: '' },
      { name: 'Sales invoice' },
    ],
  },
];
