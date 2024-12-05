import ContactUsForm from '@/components/globals/forms/contact-us-form/contact-us-form';
import LogoSlider from '@/components/globals/general/logo-slider/logo-slider';
import PortableTextComponent from '@/components/globals/general/portable-text-component/portable-text-component';
import CustomButton from '@/components/globals/forms/custom-button/custom-button';
import { SqueezeProps } from '@/types/types';
import React from 'react';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

import ImageBadge1 from '@/public/images/about-us-slug-badge1.png';
import ImageBadge2 from '@/public/images/about-us-slug-badge2.png';
import ImageBadge3 from '@/public/images/about-us-slug-badge3.png';
import ImageBadge4 from '@/public/images/about-us-slug-badge4.png';
import ImageBadge5 from '@/public/images/about-us-slug-badge5.png';
import ImageBadge6 from '@/public/images/about-us-slug-badge6.png';
import ImageBadge7 from '@/public/images/about-us-slug-badge7.png';

import ImageLogo1 from '@/public/images/home-logo-carousel-1.png';
import ImageLogo2 from '@/public/images/home-logo-carousel-2.png';
import ImageLogo3 from '@/public/images/home-logo-carousel-3.png';
import ImageLogo4 from '@/public/images/home-logo-carousel-4.png';
import ImageLogo5 from '@/public/images/home-logo-carousel-5.png';
import ImageLogo6 from '@/public/images/home-logo-carousel-6.png';
import ImageLogo7 from '@/public/images/home-logo-carousel-7.png';
import ImageLogo8 from '@/public/images/home-logo-carousel-8.png';
import ImageLogo9 from '@/public/images/home-logo-carousel-9.png';
import Link from 'next/link';
import { MdPhone } from 'react-icons/md';

const LOGOS_ONE = [
  ImageBadge1,
  ImageBadge2,
  ImageBadge3,
  ImageBadge4,
  ImageBadge5,
  ImageBadge6,
  ImageBadge7,
];

const LOGOS_TWO = [
  ImageLogo1,
  ImageLogo2,
  ImageLogo6,
  ImageLogo3,
  ImageLogo7,
  ImageLogo4,
  ImageLogo8,
  ImageLogo5,
  ImageLogo9,
];

interface SqueezeLayoutProps {
  squeezeItem: SqueezeProps;
}

