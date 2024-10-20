import React, { useEffect, useRef } from "react";

interface OutsideClickHandlerProps {
  onOutsideClick: () => void;
  children: React.ReactNode;
}

function OutsideClickHandler({
  onOutsideClick,
  children,
}: OutsideClickHandlerProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      onOutsideClick();
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick]);

  return <div ref={elementRef}>{children}</div>;
}

export default OutsideClickHandler;
