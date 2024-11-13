"use client";
import { VideoCenterProps } from "@/types/types";
import styles from "./main-content-podcasts.module.css";
import ReactPlayer from "react-player/youtube";

interface PodcastCardProps {
  url?: string;
  title?: string;
  episodeNumber?: number;
}

function PodcastCard({ url, title, episodeNumber = 1 }: PodcastCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.videoContainer}>
        {url && (
          <ReactPlayer url={url} className={styles.videoImage} controls />
        )}
      </div>

      <div className={styles.episodeInfo}>
        {episodeNumber && (
          <p className={styles.episodeNumber}>EPISODE {episodeNumber}</p>
        )}
        {title && <h6 className={styles.title}>{title}</h6>}
      </div>
    </div>
  );
}

interface MainContentPodcastsProps {
  podcasts: VideoCenterProps[];
}

export default function MainContentPodcasts({
  podcasts,
}: MainContentPodcastsProps) {
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

        {podcasts?.map((podcast, index) => (
          <PodcastCard
            key={index}
            episodeNumber={podcast.episodeNumber}
            title={podcast.title}
            url={podcast.url}
          />
        ))}
      </div>
    </div>
  );
}
