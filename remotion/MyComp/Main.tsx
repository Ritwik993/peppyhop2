import { z } from "zod";
import { AbsoluteFill, Sequence, useCurrentFrame } from "remotion";
import { CompositionProps } from "../../types/constants";
import { loadFont } from "@remotion/google-fonts/Inter";
import React from "react";
import Image from "next/image";
import styles from "./Main.module.css";

loadFont();

const container: React.CSSProperties = {
  backgroundColor: "white",
};

export const Main = ({ username }: z.infer<typeof CompositionProps>) => {
  const frame = useCurrentFrame(); 

  return (
    <AbsoluteFill style={container}>
      <div style={{ backgroundColor: "#6A0DAD", width: "100%", height: "100%" }}>
        <Sequence from={0} durationInFrames={Infinity}>
          <Image1 frame={frame} />
        </Sequence>
        <Sequence from={110} durationInFrames={Infinity}>
          <Image2 frame={frame} />
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};

const Image1 = ({ frame }: { frame: number }) => {
  const topClass = frame >= 10 && frame<=100 ? styles.top_container : styles.hidden;
  const bottomClass = frame >= 60 && frame<=100 ? styles.bottom_container : styles.hidden;

  return (
    <div
      style={{
        marginTop: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        className={`${topClass}`}
        style={{
          display: "flex",
          width: "100vw",
          alignItems: "center",
          gap: "150px",
          border: "none",
          outline: "none",
        }}
      >
        <Image
          src="/1.jpg"
          alt="Background"
          width={500}
          height={600}
          style={{
            width: "500px",
            height: "600px",
            objectFit: "cover",
            transform: "rotate(-5deg) translate(25px)",
          }}
        />
        <p
          style={{
            fontSize: "26px",
            textAlign: "center",
            color: "white",
          }}
        >
          Are you Diwali <br />
          Ready?
        </p>
      </div>

      <div
        className={`${bottomClass}`}
        style={{
          display: "flex",
          width: "100vw",
          alignItems: "center",
          gap: "150px",
          border: "none",
          outline: "none",
        }}
      >
        <p
          style={{
            fontSize: "26px",
            textAlign: "center",
            color: "white",
            marginLeft: "20px",
          }}
        >
          Shop for Diwali Gifts <br />
          Today
        </p>
        <Image
          src="/1.webp"
          alt="Background"
          width={500}
          height={600}
          style={{
            width: "500px",
            height: "600px",
            objectFit: "cover",
            transform: "rotate(5deg) translate(25px)",
          }}
        />
      </div>
    </div>
  );
};


const Image2 = ({ frame }: { frame: number }) => {
  const topClass = frame >= 10 ? styles.top_container : styles.hidden;
  const bottomClass = frame >= 60 ? styles.bottom_container : styles.hidden;

  return (
    <div
      style={{
        marginTop: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        className={`${topClass}`}
        style={{
          display: "flex",
          width: "100vw",
          alignItems: "center",
          gap: "150px",
          border: "none",
          outline: "none",
        }}
      >
        <Image
          src="/5.jpg"
          alt="Background"
          width={500}
          height={600}
          style={{
            width: "500px",
            height: "600px",
            objectFit: "cover",
            transform: "rotate(-5deg) translate(25px)",
          }}
        />
        <p
          style={{
            fontSize: "30px",
            textAlign: "center",
            color: "white",
          }}
        >
          Diwali Sale <br />
          50% off
        </p>
      </div>

      <div
        className={`${bottomClass}`}
        style={{
          display: "flex",
          width: "100vw",
          alignItems: "center",
          gap: "150px",
          border: "none",
          outline: "none",
        }}
      >
        <p
          style={{
            fontSize: "30px",
            textAlign: "center",
            color: "white",
            marginLeft: "20px",
          }}
        >
          Shop for Diwali with <br />
          Peppyhop
        </p>
        <Image
          src="/4.jpg"
          alt="Background"
          width={500}
          height={600}
          style={{
            width: "500px",
            height: "600px",
            objectFit: "cover",
            transform: "rotate(5deg) translate(25px)",
          }}
        />
      </div>
    </div>
  );
};
