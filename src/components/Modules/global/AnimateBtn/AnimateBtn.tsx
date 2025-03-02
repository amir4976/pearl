import { useState } from "react";

interface FlipTextButtonProps {
  primaryText: string;
  secondaryText: string | JSX.Element;
}

const FlipTextButton: React.FC<FlipTextButtonProps> = ({
  primaryText,
  secondaryText,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full py-5 font-semibold text-black bg-MainColor  rounded-lg overflow-hidden transition-all duration-300"
    >
      <span
        className={`absolute left-0 right-0 top-1/2 transform ${
          hovered ? "-translate-y-full opacity-0" : "-translate-y-1/2 opacity-100"
        } transition-all duration-300`}
      >
        {primaryText}
      </span>
      <span
        className={`absolute left-0 right-0 top-1/2 transform ${
          hovered ? "-translate-y-1/2 opacity-100" : "translate-y-full opacity-0"
        } transition-all duration-300 flex justify-center items-center`}
      >
        {secondaryText}
      </span>
    </button>
  );
};

export default FlipTextButton;
