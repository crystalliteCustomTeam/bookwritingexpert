import Link from "next/link";
import React from "react";
import styles from "@/styles/Yellow.module.css";

const YellowBtn = ({ btnShadow }) => {
  return (
    <>
      <Link
        href={btnShadow ? "tel:;" : "javascript:;"}
        className={`${styles.YellowBtn} ${
          btnShadow ? styles.blackShadow : styles.whiteShadow
        }`}
      >
        {btnShadow ? <div>(855) 500 0057</div> : <div>Learn More</div>}
      </Link>
    </>
  );
};

export default YellowBtn;
