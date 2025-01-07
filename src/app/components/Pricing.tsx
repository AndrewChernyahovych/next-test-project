import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 px-4 bg-white scroll-mt-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: 'Starter', price: '$29', features: ['5 Users', 'Basic Features', 'Email Support'] },
            { name: 'Pro', price: '$99', features: ['25 Users', 'Advanced Features', 'Priority Support'] },
            { name: 'Enterprise', price: 'Custom', features: ['Unlimited Users', 'Custom Features', '24/7 Support'] },
          ].map((plan, index) => (
            <div key={index} className="p-8 rounded-xl border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold mb-6">{plan.price}</div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
