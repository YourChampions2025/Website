import React from 'react'
import { FaStar } from "react-icons/fa6";
import styles from './home-testimonials.module.css'
import CustomButton from '@/components/globals/forms/custom-button/custom-button'

const homeTestimonials = [
  {
    initials: 'MF',
    titleEvaluation: '"Fischer Redavid Law firm provided thoughtful, honest care with specialized legal support."' ,
    evaluation:'My friend was in a terrible accident and Fischer Redavid was compassionate, helpful, and available from the beginning. During a time that was traumatic for his family. Fischer Redavid Law firm provided thoughtful, honest care with specialized legal support. I would recommend them.' ,
    customerName: 'mark',
 },
 {
  initials: 'DO',
  titleEvaluation: '"I truly recommend John & Abigail."' ,
  evaluation:'I truly recommend John & Abigail. They helped me so much with my case and kept me updated throughout the whole process until everything was taken care of. I felt at ease during the whole process. They were very efficient and got the job done. I’m very happy with the outcome of this case thanks, guys.' ,
  customerName: 'Danny O.',
},
{
  initials: 'PS',
  titleEvaluation: '"I would absolutely work with them again in a heartbeat."' ,
  evaluation:'John Fischer and his team get right to work. They know the law and how to apply it. Due to their hard work, a client that I referred received the policy limits and was compensated for their injuries! 5 stars!!' ,
  customerName: 'Pushkar M. Singh, Esq.',
},

]

function HomeTestimonials() {
  return (
    <div className={styles.homeTestimonialsContainer}>
      <div className={styles.homeTestimonialsContent }>
          <div className={styles.homeTestimonialsHeader}>
            <h2 className={styles.headerTitle}>the results speak for themselves</h2>
            <CustomButton color='blue' size='small'>
              explore all testimonials
            </CustomButton>
          </div>

          <div className={styles.testimonialContainers}>
            {homeTestimonials.map((testimonials, i ) => (
              <div className={styles.testimonialsComponent} key={i}>
              <div className={styles.userInitials}>{testimonials.initials}</div>
                <h4 className={styles.testimonialsTitle}>{testimonials.titleEvaluation}</h4>
                <p className={styles.testimonalDescription}>{testimonials.evaluation}</p>
              <div className={styles.avaluation}>
                <p>{testimonials.customerName}</p>
                <div className={styles.starContainer}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <span  key={index}>
                    <FaStar color='#2de046' size={18}/>
                  </span>
                ))}
              </div>
            </div>
            </div> 
            ))}
  
        </div>
      </div>
    </div>
  )
}

export default HomeTestimonials