# KhulaNode Pricing Calculator

## Overview

Interactive pricing calculator that allows clients to:
- Select a base package (Standard or E-commerce)
- Add optional features
- Get instant cost estimates (setup + monthly)
- Submit quote requests via email

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your credentials:

```env
PLUNK_API_KEY=your_actual_plunk_api_key
QUOTE_RECIPIENT_EMAIL=your@email.com
```

### 2. Get Plunk API Key

1. Sign up at [Plunk](https://useplunk.com)
2. Go to Settings → API Keys
3. Copy your API key
4. Paste it into `.env.local`

### 3. Test the Calculator

```bash
npm run dev
```

Navigate to `/pricing` to see the calculator.

## File Structure

```
src/
├── types/
│   └── pricing.ts              # TypeScript interfaces
├── lib/
│   └── pricing-config.ts       # Packages & add-ons configuration
├── components/
│   └── PricingCalculator.tsx   # Main calculator component
├── app/
│   ├── pricing/
│   │   └── page.tsx            # Pricing page
│   └── api/
│       └── submit-quote/
│           └── route.ts        # Email submission API
```

## Pricing Configuration

### Base Packages

Located in `src/lib/pricing-config.ts`:

- **Standard Business Package**: R800 setup, R500/month
- **E-commerce Business Package**: R2000 setup, R1200/month

### Add-ons

Grouped by category:
- Analytics & Reliability
- Content & Storage  
- Subscriptions & Membership
- Bookings & Scheduling
- Communication & Messaging
- Automations & Integrations

### Adding New Add-ons

Edit `src/lib/pricing-config.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Feature Name',
  category: 'Category Name',
  setupCost: 500,      // or null
  monthlyCost: 100,    // or null
  notes: 'Optional description',
  
  // For dynamic pricing (e.g., per GB, per inbox):
  requiresInput: {
    type: 'number',
    label: 'Storage size (GB)',
    unit: 'GB',
    multiplier: 20,           // cost per unit
    costType: 'monthly'       // 'setup' or 'monthly'
  }
}
```

## Email Template

The email sent to the site owner includes:
- Client contact information
- Selected package with full feature list
- All selected add-ons with costs
- Cost breakdown (setup + monthly)
- Additional client notes

Format: HTML email with branded styling

## Features

✅ Live cost calculation  
✅ Sticky summary panel  
✅ Responsive design  
✅ Form validation  
✅ Success/error states  
✅ Formatted HTML email  
✅ Dynamic add-on inputs (for per-unit pricing)  
✅ Brand colors integrated  

## Disclaimer

"Prices shown are estimates. Final scope is confirmed before onboarding."

## Support

For questions about the pricing calculator, contact the development team.
