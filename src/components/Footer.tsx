const footerSections = [
  {
    title: "ABOUT US",
    links: [
      "Careers",
      "Company Details",
      "Terms & Conditions",
      "Help center",
      "Privacy Policy",
      "Affiliate"
    ]
  },
  {
    title: "PRODUCTS",
    links: [
      "NFT Marketplace",
      "Slingshot",
      "Swaps",
      "NFT Launchpad",
      "Runes Platform",
      "Creator Dashboard"
    ]
  },
  {
    title: "RESOURCES",
    links: [
      "Support",
      "API",
      "Feature Requests",
      "Trust & Safety",
      "Sitemap"
    ]
  },
  {
    title: "CONTACT US",
    links: [
      "support@ztech.email",
      "affiliate@ztech.com",
      <a href="/">
        <img src="/installapp.png" alt="Install app" />
      </a>
    ],
  }
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-foreground mb-4 italic">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-z-purple transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;