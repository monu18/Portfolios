import React from 'react';

/**
 * A simple rectangular chip-style button.
 * Props:
 * - label: text displayed inside the chip
 * - onClick: click handler
 * - className: additional Tailwind classes
 */
export default function Chip({ label, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={
        `inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 font-medium \
         border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 \
         focus:ring-offset-2 focus:ring-indigo-500 ${className}`
      }
    >
      {label}
    </button>
  );
}

// Usage example:
// import ChipButton from './ChipButton';
// <ChipButton label="Click Me" onClick={() => console.log('Clicked!')} />
