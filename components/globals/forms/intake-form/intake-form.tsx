"use client";

import { useEffect, useState, useRef } from "react";
import { z } from "zod";
import CustomInput from "@/components/globals/forms/custom-input/custom-input";
import CustomTextarea from "@/components/globals/forms/custom-textarea/custom-textarea";
import CustomButton from "@/components/globals/forms/custom-button/custom-button";
import styles from "./intake-form.module.css";
import fischerRedavidLogo from "@/public/images/fischer-redavid-trial-lawyers-logo.svg";
import trackConversions from "@/utils/trackConversions";
import Link from "next/link";
import Image from "next/image";
import CustomSelect from "../custom-select/custom-select";
import CustomRadioGroup from "../custom-radio-group/custom-radio-group";
import { useGetClientInfo } from "../../../../utils/useGetClientInfo";
import { submitContactForm } from "../../../../app/actions/forms";
import { Tracking } from "@/components/Analytics/Analytics";

export const onIntakeFormSchema = z.object({
  name: z.string().min(1, "This field is required."),
  email: z
    .string()
    .min(1, "This field is required.")
    .email("Please enter a valid email address."),
  phone: z.string().min(1, "This field is required."),
  date: z
    .string()
    .min(1, "This field is required.")
    .refine((value) => !isNaN(new Date(value).getTime()), {
      message: "Please enter a valid date.",
    }),
  communicationPreference: z.string().min(1, "This field is required."),
  message: z
    .string()
    .min(10, "Please enter a message of at least 10 characters."),
  treatment: z.string().min(1, "This field is required."),
  location: z.string().min(1, "This field is required."),
});

export type IIntakeForm = z.infer<typeof onIntakeFormSchema>;

export default function IntakeForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<IIntakeForm>({
    name: "",
    email: "",
    phone: "",
    date: "",
    communicationPreference: "",
    message: "",
    treatment: "",
    location: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof IIntakeForm, string>>
  >({});

  const clientInfo = useGetClientInfo();
  const formRef = useRef<HTMLFormElement>(null);
  const eventName = "Fischer Redavid | Intake Submission";

  const handleInputChange = (field: keyof IIntakeForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleClearInput = (fieldName: keyof IIntakeForm) => {
    setFormData((prev) => ({ ...prev, [fieldName]: "" }));
  };

  const validateForm = () => {
    try {
      onIntakeFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof IIntakeForm, string>> = {};
        error.errors.forEach((err) => {
          const path = err.path[0] as keyof IIntakeForm;
          newErrors[path] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  async function onSubmitForm(e: React.FormEvent) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormSubmitted(true);

    try {
      trackConversions(formData, eventName);
      const { token } = await Tracking.getRecaptchaToken();
      await submitContactForm(formData, token, clientInfo, eventName);

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        communicationPreference: "",
        message: "",
        treatment: "",
        location: "",
      });
    } catch (err) {
      console.error(err);
      setFormSubmitted(false);
    }
  }

  if (formSubmitted) {
    return (
      <div className={styles.messageContainer}>
        <Image
          alt="Fischer & Redavid Trial Lawyers Logo"
          width={200}
          src={fischerRedavidLogo}
        />
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Thank you for contacting Fischer Redavid.
          </h2>
          <p className={styles.description}>
            An Intake Specialist will be in touch with you soon. If this is an
            urgent matter or an emergency,{" "}
            <Link href={"tel:9548608434"} className={styles.link}>
              please call 888-694-0708
            </Link>
            to speak with a member of our team.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmitForm} className={styles.formContent}>
      <CustomInput
        name="name"
        label="FULL NAME"
        value={formData.name}
        onChange={(e) => handleInputChange("name", e.target.value)}
        error={errors.name}
      />
      <CustomInput
        name="phone"
        label="PHONE"
        value={formData.phone}
        onChange={(e) => handleInputChange("phone", e.target.value)}
        error={errors.phone}
      />
      <CustomInput
        name="email"
        label="EMAIL"
        value={formData.email}
        onChange={(e) => handleInputChange("email", e.target.value)}
        error={errors.email}
      />

      <CustomRadioGroup
        name="communicationPreference"
        label="communication preference"
        value={formData.communicationPreference}
        onChange={(value) =>
          handleInputChange("communicationPreference", value)
        }
        error={errors.communicationPreference}
        options={[
          {
            label: "Phone Call",
            value: "phone-call",
          },
          {
            label: "Text",
            value: "text",
          },
          {
            label: "Email",
            value: "email",
          },
        ]}
      />

      <div className={styles.formDetails}>
        <CustomInput
          name="date"
          label="Date of Incident"
          type="date"
          value={formData.date}
          onChange={(e) => handleInputChange("date", e.target.value)}
          error={errors.date}
        />
        <CustomInput
          name="location"
          label="location (city, state)"
          value={formData.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
          error={errors.location}
        />
      </div>

      <CustomTextarea
        name="message"
        label="Description of incident and injury"
        value={formData.message}
        onChange={(e) => handleInputChange("message", e.target.value)}
        error={errors.message}
      />

      <div className="w-full pb-1 pl-3 border border-[#083376]">
        <CustomSelect
          backgroundColor="transparent"
          isFullHeight
          name="treatment"
          label="Are you receiving medical treatment for this incident?"
          options={["Yes", "No"].map((option) => ({
            value: option,
            label: option,
          }))}
          placeholder=""
          value={formData.treatment}
          onChange={(value) => handleInputChange("treatment", value)}
          onClear={() => handleClearInput("treatment")}
          error={errors.treatment}
        />
      </div>

      <CustomButton type="submit" size="large">
        send information
      </CustomButton>
    </form>
  );
}
