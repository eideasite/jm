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
  Row,
  Col,
} from 'antd';
import {
  FilePdfOutlined,
  EyeOutlined,
  DownloadOutlined,
} from '@ant-design/icons';

const documents = [
  {
    key: 'cv',
    title: 'Curriculum Vitae (CV)',
    file: '/assets/documents/cv.pdf',
    description: 'Updated CV with latest experience and skills.',
  },
  {
    key: 'service',
    title: 'Service Letter',
    file: '/assets/documents/service-letter.pdf',
    description: 'Official letter from prior organization.',
  },
  {
    key: 'internship',
    title: 'Internship Completion Letter',
    file: '/assets/documents/internship-letter.pdf',
    description: 'Proof of completed internship.',
  },
  {
    key: 'career',
    title: 'Career Updation Letter',
    file: '/assets/documents/career-updation-letter.pdf',
    description: 'Latest career progress update.',
  },
];

const DocumentCard = ({ title, file, description }) => {
  const { notification } = App.useApp();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [downloadModalVisible, setDownloadModalVisible] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [form] = Form.useForm();

  const handleValidDownload = () => {
    setDownloading(true);
    const filename = `${title.toLowerCase().replace(/\s+/g, '_')}-${Date.now()}.pdf`;

    fetch(file)
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
          description: `${title} is being downloaded.`,
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
    <>
      <Card
        title={title}
        bordered={false}
        style={{
          width: '100%',
          maxWidth: 400,
          textAlign: 'center',
          marginBottom: 24,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
        cover={
          <div style={{ padding: '2rem 0' }}>
            <FilePdfOutlined style={{ fontSize: 64, color: '#d32f2f' }} />
            <div style={{ marginTop: 10 }}>{description}</div>
          </div>
        }
        actions={[
          <EyeOutlined key="preview" onClick={() => setPreviewVisible(true)} />,
          <DownloadOutlined key="download" onClick={() => setDownloadModalVisible(true)} />,
        ]}
      >
        <p>You can preview or securely download this document.</p>
      </Card>

      {/* Preview Modal */}
      <Modal
        open={previewVisible}
        onCancel={() => setPreviewVisible(false)}
        footer={null}
        width="80%"
        style={{ top: 20 }}
        bodyStyle={{ height: '80vh', padding: 0 }}
        title={`${title} Preview`}
      >
        <iframe
          src={file}
          title={`${title} File Preview`}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </Modal>

      {/* Secure Download Modal */}
      <Modal
        open={downloadModalVisible}
        title={`Secure Download - ${title}`}
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
              {downloading ? <Spin size="small" /> : `Download ${title}`}
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
    </>
  );
};

const CvDocuments = () => {
  return (
    <App>
      <div style={{ padding: '2rem' }}>
        <Row gutter={[24, 24]} justify="center">
          {documents.map(doc => (
            <Col key={doc.key}>
              <DocumentCard {...doc} />
            </Col>
          ))}
        </Row>
      </div>
    </App>
  );
};

export default CvDocuments;
