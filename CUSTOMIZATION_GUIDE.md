# Customization Guide

This guide shows you how to easily customize the CedarNexus Technologies website.

## 🎨 Changing Colors

### Primary Brand Color
Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#f0f9f4',   // Lightest
    100: '#dbf0e3',
    200: '#b9e0cb',
    300: '#8ccaac',
    400: '#5aad87',
    500: '#38916b',  // Main brand color
    600: '#287556',
    700: '#205d46',
    800: '#1c4a38',
    900: '#183d2f',  // Darkest
  },
}
```

Replace these hex codes with your brand colors.

## 📝 Updating Content

### Home Page Hero Text
Edit `src/app/page.tsx`:

```typescript
<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
  AI Agents That Transform Service Businesses
</h1>
<p className="text-xl text-gray-600 mb-8 leading-relaxed">
  CedarNexus Technologies builds intelligent AI agents...
</p>
```

### Company Name & Logo
Edit `src/components/Navigation.tsx`:

```typescript
<Link href="/" className="flex items-center space-x-3">
  <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
    <span className="text-white font-bold text-xl">CN</span>
  </div>
  <span className="text-xl font-semibold text-gray-900">CedarNexus Technologies</span>
</Link>
```

### Contact Information
Edit `src/app/contact/page.tsx`:

```typescript
<p className="text-gray-600">hello@cedarnexus.tech</p>
<p className="text-gray-600">support@cedarnexus.tech</p>
```

## 🖼️ Adding Images

### Logo Image
1. Add your logo to `/public/logo.png`
2. Update Navigation component:

```typescript
<Image 
  src="/logo.png" 
  alt="CedarNexus Technologies" 
  width={40} 
  height={40}
/>
```

### Hero Background Image
Add to `src/app/page.tsx`:

```typescript
<section 
  className="section-padding"
  style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
>
```

## 🔧 Navigation Menu Items

Edit `src/components/Navigation.tsx`:

```typescript
<Link href="/new-page" className="text-gray-700 hover:text-gray-900 font-medium">
  New Page
</Link>
```

## 📱 Social Media Links

Add to `src/components/Footer.tsx`:

```typescript
<div className="flex space-x-4">
  <a href="https://linkedin.com/company/cedarnexus" className="text-gray-400 hover:text-white">
    <LinkedInIcon />
  </a>
  <a href="https://twitter.com/cedarnexus" className="text-gray-400 hover:text-white">
    <TwitterIcon />
  </a>
</div>
```

## 🎯 Call-to-Action Buttons

Global button styles in `src/app/globals.css`:

```css
.btn-primary {
  @apply px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700;
}

.btn-secondary {
  @apply px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-md hover:border-gray-400;
}
```

## 📊 Analytics

### Google Analytics
Add to `src/app/layout.tsx`:

```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

## 📧 Contact Form Backend

Replace the handleSubmit function in `src/app/contact/page.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  
  if (response.ok) {
    alert('Message sent successfully!')
  }
}
```

## 🌐 SEO Meta Tags

Edit metadata in each page's file:

```typescript
export const metadata: Metadata = {
  title: 'Your Page Title - CedarNexus Technologies',
  description: 'Your page description for search engines',
  keywords: ['AI', 'automation', 'HVAC'],
}
```

## 🎨 Font Changes

Edit `src/app/layout.tsx`:

```typescript
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the .next folder
```

### Custom Server
```bash
npm run build
npm start
```

---

## 💡 Pro Tips

1. **Use Environment Variables**: Store API keys in `.env.local`
2. **Image Optimization**: Use Next.js Image component for automatic optimization
3. **Performance**: Run `npm run build` to check bundle size
4. **Testing**: Test on mobile devices using Chrome DevTools
5. **Accessibility**: Use semantic HTML and ARIA labels

Need help? Check the [Next.js Documentation](https://nextjs.org/docs) or [Tailwind CSS Documentation](https://tailwindcss.com/docs).
