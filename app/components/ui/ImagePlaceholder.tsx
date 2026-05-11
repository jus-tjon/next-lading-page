import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

type ImagePlaceholderProps = {
  className?: string;
  text?: string;
  badge?: string;
  badge2?: string;
  badge3?: string;
  img: string;
  alt: string;
};

const ImagePlaceholder = ({
  className = "",
  text = "",
  badge = "",
  badge2 = "",
  badge3 = "",
  img,
  alt,
}: ImagePlaceholderProps) => {
  return (
    <section
      className={`
        relative
        rounded-2xl
        overflow-hidden
        lg:h-full
        drop-shadow-lg/50
        cursor-pointer
        group
        ${className}
      `}
    >
      <Image
        src={img}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 33vw"
        className="
          object-cover
          transition-transform
          duration-300
          group-hover:scale-101
        "
      />

      <div
        className="
          absolute inset-0
          bg-linear-to-b
          from-black/0
          via-black/10
          to-black/70
          transition-all duration-300
          group-hover:bg-black/40
        "
      />

      <div
        className="
          absolute bottom-0
          w-full
          p-4
        "
      >
        <h3
          className={`
            text-zinc-300
            text-[15px]
            mb-2
            tracking
            transition-all
            duration-300
            ${inter.className}
          `}
        >
          {text}
        </h3>

        <div className="flex flex-wrap gap-1">
          <span
            className={`
              badge
              badge-neutral
              bg-zinc-300
              text-black
              text-xs
              border-0
              ${inter.className}
            `}
          >
            {badge}
          </span>

          <span
            className={`
              badge
              badge-neutral
              text-zinc-300
              text-xs
              badge-outline
              ${inter.className}
            `}
          >
            {badge2}
          </span>

          <span
            className={`
              badge
              badge-neutral
              text-zinc-300
              text-xs
              badge-outline
              ${inter.className}
            `}
          >
            {badge3}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ImagePlaceholder;
