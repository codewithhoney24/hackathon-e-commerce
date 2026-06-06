export interface Product {
    _id: string;
    name: string;
    slug: string;
    description?: string;
    price: number;
    discountPercentage?: number;
    imageUrl: string;
    category?: string;
    stock?: number;
    isNew?: boolean;
    tags?: string[];
    // For UI compatibility if needed
    department?: string;
    colors?: string[];
  }
