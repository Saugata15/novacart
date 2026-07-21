import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Reviews from "../components/Reviews";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ProductBreadcrumb from "../components/ProductBreadcrumb";
import ShippingCards from "../components/ShippingCards";
import ProductSpecs from "../components/ProductSpecs";
import RelatedProducts from "../components/RelatedProducts";
import Shimmer from "../components/Shimmer";

const ProductDetails = () => {
  const [singleProductData, serSingleProductData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const fetchSingleProductData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      serSingleProductData(res.data);

    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleProductData();
  }, []);

  if (isLoading) {
    return (
      <section className="px-5 sm:px-10 py-12 bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <Shimmer count={8} />
        </div>
      </section>
    );
  }

  if (Object.entries(singleProductData).length === 0) return;

  return (
    <section className="min-h-screen bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        {/* Breadcrumb */}

        <ProductBreadcrumb productTitle={singleProductData.title} />

        {/* Product Section */}

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image */}

          <ProductGallery product={singleProductData} />

          {/* Product Information */}

          <ProductInfo product={singleProductData} />
        </div>

        {/* Shipping Information */}

        <ShippingCards product={singleProductData} />

        {/* Specifications */}

        <ProductSpecs product={singleProductData} />

        {/* Reviews */}

        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-bold text-white">
            Customer Reviews
          </h2>

          <div className="space-y-6">
            {singleProductData.reviews.map((item,index) => (
              <Reviews key={index} review={item} />
            ))}
          </div>
        </div>

        {/* Related Products */}

        <RelatedProducts
          category={singleProductData.category}
          id={singleProductData.id}
        />
      </div>
    </section>
  );
};

export default ProductDetails;
