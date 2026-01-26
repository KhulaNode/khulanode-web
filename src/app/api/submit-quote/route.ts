import { NextRequest, NextResponse } from 'next/server';
import type { QuoteFormData } from '@/types/pricing';
import { basePackages, addOns } from '@/lib/pricing-config';

export async function POST(request: NextRequest) {
  try {
    const formData: QuoteFormData = await request.json();

    // Validate required fields
    if (!formData.businessName || !formData.contactName || !formData.email || !formData.phone || !formData.selectedPackage) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get package details
    const selectedPkg = basePackages.find((p) => p.id === formData.selectedPackage);
    if (!selectedPkg) {
      return NextResponse.json(
        { error: 'Invalid package selected' },
        { status: 400 }
      );
    }

    // Build add-ons breakdown
    const addOnsBreakdown = formData.selectedAddOns.map((addOnId) => {
      const addOn = addOns.find((a) => a.id === addOnId);
      if (!addOn) return null;

      let setupCost = addOn.setupCost || 0;
      let monthlyCost = addOn.monthlyCost || 0;
      let details = addOn.name;

      if (addOn.requiresInput && formData.addOnInputs[addOnId]) {
        const inputValue = formData.addOnInputs[addOnId];
        details += ` (${inputValue} ${addOn.requiresInput.unit})`;
        
        if (addOn.requiresInput.costType === 'setup') {
          setupCost = inputValue * addOn.requiresInput.multiplier;
        } else {
          monthlyCost = inputValue * addOn.requiresInput.multiplier;
        }
      }

      return {
        name: details,
        setupCost,
        monthlyCost,
        notes: addOn.notes,
      };
    }).filter(Boolean);

    // Build email HTML
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #14ABBC 0%, #239EF4 50%, #2A54A7 100%);
      color: white;
      padding: 30px;
      border-radius: 8px;
      margin-bottom: 30px;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
    }
    .section {
      background: #f9fafb;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
      border-left: 4px solid #14ABBC;
    }
    .section h2 {
      margin-top: 0;
      color: #2A54A7;
      font-size: 20px;
    }
    .info-row {
      display: flex;
      padding: 8px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    .info-row:last-child {
      border-bottom: none;
    }
    .info-label {
      font-weight: 600;
      width: 150px;
      color: #6b7280;
    }
    .info-value {
      flex: 1;
      color: #111827;
    }
    .package-box {
      background: white;
      border: 2px solid #239EF4;
      padding: 20px;
      border-radius: 8px;
      margin: 15px 0;
    }
    .package-box h3 {
      margin-top: 0;
      color: #2A54A7;
    }
    .addon-item {
      background: white;
      padding: 12px;
      margin: 8px 0;
      border-radius: 6px;
      border: 1px solid #e5e7eb;
    }
    .cost-summary {
      background: linear-gradient(135deg, #2A54A7 0%, #239EF4 100%);
      color: white;
      padding: 25px;
      border-radius: 8px;
      margin-top: 30px;
    }
    .cost-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid rgba(255,255,255,0.2);
    }
    .cost-row:last-child {
      border-bottom: none;
      font-size: 24px;
      font-weight: bold;
      padding-top: 15px;
    }
    .features-list {
      list-style: none;
      padding: 0;
      margin: 10px 0;
    }
    .features-list li {
      padding: 4px 0;
      padding-left: 24px;
      position: relative;
    }
    .features-list li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #14ABBC;
      font-weight: bold;
    }
    .notes-box {
      background: #fff3cd;
      border: 1px solid #ffc107;
      padding: 15px;
      border-radius: 6px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>📋 New Quote Request</h1>
    <p style="margin: 5px 0 0 0; opacity: 0.9;">KhulaNode Pricing Calculator</p>
  </div>

  <div class="section">
    <h2>📞 Contact Information</h2>
    <div class="info-row">
      <div class="info-label">Business Name:</div>
      <div class="info-value"><strong>${formData.businessName}</strong></div>
    </div>
    <div class="info-row">
      <div class="info-label">Contact Name:</div>
      <div class="info-value">${formData.contactName}</div>
    </div>
    <div class="info-row">
      <div class="info-label">Email:</div>
      <div class="info-value"><a href="mailto:${formData.email}">${formData.email}</a></div>
    </div>
    <div class="info-row">
      <div class="info-label">Phone:</div>
      <div class="info-value"><a href="tel:${formData.phone}">${formData.phone}</a></div>
    </div>
  </div>

  <div class="section">
    <h2>📦 Selected Package</h2>
    <div class="package-box">
      <h3>${selectedPkg.name}</h3>
      <div class="info-row">
        <div class="info-label">Setup Cost:</div>
        <div class="info-value"><strong>R${selectedPkg.setupCost.toLocaleString()}</strong></div>
      </div>
      <div class="info-row">
        <div class="info-label">Monthly Cost:</div>
        <div class="info-value"><strong>R${selectedPkg.monthlyCost.toLocaleString()}</strong></div>
      </div>
      <div class="info-row">
        <div class="info-label">Change Requests:</div>
        <div class="info-value">Up to ${selectedPkg.changeRequests} per month</div>
      </div>
      
      <h4 style="margin-top: 15px; margin-bottom: 8px; color: #6b7280;">Included Features:</h4>
      <ul class="features-list">
        ${selectedPkg.features.map((f) => `<li>${f}</li>`).join('')}
      </ul>
    </div>
  </div>

  ${addOnsBreakdown.length > 0 ? `
  <div class="section">
    <h2>🔧 Selected Add-ons (${addOnsBreakdown.length})</h2>
    ${addOnsBreakdown.map((addon: any) => `
      <div class="addon-item">
        <strong>${addon.name}</strong>
        <div style="margin-top: 5px; font-size: 14px; color: #6b7280;">
          ${addon.setupCost > 0 ? `Setup: R${addon.setupCost.toLocaleString()}` : ''}
          ${addon.setupCost > 0 && addon.monthlyCost > 0 ? ' | ' : ''}
          ${addon.monthlyCost > 0 ? `Monthly: R${addon.monthlyCost.toLocaleString()}` : ''}
          ${addon.setupCost === 0 && addon.monthlyCost === 0 && addon.notes ? `<em>${addon.notes}</em>` : ''}
        </div>
      </div>
    `).join('')}
  </div>
  ` : ''}

  ${formData.notes ? `
  <div class="notes-box">
    <strong>📝 Additional Notes from Client:</strong>
    <p style="margin: 8px 0 0 0;">${formData.notes}</p>
  </div>
  ` : ''}

  <div class="cost-summary">
    <h2 style="margin-top: 0; margin-bottom: 20px;">💰 Total Estimate</h2>
    <div class="cost-row">
      <div>One-time Setup Cost:</div>
      <div><strong>R${formData.setupTotal.toLocaleString()}</strong></div>
    </div>
    <div class="cost-row">
      <div>Monthly Management Cost:</div>
      <div><strong>R${formData.monthlyTotal.toLocaleString()}</strong></div>
    </div>
    <div class="cost-row" style="margin-top: 15px;">
      <div>First Month Total:</div>
      <div>R${(formData.setupTotal + formData.monthlyTotal).toLocaleString()}</div>
    </div>
  </div>

  <div style="margin-top: 30px; padding: 20px; background: #f3f4f6; border-radius: 8px; font-size: 13px; color: #6b7280;">
    <strong>⚠️ Important:</strong> This is an estimate based on client selections. 
    Final scope and pricing must be confirmed before onboarding.
  </div>

  <div style="margin-top: 20px; text-align: center; color: #9ca3af; font-size: 12px;">
    <p>Generated by KhulaNode Pricing Calculator | ${new Date().toLocaleString('en-ZA')}</p>
  </div>
</body>
</html>
    `;

    // Send email via Plunk API
    const plunkApiKey = process.env.PLUNK_API_KEY;
    
    if (!plunkApiKey) {
      console.error('PLUNK_API_KEY not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact support.' },
        { status: 500 }
      );
    }

    const plunkResponse = await fetch('https://api.useplunk.com/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plunkApiKey}`,
      },
      body: JSON.stringify({
        to: process.env.QUOTE_RECIPIENT_EMAIL || 'quotes@khulanode.co.za',
        subject: `New Quote Request: ${formData.businessName}`,
        body: emailHtml,
        // Optional: send copy to client
        // reply_to: formData.email,
      }),
    });

    if (!plunkResponse.ok) {
      const errorText = await plunkResponse.text();
      console.error('Plunk API error:', errorText);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Quote request submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing quote:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
