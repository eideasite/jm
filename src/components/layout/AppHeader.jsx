import React, { useState, useEffect } from 'react';
import { Layout, Space, Menu, Switch, Avatar, Drawer, Button, Input } from 'antd';
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
} from '@ant-design/icons';

const AppHeader = ({ darkMode, setDarkMode }) => {
  const [current, setCurrent] = useState('home');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { label: 'Home', key: 'home', icon: <HomeOutlined style={{ color: '#1890ff' }} /> },
    { label: 'Skills', key: 'skills', icon: <AppstoreOutlined style={{ color: '#52c41a' }} /> },
    { label: 'Experience', key: 'experience', icon: <SolutionOutlined style={{ color: '#faad14' }} /> },
    { label: 'Projects', key: 'projects', icon: <AppstoreOutlined style={{ color: '#13c2c2' }} /> },
    { label: 'Documents', key: 'documents', icon: <FileTextOutlined style={{ color: '#f5222d' }} /> },
    { label: 'Contact', key: 'contact', icon: <ContactsOutlined style={{ color: '#2f54eb' }} /> },
  ];

  const onClick = (e) => {
    setCurrent(e.key);
    setDrawerVisible(false);
  };

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  const googleAvatarUrl = 'https://lh3.googleusercontent.com/a/default-user=s64'; 

  const profileIconStyle = {
    color: darkMode ? '#fff' : '#000',
    backgroundColor: darkMode ? '#333' : '#e6f7ff',
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search action
const handleSearch = (value) => {
  const query = value.trim();
  if (query) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  }
};

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
      <div style={{ flex: 1 }}>
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={showDrawer}
          style={{ display: 'none' }}
        />

        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={navItems.map(item => ({
            label: item.label,
            key: item.key,
            icon: item.icon,
          }))}
          style={{ color: darkMode ? '#fff' : '#000' }}
        />
      </div>

      {/* Search Bar - Displayed by Default */}
      <Input.Search
        value={searchQuery}
        onChange={handleSearchChange}
        onSearch={handleSearch}
        placeholder="Search..."
        enterButton
        style={{
          width: 300, // Increased width to match design
          marginRight: 20,
        }}
      />

      {/* Right Section - Avatar & Dark Mode */}
      <Space style={{ color: darkMode ? '#fff' : '#000' }}>
        <Avatar
          src={googleAvatarUrl}
          icon={<UserOutlined />}
          style={profileIconStyle}
        />
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          checkedChildren={<MoonOutlined />}
          unCheckedChildren={<SunOutlined />}
        />
        <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
      </Space>

      {/* Drawer for mobile */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        visible={drawerVisible}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="vertical"
          items={navItems.map(item => ({
            label: item.label,
            key: item.key,
            icon: item.icon,
          }))}
        />
      </Drawer>
    </Layout.Header>
  );
};

export default AppHeader;
