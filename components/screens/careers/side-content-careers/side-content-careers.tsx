"use client";

import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "@/components/globals/forms/custom-input/custom-input";
import CustomTextarea from "@/components/globals/forms/custom-textarea/custom-textarea";
import SideContentHeader from "@/components/globals/layout/side-content-header/side-content-header";
import CustomButton from "@/components/globals/forms/custom-button/custom-button";

export const onCareersFormSchema = z.object({
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

export type ICareersForm = z.infer<typeof onCareersFormSchema>;

export default function SideContentCareers() {
  const { handleSubmit, reset, ...rest } = useForm<ICareersForm>({
    resolver: zodResolver(onCareersFormSchema),
  });

  // ! Pedro: This is the function that will be called when the form is submitted.
  async function onSubmitForm(data: ICareersForm) {
    try {
      // const response = await fetch("/api/contact-us", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });

      // if (!response.ok) {
      //   throw new Error();
      // }

      reset();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="w-full flex flex-col">
      <SideContentHeader title="work with our team" />
      <FormProvider {...rest} handleSubmit={handleSubmit} reset={reset}>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="w-full flex flex-col gap-3"
        >
          <CustomInput name="name" label="Name" />
          <CustomInput name="email" label="Email" />
          <CustomInput name="phone" label="Phone" />
          <CustomInput name="desiredRole" label="Desired Role" />
          <CustomInput
            name="barNumber"
            label="Bar Number & State (If Associate)"
          />
          <CustomTextarea
            name="message"
            label="Describe Why You're Interested In The Role And Tell Us a Little About Yourself"
          />
          <CustomButton type="submit">send information</CustomButton>
        </form>
      </FormProvider>
    </div>
  );
}
