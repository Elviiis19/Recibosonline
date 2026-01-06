import React from 'react';

interface JsonLdProps {
  type: string;
  name: string;
  description: string;
  url: string;
}

export const JsonLd: React.FC<JsonLdProps> = ({ type, name, description, url }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "BRL"
    },
    "author": {
      "@type": "Organization",
      "name": "RecibosOnline",
      "url": "https://recibosonline.com.br"
    },
    "publisher": {
      "@type": "Person",
      "name": "Elvis Dias"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};