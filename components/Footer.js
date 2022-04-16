import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="min-h-full flex gap-8 items-center justify-center bg-black text-white p-20">
      <Image src={logo} width={18} height={18} alt="logo footer" />
    </footer>
  );
};

export default Footer;
