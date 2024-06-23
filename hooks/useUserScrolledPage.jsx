import React, { useEffect, useState } from "react";
import { useScroll } from "framer-motion";

const useUserScrollPage = () => {
  const { scrollYProgress } = useScroll();
  const [userScrolledPage, setUserScrolledPage] = useState(false);
  const [userScrolledUp, setUserScrolledUp] = useState(false);

  useEffect(() => {
    scrollYProgress.on("change", (y) => {
      setUserScrolledPage(y > 0);

      // prevent a situation when user scrolls down and the window starts shrinking
      setUserScrolledUp(
        y * window.innerHeight < window.innerHeight - 25 &&
          userScrolledPage &&
          scrollYProgress.getVelocity() < 0,
      );
    });
  }, [scrollYProgress, userScrolledPage]);

  return { userScrolledUp, userScrolledPage };
};

export default useUserScrollPage;
