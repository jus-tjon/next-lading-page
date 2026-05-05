type ButtonProps = {
  children: React.ReactNode;
  href?: string;
};

const Button = ({ children, href }: ButtonProps) => {
  const base =
    "items-center flex gap-2 self-center bg-blue-600 rounded-sm py-3 px-7 text-white hover:bg-blue-700 transition cursor-pointer";

  return (
    <a href={href}>
      <button className={base}>{children}</button>
    </a>
  );
};

export default Button;
