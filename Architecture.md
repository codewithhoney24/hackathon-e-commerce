# Project Architecture - Bandage E-Commerce

This document outlines the technical architecture, directory structure, and technology stack used in the Bandage E-commerce platform.

## 🚀 Tech Stack

- **Frontend Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content Management System (CMS)**: [Sanity.io](https://www.sanity.io/)
- **State Management**: [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) (for Cart and Wishlist)
- **Authentication**: [Clerk](https://clerk.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Feather, FontAwesome, Bootstrap, etc.)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

## 📁 Directory Structure

- `src/app/`: Contains all the application routes and pages.
  - `(auth)/`: Authentication-related pages (Login, Signup).
  - `about/`: About Us page.
  - `blog/`: Blog listing and details.
  - `cart/`: Shopping cart page.
  - `checkout/`: Checkout and order processing.
  - `collection/`: Special product collections.
  - `contact/`: Contact Us page with functional form.
  - `pricing/`: Interactive pricing plans.
  - `product/`: Product listing and detailed views.
  - `wishlist/`: User wishlist page.
  - `components/`: Reusable UI components organized by feature (shop, about, contact, pricing, cart).
  - `store/`: Zustand store definitions for global state management.
- `sanity/`: Sanity CMS configuration and schema definitions (Products, Orders).
- `public/`: Static assets like images, logos, and icons.

## 🏗️ Core Architecture Principles

### 1. Component-Based UI
The application is built using modular, reusable components. For example, the `Navbar`, `Footer`, and `AddToCartButton` are shared across multiple pages to ensure consistency and maintainability.

### 2. State Management (Zustand)
We use Zustand for lightweight and efficient global state management:
- **Cart Store**: Manages adding/removing items, updating quantities, and persisting data to local storage.
- **Wishlist Store**: Handles adding products to the wishlist and showing real-time counts.

### 3. CMS Integration (Sanity)
Product data, images, and orders are managed through Sanity. The frontend fetches this data using optimized GROQ queries, allowing for dynamic content updates without redeploying the site.

### 4. Interactive Functionalities
- **Search System**: A full-width search overlay in the Navbar that redirects users to the filtered Shop page.
- **Dynamic Pricing**: A toggle in the Pricing page that adjusts prices between monthly and yearly billing cycles.
- **Interactive FAQ**: Accordion-style FAQs on the Pricing page for a better user experience.
- **Video Integration**: Functional video placeholder on the About page that loads a YouTube player on click.

### 5. Seamless Navigation
The project uses Next.js `Link` components for client-side navigation, ensuring fast page transitions. We've optimized page loading by standardizing the `Navbar` and `Footer` across all major routes.

## 🛠️ Key Features

- **Responsive Design**: Fully optimized for Mobile, Tablet, and Desktop views.
- **Real-time Feedback**: Toast notifications for cart actions and form submissions.
- **Secure Authentication**: Integrated with Clerk for modern user login/registration.
- **Functional Forms**: Validated contact forms and checkout processes.

---
*Created with ❤️ by Nousheen Atif*
