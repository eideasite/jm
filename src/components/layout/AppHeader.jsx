// AppHeader.jsx
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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (value) => {
    const trimmed = value.trim().toLowerCase();
    if (!trimmed) return;

    const localContent = [
      { title: 'React Basics', url: '/learn/react' },
      { title: 'SEO Strategy', url: '/seo' },
      { title: 'Business Analyst Guide', url: '/business-analyst' },
    ];

    const match = localContent.find(item =>
      item.title.toLowerCase().includes(trimmed)
    );

    if (match) {
      window.location.href = match.url;
    } else {
      const googleQuery = `site:${window.location.hostname} ${trimmed}`;
      window.open(`https://www.google.com/search?q=${encodeURIComponent(googleQuery)}`, '_blank');
    }
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

        {/* Desktop Search & Dark Mode Toggle */}
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
              aria-label="Business Analyst Job Search"
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

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
        className={`app-drawer ${darkMode ? 'dark' : 'light'}`}
        bodyStyle={{ padding: 0 }}
      >
        {/* Navigation List */}
        <Menu
          onClick={handleMenuClick}
          selectedKeys={[current]}
          mode="vertical"
          items={navItems}
          theme={darkMode ? 'dark' : 'light'}
        />

        {/* Search Bar in Mobile Drawer */}
        <div
          style={{
            padding: '12px 16px',
            borderTop: darkMode ? '1px solid #444' : '1px solid #eee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
            backgroundColor: darkMode ? '#1f1f1f' : '#fff',
          }}
        >
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            onPressEnter={(e) => handleSearch(e.target.value)}
            prefix={<SiGoogle color="#4285F4" size={16} />}
            allowClear
            style={{
              flex: 1,
              minWidth: 0,
              height: 32,
              fontSize: 14,
            }}
            className={`search-input ${darkMode ? 'dark' : 'light'}`}
            aria-label="Google Search"
          />
          <Button
            type="primary"
            size="small"
            onClick={() => handleSearch(searchQuery)}
            aria-label="Search"
            style={{ height: 32, padding: '0 12px' }}
          >
            Go
          </Button>
        </div>

        {/* Dark Mode Toggle */}
        <div
          style={{
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            borderTop: darkMode ? '1px solid #444' : '1px solid #eee',
          }}
        >
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
      </Drawer>
    </Layout.Header>
  );
};

export default AppHeader;
