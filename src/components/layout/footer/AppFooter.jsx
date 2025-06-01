import React from "react";
import { Layout, Card, Typography, Space } from "antd";
import {
  FacebookFilled,
  LinkedinFilled,
  YoutubeFilled,
  WhatsAppOutlined, MailOutlined, // ✅ Add this
} from "@ant-design/icons";

const { Footer } = Layout;
const { Text, Link } = Typography;

const AppFooter = ({ darkMode = true }) => {
  const currentYear = new Date().getFullYear();

  const themeColors = {
    background: darkMode ? "rgba(17, 24, 39, 0.8)" : "rgb(228, 224, 247)",
    text: darkMode ? "#d1d5db" : "#1f2937",
    secondary: darkMode ? "#9ca3af" : "#4b5563",
    border: darkMode ? "#444" : "#ccc",
    shadow: darkMode ? "0 0 10px rgba(0,0,0,0.3)" : "0 0 10px rgba(0,0,0,0.1)",
  };

  const socialMedia = [
    {
      name: "Facebook",
      icon: <FacebookFilled style={{ fontSize: 40, color: "#3b82f6" }} />,
      href: "https://facebook.com",
    },
    {
      name: "LinkedIn",
      icon: <LinkedinFilled style={{ fontSize: 40, color: "#0e76a8" }} />,
      href: "https://linkedin.com",
    },
    {
      name: "YouTube",
      icon: <YoutubeFilled style={{ fontSize: 40, color: "#ff0000" }} />,
      href: "https://youtube.com",
    },
    {
      name: "WhatsApp",
      icon: <WhatsAppOutlined style={{ fontSize: 40, color: "#25d366" }} />,
      href: "https://wa.me/94754977449",
    },
    {
      name: "Email", // ✅ NEW LINE
      icon: <MailOutlined style={{ fontSize: 40, color: "black" }} />, // amber/yellow
      href: "mailto:jeyamohanmanoharan@gmail.com", // ✅ CHANGE THIS TO YOUR EMAIL
    },
  ];


  const SocialMediaIcons = () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 32,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {socialMedia.map((platform) => (
        <a
          key={platform.name}
          href={platform.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            color: themeColors.text,
            minWidth: 80,
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {platform.icon}
          <span
            style={{
              marginTop: 8,
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: 0.5,
            }}
          >
            {platform.name}
          </span>
        </a>
      ))}
    </div>
  );

  const WhatsAppQR = () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 280,
        margin: "24px auto 0",
      }}
    >
      <a
        href="https://wa.me/94754977449"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/images/WhatsApp QR.jpg"
          alt="WhatsApp QR"
          style={{
            width: 160,
            height: 160,
            borderRadius: 12,
            border: `2px solid ${themeColors.border}`,
            marginBottom: 8,
            objectFit: "cover",
            cursor: "pointer",
            boxShadow: themeColors.shadow,
          }}
        />
      </a>
      <a
        href="https://wa.me/94754977449"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#25D366",
          fontWeight: "bold",
          fontSize: 12,
          textAlign: "center",
          textDecoration: "none",
        }}
      >
        https://wa.me/94754977449
      </a>
    </div>
  );

  return (
    <Footer
      style={{
        backgroundColor: themeColors.background,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        padding: "48px 24px",
        textAlign: "center",
        borderTop: `1px solid ${themeColors.border}`,
      }}
    >
      <Card
        bordered={false}
        style={{
          backgroundColor: "transparent",
          color: themeColors.text,
          maxWidth: 900,
          margin: "auto",
          boxShadow: "none",
          textAlign: "center",
        }}
      >
        <Space direction="vertical" style={{ width: "100%" }} size="large">
          {/* 🔗 Social Icons */}
          <SocialMediaIcons />

          {/* 📲 WhatsApp QR */}
          <WhatsAppQR />

          {/* ✏️ Motivational Line */}
          <Text
            style={{
              color: themeColors.secondary,
              fontSize: 14,
              fontStyle: "italic",
              marginTop: 16,
              display: "block",
            }}
          >
            Reason why working harder? Customer need satisfy get happened.
          </Text>

          {/* 📬 Contact */}
          <Text style={{ color: themeColors.secondary, fontSize: 11 }}>
            Contact us:{" "}
            <Link
              href="https://jeyamohan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#3b82f6", wordBreak: "break-word" }}
              copyable
            >
              https://jeyamohan.vercel.app/
            </Link>
          </Text>

          {/* 🔐 Privacy */}
          <Link
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#3b82f6",
              fontSize: 12,
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Privacy Policy
          </Link>

          {/* 🧾 Copyright */}
          <Text
            style={{
              color: themeColors.secondary,
              fontSize: 12,
              textAlign: "center",
              display: "block",
              marginTop: 8,
            }}
          >
            &copy; {currentYear} Jeyamohan Manoharan. All rights reserved.
          </Text>
        </Space>
      </Card>
    </Footer>
  );
};

export default AppFooter;
