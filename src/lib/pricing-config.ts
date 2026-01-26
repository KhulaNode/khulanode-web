import { BasePackage, AddOn } from '@/types/pricing';

export const basePackages: BasePackage[] = [
  {
    id: 'standard',
    name: 'Standard Business Package',
    setupCost: 800,
    monthlyCost: 500,
    changeRequests: 10,
    features: [
      'Business website (4–7 pages)',
      'Mobile-responsive design',
      'Basic SEO',
      'Domain & DNS setup',
      'SSL certificates',
      'Hosting & uptime management',
      'Privacy policy & terms pages',
      'POPIA-aligned handling',
      'Google Maps integration',
      'Basic contact form',
      'Up to 10 change requests per month',
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Business Package',
    setupCost: 2000,
    monthlyCost: 1200,
    changeRequests: 15,
    features: [
      'Everything in Standard Package',
      'Online store',
      'Product catalogue',
      'Checkout & payment gateway',
      'Inventory basics',
      'Digital products',
      'Invoicing & receipts',
      'Facebook / Instagram store sync',
      'User accounts',
      'Shipping fees setup',
      'Order dashboard',
      'Up to 15 change requests per month',
    ],
  },
];

export const addOns: AddOn[] = [
  // Analytics & Reliability
  {
    id: 'analytics',
    name: 'Analytics & Tracking',
    category: 'Analytics & Reliability',
    setupCost: 0,
    monthlyCost: 150,
  },
  {
    id: 'backups',
    name: 'Backups (daily/weekly)',
    category: 'Analytics & Reliability',
    setupCost: 0,
    monthlyCost: 300,
  },
  {
    id: 'monitoring',
    name: 'Monitoring System Access',
    category: 'Analytics & Reliability',
    setupCost: 0,
    monthlyCost: 150,
  },

  // Content & Storage
  {
    id: 'cms',
    name: 'CMS Access',
    category: 'Content & Storage',
    setupCost: 200,
    monthlyCost: 0,
  },
  {
    id: 'media-storage',
    name: 'Media Storage (S3)',
    category: 'Content & Storage',
    setupCost: 0,
    monthlyCost: 5,
    notes: 'R5 per GB',
    requiresInput: {
      type: 'number',
      label: 'Storage size (GB)',
      unit: 'GB',
      multiplier: 5,
      costType: 'monthly',
    },
  },
  {
    id: 'external-media',
    name: 'External Media Integration',
    category: 'Content & Storage',
    setupCost: 200,
    monthlyCost: 0,
  },

  // Subscriptions & Membership
  {
    id: 'subscriptions',
    name: 'Subscriptions & Membership System',
    category: 'Subscriptions & Membership',
    setupCost: 1000,
    monthlyCost: 0,
  },
  {
    id: 'recurring-billing',
    name: 'Recurring Billing & Tiered Plans',
    category: 'Subscriptions & Membership',
    setupCost: 0,
    monthlyCost: 100,
  },
  {
    id: 'paywall',
    name: 'Paywall / Member Access Control',
    category: 'Subscriptions & Membership',
    setupCost: 0,
    monthlyCost: 100,
  },

  // Bookings & Scheduling
  {
    id: 'booking-system',
    name: 'Booking & Scheduling System',
    category: 'Bookings & Scheduling',
    setupCost: 1000,
    monthlyCost: 0,
  },
  {
    id: 'booking-payment',
    name: 'Booking Payment Integration',
    category: 'Bookings & Scheduling',
    setupCost: 0,
    monthlyCost: 100,
  },

  // Communication & Messaging
  {
    id: 'transactional-email',
    name: 'Transactional Email System',
    category: 'Communication & Messaging',
    setupCost: 500,
    monthlyCost: 200,
  },
  {
    id: 'domain-email',
    name: 'Domain Email Inboxes',
    category: 'Communication & Messaging',
    setupCost: 0,
    monthlyCost: 40,
    notes: 'R40 per inbox',
    requiresInput: {
      type: 'number',
      label: 'Number of inboxes',
      unit: 'inboxes',
      multiplier: 40,
      costType: 'monthly',
    },
  },
  {
    id: 'automated-notifications',
    name: 'Automated Notifications',
    category: 'Communication & Messaging',
    setupCost: 0,
    monthlyCost: 100,
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Chat Integration',
    category: 'Communication & Messaging',
    setupCost: 300,
    monthlyCost: 0,
  },
  {
    id: 'chatbot',
    name: 'Chatbot Integration',
    category: 'Communication & Messaging',
    setupCost: 750,
    monthlyCost: 0,
  },
  {
    id: 'social-media',
    name: 'Social Media Integration',
    category: 'Communication & Messaging',
    setupCost: 300,
    monthlyCost: 0,
  },

  // Automations & Integrations
  {
    id: 'workflow-automations',
    name: 'Workflow Automations (n8n)',
    category: 'Automations & Integrations',
    setupCost: 1000,
    monthlyCost: null,
    notes: 'Monthly cost varies based on complexity',
  },
  {
    id: 'third-party',
    name: 'Third-party Integrations',
    category: 'Automations & Integrations',
    setupCost: 500,
    monthlyCost: null,
    notes: 'Setup starts at R500, monthly cost varies',
  },
];

export const addOnCategories = [
  'Analytics & Reliability',
  'Content & Storage',
  'Subscriptions & Membership',
  'Bookings & Scheduling',
  'Communication & Messaging',
  'Automations & Integrations',
];
