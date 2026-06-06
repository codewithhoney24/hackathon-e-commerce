
import Image from "next/image";
import { getProductBySlug } from "../../components/sanityFetch";
import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Product } from "../../../../types";
import ProductActions from "../../components/ProductActions";

const staticProducts: Product[] = [
  {
    _id: "shop-1",
    slug: "graphic-design-1",
    imageUrl: "/card1.png",
    name: "BROWN Shirt",
    department: "Men's Fashion",
    price: 3500,
    discountPercentage: 0,
    stock: 50,
    description: "A premium quality brown shirt perfect for casual and semi-formal wear. Made with breathable fabric to ensure comfort all day long.",
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
  },
  {
    _id: "shop-2",
    slug: "web-design-2",
    imageUrl: "/card2.png",
    name: "Classic White T-Shirt",
    department: "Men's Fashion",
    price: 2000,
    discountPercentage: 10,
    stock: 30,
    description: "Essential white t-shirt for your everyday wardrobe. Features a comfortable fit and durable cotton material.",
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
  },
  {
    _id: "shop-3",
    slug: "logo-design-3",
    imageUrl: "/card3.png",
    name: "Vintage Denim Jacket",
    department: "Outerwear",
    price: 5500,
    discountPercentage: 15,
    stock: 20,
    description: "Classic vintage style denim jacket. A timeless piece that adds an edge to any casual outfit.",
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
  },
  {
    _id: "shop-4",
    slug: "ui-ux-design-4",
    imageUrl: "/card4.png",
    name: "Black Formal Suit",
    department: "Men's Formal",
    price: 12000,
    discountPercentage: 0,
    stock: 10,
    description: "Elegant black formal suit for special occasions. Tailored for a sharp, modern silhouette.",
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
  },
  {
    _id: "shop-5",
    slug: "branding-design-5",
    imageUrl: "/card5.png",
    name: "Casual Striped Sweater",
    department: "Winter Wear",
    price: 2800,
    discountPercentage: 5,
    stock: 45,
    description: "Comfortable striped sweater perfect for chilly evenings. Soft knit material for maximum coziness.",
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
  },
  {
    _id: "shop-6",
    slug: "app-design-6",
    imageUrl: "/card6.png",
    name: "Summer Floral Dress",
    department: "Women's Fashion",
    price: 4200,
    discountPercentage: 20,
    stock: 15,
    description: "Light and breezy floral dress, ideal for summer outings and beach days. Stand out with vibrant colors.",
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
  },
  {
    _id: "shop-7",
    slug: "product-strategy-7",
    imageUrl: "/card7.png",
    name: "Leather Crossbody Bag",
    department: "Accessories",
    price: 3800,
    discountPercentage: 0,
    stock: 25,
    description: "Stylish and practical leather crossbody bag with multiple compartments for all your daily essentials.",
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
  },
  {
    _id: "shop-8",
    slug: "marketing-strategy-8",
    imageUrl: "/card8.png",
    name: "Sports Running Shoes",
    department: "Footwear",
    price: 6500,
    discountPercentage: 10,
    stock: 60,
    description: "High-performance running shoes with breathable mesh and responsive cushioning for your daily workouts.",
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
  },
];

export default async function ProductDetail(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;
  console.log("ProductDetail: Fetching product for slug:", slug);
  
  // First check if the product is in our static array
  let product: Product | null = staticProducts.find(p => p.slug === slug) || null;
  
  // If not found statically, query Sanity
  if (!product) {
    product = await getProductBySlug(slug);
  }
  
  console.log("ProductDetail: Found product:", product ? product.name : "null");

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  const discountedPrice = product.discountPercentage 
    ? (product.price - (product.price * product.discountPercentage) / 100).toFixed(2)
    : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-[#FAFAFA] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-sm">
            
            {/* Left: Image Section */}
            <div className="relative h-[400px] md:h-[600px] w-full">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain rounded-lg"
              />
            </div>

            {/* Right: Content Section */}
            <div className="flex flex-col space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-[#252B42]">{product.name}</h1>
              
              <div className="flex items-center space-x-4">
                <div className="flex text-yellow-400">
                  {/* Static stars for UI */}
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-[#737373] text-sm">(10 Reviews)</span>
              </div>

              <div className="text-3xl font-bold">
                {discountedPrice ? (
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-4">
                        <span className="text-[#23856D]">Rs. {Number(discountedPrice).toLocaleString()}</span>
                        <span className="text-[#BDBDBD] line-through text-xl">Rs. {product.price.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="bg-green-100 text-[#23856D] text-xs font-bold px-2 py-1 rounded">
                            {product.discountPercentage}% OFF
                        </span>
                        <span className="text-[#2DC071] text-sm font-bold">
                            You Save Rs. {(product.price * (product.discountPercentage || 0) / 100).toLocaleString()}
                        </span>
                    </div>
                  </div>
                ) : (
                  <span className="text-[#23856D]">Rs. {product.price.toLocaleString()}</span>
                )}
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <span className="text-[#737373] font-bold">Availability :</span>
                <span className={`font-bold ${product.stock && product.stock > 0 ? "text-[#2DC071]" : "text-red-500"}`}>
                  {product.stock && product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              <p className="text-[#858585] leading-relaxed">
                {product.description || "No description available for this product yet. It's a high-quality item perfect for your needs."}
              </p>

              <hr className="border-[#ECECEC]" />

              {/* Colors and Actions */}
              <ProductActions product={product} />
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
