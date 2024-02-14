import { ContactFormValues } from "@/components/pages/home/contact-form";

export const sendContactForm = async (values: ContactFormValues) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send Email");
    return res.json();
  });
};
