"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "next-themes";
import { useForm } from "react-hook-form";
import { Bars, Circles, SpinningCircles, ThreeDots } from "react-loading-icons";
import { z } from "zod";

import { sendContactForm } from "@/lib/api";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string().min(2).max(2048),
});

export type ContactFormValues = z.infer<typeof formSchema>;

export interface ContactForm extends React.HTMLAttributes<HTMLElement> {}

const ContactForm: React.FC<ContactForm> = ({ ...props }) => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const { theme } = useTheme();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    setLoading(true);
    await sendContactForm(values);
    setSent(true);
    setLoading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2"
      >
        <div className="flex justify-between gap-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            disabled={loading || sent}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            disabled={loading || sent}
          />
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormControl>
                <Input placeholder="Subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          disabled={loading || sent}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-2 row-span-2">
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Message"
                  className="size-full min-h-32 resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          disabled={loading || sent}
        />
        {loading ? (
          <Button className="w-[35%] gap-3" disabled>
            <ThreeDots
              width={24}
              height={24}
              fill={theme === "light" ? "#ffffff" : "#000000"}
              speed={1.2}
            />
            <p>Please Wait</p>
          </Button>
        ) : sent ? (
          <Button className="w-[25%]" disabled>
            Sent!
          </Button>
        ) : (
          <Button type="submit" className="w-[25%]">
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
};

export default ContactForm;
