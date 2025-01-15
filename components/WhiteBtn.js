import Link from "next/link";
import React from "react";
import styles from "@/styles/White.module.css";

const WhiteBtn = ({ btnShadow }) => {
  return (
    <>
      <Link href="javascript:void(Tawk_API.toggle());"className={`${styles.WhiteBtn} ${
          btnShadow ? styles.blackShadow : styles.whiteShadow
        }`}>
        Let’s Discuss
      </Link>
    </>
  );
};

export default WhiteBtn;
