import React from "react";
import Link from "next/link";
import Image from "next/image";
import amazonMusicImage from "@/public/images/pod-amazon-music.webp";
import appleImage from "@/public/images/pod-apple.webp";
import spotifyImage from "@/public/images/pod-spotify.webp";
import youtubeImage from "@/public/images/pod-youtube.webp";
import styles from "./side-content-podcasts.module.css";

const podcastLinks = [
  {
    name: "youtube",
    url: "https://www.youtube.com/@onjusticepodcast",
    image: youtubeImage,
  },
  {
    name: "apple podcasts",
    url: "https://podcasts.apple.com/us/podcast/on-justice-podcast/id1618299220",
    image: appleImage,
  },
  {
    name: "spotify",
    url: "https://open.spotify.com/show/6Tr2NdgzPheSQeFbKoJkXJ",
    image: spotifyImage,
  },
  {
    name: "amazon music",
    url: "https://music.amazon.com/podcasts/0847d676-77ef-42eb-a382-8d2dff03049e/on-justice-podcast",
    image: amazonMusicImage,
  },
];

export default function SideContentPodcasts() {
  return (
    <div className={styles.container}>
      <h6 className={styles.heading}>find our podcast on</h6>

      <div className={styles.podcastLinks}>
        {podcastLinks.map((link) => (
          <Link href={link.url} key={link.name} className={styles.link}>
            <Image src={link.image} alt={link.name} className={styles.image} />
          </Link>
        ))}
      </div>
    </div>
  );
}
