# Component Reference

## Header Component
**File:** `src/components/Header.tsx`

### Features
- Sticky navigation (stays at top when scrolling)
- Logo/brand link to home
- Navigation menu (hidden on mobile, visible on md+)
- "Get Started" CTA button
- Responsive design with hamburger menu support

### Usage
Automatically included in root layout. No props needed.

### Customization
- Update navigation links in the `<ul>`
- Change logo text: Replace "KhulaNode" with your brand
- Modify colors: Change `text-teal-600` to preferred color
- Update CTA link: Change `/contact` destination

---

## Footer Component
**File:** `src/components/Footer.tsx`

### Features
- 3-column layout (Brand, Solutions, Legal)
- Payment security disclaimer (required)
- Copyright year (auto-updated)
- Mobile responsive

### Features
- All legal links
- Contact links
- Solution category links
- Trust-building disclaimer

### Customization
- Update company description
- Add/remove solution links
- Add social media links (not included by default)
- Change footer background color

### Important
The payment disclaimer is non-negotiable:
> "Payments are processed securely by third-party payment providers. KhulaNode does not store or process card or banking details."

---

## Layout Component
**File:** `src/app/layout.tsx`

### Features
- Root layout for all pages
- Includes Header and Footer
- Sets up global metadata
- Configures Tailwind body classes

### Metadata
- Title: "KhulaNode - Digital Business Systems"
- Description: Value proposition
- Charset: UTF-8
- Viewport: Mobile responsive

### Customization
- Update metadata title/description
- Change body background: Modify `bg-slate-50`
- Change text color: Modify `text-slate-900`

---

## Home Page
**File:** `src/app/page.tsx`

### Sections
1. **Hero** - Value proposition, CTA buttons
2. **Who It's For** - 3 customer segments
3. **Solutions** - 5 capability-based offerings
4. **How It Works** - 4-step process
5. **Final CTA** - Dark background motivational section

### Key Content
- One-liner: "Run your business online. Reliably."
- Customer segments clearly defined
- Solutions organized by capability (not tech)
- Simple 4-step process
- Multiple CTAs

### Customization
- Update hero headline
- Modify customer segments
- Add/remove solutions
- Change CTA text and links

---

## Pricing Page
**File:** `src/app/pricing/page.tsx`

### Sections
1. **Hero** - Pricing headline and intro
2. **Two Pricing Cards** - Setup vs Monthly
3. **What You Don't Pay** - Trust building
4. **Quote CTA** - Call to action

### Pricing Structure
- **Setup:** R5,000+ (variable)
- **Monthly:** R1,500–R5,000 (tiered)

### Key Messages
- No transaction fees
- No hidden costs
- No lock-in contracts

### Customization
- Update price ranges
- Modify feature lists
- Change CTA link destination
- Add testimonials (optional)

---

## About Page
**File:** `src/app/about/page.tsx`

### Sections
1. **Context** - Why KhulaNode exists
2. **What We Do** - Services explanation
3. **How We Work** - Work methodology
4. **What We're Not** - Clarification
5. **Why Trust Us** - Trust building
6. **Leadership** - Founder info (not included in this version)
7. **CTA** - Get started button

### Key Messages
- Built for South Africa
- Systems-driven approach
- Long-term partnerships
- Not fintech/no-code/marketplace

### Customization
- Add founder name and bio
- Include company registration details
- Add team members (if applicable)
- Link to portfolio/case studies (optional)

---

## Contact Page
**File:** `src/app/contact/page.tsx`

### Form Fields
- **Name** (required)
- **Email** (required)
- **Phone** (optional)
- **Business Name** (optional)
- **Interest** (dropdown - 6 options)
- **Message** (required, textarea)

### Additional Info
- Email: hello@khulanode.com (placeholder)
- Location: South Africa

### Customization
- Update form fields
- Add interest categories
- Connect to backend (Formspree, SendGrid, etc.)
- Add success/error messages
- Update email address

