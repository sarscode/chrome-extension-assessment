import { useCallback, useEffect, useState } from "react";
import NotePad from "./components/NotePad";
import TasksWidget from "./components/TasksWidget";
import Time from "./components/Time";
import WelcomeMessage from "./components/WelcomeMessage";
import { getBackgroundImage } from "./services/getBackgroundImage";
import { BackgroundImage } from "./types/background-images.types";

function App() {
  const initialImageCount = 0;
  const [backgroundImages, setBackgroundImages] = useState<BackgroundImage[] | null>();
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState<string | null>();
  const [count, setCount] = useState<number>(initialImageCount);

  const fetchBackgroundImagesCallback = useCallback(async () => {
    if (!backgroundImages) {
      const response = await getBackgroundImage({ query: "developer" });
      if (response?.data) {
        setBackgroundImages(response.data);
      } else {
        setBackgroundImages(null);
      }
    }
  }, [backgroundImages]);

  useEffect(() => {
    fetchBackgroundImagesCallback();
  }, [fetchBackgroundImagesCallback]);

  useEffect(() => {
    const bgImageInterval = setInterval(() => {
      if (backgroundImages) {
        setCurrentBackgroundImage(backgroundImages[initialImageCount]?.urls?.regular);
        if (count === backgroundImages?.length - 1) {
          setCount(initialImageCount);
        } else {
          setCount((prevCount) => prevCount + 1);
        }
        setCurrentBackgroundImage(backgroundImages[count]?.urls?.regular);
      }
    }, 10000);

    return () => {
      clearInterval(bgImageInterval);
    };
  }, [count, backgroundImages]);

  return (
    <section
      className="min-h-screen max-h-screen w-full absolute"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.71)),url(${backgroundImages && currentBackgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top left",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <section className="flex items-center flex-col h-screen justify-center">
        <section className="flex flex-col">
          <Time />
          <WelcomeMessage />
        </section>
        <section className="absolute bottom-0 z-10">
          <NotePad />
        </section>
        <section className="absolute bottom-6 hover:-translate-y-10 hover:transition-transform hover:ease-in-out hover:duration-700 ease-in-out duration-700">
          <TasksWidget />
        </section>
      </section>
    </section>
  );
}

export default App;
