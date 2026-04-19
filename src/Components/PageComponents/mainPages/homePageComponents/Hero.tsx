"use client";
import React from "react";
import Image from "next/image";
import Button from "@/Components/Common/Button";
import Container from "@/Components/Common/Container";
import { useGetUserData } from "@/Hooks/api/auth_api";

type heroBannerItem = {
  title: string;
  description: string;
  btn_text: string;
  image: string;
  image_one: string;
  image_two: string;
  image_three: string;
};

interface heroBannerProps {
  data: heroBannerItem[];
}

const Hero = () => {
  const handleSubmit = async () => {
    const formData = {
      name: "towfiq",
    };

    try {
      const res = await fetch(
        "https://mohammadhasanii.thewarriors.team/api/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      console.log("User created successfully ✅");
    } catch (error) {
      console.log(error || "Error occurred ❌");
    }
  };

  return (
    <section className="py-7 md:py-10 2xl:py-[68px] bg-[#F6F5F2]">
      <button onClick={() => handleSubmit()}>Click here</button>
    </section>
  );
};

export default Hero;
