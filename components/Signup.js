import React from "react";
import styles from "@/styles/Signup.module.css";
import {useState} from "react";
import Axios from "axios";
import {useEffect} from "react";

import {useRouter} from "next/router";

const Signup = (props) => {
  const [ip, setIP] = useState("");
  const [score, setScore] = useState("Best time to jump on a quick call:");
  const router = useRouter();
  const currentRoute = router.pathname;

  // Function to load IP address from the API
  const getIPData = async () => {
    try {
      const res = await Axios.get("https://ipwho.is/");
      setIP(res.data);
    } catch (error) {
      console.error("Error fetching IP data:", error);
    }
  };

  useEffect(() => {
    getIPData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
      IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
      pageUrl: currentRoute,
    };

    const JSONdata = JSON.stringify(data);
    setScore("Sending Data");

    try {
      const emailResponse = await fetch("/api/email/route", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSONdata,
      });

      if (emailResponse.status === 200) {
        console.log("Email sent successfully");
      }

      const currentdate = new Date().toLocaleString();
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
        Brand: "BOOK-WRITING-EXPERT",
        Page: currentRoute,
        Date: currentdate,
        Time: currentdate,
        JSON: JSONdata,
      });

      await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

      const pagenewurl = currentRoute;

      const hubspotHeaders = new Headers();
      hubspotHeaders.append("Content-Type", "application/json");

      const hubspotBody = JSON.stringify({
        fields: [
          {
            objectTypeId: "0-1",
            name: "email",
            value: e.target.email.value,
          },
          {
            objectTypeId: "0-1",
            name: "firstname",
            value: e.target.name.value,
          },
          {
            objectTypeId: "0-1",
            name: "phone",
            value: e.target.phone.value,
          },
          {
            objectTypeId: "0-1",
            name: "message",
            value: e.target.message.value,
          },
        ],
        context: {
          ipAddress: ip.IPv4,
          pageUri: pagenewurl,
          pageName: pagenewurl,
        },
      });

      const hubspotResponse = await fetch("https://api.hsforms.com/submissions/v3/integration/submit/24288885/76cb04eb-d5c5-4ad8-975e-e852f0ba416f", {
        method: "POST",
        headers: hubspotHeaders,
        body: hubspotBody,
        redirect: "follow",
      });

      const hubspotResult = await hubspotResponse.text();
      console.log(hubspotResult);

      window.location.href = "https://www.bookwritingexperts.com/thank-you";
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className={`${styles[props.bannershome]} ${styles[props.form]}`}>
      <h4 className={styles.getup}>
        {" "}
        <em className="color-blue font25">Can't Reach Us?</em>{" "}
      </h4>
      <p className="font-f t-center">
        {" "}
        <em>Drop your details, and we'll soon respond to your inquiry!</em>{" "}
      </p>
      <form onSubmit={handleSubmit}>
        <input type="text" className={styles.nametext} required name="name" placeholder="Full Name:" />
        <input type="email" className={styles.nametext} required name="email" placeholder="Email Address:" />
        <input type="tel" className={styles.nametext} required name="phone" minLength="10" maxLength="13" pattern="[0-9]*" placeholder="Phone Number:" />
        <textarea required className={styles.textareanew} name="message" cols="40" rows="10" placeholder="Your project brief:"></textarea>
        <button className={styles.freebtn} type="submit">
          {score}{" "}
        </button>
      </form>
    </div>
  );
};

export default Signup;
