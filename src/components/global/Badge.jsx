const Badge = ({ count }) => {
  if (!count) return null;

  return (
    <span className="absolute -bottom-1 -right-2 min-w-[18px] h-[18px] rounded-full bg-red-600 text-white text-[10px] flex items-center justify-center leading-none">
      {count}
    </span>
  );
};
export default Badge;
