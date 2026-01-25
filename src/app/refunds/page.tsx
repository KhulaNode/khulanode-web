export const metadata = {
  title: 'Refund & Cancellation Policy | KhulaNode',
};

export default function Refunds() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container max-w-2xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Refund & Cancellation Policy</h1>
        <p className="text-slate-600 mb-12">
          Last updated: January 2026
        </p>

        <div className="prose prose-slate max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Setup Fees</h2>
            <p className="text-slate-600">
              Setup fees are non-refundable once work has commenced. This fee covers system design, build,
              payment integration, and initial training.
            </p>
            <p className="text-slate-600 mt-3">
              If you cancel before work begins, you may request a full refund. If work has started, we'll
              discuss options based on the stage of completion.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Monthly Management Fees</h2>
            <p className="text-slate-600">
              Monthly fees are invoiced in advance and cover system management for that month. They are
              non-refundable once the month has begun.
            </p>
            <p className="text-slate-600 mt-3">
              If you cancel mid-month, you are responsible for the full monthly fee for that month. Your
              system remains operational through the end of the billing cycle.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Cancellation Process</h2>
            <p className="text-slate-600">
              To cancel your account:
            </p>
            <ol className="space-y-2 text-slate-600 mt-3 list-decimal list-inside">
              <li>Send written cancellation notice to hello@khulanode.com</li>
              <li>Specify your cancellation date (30 days from notice)</li>
              <li>Your system remains operational during the notice period</li>
              <li>Export your data before the cancellation date</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Credits</h2>
            <p className="text-slate-600">
              If KhulaNode fails to meet agreed service standards, you may be eligible for a service credit.
              Service credits are limited to the monthly management fee and must be requested within 30 days
              of the incident.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Payment Failures</h2>
            <p className="text-slate-600">
              If a payment fails, we'll attempt to collect again. If payment issues persist after 14 days, we
              may suspend your system until payment is received. Suspended systems may be deleted after 30 days
              of non-payment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Retention After Cancellation</h2>
            <p className="text-slate-600">
              Upon cancellation, you have 30 days to export your data. After 30 days, we will delete your
              data and cannot recover it. We recommend exporting your data before your cancellation date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Disputes</h2>
            <p className="text-slate-600">
              If you dispute a charge or have concerns about refunds, contact us at hello@khulanode.com within
              30 days of the charge. We'll review your request and respond within 5 business days.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h2>
            <p className="text-slate-600">
              We may update this policy. Changes apply to new services only. Existing customers are not
              affected by refund policy changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Questions?</h2>
            <p className="text-slate-600">
              Contact us at hello@khulanode.com or via the contact form. We're happy to discuss refunds and
              cancellation options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
