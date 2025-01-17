import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<"phone" | "tablet" | "desktop">(
    "desktop"
  );

  useEffect(() => {
    const detectDevice = () => {
      // Check for tablets and phones using user agent
      const userAgent = navigator.userAgent.toLowerCase();

      const isTablet =
        /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
          userAgent
        );

      const isPhone =
        /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
          userAgent
        );

      // Set the device type
      if (isTablet) {
        setDeviceType("tablet");
      } else if (isPhone) {
        setDeviceType("phone");
      } else {
        setDeviceType("desktop");
      }
    };

    // Initial detection
    detectDevice();
    window.addEventListener("resize", detectDevice);

    return () => {
      window.removeEventListener("resize", detectDevice);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
