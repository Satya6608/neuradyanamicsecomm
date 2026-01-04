# 🛍️ NeuraDynamics E-Commerce Frontend Assignment

A modern, scalable **E-commerce frontend application** built using **React**, **Redux Toolkit**, and **Vitest**.  
This project demonstrates **real-world frontend architecture**, **state management**, **performance optimizations**, and **production-grade testing**.

---
## 🌐 Live Demo

🔗 **Live Application:**  
https://your-live-link-here

> Deployed using **Vercel / Netlify** for fast global delivery.

## 🎥 Video Walkthrough

📽️ **Project Walkthrough Video:**  
[Video Whole walkthrough](https://drive.google.com/file/d/1jHkvoKC-Q1mnST5GHyK20KRu-SMsakFD/view?usp=drive_link)

> This video demonstrates the complete application flow including:
> - Product Listing & Filtering
> - Product Detail Page
> - Wishlist & Cart functionality
> - Responsive Navbar
> - Test coverage overview

## ✨ Features Overview

### 🧾 Product Experience
- Product Listing Page (PLP)
  - Responsive grid layout
  - Search by product title (debounced)
  - Filter by category
  - Sort by price (asc / desc)
- Product Detail Page (PDP)
  - Full product details
  - Add to Cart
  - Add / Remove from Wishlist

### ❤️ Wishlist
- Grid layout (same as PLP)
- Add product to Cart
- Automatically removes item from Wishlist after adding to Cart

### 🛒 Cart
- Luxury-style cart UI
- Quantity increment / decrement
- Dynamic price calculations
- Order summary panel
- Checkout CTA

### 🧭 Navigation
- Fully responsive Navbar
- Cart & Wishlist badges (quantity aware)
- Mobile + Desktop optimized

---

## 🧱 Tech Stack

- **React (Vite)**
- **Redux Toolkit**
- **React Router DOM**
- **Tailwind CSS**
- **Vitest**
- **React Testing Library**
- **JSDOM**

---

## 📁 Project Structure

```txt
src/
├── app/
│   ├── hooks.js
│   └── store.js
├── assets/
├── components/
│   ├── global/
│   │   └── Badge.jsx
│   ├── navbar/
│   ├── productCard/
│   └── productFilters/
├── features/
│   ├── cart/
│   ├── filters/
│   ├── products/
│   └── wishlist/
├── pages/
│   ├── Products.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── Wishlist.jsx
│   └── Favorites.jsx
├── routes/
│   └── AppRoutes.jsx
├── test/
│   ├── Cart.test.jsx
│   ├── ProductDetail.test.jsx
│   ├── Wishlist.test.jsx
│   ├── integration.*
│   ├── setup.js
│   └── test-utils.jsx
├── App.jsx
├── main.jsx
└── index.css
```
# 🚀 Getting Started
1️⃣ Clone Repository
```git clone https://github.com/Satya6608/neuradyanamicsecomm```
cd neuradyanamicsecomm

2️⃣ Install Dependencies
```npm install```

3️⃣ Run Development Server
```npm run dev```


## Open:
```👉 http://localhost:5173```

# 🔗 API Used

Fake Store API
```https://fakestoreapi.com/products```

Used for:
Product listing
Product detail data
## 🧠 State Management (Redux Toolkit)
Slices Implemented

productsSlice
filtersSlice
cartSlice
wishlistSlice
Design Principles
Single source of truth

Derived data via selectors
No duplicated logic in components
UI components dispatch actions only
## ⚡ Performance Optimizations

Memoized selectors using createSelector

Debounced search input

Conditional API fetching

Minimal re-renders

Avoided unnecessary state duplication

🧪 Testing Strategy
Testing Tools

Vitest

React Testing Library

user-event

Types of Tests

✅ Unit Tests (Redux slices)

✅ Component Tests (PLP, PDP, Cart, Wishlist)

✅ Integration Tests (Full user flows)

🧪 Running Tests
Run All Tests
```npm test```

Run Tests Once (CI / Final Check)
```npm run test:run```

Watch Mode
```npm run test:watch```

Generate Coverage Report
```npm run test:coverage```

📊 Test Coverage Summary
Statements : ~79%
Branches   : ~79%
Functions  : ~63%
Lines      : ~79%

Coverage Highlights

Redux slices: 90–100%

Core pages: 85–95%

Integration flows: Fully covered
