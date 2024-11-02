import styles from "./main-content-podcasts.module.css";

interface PodcastCardProps {
  url?: string;
  title?: string;
  episodeNumber?: number;
}

function PodcastCard({
  url = "",
  title = "Protecting Clients from Fraud - With Guest Sean McCleary",
  episodeNumber = 1,
}: PodcastCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.videoContainer}>
        {url && <img src={url} alt={title} className={styles.videoImage} />}
      </div>

      <div className={styles.episodeInfo}>
        <p className={styles.episodeNumber}>EPISODE {episodeNumber}</p>
        <h6 className={styles.title}>{title}</h6>
      </div>
    </div>
  );
}

export default function MainContentPodcasts() {
  return (
    <div className={styles.container}>
      <div className={styles.podcastWrapper}>
        <p className={styles.introText}>
          Fischer Redavid PLLC attorneys John Fischer and Jordan Redavid team up
          for a weekly deep dive into personal injury and wrongful death law,
          and all the issues that come with it. In a fun, conversational way
          that’s easy to understand, our lawyers discuss recent verdicts,
          obstacles that can arise during a personal injury trial, the value of
          teamwork, and ethical issues facing today’s legal professionals.
          <br />
          <br />
          With the vital help of Fischer Redavid PLLC’s friendly and
          knowledgeable support staff, our team of experienced trial lawyers
          work together to win not just verdicts, but justice for their clients.
          For a detailed look at how our office handles cases and our readiness
          to fight for personal injury victims, check out the John and Jordan on
          Justice podcast on your favorite streaming service today.
        </p>

        {Array.from({ length: 10 }).map((_, index) => (
          <PodcastCard key={index} />
        ))}
      </div>
    </div>
  );
}
