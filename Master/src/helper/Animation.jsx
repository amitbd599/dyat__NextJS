"use client";

import { useEffect, useState } from "react";

const Animation = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Mark as client-side only
    if (isClient) {
      import("aos").then((Aos) => {
        Aos.init({
          offset: 0,
          easing: "ease",
          once: true,
          duration: 1200,
        });
        Aos.refresh();
      });
    }
  }, [isClient]);

  return null;
};

export default Animation;
