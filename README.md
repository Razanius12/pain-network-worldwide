# Pain Network Worldwide

![Pain Network Worldwide Landing Page](src/assets/preview.png)

A nostalgic reimagining of 2000s Japanese car culture websites built with modern tech. This landing page captures the essence of classic tuner sites like ABFLUG, RE-Amemiya, and C-West, featuring bold retro-cyberpunk design elements while delivering a smooth, contemporary user experience.

## 🌟 Project Vision

This project combines:

- **2000s Aesthetic**: Flash-inspired animations, dense layouts, and high-contrast cyber-styling
- **Modern Tech**: Built with React 18, Vite, and Radix UI for reliable performance
- **Car Culture**: Focused on the global Itasha and JDM community
- **Responsive Design**: Maintains retro feel while working on all devices

### Design Inspiration

- Early 2000s Japanese tuner websites
- Underground street racing aesthetic
- Cyberpunk/tech noir visuals
- Classic web elements (animated GIFs, textured backgrounds)

## 🎯 Before You Start

### Required Knowledge

- Basic understanding of:
  - HTML & CSS
  - JavaScript fundamentals
  - React basics (components, hooks)
  - Terminal/command line usage

### Technical Requirements

- Node.js v18 or newer
- Code editor (e.g., VS Code)
- Git (for cloning)

## 🚀 Getting Started

### 1. Set Up Your Environment

1. Install Node.js:
   - Required version: v18 or newer

   ```sh
   # Windows: Download from https://nodejs.org/ (LTS version)
   # Mac: Use homebrew
   brew install node
   ```

2. Install a code editor:
   - Download VS Code: <https://code.visualstudio.com/>
   - Recommended extensions:
     - ESLint
     - Prettier
     - TypeScript support

### 2. Dependencies Overview

This project uses several key packages:

- **UI Components**: Radix UI component library
- **Styling**: Tailwind CSS with class-variance-authority
- **Core**: React 18, Vite 6
- **Animation**: Motion library
- **Forms**: React Hook Form
- **Data Visualization**: Recharts

Key development dependencies:

- TypeScript support
- Vite with React SWC plugin
- Node types

### 3. Get The Code

```sh
# Clone the repository
git clone https://github.com/your-username/pain-network-worldwide.git

# Navigate to project folder
cd pain-network-worldwide

# Install all dependencies
npm install
# Or if you prefer pnpm
pnpm install
```

### 4. Development

```sh
# Start development server
npm run dev
# Or with pnpm
pnpm dev
```

Visit <http://localhost:5173> in your browser

## 🔨 Common Tasks

### Updating Content

1. Site Text & Components
   - Navigate to components
   - Edit component files directly
   - Example: Change hero text in HeroSection.tsx

2. Styling

   ```css
   /* Edit src/styles/retro.css for custom styles */
   .custom-class {
     color: #67E8F9; /* Cyan accent color */
   }
   
   /* Global styles in src/index.css */
   ```

3. Images
   - Place new images in assets
   - Import in components:

   ```tsx
   import MyImage from '@/assets/image.png';
   ```

### Changing Social Links

Update these files:

- Header.tsx - Navigation links
- CommunityCalloutSection.tsx - Discord link
- FooterSection.tsx - All social links

### Building for Production

```sh
# Create production build
npm run build
# Or with pnpm
pnpm build

# Preview production build
npm run preview
```

The build output will be in the `dist/` folder.

## 🎨 Customization Guide

### Colors

Main colors used:

- Background: Dark (#000000)
- Accent: Cyan (#67E8F9)
- Text: White (#FFFFFF)
- Muted Text: Gray (#6B7280)

Edit these in:

- retro.css
- Tailwind config if using utility classes

### Fonts

- Headings: Orbitron (futuristic)
- Monospace: Share Tech Mono
- Body: System default

### Components

Main sections in sections:

- HeroSection
- ShowcaseSection
- CommunityHighlights
- InstagramSection
- Footer

## 📱 Mobile Responsiveness

The site is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚠️ Troubleshooting

1. Port conflicts:

   ```sh
   # Start on different port
   npm run dev -- --port 3000
   ```

2. Dependencies issues:

   ```sh
   # Clear node_modules and reinstall
   rm -rf node_modules
   npm install
   ```

3. Build errors:
   - Check console for error messages
   - Verify all imports exist
   - Check syntax in modified files

## 📄 License & Attribution

See Attributions.md for:

- Third-party assets
- Component libraries
- Design inspiration

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## 🔗 Links

- Discord: <https://discord.com/invite/nG8QZZM6vW>
- Instagram: <https://instagram.com/pain.network.worldwide>
- YouTube: <https://youtube.com/@minami9chu>
