import React from "react";
import styles from "./testimonials-customers.module.css";
import { IoMdStar } from "react-icons/io";

const testimonials = [
  {
    title:
      "Fischer Redavid Law firm provided thoughtful, honest care with specialized legal support.",
    testimonial:
      "My friend was in a terrible accident and Fischer Redavid was compassionate, helpful, and available from the beginning. During a time that was traumatic for his family. Fischer Redavid Law firm provided thoughtful, honest care with specialized legal support. I would recommend them.",
    author: "mark j.",
  },
  {
    title: "I truly recommend John & Abigail.",
    testimonial:
      "I truly recommend John & Abigail. They helped me so much with my case and kept me updated throughout the whole process until everything was taken care of. I felt at ease during the whole process. They were very efficient and got the job done. I’m very happy with the outcome of this case thanks, guys.",
    author: "Danny O.",
  },
  {
    title: "I would absolutely work with them again in a heartbeat.",
    testimonial:
      "Keyla, John, and Diana were all super wonderful, professional, and hardworking. Keyla is a super sharp, savvy lawyer and went above and beyond to get a successful and incredible resolution to our case and I’m very pleased with the outcome. I would absolutely work with them again in a heartbeat.",
    author: "Gabriella P.",
  },
  {
    title: "5 stars!!",
    testimonial:
      "John Fischer and his team get right to work. They know the law and how to apply it. Due to their hard work, a client that I referred received the policy limits and was compensated for their injuries! 5 stars!!",
    author: "Pushkar M. Singh, Esq.",
  },
];
function TestimonialsCustomers() {
  return (
    <div className={styles.testimonialsCustomersContainer}>
      <div className={styles.testimonialsCustomersContent}>
        <p className={styles.testimonialDescription}>
          Fischer Redavid PLLC strives for client satisfaction! We have many
          happy clients who would love to share their stories with you. Take a
          look and read all of our testimonials below. If you are ready to start
          your service, please call us today at <span>888-694-0708</span>.
        </p>

        {testimonials.map((data, index) => (
          <div className={styles.testimonialCardContainer}>
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.icon}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <IoMdStar key={i} color="#2DE046" size={20} />
                ))}
              </div>
              <h2 className={styles.cardTitle}>{data.title}</h2>
              <p className={styles.testimonialText}>{data.testimonial}</p>
              <span className={styles.testimonialAuthor}>{data.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsCustomers;
