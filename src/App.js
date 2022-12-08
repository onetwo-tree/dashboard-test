import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
  Dashboard, ItemSetup, ItemCategory, BuildOfMaterial,
  Vendors, PurchaseOrders, PurchaseReceived, PurchaseInvoices, PurchaseReturns,
  Customers, SalesQuotations, SalesOrders, DeliveryOrders, SalesInvoices,
  JobOrders, ManufacturingOrders, ManufacturingSetup } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Dashboard />)} />
                <Route path="/dashboard" element={(<Dashboard />)} />

                {/* Inventory  */}
                <Route path="/item-setup" element={(<ItemSetup />)} />
                <Route path="/item-category" element={(<ItemCategory />)} />
                <Route path="/build-of-material" element={(<BuildOfMaterial />)} />

                {/* Purchases  */}
                <Route path="/vendors" element={<Vendors />} />
                <Route path="/purchase-orders" element={<PurchaseOrders />} />
                <Route path="/purchase-received" element={<PurchaseReceived />} />
                <Route path="/purchase-invoices" element={<PurchaseInvoices />} />
                <Route path="/purchase-returns" element={<PurchaseReturns />} />

                {/* Sales */}
                <Route path="/customers" element={<Customers />} />
                <Route path="/sales-quotations" element={<SalesQuotations />} />
                <Route path="/sales-orders" element={<SalesOrders />} />
                <Route path="/delivery-orders" element={<DeliveryOrders />} />
                <Route path="/sales-invoices" element={<SalesInvoices />} />

                {/* Manufacturing  */}
                <Route path="/job-orders" element={<JobOrders />} />
                <Route path="/manufacturing-orders" element={<ManufacturingOrders />} />
                <Route path="/manufacturing-setup" element={<ManufacturingSetup />} />

              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
