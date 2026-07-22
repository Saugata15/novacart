import { useContext } from "react";
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  Sofa,
  ShoppingBasket,
  Sparkles,
  Home,
  Flower2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import ProductContext from "../context/ProductContext";

const categoryIcons = {
  beauty: Sparkles,
  fragrances: Flower2,
  furniture: Sofa,
  groceries: ShoppingBasket,
  all: Home,
};

const Categories = () => {
  const { categories } = useContext(ProductContext);

  const navigate = useNavigate();

  return (
    <section className="bg-slate-950 pt-10 pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        {/* Heading */}

        <div className="mb-10 flex flex-col items-center justify-between sm:flex-row">
          <div>
            <h2 className="text-center text-3xl font-bold text-white sm:text-left sm:text-4xl">
              Shop by Categories
            </h2>

            <p className="mt-2 text-center text-slate-400 sm:text-left">
              Discover products from every collection.
            </p>
          </div>

          <div className="mt-4 flex items-center gap-4 sm:mt-0">
            <button className="category-prev flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-amber-400 hover:bg-amber-400 hover:text-slate-900 sm:h-12 sm:w-12">
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button className="category-next flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-amber-400 hover:bg-amber-400 hover:text-slate-900 sm:h-12 sm:w-12">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".category-prev",
            nextEl: ".category-next",
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3.2,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {categories.map((category) => {
            const Icon = categoryIcons[category] || ShoppingBasket;

            return (
              <SwiperSlide key={category}>
                <div
                  onClick={() => navigate(`/category/${category}`)}
                  className="group cursor-pointer rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 transition-all duration-300 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-400/10"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-900">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold capitalize text-white">
                    {category.replace(/-/g, " ")}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Explore Collection
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;
