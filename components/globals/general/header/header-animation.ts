import { Variants } from "framer-motion";

export const navBarHeight: Variants = {
  initial: {
    height: 0,
  },
  enter: {
    height: "60vh",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    height: 0,
    transition: { duration: 1, delay: 0.9, ease: [0.76, 0, 0.24, 1] },
  },
};

export const logoSlideUp: Variants = {
  initial: {
    opacity: 0,
    y: 80,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 0,
    y: 80,
    transition: { duration: 0.6, delay: 0.9, ease: [0.76, 0, 0.24, 1] },
  },
};

export const linksSlideUp: Variants = {
  initial: {
    opacity: 0,
    y: 80,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 0,
    y: 80,
    transition: { duration: 0.6, delay: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
};
