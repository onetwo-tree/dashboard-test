import React from 'react';
import { Link } from 'react-router-dom';
import { GridComponent, ColumnsDirective, Selection, ColumnDirective, Toolbar, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/purchaseordersdata';
import { Header } from '../components';

const PurchaseOrders = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-neutral-200 rounded-3xl">
      <Header category="Page" title="Purchase Orders" />
      <div className="mb-12">
        <Link
          to="/create-purchaseorder"
          type="button"
          className="bg-neutral-600 text-neutral-50 font-semibold py-2 px-4 border border-neutral-700 hover:text-neutral-200 hover:border-transparent rounded "
        >
          New Purchase Order
        </Link>
      </div>

      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        enableHover={false}
        allowPaging
        allowExcelExport
        allowPdfExport
        selectionSettings={selectionsettings}
        contextMenuItems={contextMenuItems}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[
          Page, Selection, Toolbar, Edit, Sort, Filter, ContextMenu, ExcelExport, Edit, PdfExport]}
        />
      </GridComponent>
    </div>
  );
};
export default PurchaseOrders;
