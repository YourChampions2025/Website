"use client";

import React from "react";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "@/components/globals/forms/custom-input/custom-input";
import CustomTextarea from "@/components/globals/forms/custom-textarea/custom-textarea";
import CustomButton from "@/components/globals/forms/custom-button/custom-button";

export const onContactUsFormSchema = z.object({
  name: z.string().min(1, "This field is required."),
  email: z
    .string()
    .min(1, "This field is required.")
    .email("Please enter a valid email address."),
  phone: z.string().min(1, "This field is required."),
  location: z.string().min(1, "This field is required."),
  message: z
    .string()
    .min(10, "Please enter a message of at least 10 characters."),
});

export type IContactUsForm = z.infer<typeof onContactUsFormSchema>;

import trackConversions from "@/utils/trackConversions";

export default function ContactUsForm() {
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const methods = useForm<IContactUsForm>({
    resolver: zodResolver(onContactUsFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
    },
  });

  const { handleSubmit, reset } = methods;

  async function onSubmitForm(data: IContactUsForm) {
    try {
      setFormSubmitted(true);
      trackConversions(data);

      console.log({ data });

      // const response = await fetch("/api/contact-us", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });

      // if (!response.ok) {
      //   throw new Error("Failed to submit form");
      // }

      reset();
    } catch (err) {
      console.error(err);
      setFormSubmitted(false);
    }
  }

  if (formSubmitted) {
    return (
      <p>
        Thank you for reaching out to Fischer Redavid. We will be in touch with
        you shortly.
      </p>
    );
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="w-full mx-auto flex flex-col gap-3"
      >
        <CustomInput name="name" label="Name" />
        <CustomInput name="email" label="Email" />
        <CustomInput name="phone" label="Phone" />
        <CustomInput name="location" label="Location" />
        <CustomTextarea name="message" label="How can we help you?" />
        <CustomButton type="submit">Connect With Fischer Redavid</CustomButton>
      </form>
    </FormProvider>
  );
}
