import React from 'react';
import { GridComponent, ColumnsDirective, Selection, ColumnDirective, Toolbar, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from './PurchaseOrdersData';
import { Header } from '../components';

const PurchaseOrders = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-neutral-200 rounded-3xl">
      <Header category="Page" title="Purchase Orders" />
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
