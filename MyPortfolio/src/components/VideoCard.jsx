import React from "react";
import introduction from "../../public/Nancy_introduction.mp4"

export default function VideoCard({ title, description, className }) {
  return (
    <div className={`overflow-hidden ${className || ""}`}>
    <video className="w-full h-80 object-cover" controls>
      <source src={introduction} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div className="p-4 text-center">
      {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  </div>
  );
}
