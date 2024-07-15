import React from "react";
import dynamic from "next/dynamic";
const Bannerlp = dynamic(() => import("../../components/Banner-lp"));
const Ready = dynamic(() => import("../../components/Ready"));
const Join = dynamic(() => import("../../components/Join"));
const Publish = dynamic(() => import("../../components/Publish"));
const Bigger = dynamic(() => import("../../components/Bigger"));
const Agency = dynamic(() => import("../../components/Agencylp"));
const Unique = dynamic(() => import("../../components/Unique"));
const Become = dynamic(() => import("../../components/Become"));
const Publicationslp = dynamic(() => import("../../components/Publicationslp"));
const Partners = dynamic(() => import("../../components/Partners"));
const Letstalk = dynamic(() => import("../../components/Letstalk"));
const Allservices = dynamic(() => import("../../components/Allservices"));


const bookexperlp = () => {
  return (
    <>

    <Bannerlp />
    <Ready />
    <Join />
    <Publish />
    <Allservices />
    <Bigger />
    <Agency />
    <Unique />
    <Become />
    <Partners />
    <Publicationslp />
    <Letstalk />
    </>
  );
};

export default bookexperlp;
