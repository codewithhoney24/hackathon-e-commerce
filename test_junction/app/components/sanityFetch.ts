import { client } from "../../../sanity/lib/client";

export const getAllProducts = async () => {
  const query = `*[_type == "product"]{
    _id,
    name,
    "slug": slug.current,
    price,
    discountPercentage,
    "imageUrl": image.asset->url,
    category,
    stock,
    isNew,
    tags,
    description
  }`;
  
  const products = await client.fetch(query, {}, { 
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });
  return products;
};

export const getProductBySlug = async (slug: string) => {
  console.log("sanityFetch: Fetching product by slug:", slug);
  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    "slug": slug.current,
    price,
    discountPercentage,
    "imageUrl": image.asset->url,
    category,
    stock,
    isNew,
    tags,
    description
  }`;
  
  const product = await client.fetch(query, { slug }, { 
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });
  console.log("sanityFetch: Result for slug", slug, ":", product ? product.name : "null");
  return product;
};

export const getOrdersByUserId = async (userId: string) => {
  const query = `*[_type == "order" && userId == $userId] | order(createdAt desc){
    _id,
    customerName,
    email,
    phone,
    address,
    city,
    totalPrice,
    items,
    status,
    createdAt
  }`;
  
  const orders = await client.fetch(query, { userId }, { 
    cache: 'no-store' // Orders should always be fresh
  });
  return orders;
};
