import { FaStar } from "react-icons/fa6";
import styles from "./main-content-testimonials.module.css";
import { TestimonialProps } from "@/types/types";
import { TypedObject } from "sanity";
import PortableTextComponent from "@/components/globals/general/portable-text-component/portable-text-component";

interface TestimonialCardProps {
  testimony?: TypedObject | TypedObject[];
  name?: string;
  quote?: string;
  stars?: number;
}

function TestimonialCard({
  testimony,
  name,
  quote,
  stars = 5,
}: TestimonialCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.starsContainer}>
        {Array.from({ length: stars }).map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      <h6 className={styles.quote}>{quote}</h6>
      {testimony && <PortableTextComponent content={testimony} />}
      <p className={styles.name}>{name}</p>
    </div>
  );
}

interface MainContentTestimonialsProps {
  testimonials: TestimonialProps[];
}

export default function MainContentTestimonials({
  testimonials,
}: MainContentTestimonialsProps) {
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

        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} stars={5} {...testimonial} />
        ))}
      </div>
    </div>
  );
}
