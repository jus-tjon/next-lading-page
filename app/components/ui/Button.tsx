type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

const Button = ({ children, className, href }: ButtonProps) => {
  const base =
    "btn btn-neutral flex gap-2 self-center bg-blue-600 py-3 px-7 text-white transition cursor-pointer";

  return (
    <a href={href}>
      <button className={`${base} ${className}`}>{children}</button>
    </a>
  );
};

export default Button;
