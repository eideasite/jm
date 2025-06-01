import React, { useState } from 'react';
import { Layout, ConfigProvider } from 'antd';
import { lightTheme, darkTheme } from '../../theme/themeConfig';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './footer/AppFooter';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ConfigProvider theme={darkMode ? darkTheme : lightTheme}>
      <Layout style={{ minHeight: '100vh' }}>
        <AppHeader darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* Remove AppContent here for routing control */}
        <div style={{ padding: '24px' }}>
          <Outlet />
        </div>
        <AppFooter darkMode={darkMode} />
      </Layout>
    </ConfigProvider>
  );
};

// Make sure to export default
export default MainLayout;
