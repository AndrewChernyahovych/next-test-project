import { ChevronRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 px-4 bg-blue-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 opacity-90">Join thousands of satisfied customers and transform your business today.</p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg hover:bg-gray-100 inline-flex items-center">
          Start Your Free Trial
          <ChevronRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
