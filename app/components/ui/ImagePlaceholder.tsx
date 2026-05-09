import React from "react";
import { ImageIcon } from "lucide-react";

type ImagePlaceholderProps = {
  className?: string;
  text?: string;
};

const ImagePlaceholder = ({
  className = "",
  text = "",
}: ImagePlaceholderProps) => {
  return (
    <div
      className={`
        bg-zinc-200
        rounded-3xl
        flex items-center justify-center
        w-full
        ${className}`}
    >
      <ImageIcon className="w-10 h-10 text-zinc-500" />
      <p>{text}</p>
    </div>
  );
};

export default ImagePlaceholder;
