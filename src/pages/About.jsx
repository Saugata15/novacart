import { Award, ShieldCheck, ShoppingBag, Truck, Users } from "lucide-react";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: ShoppingBag,
      title: "Premium Products",
      description: "Curated collections from trusted brands around the world.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable shipping with real-time order tracking.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      description: "Safe and encrypted transactions for worry-free shopping.",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "Every product is selected with quality and value in mind.",
    },
  ];

  const stats = [
    {
      number: "30K+",
      label: "Happy Customers",
    },
    {
      number: "10K+",
      label: "Products Sold",
    },
    {
      number: "99%",
      label: "Positive Reviews",
    },
    {
      number: "24/7",
      label: "Customer Support",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        {/* Hero */}

        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-10 text-center shadow-xl">
          <span className="rounded-full bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-400">
            About NovaCart
          </span>

          <h1 className="mt-6 text-5xl font-bold text-white">
            Shopping Made Simple,
            <br />
            Premium & Reliable.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            NovaCart is built to make online shopping effortless by combining
            premium products, secure shopping, and exceptional customer
            experience—all in one place.
          </p>
        </div>

        {/* Story */}

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold text-white">Our Story</h2>

            <p className="mt-6 leading-8 text-slate-400">
              At NovaCart, we believe online shopping should be simple,
              enjoyable, and trustworthy. Our mission is to provide customers
              with carefully selected products that combine quality,
              affordability, and style.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              From everyday essentials to premium collections, we continuously
              improve our platform to deliver a seamless shopping experience for
              everyone.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <Users className="h-14 w-14 text-amber-400" />

            <h3 className="mt-6 text-2xl font-semibold text-white">
              Customer First
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              Every feature in NovaCart is designed around customer needs—from
              easy browsing and secure checkout to fast delivery and dependable
              support.
            </p>
          </div>
        </div>

        {/* Features */}

        <div className="mt-20">
          <h2 className="text-center text-4xl font-bold text-white">
            Why Choose NovaCart?
          </h2>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-2 hover:border-amber-400"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10">
                  <Icon className="text-amber-400" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-6 rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label}>
              <h3 className="text-5xl font-bold text-amber-400">
                {item.number}
              </h3>

              <p className="mt-3 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}

        <div className="mt-20 rounded-3xl border border-amber-400/20 bg-gradient-to-r from-amber-400/10 to-slate-900 p-10 text-center">
          <h2 className="text-4xl font-bold text-white">
            Discover Your Next Favorite Product
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Explore our curated collection of premium products and enjoy a
            shopping experience designed with quality, convenience, and customer
            satisfaction in mind.
          </p>

          <button
            className="mt-8 rounded-xl bg-amber-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-amber-300 cursor-pointer"
            onClick={() => navigate("/shop")}
          >
            Start Shopping
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
