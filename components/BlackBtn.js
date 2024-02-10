import Link from "next/link";
import React from "react";
import styles from "@/styles/Black.module.css";

const BlackBtn = ({ btnShadow }) => {
  return (
    <>
      <Link href="javascript:;"className={`${styles.WhiteBtn} ${
          btnShadow ? styles.blackShadow : styles.whiteShadow
        }`}>
        Let’s Discuss
      </Link>
    </>
  );
};

export default BlackBtn;
