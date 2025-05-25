import React, { useState, useEffect } from 'react';
import './AppHeader.css';
import {
  Layout,
  Menu,
  Switch,
  Drawer,
  Button,
  Input,
} from 'antd';
import {
  SunOutlined,
  MoonOutlined,
  HomeOutlined,
  AppstoreOutlined,
  SolutionOutlined,
  FileTextOutlined,
  ContactsOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { SiGoogle } from 'react-icons/si';

const AppHeader = ({ darkMode, setDarkMode }) => {
  const [current, setCurrent] = useState('home');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { label: 'Home', key: 'home', icon: <HomeOutlined style={{ color: '#1890ff' }} /> },
    { label: 'Skills', key: 'skills', icon: <AppstoreOutlined style={{ color: '#52c41a' }} /> },
    { label: 'Experience', key: 'experience', icon: <SolutionOutlined style={{ color: '#faad14' }} /> },
    { label: 'Journey', key: 'journey', icon: <SolutionOutlined style={{ color: '#722ed1' }} /> },
    { label: 'Projects', key: 'projects', icon: <AppstoreOutlined style={{ color: '#13c2c2' }} /> },
    { label: 'Documents', key: 'documents', icon: <FileTextOutlined style={{ color: '#f5222d' }} /> },
    { label: 'Contact', key: 'contact', icon: <ContactsOutlined style={{ color: '#2f54eb' }} /> },
  ];

  const handleMenuClick = (e) => {
    setCurrent(e.key);
    setDrawerVisible(false);
    const target = document.getElementById(e.key);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSearch = (value) => {
    const trimmed = value.trim();
    if (trimmed) window.open(`https://www.google.com/search?q=${encodeURIComponent(trimmed)}`, '_blank');
  };

  return (
    <Layout.Header className={`app-header ${darkMode ? 'dark' : 'light'}`}>
      <div
        className="header-container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 16px',
        }}
      >
        <div className="left-nav" style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setDrawerVisible(true)}
            className="mobile-menu-button"
            aria-label="Open mobile menu"
            style={{ display: isMobile ? 'inline-block' : 'none' }}
          />
          <Menu
            onClick={handleMenuClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={navItems}
            className="desktop-menu"
            theme={darkMode ? 'dark' : 'light'}
            style={{ display: isMobile ? 'none' : 'flex', flexGrow: 1 }}
          />
        </div>

        {!isMobile && (
          <div
            className="header-controls"
            style={{ display: 'flex', alignItems: 'center', gap: 16 }}
          >
            <Input
              value={searchQuery}
              onChange={handleSearchChange}
              onPressEnter={(e) => handleSearch(e.target.value)}
              placeholder="Search with Google..."
              prefix={<SiGoogle color="#4285F4" size={18} />}
              allowClear
              className={`search-input ${darkMode ? 'dark' : 'light'}`}
              aria-label="Google Search"
              style={{ width: 200 }}
            />
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
              aria-label="Toggle Dark Mode"
            />
            <span className="mode-label" aria-live="polite">
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
        className={`app-drawer ${darkMode ? 'dark' : 'light'}`}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          onClick={handleMenuClick}
          selectedKeys={[current]}
          mode="vertical"
          items={navItems}
          theme={darkMode ? 'dark' : 'light'}
        />

        {/* Centered controls inside drawer */}
        <div
          style={{
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            borderTop: darkMode ? '1px solid #444' : '1px solid #eee',
          }}
        >
          <Input
            value={searchQuery}
            onChange={handleSearchChange}
            onPressEnter={(e) => handleSearch(e.target.value)}
            placeholder="Search with Google..."
            prefix={<SiGoogle color="#4285F4" size={18} />}
            allowClear
            className={`search-input ${darkMode ? 'dark' : 'light'}`}
            style={{ width: '100%' }}
            aria-label="Google Search"
          />

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
              aria-label="Toggle Dark Mode"
            />
            <span className="mode-label" aria-live="polite" style={{ marginTop: 8 }}>
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
          </div>
        </div>
      </Drawer>
    </Layout.Header>
  );
};

export default AppHeader;
