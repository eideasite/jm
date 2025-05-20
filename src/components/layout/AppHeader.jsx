import React, { useState } from 'react';
import './AppHeader.css';
import {
  Layout,
  Space,
  Menu,
  Switch,
  Avatar,
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
  UserOutlined,
  SearchOutlined,
} from '@ant-design/icons';

const AppHeader = ({ darkMode, setDarkMode }) => {
  const [current, setCurrent] = useState('home');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

const navItems = [
  { label: 'Home', key: 'home', icon: <HomeOutlined style={{ color: '#1890ff' }} />, style: { padding: '0 12px' } },
  { label: 'Skills', key: 'skills', icon: <AppstoreOutlined style={{ color: '#52c41a' }} />, style: { padding: '0 12px' } },
  { label: 'Experience', key: 'experience', icon: <SolutionOutlined style={{ color: '#faad14' }} />, style: { padding: '0 12px' } },
  { label: 'Projects', key: 'projects', icon: <AppstoreOutlined style={{ color: '#13c2c2' }} />, style: { padding: '0 12px' } },
  { label: 'Documents', key: 'documents', icon: <FileTextOutlined style={{ color: '#f5222d' }} />, style: { padding: '0 12px' } },
  { label: 'Contact', key: 'contact', icon: <ContactsOutlined style={{ color: '#2f54eb' }} />, style: { padding: '0 12px' } },
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

  const googleAvatarUrl = 'https://lh3.googleusercontent.com/a/default-user=s64';

  return (
    <Layout.Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        backgroundColor: darkMode ? '#000' : '#fff',
        color: darkMode ? '#fff' : '#000',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Navigation Menu */}
      <div style={{ flex: 1 }}>
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={showDrawer}
          className="mobile-menu-button"
        />
        <Menu
          onClick={handleMenuClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={navItems}
          className="desktop-menu"
          style={{ backgroundColor: 'transparent', color: darkMode ? '#fff' : '#000' }}
        />
      </div>

      {/* Search + Avatar + Theme */}
      <div className="header-right">
        <Input.Search
          value={searchQuery}
          onChange={handleSearchChange}
          onSearch={handleSearch}
          placeholder="Search..."
          enterButton={<SearchOutlined />}
          allowClear
          className={`search-input ${darkMode ? 'dark' : 'light'}`}
        />

        <Avatar
          src={googleAvatarUrl}
          icon={<UserOutlined />}
          style={{
            backgroundColor: darkMode ? '#333' : '#e6f7ff',
            color: darkMode ? '#fff' : '#000',
          }}
        />

        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          checkedChildren={<MoonOutlined />}
          unCheckedChildren={<SunOutlined />}
        />
        <span style={{ userSelect: 'none', marginLeft: 4 }}>
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </span>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        visible={drawerVisible}
      >
        <Menu
          onClick={handleMenuClick}
          selectedKeys={[current]}
          mode="vertical"
          items={navItems}
        />
      </Drawer>
    </Layout.Header>
  );
};

export default AppHeader;
