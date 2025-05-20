import React, { useState } from 'react';
import { Layout, ConfigProvider } from 'antd';
import { lightTheme, darkTheme } from '../../theme/themeConfig';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ConfigProvider theme={darkMode ? darkTheme : lightTheme}>
      <Layout className={darkMode ? 'dark' : ''} style={{ minHeight: '100vh' }}>
        <AppHeader darkMode={darkMode} setDarkMode={setDarkMode} />
        <AppContent darkMode={darkMode} />
        <AppFooter darkMode={darkMode} />
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;
