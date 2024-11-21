'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowDropRightFill } from 'react-icons/ri';
import styles from './home-practice-areas.module.css';
import imageBurn from '@/public/images/home-practice-burn.png';
import imageDrowning from '@/public/images/home-practice-drowning.png';
import imageCatastrophic from '@/public/images/home-practice-catastrophic.png';
import CustomButton from '@/components/globals/forms/custom-button/custom-button';
import { useRouter } from 'next/navigation';
import { IoTriangle } from 'react-icons/io5';

const practiceAreasCard = [
  {
    image: imageCatastrophic,
    label: 'Catastrophic Injuries',
    href: '/practice-areas/catastrophic-injuries',
    alt: 'Catastrophic Injuries',
  },
  {
    image: imageBurn,
    label: 'Burn Injuries',
    href: '/practice-areas/burn-injuries',
    alt: 'Burn Injuries',
  },
  {
    image: imageDrowning,
    label: 'Drowning',
    href: '/practice-areas/drowning',
    alt: 'Drowning',
  },
];

function HomePracticeAreas() {
  const router = useRouter();

  function handleButtonResults() {
    router.push('/practice-areas');
  }

  return (
    <section className='w-full pb-16 flex flex-col'>
      <div className='w-full px-4 py-12 border-t border-t-[#083376] border-b border-b-[#083376]'>
        <div className='w-full max-w-[1503px] mx-auto flex items-center justify-between flex-col md:flex-row gap-8'>
          <h2 className='text-[clamp(50px,_8.42vw,_84px)] font-serif tracking-[clamp(50px,_8.42vw,_84px)*-.02] capitalize text-white'>
            practice areas
          </h2>

          <CustomButton
            type='submit'
            size='medium'
            color='blue'
            onClick={handleButtonResults}
          >
            explore all practice areas
          </CustomButton>
        </div>
      </div>

      <div className='w-full px-4'>
        <div className='max-w-[1503px] mt-16 w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
          {practiceAreasCard.map((data, i) => (
            <div
              key={i}
              className='w-full h-[clamp(400px,58.44vw,526px)] relative'
            >
              <Image
                alt={data.alt}
                src={data.image}
                className='w-full h-full object-cover absolute inset-0 z-0'
              />
              <div className='w-full h-full flex flex-col items-start justify-end gap-2 p-8 relative z-10'>
                <p className='text-[28px] tracking-[28px*-.02] capitalize text-white font-medium'>
                  {data.label}
                </p>
                <Link
                  href={data.href}
                  className='flex items-center gap-2 uppercase text-[clamp(14px,2vw,18px)] tracking-[calc(clamp(14px,2vw,18px)*-0.02)] font-medium text-pretty underline flex-shrink-0 hover:text-[#2DE046] duration-300 ease-in-out'
                >
                  <IoTriangle className='shrink-0 rotate-90 text-[#2DE046]' />
                  learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePracticeAreas;
