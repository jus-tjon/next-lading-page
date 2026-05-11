type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

const Button = ({ children, className, href }: ButtonProps) => {
  const base =
    "btn btn-neutral bg-zinc-200 hover:bg-zinc-300 flex gap-2 w-full py-6 px-7 text-black transition cursor-pointer";

  return (
    <a href={href} className="block w-full">
      <button className={`${base} ${className}`}>{children}</button>
    </a>
  );
};

export default Button;
