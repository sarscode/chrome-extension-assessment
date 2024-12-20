import { useEffect, useState } from "react";

export default function Time() {
  const initialTime = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const [time, setTime] = useState<string>(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
      );
    });

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="flex justify-center gap-6 text-center">
      <img
        src={"/images/morning-star.gif"}
        alt={"A gif of a cloud and sunshine"}
        className="h-[60px] w-[60px]"
      />
      <h1 className="text-7xl font-medium leading-[64px] mb-8 text-white">{time}</h1>
    </section>
  );
}
