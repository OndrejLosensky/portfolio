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
  
  
  export const SpaceJellyLoginCodeEmail = () => (
    <Html>
      <Head />
      <Preview> Děkuji, za vaše přihlášení k pravidelnému zásílání novinek</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={{
            ...heading,
            fontSize: '16px',
            fontWeight: '600'
          }}>
            Ondřej Losenský
          </Text>
          <Heading style={heading}>Newsletter – Ondřej Losenský</Heading>
          <Text style={paragraph}>
            Pokud si nepřejete aby jste dostávali nadále e-maily neváhejte mě kontaktovat na adresu: <strong>losenskyondrej@gmail.com</strong>
          </Text>
          <Hr style={hr} />
          <Link href="https://losensky.tech" style={reportLink}>
            Můj web
          </Link>
        </Container>
      </Body>
    </Html>
  );
  
  
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
  
  const reportLink = {
    fontSize: "14px",
    color: "#b4becc",
  };
  
  const hr = {
    borderColor: "#dfe1e4",
    margin: "42px 0 26px",
  };
  