import Image from "next/image";
import styles from "./side-content-about.module.css";
import imageFirm from "@/public/images/about-firm.png";
import aboutDetails from "@/public/images/about-details.svg";
import aboutFirmDetails from "@/public/images/about-firm-details.png";
import { MdOutlineArrowRight } from "react-icons/md";
import Link from "next/link";
import CardImage from "@/components/globals/layout/card-image/card-image";
//attorneys images
import jordanRedavid from "@/public/images/attorneys/jordanRedavid.png";
import johnFischer from "@/public/images/attorneys/johnFischer.png";
import terryRoberts from "@/public/images/attorneys/terryRoberts.png";
//staff images
import ashleyWoods from "@/public/images/staff/ashleyWoods.png";
import marySheedy from "@/public/images/staff/marySheedy.png";
import crystalGaj from "@/public/images/staff/crystalGaj.png";
import abigailEnnis from "@/public/images/staff/abigailEnnis.png";
import brendaChiou from "@/public/images/staff/brendaChiou.png";
import bettyPeterson from "@/public/images/staff/bettyMaePeterson.png";
import mariaMichel from "@/public/images/staff/mariaMichel.png";
import cliftonFranklin from "@/public/images/staff/cliftonFranklin.png";
import melissaBecker from "@/public/images/staff/melissaBecker.png";

const attorneysData = [
  {
    image: jordanRedavid,
    cardName: "Jordan Redavid, Esq.",
    professionalPosition: "founding partner",
    href: "/",
  },
  {
    image: johnFischer,
    cardName: "John Fischer, Esq.",
    professionalPosition: "founding partner",
    href: "/",
  },
  {
    image: terryRoberts,
    cardName: "Terry Roberts",
    professionalPosition: "dir. of appelate practice",
    href: "/",
  },
];

const staffData = [
  {
    image: ashleyWoods,
    cardName: "Ashley Woods, SPHR",
    professionalPosition: "Director of Operations",
    href: "/",
  },
  {
    image: marySheedy,
    cardName: "Mary Sheedy",
    professionalPosition: "Director of Strategic Solutions ",
    href: "/",
  },
  {
    image: "",
    cardName: "Tracy Kramer, Esq.",
    professionalPosition: "Trial Support Associate Attorney",
    href: "/",
  },
  {
    image: melissaBecker,
    cardName: "Melissa Becker BA, RN",
    professionalPosition: "Director of Prelitigation",
    href: "/",
  },

  {
    image: brendaChiou,
    cardName: "Brenda Chiou",
    professionalPosition: "Paralegal",
    href: "/",
  },
  {
    image: bettyPeterson,
    cardName: "Betty-Mae Peterson",
    professionalPosition: "Paralegal",
    href: "/",
  },
  {
    image: crystalGaj,
    cardName: "Crystal Gaj",
    professionalPosition: "Paralegal",
    href: "/",
  },
  {
    image: abigailEnnis,
    cardName: "Abigail Ennis",
    professionalPosition: "Legal Assistant",
    href: "/",
  },

  {
    image: mariaMichel,
    cardName: "Maria Michel",
    professionalPosition: "Bookkeeper",
    href: "/",
  },
  {
    image: "",
    cardName: "Linet Alphonese",
    professionalPosition: "Paralegal",
    href: "/",
  },
  {
    image: cliftonFranklin,
    cardName: "Clifton Franklin",
    professionalPosition: "[INSERT ROLE HERE]",
    href: "/",
  },
];

interface SideContentAboutUsProps {
  activeLink: string;
}
function SidecontentAboutUs({ activeLink }: SideContentAboutUsProps) {
  return (
    <div className={styles.sidecontainerAboutUs}>
      <div className={styles.sidecontentAboutUs}>
        <Image alt="" src={aboutDetails} className={styles.imageDetails} />

        {activeLink === "the firm" && (
          <div className={styles.theFirmContentent}>
            <Image
              alt=""
              src={imageFirm}
              className={styles.imageFirmContainer}
            />
            <Image
              alt=""
              src={aboutFirmDetails}
              className={styles.firmDetails}
            />
            <h2 className={styles.firmTitle}>Fischer Redavid Trial Lawyers</h2>
            <p className={styles.firmDescription}>
              At Fischer Redavid PLLC, we are committed to a simple goal: to
              help victims of negligence and malpractice obtain the justice they
              deserve. Our team of accomplished personal injury attorneys draws
              on diverse individual experience and a long track record of
              success in building powerful, evidence-based cases for our
              clients. Our aggressive approach, coupled with our client-first
              philosophy, has helped us earn the trust of our clients, the
              respect of our opponents, and the acclaim of some of the legal
              industries' most highly regarded organizations. 
            </p>
            <p className={styles.firmDescription}>
              If you have been injured as a result of someone else’s negligent
              or wrongful conduct, your future may seem uncertain—but you do not
              have to face this uncertainty alone. Our attorneys, legal
              assistants, and support staff are prepared to guide you through
              the process, answering your questions as they arise and providing
              personalized counsel tailored to your unique situation. We believe
              in creating solid attorney-client relationships, which is why we
              intentionally limit our overall caseload, as well as the number of
              cases handled by each individual attorney. This not only allows us
              to provide a higher level of attention and communication to our
              clients, but it also ensures that we are able to devote all of our
              resources to each individual case. 
            </p>
            <Link href="/" className={styles.link}>
              <MdOutlineArrowRight size={32} color="#2DE046" />
              schedule a call
            </Link>
          </div>
        )}

        {activeLink === "attorneys" && (
          <div className={styles.imagesContent}>
            {attorneysData.map((attorneys, i) => (
              <CardImage
                key={i}
                image={attorneys.image}
                cardName={attorneys.cardName}
                href={attorneys.href}
                professionalPosition={attorneys.professionalPosition}
              />
            ))}
          </div>
        )}
        {activeLink === "staff" && (
          <div className={styles.imagesContent}>
            {staffData.map((attorneys, i) => (
              <CardImage
                image={attorneys.image}
                cardName={attorneys.cardName}
                href={attorneys.href}
                professionalPosition={attorneys.professionalPosition}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SidecontentAboutUs;
