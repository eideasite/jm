import React, { useState } from 'react';
import {
  App,
  Card,
  Modal,
  Button,
  Form,
  Input,
  notification,
  Spin,
} from 'antd';
import {
  FilePdfOutlined,
  EyeOutlined,
  DownloadOutlined,
} from '@ant-design/icons';

const CvCard = () => {
  const { notification } = App.useApp();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [downloadModalVisible, setDownloadModalVisible] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [form] = Form.useForm();

  const pdfUrl = '/assets/documents/cv.pdf';

  const handleValidDownload = () => {
    setDownloading(true);

    const filename = `cv-${Date.now()}.pdf`;
    fetch(pdfUrl)
      .then(res => res.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(blobUrl);

        notification.success({
          message: 'Download Started',
          description: 'Your CV is being downloaded.',
          placement: 'topRight',
        });
      })
      .finally(() => {
        setDownloading(false);
        setDownloadModalVisible(false);
        form.resetFields();
      });
  };

  const onDownloadFormSubmit = () => {
    form
      .validateFields()
      .then(() => {
        handleValidDownload();
      })
      .catch(err => console.log('Validation Error:', err));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem', flexWrap: 'wrap' }}>
      <Card
        title="CV ACCESS"
        bordered={false}
        style={{
          width: '100%',
          maxWidth: 400,
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
        cover={
          <div style={{ padding: '2rem 0' }}>
            <FilePdfOutlined style={{ fontSize: 64, color: '#d32f2f' }} />
            <div style={{ marginTop: 10 }}>Preview your CV</div>
          </div>
        }
        actions={[
          <EyeOutlined key="preview" onClick={() => setPreviewVisible(true)} />,
          <DownloadOutlined key="download" onClick={() => setDownloadModalVisible(true)} />,
        ]}
      >
        <p>This card allows users to preview or securely download your CV document.</p>
      </Card>

      {/* CV Preview Modal */}
      <Modal
        open={previewVisible}
        onCancel={() => setPreviewVisible(false)}
        footer={null}
        width="80%"
        style={{ top: 20 }}
        bodyStyle={{ height: '80vh', padding: 0 }}
        title="CV Preview"
      >
        <iframe
          src={pdfUrl}
          title="CV File Preview"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </Modal>

      {/* Download Form Modal */}
      <Modal
        open={downloadModalVisible}
        title="Secure CV Download"
        onCancel={() => {
          setDownloadModalVisible(false);
          form.resetFields();
        }}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <Button
              type="primary"
              onClick={onDownloadFormSubmit}
              loading={downloading}
              disabled={downloading}
            >
              {downloading ? <Spin size="small" /> : 'Download CV'}
            </Button>
          </>
        )}
        destroyOnClose
      >
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Enter a valid email' }]}
          >
            <Input placeholder="your@email.com" />
          </Form.Item>
          <Form.Item
            label="Job Role"
            name="jobRole"
            rules={[{ required: true, message: 'Please enter your job role' }]}
          >
            <Input placeholder="e.g. Frontend Developer" />
          </Form.Item>
          <Form.Item
            label="Contact Number"
            name="contact"
            rules={[
              { required: true, message: 'Please enter your contact number' },
              { pattern: /^[0-9]{10,15}$/, message: 'Enter a valid number (10–15 digits)' },
            ]}
          >
            <Input placeholder="e.g. 1234567890" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default () => (
  <App>
    <CvCard />
  </App>
);
