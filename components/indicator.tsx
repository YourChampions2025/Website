import styles from '@/styles/Indicator.module.css';

export default function Indicator({ className }: { className?: string }) {
  return <span className={`${className} ${styles.indicator} `} />;
}
