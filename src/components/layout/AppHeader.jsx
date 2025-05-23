import React, { useState } from 'react';
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
    const section = document.getElementById(e.key);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (value) => {
    const query = value.trim();
    if (query) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
  };

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <Layout.Header
      className={`app-header ${darkMode ? 'dark' : 'light'}`}
    >
      {/* Left side: mobile menu button + desktop menu */}
      <div className="left-nav">
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={showDrawer}
          className="mobile-menu-button"
          aria-label="Open menu"
        />
        <Menu
          onClick={handleMenuClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={navItems}
          className="desktop-menu"
          theme={darkMode ? 'dark' : 'light'}
        />
      </div>

      {/* Right side: search + toggle */}
      <div className="header-right">
        <Input
          value={searchQuery}
          onChange={handleSearchChange}
          onPressEnter={(e) => handleSearch(e.target.value)}
          placeholder="Search with Google..."
          prefix={<SiGoogle color="#4285F4" size={18} />}
          allowClear
          className={`search-input ${darkMode ? 'dark' : 'light'}`}
          style={{ width: 220 }}
          aria-label="Search input"
        />

        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          checkedChildren={<MoonOutlined />}
          unCheckedChildren={<SunOutlined />}
          style={{ marginLeft: 12 }}
          aria-label="Toggle dark mode"
        />
        <span className="mode-label" aria-live="polite">
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </span>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        visible={drawerVisible}
        bodyStyle={{ padding: 0 }}
        className={`app-drawer ${darkMode ? 'dark' : 'light'}`}
      >
        <Menu
          onClick={handleMenuClick}
          selectedKeys={[current]}
          mode="vertical"
          items={navItems}
          theme={darkMode ? 'dark' : 'light'}
        />
      </Drawer>
    </Layout.Header>
  );
};

export default AppHeader;
