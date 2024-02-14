import { useEffect, useState } from "react";

export default function useOutsideClick(ref: React.RefObject<HTMLElement>) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleClickOutside: React.EventHandler<any> = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClicked(true);
      } else {
        setIsClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return isClicked;
}
