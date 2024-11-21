'use client';

import React from 'react';
import { FaStar } from 'react-icons/fa6';
import styles from './home-testimonials.module.css';
import CustomButton from '@/components/globals/forms/custom-button/custom-button';
import Link from 'next/link';
import { type BlogProps } from '@/types/types';
import PortableTextComponent from '@/components/globals/general/portable-text-component/portable-text-component';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { formatDateForHref } from '@/utils/functions';
import { IoTriangle } from 'react-icons/io5';

interface HomeBlogProps {
  blogPosts: BlogProps[];
}

function HomeBlog({ blogPosts }: HomeBlogProps) {
  return (
    <div className='w-full py-20 flex flex-col gap-16'>
      <div className='w-full px-4'>
        <div className='max-w-[1503px] w-full flex items-center justify-between mx-auto'>
          <h2 className='font-serif text-[clamp(50px,_8.42vw,_84px)] tracking-[clamp(50px,_8.42vw,_84px)*-0.02] capitalize text-white'>
            resources
          </h2>

          <Link href='/testimonials'>
            <CustomButton color='blue' size='medium'>
              view all resources
            </CustomButton>
          </Link>
        </div>
      </div>

      <Swiper
        spaceBetween={24}
        grabCursor
        loop
        slidesPerView='auto'
        className='!max-w-full !w-full !pl-4 2xl:!pl-[calc((100vw-1503px)/2)]'
      >
        {[...blogPosts, ...blogPosts].map((blog, index) => (
          <SwiperSlide
            key={index}
            className='!max-w-[clamp(320px,50.52vw,485px)] !w-full'
          >
            <div
              key={index}
              className='group w-full h-full flex flex-col items-start'
            >
              <div className='w-full h-[416px] overflow-hidden'>
                <Image
                  alt={blog.title}
                  src={blog.imageUrl}
                  width={1600}
                  height={1600}
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='w-full flex flex-col items-start gap-6 pt-8'>
                <span className='text-[#8D8D8D] text-[16px] tracking-[calc(16px*-0.02)] uppercase group-hover:text-white duration-300 ease-in-out'>
                  {blog.categories
                    ?.map((category) => category.title)
                    .join(', ')}
                </span>

                <h6 className='text-[24px] tracking-[calc(24px*-0.02)] font-medium text-left'>
                  {blog.title}
                </h6>

                <p className='text-[18px] tracking-[calc(18px*-0.02)] text-[#8D8D8D] text-left line-clamp-4 group-hover:text-white duration-300 ease-in-out'>
                  {blog.description}
                </p>

                <Link
                  href={`/articles/${formatDateForHref(blog.date)}/${blog.slug}`}
                  className='flex items-center justify-center gap-2 uppercase text-[clamp(14px,2vw,18px)] tracking-[calc(clamp(14px,2vw,18px)*-0.02)] text-pretty underline group-hover:text-[#6ba3fe] duration-300 ease-in-out'
                >
                  <IoTriangle className='shrink-0 rotate-90 text-[#1055C1]' />
                  learn more
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeBlog;
