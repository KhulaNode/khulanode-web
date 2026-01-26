'use client';

import { useState, useMemo } from 'react';
import { basePackages, addOns, addOnCategories } from '@/lib/pricing-config';
import type { QuoteFormData } from '@/types/pricing';

export default function PricingCalculator() {
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [selectedAddOns, setSelectedAddOns] = useState<Set<string>>(new Set());
  const [addOnInputs, setAddOnInputs] = useState<{ [key: string]: number }>({});
  
  // Form fields
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  
  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Calculate totals
  const { setupTotal, monthlyTotal } = useMemo(() => {
    let setup = 0;
    let monthly = 0;

    // Add base package costs
    const pkg = basePackages.find((p) => p.id === selectedPackage);
    if (pkg) {
      setup += pkg.setupCost;
      monthly += pkg.monthlyCost;
    }

    // Add selected add-on costs
    selectedAddOns.forEach((addOnId) => {
      const addOn = addOns.find((a) => a.id === addOnId);
      if (addOn) {
        if (addOn.setupCost !== null) {
          if (addOn.requiresInput && addOn.requiresInput.costType === 'setup') {
            const inputValue = addOnInputs[addOnId] || 0;
            setup += inputValue * addOn.requiresInput.multiplier;
          } else {
            setup += addOn.setupCost;
          }
        }
        
        if (addOn.monthlyCost !== null) {
          if (addOn.requiresInput && addOn.requiresInput.costType === 'monthly') {
            const inputValue = addOnInputs[addOnId] || 0;
            monthly += inputValue * addOn.requiresInput.multiplier;
          } else {
            monthly += addOn.monthlyCost;
          }
        }
      }
    });

    return { setupTotal: setup, monthlyTotal: monthly };
  }, [selectedPackage, selectedAddOns, addOnInputs]);

  const handleAddOnToggle = (addOnId: string) => {
    const newSet = new Set(selectedAddOns);
    if (newSet.has(addOnId)) {
      newSet.delete(addOnId);
      // Clear input value when unchecking
      const newInputs = { ...addOnInputs };
      delete newInputs[addOnId];
      setAddOnInputs(newInputs);
    } else {
      newSet.add(addOnId);
    }
    setSelectedAddOns(newSet);
  };

  const handleInputChange = (addOnId: string, value: number) => {
    setAddOnInputs({
      ...addOnInputs,
      [addOnId]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData: QuoteFormData = {
      businessName,
      contactName,
      email,
      phone,
      selectedPackage,
      selectedAddOns: Array.from(selectedAddOns),
      addOnInputs,
      setupTotal,
      monthlyTotal,
      notes,
    };

    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setBusinessName('');
        setContactName('');
        setEmail('');
        setPhone('');
        setNotes('');
        setSelectedPackage('');
        setSelectedAddOns(new Set());
        setAddOnInputs({});
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to submit quote request');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = businessName && contactName && email && phone && selectedPackage;

  return (
    <div className="py-12">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-gray mb-4">
              Pricing Calculator
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Build your custom package. Select a base package and add the features you need. 
              Get an instant estimate and submit for a detailed quote.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Base Packages */}
                <section>
                  <h2 className="text-2xl font-bold text-brand-gray mb-6">
                    1. Select Your Base Package
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {basePackages.map((pkg) => (
                      <div
                        key={pkg.id}
                        onClick={() => setSelectedPackage(pkg.id)}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                          selectedPackage === pkg.id
                            ? 'border-brand-blue bg-blue-50 shadow-lg'
                            : 'border-gray-200 bg-white hover:border-brand-cyan hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-semibold text-brand-darkblue">
                            {pkg.name}
                          </h3>
                          <input
                            type="radio"
                            name="package"
                            checked={selectedPackage === pkg.id}
                            onChange={() => setSelectedPackage(pkg.id)}
                            className="mt-1 w-5 h-5 text-brand-blue"
                          />
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-sm text-gray-600 mb-1">Setup Cost</div>
                          <div className="text-2xl font-bold text-brand-blue">
                            R{pkg.setupCost.toLocaleString()}
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-sm text-gray-600 mb-1">Monthly Cost</div>
                          <div className="text-2xl font-bold text-brand-cyan">
                            R{pkg.monthlyCost.toLocaleString()}/mo
                          </div>
                        </div>

                        <div className="border-t border-gray-200 pt-4 mt-4">
                          <div className="text-sm font-medium text-gray-700 mb-2">
                            Included features:
                          </div>
                          <ul className="space-y-1.5">
                            {pkg.features.slice(0, 5).map((feature, idx) => (
                              <li key={idx} className="text-xs text-gray-600 flex items-start">
                                <span className="text-brand-blue mr-2 mt-0.5">✓</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                            {pkg.features.length > 5 && (
                              <li className="text-xs text-gray-500 italic">
                                + {pkg.features.length - 5} more features
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Add-ons */}
                <section>
                  <h2 className="text-2xl font-bold text-brand-gray mb-6">
                    2. Select Add-ons (Optional)
                  </h2>
                  
                  {addOnCategories.map((category) => {
                    const categoryAddOns = addOns.filter((a) => a.category === category);
                    
                    return (
                      <div key={category} className="mb-8">
                        <h3 className="text-lg font-semibold text-brand-darkblue mb-4">
                          {category}
                        </h3>
                        <div className="space-y-3">
                          {categoryAddOns.map((addOn) => (
                            <div
                              key={addOn.id}
                              className={`p-4 rounded-lg border transition-all ${
                                selectedAddOns.has(addOn.id)
                                  ? 'border-brand-blue bg-blue-50'
                                  : 'border-gray-200 bg-white hover:border-brand-cyan'
                              }`}
                            >
                              <div className="flex items-start">
                                <input
                                  type="checkbox"
                                  checked={selectedAddOns.has(addOn.id)}
                                  onChange={() => handleAddOnToggle(addOn.id)}
                                  className="mt-1 w-4 h-4 text-brand-blue rounded"
                                />
                                <div className="ml-3 flex-1">
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <div className="font-medium text-gray-900">
                                        {addOn.name}
                                      </div>
                                      {addOn.notes && (
                                        <div className="text-xs text-gray-500 mt-0.5">
                                          {addOn.notes}
                                        </div>
                                      )}
                                    </div>
                                    <div className="text-right ml-4">
                                      <div className="text-sm">
                                        {addOn.setupCost !== null && (
                                          <div className="text-gray-600">
                                            Setup: <span className="font-semibold">R{addOn.setupCost}</span>
                                          </div>
                                        )}
                                        {addOn.monthlyCost !== null && !addOn.requiresInput && (
                                          <div className="text-gray-600">
                                            Monthly: <span className="font-semibold">R{addOn.monthlyCost}</span>
                                          </div>
                                        )}
                                        {addOn.monthlyCost === null && addOn.setupCost !== null && addOn.notes?.includes('varies') && (
                                          <div className="text-xs text-gray-500 italic">
                                            Variable cost
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>

                                  {/* Input field for add-ons that require it */}
                                  {addOn.requiresInput && selectedAddOns.has(addOn.id) && (
                                    <div className="mt-3">
                                      <label className="block text-sm text-gray-700 mb-1">
                                        {addOn.requiresInput.label}
                                      </label>
                                      <input
                                        type="number"
                                        min="1"
                                        value={addOnInputs[addOn.id] || ''}
                                        onChange={(e) =>
                                          handleInputChange(addOn.id, parseInt(e.target.value) || 0)
                                        }
                                        className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                                        placeholder="0"
                                      />
                                      <span className="ml-2 text-sm text-gray-600">
                                        {addOn.requiresInput.unit}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </section>

                {/* Contact Form */}
                <section className="bg-white p-6 rounded-xl border-2 border-gray-200">
                  <h2 className="text-2xl font-bold text-brand-gray mb-6">
                    3. Your Contact Details
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        placeholder="Your business name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        placeholder="you@business.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        placeholder="+27 XX XXX XXXX"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        placeholder="Tell us more about your requirements..."
                      />
                    </div>
                  </div>
                </section>
              </div>

              {/* Sticky Summary Panel */}
              <div className="lg:col-span-1">
                <div className="sticky top-20 bg-gradient-to-br from-brand-darkblue to-brand-blue text-white p-6 rounded-xl shadow-xl">
                  <h3 className="text-xl font-bold mb-6">Cost Summary</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="pb-4 border-b border-white/20">
                      <div className="text-sm text-blue-100 mb-1">One-time Setup</div>
                      <div className="text-3xl font-bold">
                        R{setupTotal.toLocaleString()}
                      </div>
                    </div>
                    
                    <div className="pb-4 border-b border-white/20">
                      <div className="text-sm text-blue-100 mb-1">Monthly Management</div>
                      <div className="text-3xl font-bold">
                        R{monthlyTotal.toLocaleString()}
                      </div>
                      <div className="text-xs text-blue-100 mt-1">per month</div>
                    </div>

                    {selectedPackage && (
                      <div className="text-sm">
                        <div className="font-semibold mb-2">Selected:</div>
                        <div className="text-blue-100">
                          {basePackages.find((p) => p.id === selectedPackage)?.name}
                        </div>
                        {selectedAddOns.size > 0 && (
                          <div className="mt-2">
                            <div className="text-xs text-blue-100">
                              + {selectedAddOns.size} add-on{selectedAddOns.size > 1 ? 's' : ''}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                      isFormValid && !isSubmitting
                        ? 'bg-white text-brand-darkblue hover:bg-gray-100 hover:shadow-lg'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Quote'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="mt-4 p-3 bg-green-500 rounded-lg text-sm">
                      ✓ Quote request sent successfully! We'll be in touch soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mt-4 p-3 bg-red-500 rounded-lg text-sm">
                      ✗ {errorMessage}
                    </div>
                  )}

                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-xs text-blue-100">
                      <strong>Note:</strong> Prices shown are estimates. Final scope and pricing 
                      are confirmed before onboarding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
