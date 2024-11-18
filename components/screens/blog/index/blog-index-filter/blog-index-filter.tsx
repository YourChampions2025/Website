"use client";

import CustomInput from "@/components/globals/forms/custom-input/custom-input";
import CustomSelect from "@/components/globals/forms/custom-select/custom-select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { useDebounce } from "@uidotdev/usehooks";
import { BlogCategoryProps } from "@/types/types";

export const onBlogIndexFilterSchema = z.object({
  title: z.string().optional(),
  year: z.string().optional(),
  category: z.string().optional(),
});

export type IBlogIndexFilter = z.infer<typeof onBlogIndexFilterSchema>;

export default function BlogIndexFilter({
  categoriesForBlogs,
}: {
  categoriesForBlogs: BlogCategoryProps[];
}) {
  const { control, setValue, watch, ...rest } = useForm<IBlogIndexFilter>({
    resolver: zodResolver(onBlogIndexFilterSchema),
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  const paramMap: Record<keyof IBlogIndexFilter, string> = {
    title: "title",
    year: "year",
    category: "category",
  };

  // Watch form values
  const titleValue = watch("title");
  const yearValue = watch("year");
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

    if (yearValue) {
      params.set("year", yearValue);
    } else {
      params.delete("year");
    }

    if (categoryValue) {
      params.set("category", categoryValue);
    } else {
      params.delete("category");
    }

    // Reset limit to default when filters change
    params.set("limit", "12");

    router.push(`/articles?${params.toString()}`, { scroll: false });
  }, [debouncedTitleValue, yearValue, categoryValue]);

  const handleClearInput = (name: keyof IBlogIndexFilter) => {
    setValue(name, "");

    const paramName = paramMap[name];

    const params = new URLSearchParams(searchParams.toString());
    params.delete(paramName);

    params.set("limit", "12");

    router.push(`/articles?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full relative border-t border-[#083376]">
      <div className="max-w-[1600px] w-full h-full mx-auto grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr] relative z-20 px-4 2xl:px-0">
        <div className="w-full h-full flex items-center justify-center py-10 md:py-12">
          <div className="max-w-4xl w-full flex flex-col items-start text-[#8D8D8D] text-[clamp(16px,2vw,18px)] tracking-[calc(clamp(16px,2vw,18px)*-0.02)]">
            "Champions' Blog" offers insights, updates, and analysis on key
            topics impacting Florida injury law and other relevant legal
            matters. Our team of experts, led by Terry P. Roberts, Director of
            Appellate Practice, shares over two decades of experience to provide
            high-quality content and keep you well-informed.
            <br />
            <br />
            The latest posts appear below, or you can use the tools below to
            search by keyword, sort results by date, or explore specific topics.
            <br />
            <br />
            Send your feedback or suggestions directly to Terry at
            Terry@YourChampions.com.
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
                name="year"
                control={control}
                render={({ field }) => (
                  <CustomSelect
                    backgroundColor="transparent"
                    isFullHeight
                    label="Search by year"
                    options={[
                      "2024",
                      "2023",
                      "2022",
                      "2020",
                      "2019",
                      "2018",
                      "2017",
                      "2015",
                    ].map((option) => ({
                      value: option,
                      label: option,
                    }))}
                    value={field.value || ""}
                    onChange={(e) => {
                      field.onChange(e);
                    }}
                    onClear={() => handleClearInput("year")}
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
                  label="Search for a category"
                  options={categoriesForBlogs.map((option) => ({
                    value: option.slug,
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
