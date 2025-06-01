import { Button, Form, Input, Card } from 'antd';
import './Contact.css';

const Contact = () => {
  const [form] = Form.useForm();

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <Card
        className="contact-card"
        title="Get in Touch"
        bordered={false}
        style={{ maxWidth: '600px', margin: '0 auto' }}
        headStyle={{ color: 'inherit' }}
      >
        <Form
          form={form}
          layout="vertical"
          scrollToFirstError={{ behavior: 'smooth', block: 'end', focus: true }}
          className="contact-form"
        >
          <Form.Item
            name="name"
            label="Your Name"
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <Input placeholder="Your Name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Your Email"
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
          >
            <Input type="email" placeholder="Your Email" />
          </Form.Item>

          <Form.Item
            name="message"
            label="Your Message"
            rules={[{ required: true, message: 'Please enter your message!' }]}
          >
            <Input.TextArea rows={4} placeholder="Message" />
          </Form.Item>

          {/* Changed occupation field from Select to Input */}
          <Form.Item
            name="occupation"
            label="Occupation"
            // rules={[{ required: true, message: 'Please enter your occupation!' }]} // optional validation
          >
            <Input placeholder="Enter your occupation" />
          </Form.Item>

          <Form.Item>
            <div className="form-buttons">
              <Button type="primary" htmlType="submit" className="submit-button">
                Send Message
              </Button>
              <Button danger onClick={() => form.resetFields()} className="reset-button">
                Reset
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </section>
  );
};

export default Contact;
