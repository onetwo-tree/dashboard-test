import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { FiSettings } from 'react-icons/fi'; // for settings theme changer
// import { TooltipComponent } from '@syncfusion/ej2-react-popups'; // for settings theme changer

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
  Dashboard, ItemSetup, ItemCategory, BuildOfMaterial,
  Vendors, PurchaseOrders, PurchaseReceived, PurchaseInvoices, PurchaseReturns,
  Customers, SalesQuotations, SalesOrders, DeliveryOrders, SalesInvoices,
  JobOrders, ManufacturingOrders, ManufacturingSetup } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, themeSettings } = useStateContext();
  // const { setThemeSettings, currentColor }. // for settings theme changer
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
        <div className="flex relative dark:bg-sidebar-bg">
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-sidebar-bg ">
              <Sidebar />
            </div>
          ) : (
            // Sidebar BG color
            <div className="w-0 bg-sidebar-bg dark:bg-sidebar-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
              // Main Content BG color
                ? 'dark:bg-main-content-bg min-h-screen md:ml-72 w-full '
                : 'dark:bg-main-content-bg  w-full min-h-screen flex-2 '
            }
          >
            {/* NavBar BG color */}
            <div className="fixed md:static dark:bg-navbar-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {/* Theme Settings for Dark/Light mode. (Not implemented) */}
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* Dashboard  */}
                <Route exact path="/" element={(<Dashboard />)} />
                <Route exact path="/dashboard" element={(<Dashboard />)} />

                {/* Inventory  */}
                <Route exact path="/item-setup" element={(<ItemSetup />)} />
                <Route exact path="/item-category" element={(<ItemCategory />)} />
                <Route exact path="/build-of-material" element={(<BuildOfMaterial />)} />

                {/* Purchases  */}
                <Route exact path="/vendors" element={<Vendors />} />
                <Route exact path="/purchase-orders" element={<PurchaseOrders />} />
                <Route exact path="/purchase-received" element={<PurchaseReceived />} />
                <Route exact path="/purchase-invoices" element={<PurchaseInvoices />} />
                <Route exact path="/purchase-returns" element={<PurchaseReturns />} />

                {/* Sales */}
                <Route exact path="/customers" element={<Customers />} />
                <Route exact path="/sales-quotations" element={<SalesQuotations />} />
                <Route exact path="/sales-orders" element={<SalesOrders />} />
                <Route exact path="/delivery-orders" element={<DeliveryOrders />} />
                <Route exact path="/sales-invoices" element={<SalesInvoices />} />

                {/* Manufacturing  */}
                <Route exact path="/job-orders" element={<JobOrders />} />
                <Route exact path="/manufacturing-orders" element={<ManufacturingOrders />} />
                <Route exact path="/manufacturing-setup" element={<ManufacturingSetup />} />

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
