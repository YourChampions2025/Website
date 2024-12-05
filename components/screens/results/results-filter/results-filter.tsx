"use client";

import CustomSelect from "@/components/globals/forms/custom-select/custom-select";
import { resultsCategoriesOptions } from "@/utils/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { useDebounce } from "@uidotdev/usehooks";
import CustomInput from "@/components/globals/forms/custom-input/custom-input";

export const onResultsFilterSchema = z.object({
  title: z.string().optional(),
  category: z.string().optional(),
});

export type IResultsFilter = z.infer<typeof onResultsFilterSchema>;

export default function ResultsFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { control, setValue, watch, ...rest } = useForm<IResultsFilter>({
    resolver: zodResolver(onResultsFilterSchema),
    defaultValues: {
      title: searchParams.get("title") || "",
      category: searchParams.get("category") || "",
    },
  });

  const paramMap: Record<keyof IResultsFilter, string> = {
    title: "title",
    category: "category",
  };

  // Watch form values
  const titleValue = watch("title");
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

    if (categoryValue) {
      params.set("category", categoryValue);
    } else {
      params.delete("category");
    }

    // Reset limit to default when filters change
    params.set("limit", "12");

    router.push(`/results?${params.toString()}`, { scroll: false });
  }, [debouncedTitleValue, categoryValue, router, searchParams]);

  const handleClearInput = (name: keyof IResultsFilter) => {
    setValue(name, "");

    const paramName = paramMap[name];

    const params = new URLSearchParams(searchParams.toString());
    params.delete(paramName);
    params.set("limit", "12");

    router.push(`/results?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full relative border-t border-[#083376]">
      <div className="max-w-[1600px] w-full h-full mx-auto grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr] relative z-20 px-4 2xl:px-0">
        <div className="w-full h-full flex items-center justify-center py-10 md:py-20">
          <div className="max-w-4xl w-full flex flex-col items-start text-[#8D8D8D] text-[clamp(16px,2vw,18px)] tracking-[calc(clamp(16px,2vw,18px)*-0.02)]">
            Over the last 7 years, we have recovered over $70 million for our
            clients and have won jury trials across the country. We're proud of
            our success and are determined to continue fighting for victims of
            negligence.
          </div>
        </div>
        <div className="hidden md:flex" />
      </div>

      <div className="w-full h-40 md:h-full grid-cols-1 md:grid-cols-[1.25fr_0.75fr] relative md:absolute inset-0 grid z-50 border-t border-[#083376] md:border-t-0">
        <div className="hidden md:block" />
        <FormProvider
          {...rest}
          control={control}
          setValue={setValue}
          watch={watch}
        >
          <form className="w-full h-full flex flex-col border-l border-[#083376]">
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
            <div className="w-full h-full border-t border-[#083376]">
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <CustomSelect
                    backgroundColor="transparent"
                    isFullHeight
                    name={field.name}
                    label="Search for a category"
                    options={resultsCategoriesOptions.map((option) => ({
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
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
