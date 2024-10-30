import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowDropRightFill } from "react-icons/ri";
import styles from './home-practice-areas.module.css'
import imageBurn from '@/public/images/home-practice-burn.png'
import imageDrowning from '@/public/images/home-practice-drowning.png'
import imageCatastrophic from '@/public/images/home-practice-catastrophic.png'
import CustomButton from '@/components/globals/forms/custom-button/custom-button'


const practiceAreasCard = [
{
  image: imageCatastrophic,
  label: 'Catastrophic Injuries ',
  href: '/',
},
{
  image: imageBurn,
  label: 'Burn Injuries',
  href: '/',
},
{
  image: imageDrowning,
  label: 'Drowning',
  href: '/',
},
]

function HomePracticeAreas() {
  return (
    <section className={styles.practiceAreasSection}>
      <div className={styles.practiceAreasContainer}>
        <div className={styles.practiceAreasContent}>
        <div className={styles.practiceAreasHeaderWrapper}>
          <h2 className={styles.headerTitle}>practice areas</h2>
          <CustomButton type="submit" size="small" color='blue'>explore all practice areas</CustomButton>
        </div>

          <div className={styles.itemContaiter}>
            {practiceAreasCard.map((data, i) => (
              <div className={styles.linksContainer}>
               <Image alt='' src={data.image} className={styles.imageDetails}/> 
                <div className={styles.labelContainer}>
                <p className={styles.labelTitle}>{data.label}</p>
                <Link href={data.href} className={styles.linkDetails}>
                <RiArrowDropRightFill size={38} color='#2DE046'className={styles.arrowIcon}/>
                learn more
                </Link >
                </div>
                </div>
              ))}
          </div>
        </div> 
      </div>
    </section>
  )
}

export default HomePracticeAreas