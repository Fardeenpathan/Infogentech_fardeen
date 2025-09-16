"use client";
import React from "react";

export default function ShinyButton({ children, className = "", ...props }) {
  return (
    <button
      type="button"
      {...props}
      className={`shiny-btn ${className}`}
    >
      {children}
    </button>
  );
}