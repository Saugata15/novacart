import { useState } from "react";

const ProductGallery = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-5">
      {/* Main Image */}

      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">
        <img
          src={product.images[selectedImage]}
          alt={product.title}
          className="h-64 w-full object-contain p-4 sm:p-10 transition duration-500 hover:scale-105 sm:h-125"
        />
      </div>

      {/* Thumbnail Images */}

      <div className="flex flex-wrap gap-4">
        {product.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`cursor-pointer overflow-hidden rounded-xl border bg-slate-900 transition-all duration-300 ${
              selectedImage === index
                ? "border-amber-400 ring-2 ring-amber-400/30"
                : "border-slate-800 hover:border-amber-400"
            }`}
          >
            <img
              src={image}
              alt={`${product.title} ${index + 1}`}
              className="h-20 w-20 object-contain p-2 sm:h-24 sm:w-24 sm:p-3"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;