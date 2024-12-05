'use client';
import { ImageSchema, type VideoSchema } from '@/types/types';
import { PortableText } from '@portabletext/react';
import ReactPlayer from 'react-player';
import { TypedObject } from 'sanity';
import { urlFor } from '@/utils/urlFor';
import CallToActionBlock from './call-to-action-block';
import DarkGrayBoxWithLogo from '../../layout/dark-gray-box-with-logo/dark-gray-box-with-logo';
import Link from 'next/link';

import Image from 'next/image';

const components = {
  types: {
    image: ({ value }: { value: ImageSchema }) => {
      if (!value || !value.asset) {
        console.error('value or value.asset is missing', value);
        return null;
      }

      return (
        <Image
          className='max-w-[1090px] w-full aspect-video object-cover my-4 mx-auto border-b border-[#2DE046]'
          src={urlFor(value.asset).url()}
          alt={value.caption || 'Imagem without description'}
          width={800}
          height={800}
        />
      );
    },

    video: ({ value }: { value: VideoSchema }) => {
      return (
        <div
          id='portable-react-player'
          className='max-w-[1090px] w-full h-full mx-auto'
        >
          <ReactPlayer controls url={value.url} />
        </div>
      );
    },

    callToAction: () => (
      <DarkGrayBoxWithLogo title='Refer a case today'>
        <div className='max-w-[590px] w-full ml-auto text-[clamp(18px,_4.32vw,_24px)] tracking-[calc(clamp(18px,_4.32vw,_24px)_*_-0.02)] text-right'>
          <p>
            You can get in touch with us via our online contact form or by
            calling{' '}
            <Link href='tel:+19548608434'>
              <b>(954) 860-8434</b>
            </Link>
          </p>
        </div>
      </DarkGrayBoxWithLogo>
    ),
  },
};

interface PortableTextComponentProps {
  content: TypedObject | TypedObject[];
}

export default function PortableTextComponent({
  content,
}: PortableTextComponentProps) {
  return (
    <div id='portable-text-wrapper'>
      {content && <PortableText value={content} components={components} />}
    </div>
  );
}
