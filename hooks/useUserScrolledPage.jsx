import React, { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

const useUserScrollPage = () => {
  const { scrollY } = useScroll();

  const [userScrolledPage, setUserScrolledPage] = useState(false);
  const [userScrolledUp, setUserScrolledUp] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    setUserScrolledPage(latest > 0);

    if (previous < latest && latest > 300) {
      setUserScrolledUp(true);
    } else {
      setUserScrolledUp(false);
    }
  });

  return { userScrolledUp, userScrolledPage };
};

export default useUserScrollPage;