---

## Legal Pages

### Terms of Service
**File:** `src/app/terms/page.tsx`

10 sections:
1. Overview
2. Services
3. Payments and Fees
4. Your Responsibilities
5. Cancellation and Termination
6. Data and Ownership
7. Limitation of Liability
8. Payment Processing Disclaimer
9. Changes to Terms
10. Contact

**Must be reviewed by legal counsel before deployment.**

### Privacy Policy
**File:** `src/app/privacy/page.tsx`

9 sections:
1. Introduction
2. Information We Collect
3. How We Use Your Information
4. Data Security
5. Payment Information
6. Your Data Rights
7. Third-Party Providers
8. Changes to This Policy
9. Contact

**Must be reviewed by legal counsel before deployment.**

### Refund & Cancellation Policy
**File:** `src/app/refunds/page.tsx`

8 sections:
1. Setup Fees
2. Monthly Management Fees
3. Cancellation Process
4. Service Credits
5. Payment Failures
6. Data Retention After Cancellation
7. Disputes
8. Questions

**Must be reviewed by legal counsel before deployment.**

---

## Global Styles
**File:** `src/app/globals.css`

### Includes
- Tailwind base, components, utilities
- Box-sizing reset
- Smooth scroll behavior
- Link transition
- Container utility class

### Customization
Add project-specific utility classes here:
```css
.button-primary {
  @apply px-6 py-3 bg-teal-600 text-white rounded font-medium hover:bg-teal-700 transition-colors;
}
```

---

## Responsive Breakpoints

Using Tailwind's default breakpoints:
- `sm` - 640px (small devices)
- `md` - 768px (tablets)
- `lg` - 1024px (desktops)
- `xl` - 1280px (large desktops)

All components use mobile-first approach:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2">
  {/* 1 column on mobile, 2 columns on md+ */}
</div>
```

---

## Color System Reference

### Slate Palette (Tailwind)
- `slate-50` - Background (#F8FAFC)
- `slate-500` - Secondary text (#64748B)
- `slate-900` - Primary text (#0F172A)

### Teal Palette (Tailwind)
- `teal-600` - Accent color (#0D9488)

### Usage
- **Background:** `bg-white` or `bg-slate-50`
- **Text:** `text-slate-900` (primary), `text-slate-600` (secondary)
- **Accent:** `text-teal-600`, `bg-teal-600`
- **Borders:** `border-slate-200`, `border-teal-600`

---

## Common Patterns

### Section with max-width container
```tsx
<section className="py-16 md:py-20 bg-white">
  <div className="container max-w-2xl">
    {/* Content */}
  </div>
</section>
```

### Button styles
```tsx
{/* Primary button */}
<button className="px-6 py-3 bg-teal-600 text-white rounded font-medium hover:bg-teal-700 transition-colors">
  Get Started
</button>

{/* Secondary button */}
<button className="px-6 py-3 border-2 border-slate-300 text-slate-900 rounded font-medium hover:border-teal-600 hover:text-teal-600 transition-colors">
  Learn More
</button>
```

### Grid layouts
```tsx
{/* 2 column on desktop, 1 on mobile */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Items */}
</div>

{/* 3 column on desktop, 1 on mobile */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Items */}
</div>
```

---

## Important Notes

### TypeScript
All files use TypeScript. If you add new components:
```tsx
export default function MyComponent(): React.ReactElement {
  return <div>Content</div>;
}
```

### Client Components
Use `'use client'` at the top of files that use interactivity:
```tsx
'use client';

export default function Interactive() {
  // Interactive code here
}
```

### Metadata
Each page should have metadata for SEO:
```tsx
export const metadata = {
  title: 'Page Title | KhulaNode',
  description: 'Page description for search engines',
};
```

---

For detailed Tailwind CSS documentation, visit: https://tailwindcss.com/docs
For Next.js App Router docs, visit: https://nextjs.org/docs/app
