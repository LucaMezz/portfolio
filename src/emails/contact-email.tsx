import { Container } from "@react-email/container";
import { Html } from "@react-email/html";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";

import { ContactFormValues } from "@/components/pages/home/contact-form";

export interface ContactEmail {
  values: ContactFormValues;
}

export default function ContactEmail({ values }: ContactEmail) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>{values.subject}</Text>
          <Text
            style={paragraph}
          >{`from: ${values.name} (${values.email})`}</Text>
          <Text style={paragraph}>{values.message}</Text>
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};
