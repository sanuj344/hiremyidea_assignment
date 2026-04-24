# Olive - The Safest Way to Shop for Groceries

A pixel-perfect, premium landing page for **Olive**, a food scanner application designed to eliminate harmful ingredients from your family's diet. Built with modern web technologies to ensure smoothness, responsiveness, and a high-end SaaS feel.

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Inter & Plus Jakarta Sans

## ✨ Key Features

### 1. Premium Mega Menus
- **Solutions**: A 2x2 feature grid with custom icons and a featured image card with hover zoom effects.
- **Blog**: Horizontal blog cards with image previews and category-specific typography.
- **Food**: A organized category grid with color-coded soft background icons.
- **Interactions**: Smooth fade-in and slide-up transitions using Tailwind `group-hover` and transparent bridging for a seamless experience.

### 2. Animated Hero Section
- **Physics-Based Floating**: A custom-built phone mockup that gently floats vertically.
- **Dynamic Product Slider**: An auto-sliding carousel inside the phone that cycles through multiple products (Fig Crackers, Avocado, Orange Juice, etc.) using `AnimatePresence`.
- **Interactive Layers**: 3 layers of high-blur depth elements that react to mouse movement (hover) and scroll.
- **Scroll reveal**: Orchestrated layout reveals as you scroll down the page.

### 3. Fully Responsive Design
- Optimized for desktop, tablet, and mobile viewing.
- Sticky navigation with backdrop blur for a modern look.
- Modular component architecture (`Navbar`, `Hero`, `PhoneMockup`, `ProductSlider`, etc.).

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/sanuj344/hiremyidea_assignment.git
   ```
2. Navigate to the frontend directory
   ```bash
   cd hiremyidea_assignment/frontend
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Start the development server
   ```bash
   npm run dev
   ```

### Building for Production

To create a production-ready bundle:
```bash
npm run build
```

## 📂 Project Structure

```text
frontend/
├── src/
│   ├── components/      # Reusable UI components (Navbar, Slider, Cards)
│   ├── assets/          # Static assets and local images
│   ├── App.jsx          # Main application layout
│   ├── index.css        # Global Tailwind & Custom styles
│   └── main.jsx         # Entry point
└── public/              # Static public files
```

## 🎨 Design Philosophy

The project follows a **Minimal & Premium** design philosophy:
- **Subtle Motion**: Animations are kept minimal (Apple-level polish) to avoid distraction.
- **High-Contrast Typography**: Clear hierarchy using bold headings and professional muted subtext.
- **Olive Aesthetic**: A curated color palette focused on deep moss greens (#1f3d2b) and soft off-whites.

---

