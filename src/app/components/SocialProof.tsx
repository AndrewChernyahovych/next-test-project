import { Star } from 'lucide-react';

export default function SocialProof() {
  return (
    <section id="reviews" className="py-16 px-4 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-2 mb-8">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-4xl mx-auto">
          This platform has completely transformed how we manage our business. The ROI has been incredible!
        </p>
        <div className="font-semibold">John Doe</div>
        <div className="text-gray-600">CEO at TestProjectCorp</div>
      </div>
    </section>
  );
}
