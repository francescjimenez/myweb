# Francesc Jimenez Photography Portfolio

## 🌟 Features

- **Dynamic Photo Collections**: Automatically loads and displays photos from organized folders
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Dark/Light Theme**: Elegant theme switching with smooth transitions
- **Modern Animations**: Powered by Framer Motion for smooth interactions

## 🚀 Tech Stack
- **Framework**: Next.js 15 (App Router)
- **React**: 19
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Formspree**: Contact Form
- **React Photo Album**: [Masonry Layout](https://react-photo-album.com/examples/masonry)

## 🛠️ Setup Instructions

   ```bash
   npm run dev
   ```

Open http://localhost:3000 with your browser to see the result. 

## 📸 Photo Collections

The portfolio is organized into collections:

Each collection should be placed in its corresponding folder in the `public` directory. Update image Validation /scripts/validate-images.ts

## 🎨 Theme Customization

### Colors

The theme colors are defined in `globals.css` using CSS variables. Modify the root variables to customize the color scheme:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 0%;
  /* ... other color variables */
}
```

## 🌓 Dark Mode

The theme toggle is implemented using `next-themes` and includes:

- System preference detection
- Smooth transitions
- Persistent theme selection

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px