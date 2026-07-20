import { ShieldCheck, Truck, Undo2 } from "lucide-react";

const ShippingCards = ({ product }) => {
  const cards = [
    {
      id: 1,
      title: "Shipping",
      description: product.shippingInformation,
      icon: Truck,
    },
    {
      id: 2,
      title: "Warranty",
      description: product.warrantyInformation,
      icon: ShieldCheck,
    },
    {
      id: 3,
      title: "Return Policy",
      description: product.returnPolicy,
      icon: Undo2,
    },
  ];

  return (
    <div className="mt-16 grid gap-6 md:grid-cols-3">
      {cards.map(({ id, title, description, icon: Icon }) => (
        <div
          key={id}
          className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-400/10"
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10">
            <Icon className="text-amber-400" size={26} />
          </div>

          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ShippingCards;