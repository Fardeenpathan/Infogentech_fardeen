import { useState } from "react";

export default function PurpleCheckbox({ label }) {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex items-center space-x-2 cursor-pointer ">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="hidden"
      />
      <span
        className={`
          w-6 h-6 flex items-center justify-center  shrink-0 
          border-2 rounded-sm 
          ${checked ? "border-purple-600" : "border-purple-600"} 
          bg-white
        `}
      >
        {checked && (
          <svg
            className="w-4 h-4 text-purple-600 "
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </span>
      {label && <span className="opacity-40 font-jost tracking-wider md:text-lg text-[16px] ">{label}</span>}
    </label>
  );
}
