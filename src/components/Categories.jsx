import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  ArrowRight,
  Laptop,
  Smartphone,
  Sofa,
  ShoppingBasket,
  Shirt,
  Watch,
  Gem,
  Sparkles,
  Car,
  Bike,
  Tablet,
  Home,
  ChefHat,
  Dumbbell,
  Glasses,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import axios from "axios";

const categoryIcons = {
  beauty: Sparkles,
  fragrances: Sparkles,
  furniture: Sofa,
  groceries: ShoppingBasket,
  "home-decoration": Home,
  "kitchen-accessories": ChefHat,
  laptops: Laptop,
  smartphones: Smartphone,
  tablets: Tablet,
  "mobile-accessories": Smartphone,
  "mens-shirts": Shirt,
  tops: Shirt,
  "mens-shoes": Shirt,
  "womens-shoes": Shirt,
  "womens-dresses": Shirt,
  "womens-bags": ShoppingBasket,
  "mens-watches": Watch,
  "womens-watches": Watch,
  "womens-jewellery": Gem,
  motorcycle: Bike,
  vehicle: Car,
  "sports-accessories": Dumbbell,
  sunglasses: Glasses,
};

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products/categories",
        );
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="bg-slate-950 pt-10 pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        {/* Heading */}

        <div className="mb-10 flex flex-col sm:flex-row items-center justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white max-sm:text-center">
              Shop by Categories
            </h2>

            <p className="mt-2 text-slate-400 max-sm:text-center">
              Discover products from every collection.
            </p>
          </div>

          <div className="items-center gap-4 flex max-sm:mt-4">
            <button className="category-prev flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition-all duration-300 hover:border-amber-400 hover:bg-amber-400 hover:text-slate-900 hover:shadow-lg hover:shadow-amber-400/30 cursor-pointer">
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button className="category-next flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition-all duration-300 hover:border-amber-400 hover:bg-amber-400 hover:text-slate-900 hover:shadow-lg hover:shadow-amber-400/30 cursor-pointer">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Categories Grid */}

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".category-prev",
            nextEl: ".category-next",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {categories.map((category) => {
            const Icon = categoryIcons[category.slug] || ShoppingBasket;

            return (
              <SwiperSlide key={category.slug}>
                <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 transition-all duration-300 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-400/10">
                  {/* Glow */}

                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-amber-400/5 blur-3xl group-hover:bg-amber-400/15" />

                  {/* Icon */}

                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-400 transition duration-300 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-900">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="relative z-10 mt-7 text-xl font-semibold text-white">
                    {category.name}
                  </h3>

                  <p className="relative z-10 mt-2 text-sm text-slate-400">
                    Premium Collection
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
