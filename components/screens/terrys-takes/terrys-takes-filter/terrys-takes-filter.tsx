"use client";

import CustomInput from "@/components/globals/forms/custom-input/custom-input";
import CustomSelect from "@/components/globals/forms/custom-select/custom-select";
import { categoriesOptions, courtOptions } from "@/utils/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { useDebounce } from "@uidotdev/usehooks";

export const onTerrysTakesFilterSchema = z.object({
  title: z.string().optional(),
  court: z.string().optional(),
  category: z.string().optional(),
});

export type ITerrysTakesFilter = z.infer<typeof onTerrysTakesFilterSchema>;

export default function TerrysTakesFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Set initial values from URL parameters
  const { control, setValue, watch, ...rest } = useForm<ITerrysTakesFilter>({
    resolver: zodResolver(onTerrysTakesFilterSchema),
    defaultValues: {
      title: searchParams.get("title") || "",
      court: searchParams.get("court") || "",
      category: searchParams.get("category") || "",
    },
  });

  const paramMap: Record<keyof ITerrysTakesFilter, string> = {
    title: "title",
    court: "court",
    category: "category",
  };

  // Watch form values
  const titleValue = watch("title");
  const courtValue = watch("court");
  const categoryValue = watch("category");

  // Debounce the search input
  const debouncedTitleValue = useDebounce(titleValue, 300);

  // Update URL when debounced search value or other values change
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedTitleValue) {
      params.set("title", debouncedTitleValue);
    } else {
      params.delete("title");
    }

    if (courtValue) {
      params.set("court", courtValue);
    } else {
      params.delete("court");
    }

    if (categoryValue) {
      params.set("category", categoryValue);
    } else {
      params.delete("category");
    }

    // Reset limit to default when filters change
    params.set("limit", "12");

    router.push(`/terrys-takes?${params.toString()}`, { scroll: false });
  }, [debouncedTitleValue, courtValue, categoryValue]);

  const handleClearInput = (name: keyof ITerrysTakesFilter) => {
    setValue(name, "");

    const paramName = paramMap[name];

    const params = new URLSearchParams(searchParams.toString());
    params.delete(paramName);

    params.set("limit", "12");

    router.push(`/terrys-takes?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full relative border-t border-[#083376]">
      <div className="max-w-[1600px] w-full h-full mx-auto grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr] relative z-20 px-4 2xl:px-0">
        <div className="w-full h-full flex items-center justify-center py-10 md:py-12">
          <div className="max-w-4xl w-full flex flex-col items-start text-[#8D8D8D] text-[clamp(16px,2vw,18px)] tracking-[calc(clamp(16px,2vw,18px)*-0.02)]">
            Welcome to Terry's Takes! Here you'll find opinion summaries
            authored by our Director of Appellate Practice, Terry P. Roberts.
            Check out information on cases from the courts around Florida and
            the United States Virgin Islands as well as the Eleventh Circuit
            Court of Appeals and the Supreme Court of the United States.
            <br />
            <br />
            Grab a coffee and buckle up for some riveting reading. You can use
            the tools on this page to search by keyword, court, and category.
            <br />
            <br />
            Terry is always eager to hear your thoughts! Email him directly to
            connect at terry@yourchampions.com.{" "}
          </div>
        </div>
        <div className="hidden md:flex" />
      </div>

      <div className="w-full h-60 md:h-full grid-cols-1 md:grid-cols-[1.25fr_0.75fr] relative md:absolute inset-0 grid z-50 border-t border-[#083376] md:border-t-0">
        <div className="hidden md:block" />
        <FormProvider
          {...rest}
          control={control}
          setValue={setValue}
          watch={watch}
        >
          <form className="w-full h-full flex flex-col border-l-0 md:border-l border-[#083376]">
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <CustomInput
                  isFullHeight
                  backgroundColor="transparent"
                  name="title"
                  label="Search for a keyword"
                  value={field.value || ""}
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                />
              )}
            />
            <div className="w-full h-full border-t border-b border-[#083376]">
              <Controller
                name="court"
                control={control}
                render={({ field }) => (
                  <CustomSelect
                    backgroundColor="transparent"
                    isFullHeight
                    name={field.name}
                    label="Search by court"
                    options={courtOptions.map((option) => ({
                      value: option.value,
                      label: option.title,
                    }))}
                    value={field.value || ""}
                    onChange={(e) => {
                      field.onChange(e);
                    }}
                    onClear={() => handleClearInput("court")}
                  />
                )}
              />
            </div>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  backgroundColor="transparent"
                  isFullHeight
                  name={field.name}
                  label="Search by category"
                  options={categoriesOptions.map((option) => ({
                    value: option.value,
                    label: option.title,
                  }))}
                  value={field.value || ""}
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                  onClear={() => handleClearInput("category")}
                />
              )}
            />
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
