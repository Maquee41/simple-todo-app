import { memo } from "react";

export const Header = memo(function Header() {
  return (
    <header className="bg-[#FC5185] mb-2 px-25 py-2 rounded-md">
      <span className="text-4xl font-bold text-white uppercase">
        Today is the best day
      </span>
    </header>
  );
});
