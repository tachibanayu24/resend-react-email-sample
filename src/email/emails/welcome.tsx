import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

type TitleProps = {
  username: string;
};

type BodyProps = {
  username: string;
};

export const WelcomeEmail = {
  title: ({ username }: TitleProps) =>
    `${username}さま うさぎショップへようこそ！`,
  body: ({ username }: BodyProps) => (
    <Html>
      <Head />
      <Preview>ご登録ありがとうございます</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>🐰 うさぎショップ</Heading>
          <Img
            src="https://cdn-icons-png.flaticon.com/512/2663/2663067.png"
            alt="icon"
            height="120"
            width="120"
          />
          <Link
            href="https://notion.so"
            target="_blank"
            style={{
              ...link,
              display: "block",
              marginBottom: "16px",
            }}
          >
            Click here to log in with this magic link
          </Link>
          <Text style={{ ...text, marginBottom: "14px" }}>
            {username}
            さま、この度はうさぎショップにご登録いただきありがとうございます。
            <br />
            test
          </Text>
          <code style={code}>{username}</code>

          <Text style={footer}>
            今後このようなメールを受け取りたくない場合は、
            <Link
              href="https://notion.so"
              target="_blank"
              style={{ ...link, color: "#898989" }}
            >
              メール受信設定
            </Link>
            より、オプトアウトしてください。
          </Text>
        </Container>
      </Body>
    </Html>
  ),
};

export default WelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
  textAlign: "center",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "20px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};
