"use client";

import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import Scene from "./Scene";
import Preloader3D from "./Preloader3D";

export default function Hero() {
  return (
    <section className="hero">
      {/* Intro animation — peeche sab kuch parallel load/render hota rahega */}
      <Preloader3D />

      {/* Background */}
      <div className="scene-bg">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={80}
        />
      </div>

      {/* Effects */}
      <div className="vignette" />
      <div className="overlay" />
      <div className="grain" />

      {/* Header */}
      <Header />

      {/* Center 3D Logo */}
      <div className="logo-wrapper">
        <Scene />
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}