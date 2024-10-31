"use client";
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
  desiredRole: z.string().min(1, "This field is required."),
  barNumber: z.string().optional(),
  message: z
    .string()
    .min(10, "Please enter a message of at least 10 characters."),
});

export type IContactUsForm = z.infer<typeof onContactUsFormSchema>;

export default function ContactUsForm() {
  const { handleSubmit, reset, ...rest } = useForm<IContactUsForm>({
    resolver: zodResolver(onContactUsFormSchema),
  });

  async function onSubmitForm(data: IContactUsForm) {
    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error();
      }

      reset();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <FormProvider {...rest} handleSubmit={handleSubmit} reset={reset}>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="w-full flex flex-col gap-3"
      >
        <CustomInput name="name" label="Name" />
        <CustomInput name="email" label="Email" />
        <CustomInput name="phone" label="Phone" />
        <CustomInput name="location" label="Location" />
        <CustomTextarea name="message" label="How can we help you?" />
        <CustomButton type="submit">send information</CustomButton>
      </form>
    </FormProvider>
  );
}
