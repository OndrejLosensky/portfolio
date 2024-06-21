import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface SpaceJellyLoginCodeEmailProps {
    validationCode?: string;
  }
  
  export const SpaceJellyLoginCodeEmail = ({
    validationCode,
  }: SpaceJellyLoginCodeEmailProps) => (
    <Html>
      <Head />
      <Preview>Your login code for Space Jelly</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={{
            ...heading,
            fontSize: '16px',
            fontWeight: '600'
          }}>
            👾 Space Jelly
          </Text>
          <Heading style={heading}>Your login code for Space Jelly</Heading>
          <Section style={buttonContainer}>
            <Button style={button} href="https://spacejelly.dev">
              Login to Space Jelly
            </Button>
          </Section>
          <Text style={paragraph}>
            This link and code will only be valid for the next 5 minutes. If the
            link does not work, you can use the login verification code directly:
          </Text>
          <code style={code}>{validationCode}</code>
          <Hr style={hr} />
          <Link href="https://spacejelly.dev" style={reportLink}>
            Space Jelly
          </Link>
        </Container>
      </Body>
    </Html>
  );
  
  SpaceJellyLoginCodeEmail.PreviewProps = {
    validationCode: "tt226-5398x",
  } as SpaceJellyLoginCodeEmailProps;
  
  export default SpaceJellyLoginCodeEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "560px",
  };
  
  const heading = {
    fontSize: "24px",
    letterSpacing: "-0.5px",
    lineHeight: "1.3",
    fontWeight: "400",
    color: "#484848",
    padding: "17px 0 0",
  };
  
  const paragraph = {
    margin: "0 0 15px",
    fontSize: "15px",
    lineHeight: "1.4",
    color: "#3c4149",
  };
  
  const buttonContainer = {
    padding: "27px 0 27px",
  };
  
  const button = {
    backgroundColor: "#ffdb00",
    borderRadius: "3px",
    fontWeight: "700",
    color: "#001523",
    fontSize: "15px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "11px 23px",
  };
  
  const reportLink = {
    fontSize: "14px",
    color: "#b4becc",
  };
  
  const hr = {
    borderColor: "#dfe1e4",
    margin: "42px 0 26px",
  };
  
  const code = {
    fontFamily: "monospace",
    fontWeight: "700",
    padding: "1px 4px",
    backgroundColor: "#dfe1e4",
    letterSpacing: "-0.3px",
    fontSize: "21px",
    borderRadius: "4px",
    color: "#3c4149",
  };