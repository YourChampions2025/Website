import React from "react";
import styles from "./location-details.module.css";
import virginMap from "@/public/images/virgin-location.png";
import floridaMap from "@/public/images/florida-location.png";
import georgiaMap from "@/public/images/georgia-location.png";
import { IoMdArrowDropright } from "react-icons/io";

import Link from "next/link";
import Image from "next/image";

const locationsDatas = [
  {
    image: floridaMap,
    states: "florida office",
    address: "3325 Hollywood Blvd, #500 Hollywood, FL 33021",
    href: "/",
  },
  {
    image: georgiaMap,
    states: "Georgia Office",
    address:
      "3975 Roswell Road NE, Suite 3 Atlanta, GA 30342 Hollywood, FL 33021",
    href: "/",
  },
  {
    image: virginMap,
    states: "U.S. Virgin Islands Office",
    address: "3325 Hollywood Blvd, #500 Hollywood, FL 33021",
    href: "/",
  },
];

function LocationsDetails() {
  return (
    <div className={styles.locationsDetailsContainer}>
      <div className={styles.locationsDetailsContent}>
        {locationsDatas.map((data) => (
          <div className={styles.locationsdatas}>
            <Image alt="" src={data.image} />
            <h2 className={styles.titleLocations}>{data.states}</h2>
            <span className={styles.addressText}>{data.address}</span>

            <div className={styles.linkContainer}>
              <IoMdArrowDropright color="#2DE046" size={24} />
              <Link href={data.href} className={styles.link}>
                get directions
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LocationsDetails;
