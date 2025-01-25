import React from 'react';

const Image = ({ src, alt, loading }) => {
  return (
    <div className="w-full h-full">
      {loading ? (
        <div className="w-full h-full bg-gray-200 animate-pulse" />
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
    </div>
  );
};

export default Image;