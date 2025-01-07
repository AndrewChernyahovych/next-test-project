export default function Features() {
  return (
    <section id="features" className="py-16 px-4 bg-white scroll-mt-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Features That Set Us Apart</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Easy Integration', desc: 'Connect with your favorite tools seamlessly' },
            { title: 'Advanced Analytics', desc: 'Get insights that matter for your business' },
            { title: '24/7 Support', desc: 'Our team is always here to help you succeed' },
          ].map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
