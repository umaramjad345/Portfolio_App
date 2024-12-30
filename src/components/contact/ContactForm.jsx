import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Form, Input, Space, Typography, Row, Col, Image } from "antd";
import { useSnackbar } from "notistack";
import ReCAPTCHA from "react-google-recaptcha";
import validator from "validator";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xknkpqry");
  const [validEmail, setValidEmail] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [message, setMessage] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  function verifyEmail(email) {
    if (validator.isEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      enqueueSnackbar("Email successfully sent!", {
        variant: "success",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
      });
    } else if (state.errors && state.errors.length > 0) {
      enqueueSnackbar("Something went wrong. Please try again.", {
        variant: "error",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
      });
    }
  }, [state.succeeded, state.errors, enqueueSnackbar]);

  if (state.succeeded) {
    return (
      <div style={{ marginTop: "10rem", textAlign: "center" }}>
        <Typography.Title level={3}>
          Thanks for getting in touch!
        </Typography.Title>
        <Button
          type="primary"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to the top
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-10 w-full flex flex-col justify-center items-center px-4">
      <Typography.Title
        level={2}
        style={{
          textAlign: "center",
          color: "var(--text-color)",
          width: "100%",
        }}
      >
        Get in touch
      </Typography.Title>

      <Form onFinish={handleSubmit} layout="vertical" style={{ width: "100%" }}>
        <Form.Item
          label="Email"
          name="email"
          required
          rules={[{ required: true, message: "Please input your email!" }]}
          labelCol={{ span: 24 }}
          className="custom-form-item"
        >
          <div>
            <Input
              placeholder="e.g., example@example.com"
              type="email"
              onChange={(e) => verifyEmail(e.target.value)}
              style={{
                backgroundColor: "var(--bg-color)",
                color: "var(--text-color)",
                width: "100%",
              }}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          required
          rules={[{ required: true, message: "Please input your message!" }]}
          labelCol={{ span: 24 }}
          className="custom-form-item"
        >
          <div>
            <Input.TextArea
              rows={6}
              placeholder="e.g., Send a message to get started."
              onChange={(e) => setMessage(e.target.value)}
              style={{
                backgroundColor: "var(--bg-color)",
                color: "var(--text-color)",
                width: "100%",
              }}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </Form.Item>

        <Form.Item
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ReCAPTCHA
            sitekey="6Lfj9NYfAAAAAP8wPLtzrsSZeACIcGgwuEIRvbSg"
            onChange={() => setIsHuman(true)}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            // disabled={state.submitting || !validEmail || !message || !isHuman}
            block
            style={{ width: "100%" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;
