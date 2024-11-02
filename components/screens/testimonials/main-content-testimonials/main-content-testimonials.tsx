import { FaStar } from "react-icons/fa6";
import styles from "./main-content-testimonials.module.css";

interface TestimonialCardProps {
  testimony?: string;
  name?: string;
  quote?: string;
  stars?: number;
}

function TestimonialCard({
  testimony = "My friend was in a terrible accident and Fischer Redavid was compassionate, helpful, and available from the beginning. During a time that was traumatic for his family. Fischer Redavid Law firm provided thoughtful, honest care with specialized legal support. I would recommend them.",
  name = "mark j.",
  quote = "Fischer Redavid Law firm provided thoughtful, honest care with specialized legal support.",
  stars = 5,
}: TestimonialCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.starsContainer}>
        {Array.from({ length: stars }).map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      <h6 className={styles.quote}>"{quote}"</h6>

      <p className={styles.testimony}>{testimony}</p>

      <p className={styles.name}>{name}</p>
    </div>
  );
}

export default function MainContentTestimonials() {
  return (
    <div className={styles.container}>
      <div className={styles.testimonialsWrapper}>
        <p className={styles.introText}>
          Fischer Redavid PLLC strives for client satisfaction! We have many
          happy clients who would love to share their stories with you. Take a
          look and read all of our testimonials below. If you are ready to start
          your service, please call us today at{" "}
          <b className={styles.contactNumber}>888-694-0708</b>.
        </p>

        {Array.from({ length: 10 }).map((_, index) => (
          <TestimonialCard key={index} />
        ))}
      </div>
    </div>
  );
}
