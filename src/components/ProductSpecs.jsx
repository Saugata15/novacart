const ProductSpecs = ({ product }) => {
  const specifications = [
    {
      label: "Brand",
      value: product.brand,
    },
    {
      label: "Category",
      value: product.category,
    },
    {
      label: "Weight",
      value: `${product.weight} g`,
    },
    {
      label: "Stock",
      value: product.stock,
    },
    {
      label: "Width",
      value: `${product.dimensions?.width} cm`,
    },
    {
      label: "Height",
      value: `${product.dimensions?.height} cm`,
    },
    {
      label: "Depth",
      value: `${product.dimensions?.depth} cm`,
    },
    {
      label: "Minimum Order",
      value: product.minimumOrderQuantity,
    },
  ];

  return (
    <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="mb-8 text-3xl font-bold text-white">
        Product Specifications
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        {specifications.map((spec) => (
          <div
            key={spec.label}
            className="flex items-center justify-between border-b border-slate-800 pb-3"
          >
            <span className="text-slate-400">{spec.label}</span>

            <span className="font-medium text-white">
              {spec.value || "N/A"}
            </span>
          </div>
        ))}
      </div>

      {/* Tags */}

      <div className="mt-10">
        <h3 className="mb-4 text-lg font-semibold text-white">
          Tags
        </h3>

        <div className="flex flex-wrap gap-3">
          {product.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300 transition hover:bg-amber-400 hover:text-slate-900"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;