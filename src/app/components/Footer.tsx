export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-white">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-bold mb-4">Logo</div>
          <p className="text-gray-400">Making business better for everyone.</p>
        </div>
        {[
          { title: 'Product', links: ['Features', 'Pricing', 'Documentation'] },
          { title: 'Company', links: ['About', 'Careers', 'Contact'] },
          { title: 'Resources', links: ['Blog', 'Support', 'Terms'] },
        ].map((column, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-4">{column.title}</h3>
            <ul className="space-y-2">
              {column.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
