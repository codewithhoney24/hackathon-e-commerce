"use client";

import React, { useState } from "react";

interface ColorSelectorProps {
  colors: string[];
}

export default function ColorSelector({ colors }: ColorSelectorProps) {
  // If no colors are provided, use defaults
  const availableColors = colors && colors.length > 0 
    ? colors 
    : ["bg-[#23A6F0]", "bg-[#2DC071]", "bg-[#E77C40]", "bg-[#252B42]"];

  const [selectedColor, setSelectedColor] = useState<string>(availableColors[0]);

  return (
    <div className="flex items-center space-x-3">
      {availableColors.map((color, index) => (
        <button
          key={index}
          onClick={() => setSelectedColor(color)}
          aria-label={`Select color ${color}`}
          className={`w-8 h-8 rounded-full cursor-pointer transition-all ${color} ${
            selectedColor === color ? "ring-2 ring-offset-2 ring-gray-400 scale-110" : "hover:ring-2 hover:ring-offset-2 hover:ring-gray-300 opacity-80 hover:opacity-100"
          }`}
        />
      ))}
    </div>
  );
}