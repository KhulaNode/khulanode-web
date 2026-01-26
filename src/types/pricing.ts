export interface BasePackage {
  id: string;
  name: string;
  setupCost: number;
  monthlyCost: number;
  features: string[];
  changeRequests: number;
}

export interface AddOn {
  id: string;
  name: string;
  category: string;
  setupCost: number | null;
  monthlyCost: number | null;
  notes?: string;
  requiresInput?: {
    type: 'number';
    label: string;
    unit: string;
    multiplier: number; // multiplies the input by this for cost calculation
    costType: 'setup' | 'monthly';
  };
}

export interface QuoteFormData {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  selectedPackage: string;
  selectedAddOns: string[];
  addOnInputs: { [key: string]: number }; // for add-ons that require user input
  setupTotal: number;
  monthlyTotal: number;
  notes?: string;
}
