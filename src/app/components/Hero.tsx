import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Transform Your Business with Our Solution</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Boost productivity and growth with our innovative platform designed for modern businesses.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 flex items-center justify-center">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg hover:bg-blue-50">Watch Demo</button>
        </div>
      </div>
    </section>
  );
}