export default function SqueezeLayout({ squeezeItem }: SqueezeLayoutProps) {
  const {
    title,
    description,
    subTitle,
    contentTitle,
    content,
    quote,
    contactTitle,
  } = squeezeItem;

  return (
    <main className='w-full pt-[100px] sm:pt-[125px] p-4 pb-20'>
      <div className='w-full flex flex-col items-center'>
        <div className='w-full px-4 flex flex-col items-center'>
          <div className='w-full h-fit aspect-video mb-8 block sm:hidden '>
            <video
              className='w-full h-full object-cover'
              src='https://cg-fischer-redavid.s3.us-east-1.amazonaws.com/fischerRedavid.mp4'
              playsInline
              autoPlay
              muted
              loop
              controls
            />
          </div>

          <h1 className='max-w-[1080px] w-full text-[clamp(32px,5.77vw,52px)] tracking-[calc(clamp(32px,5.77vw,52px)*0.01)] font-serif text-center text-balance sm:hidden'>
            {title}
          </h1>
          <p className='max-w-[1080px] w-full text-[clamp(12px,2.22vw,20px)] text-[#2DE046] tracking-[calc(clamp(12px,2.22vw,20px)*-0.02)] text-center text-pretty mt-4 sm:hidden'>
            {description}
          </p>
        </div>

        <div className='w-full flex flex-col mt-5'>
          <div className='w-full flex flex-col sm:hidden'>
            <Link
              href='tel:8886940708'
              className='group flex items-center justify-center w-full pb-4 gap-2 text-[#FFFC] hover:text-[#2DE046] transition-colors duration-300'
            >
              <div className='w-[32px] h-[32px] flex items-center justify-center border border-[#2DE046] rounded-full group-hover:bg-[#2DE04640] transition-all duration-1000'>
                <MdPhone
                  size={18}
                  className='text-current group-hover:text-[#2DE046] transition-colors duration-300'
                />
              </div>
              <b className='text-[24px] text-current group-hover:text-[#2DE046] transition-colors duration-300'>
                (888) 694-0708
              </b>
            </Link>

            <Link
              href='#contact-us'
              className=' flex items-center justify-center'
            >
              <CustomButton size='small'>get a free consultation</CustomButton>
            </Link>
          </div>

          <div className='w-full py-6 h-fit relative z-50 pointer-events-none'>
            <LogoSlider logos={LOGOS_ONE} />
          </div>
          <div className='w-full flex flex-col items-center px-4 py-6 border-y border-[#083376]'>
            <div className='max-w-[1252px] w-full flex items-center justify-between gap-4 md:gap-8 flex-col md:flex-row'>
              <div className='flex items-center gap-3 text-center md:text-left'>
                <div className='w-3 h-3 flex-shrink-0 rounded-full bg-[#2DE046]' />
                <p className='text-[clamp(24px,5.33vw,40px)] tracking-[calc(clamp(24px,5.33vw,40px)*0.01)] capitalize font-serif text-white text-pretty'>
                  {subTitle}
                </p>
              </div>
              <p className='text-center md:text-right max-w-[485px] w-full text-[clamp(12px,2vw,18px)] tracking-[calc(clamp(12px,2vw,18px)*-0.02)] text-[#8D8D8D] text-pretty'>
                Our aggressive personal injury litigation strategies deliver
                results on the large complex cases other lawyers can't pursue.
              </p>
            </div>
          </div>

          <div className='w-full h-fit pt-8 px-4 flex flex-col items-center'>
            <div className='max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-[61%_39%] gap-12'>
              <div className='w-full flex flex-col'>
                <div className='w-full h-fit aspect-video hidden sm:block'>
                  <video
                    className='w-full h-full object-cover border border-[#2DE046] p-3'
                    src='https://cg-fischer-redavid.s3.us-east-1.amazonaws.com/fischerRedavid.mp4'
                    playsInline
                    autoPlay
                    muted
                    loop
                    controls
                  />
                </div>

                <div className='w-full py-5 border-b border-[#083376] flex items-start justify-between'>
                  <h2 className='max-w-[520px] w-full text-left text-[clamp(32px,6.22vw,56px)] tracking-[calc(clamp(32px,6.22vw,56px)*0.01)] capitalize font-serif'>
                    {contentTitle}
                  </h2>

                  <img
                    className='w-14 h-fit object-contain'
                    src='/images/bio-details.svg'
                    alt='Vector'
                  />
                </div>

                <div className='w-full mt-10'>
                  <PortableTextComponent content={content} />
                </div>

                <div className='w-full mt-16 bg-[#1A1B21] py-[clamp(24px,5.33vw,48px)] px-[clamp(16px,5.33vw,48px)]'>
                  <div className='w-full flex items-start gap-[clamp(16px,2.66vw,24px)]'>
                    <div className='w-[clamp(32px,6.22vw,56px)] h-[clamp(32px,6.22vw,56px)] flex-shrink-0 text-[#2DE046] flex items-center justify-center'>
                      <BiSolidQuoteAltLeft className='w-full h-full' />
                    </div>

                    <div className='w-full flex flex-col items-start gap-6'>
                      <p className='text-white text-[clamp(16px,2vw,18px)] tracking-[calc(clamp(16px,2vw,18px)*-0.02)]'>
                        {quote}
                      </p>
                      <p className='text-[#2DE046] uppercase text-[clamp(16px,2vw,18px)] tracking-[calc(clamp(16px,2vw,18px)*-0.02)] font-medium'>
                        John Fischer & Jordan Redavid
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-full flex flex-col'>
                <p className='text-[clamp(28px,4.88vw,44px)] tracking-[calc(clamp(28px,4.88vw,44px)*0.01)] font-serif text-pretty capitalize mb-5'>
                  {contactTitle}
                </p>
                <div id='contact-us' className='mb-10'>
                  <ContactUsForm event='Medical Malpractice | Form Submission' />
                </div>
                <div className='w-full h-fit aspect-video hidden md:block'>
                  <video
                    className='w-full h-full object-cover'
                    src='https://cg-fischer-redavid.s3.us-east-1.amazonaws.com/fischerRedavid.mp4#t=10'
                    playsInline
                    autoPlay
                    controls
                    muted
                    loop
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
