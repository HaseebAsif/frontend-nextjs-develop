import React, { ReactNode } from 'react';

import Head from 'next/head';
import { Helmet, HelmetProps } from 'react-helmet-async';

import { OGTypes, TwitterCards, TwitterTag, StructuredType } from 'types/seo';

interface SEOProps extends HelmetProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
  twitter?: {
    card: TwitterCards;
    twitterTitle: string;
    twitterDescription: string;
    site?: string;
    image: string;
    altImage?: string;
    // creator only needed if CardType is summaryLargeImage
    creator?: string;
  };
  og?: {
    ogTitle: string;
    ogDescription: string;
    type?: OGTypes;
    image: string;
    altImage?: string;
    url: string;
    contentType?: string;
    siteName?: string;
    locale?: string;
    width?: number;
    height?: number;
  };
  structured?: {
    '@context'?: any;
    '@type'?: any;
    '@id'?: any;
    type: StructuredType;
    name: string;
    url: string;
    description?: string;
    image: string;
    isbn?: string;
    productID?: string;
    offers?: {
      '@type'?: string;
      price?: number;
      lowPrice?: number;
      availability: string;
      itemCondition: string;
      priceCurrency: string;
    };
    brand?: {
      '@type'?: any;
      name: string;
    };
    genre?: string | number;
    publishedAt?: string | number;
    language?: string | number;
    author?: string | number;
  };
}

export const SEO = ({
  children,
  title,
  description,
  canonical,
  twitter,
  og,
  structured,
  ...props
}: SEOProps) => {
  const renderTwitter = () => {
    if (!twitter) return null;
    if (Object.keys(twitter).length) {
      const {
        card,
        twitterTitle,
        twitterDescription,
        site = TwitterTag.booksquare,
        image,
        altImage,
        creator
      } = twitter;

      return (
        <Helmet {...props}>
          <meta name="twitter:card" content={card} />
          <meta name="twitter:title" content={twitterTitle} />
          <meta name="twitter:description" content={twitterDescription} />
          {site && <meta name="twitter:site" content={site} />}
          <meta name="twitter:image" content={image} />
          {altImage && <meta name="twitter:image:alt" content={altImage} />}
          {creator && <meta name="twitter:creator" content={creator} />}
        </Helmet>
      );
    }

    return null;
  };

  const renderOG = () => {
    if (!og) return null;
    if (Object.keys(og).length) {
      const {
        ogTitle,
        ogDescription,
        url,
        image,
        contentType = 'image/png',
        altImage,
        siteName,
        locale,
        type,
        width = 1200,
        height = 630
      } = og;

      return (
        <Helmet {...props}>
          <meta property="og:title" content={ogTitle} />
          <meta property="og:description" content={ogDescription} />
          <meta property="og:url" content={url} />
          <meta property="og:image:secure_url" content={image} />
          <meta property="og:image:width" content={`${width}`} />
          <meta property="og:image:height" content={`${height}`} />
          <meta property="og:image" content={image?.replace('https', 'http')} />
          <meta property="og:image:type" content={contentType} />
          {altImage && <meta property="og:image:alt" content={altImage} />}
          {siteName && <meta property="og:site_name" content={siteName} />}
          {locale && <meta property="og:locale" content={locale} />}
          <meta property="og:type" content={type} />
        </Helmet>
      );
    }

    return null;
  };

  const renderStructuredData = () => {
    if (!structured) return null;
    if (Object.keys(structured).length) {
      const {
        type,
        name,
        url,
        image,
        language,
        genre,
        publishedAt,
        author,
        ...rest
      } = structured;
      if (type === StructuredType.Website) {
        const data = JSON.stringify({
          '@context': 'http://schema.org',
          '@type': 'WebSite',
          name,
          url
        });
        const secondaryData = JSON.stringify({
          '@context': 'http://schema.org',
          '@type': 'Organization',
          name,
          url,
          logo: image
        });
        return (
          <Helmet>
            <script type="application/ld+json">{data}</script>
            <script type="application/ld+json">{secondaryData}</script>
          </Helmet>
        );
      }
      // @ts-ignore
      const { offers, brand, isbn, ...sData } = rest;
      // @ts-ignore
      sData['@context'] = 'https://schema.org/';
      // @ts-ignore
      sData['@type'] = type;
      // @ts-ignore
      sData['@id'] = url;

      if (offers) offers['@type'] = 'AggregateOffer';
      if (brand) brand['@type'] = 'Brand';
      const data = {
        ...sData,
        name,
        image,
        offers,
        brand
      };

      const bookData = {
        '@context': 'http://schema.org',
        '@type': 'Book',
        name,
        image,
        author: {
          '@type': 'Person',
          name: author
        },
        datePublished: publishedAt,
        publisher: {
          '@type': 'Organization',
          name: brand?.name
        },
        inLanguage: language,
        genre,
        isbn
      };

      return (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(data)}</script>
          <script type="application/ld+json">{JSON.stringify(bookData)}</script>
        </Helmet>
      );
    }

    return null;
  };

  return (
    <Head>
      <title>{title ? `${title} | Booksquare` : 'Booksquare'}</title>
      {description && <meta name="description" content={description} />}
      <link rel="icon" href="/favicon.png" />
      {children}
      {canonical && <link rel="canonical" href={canonical} />}
      {renderTwitter()}
      {renderOG()}
      {renderStructuredData()}
    </Head>
  );
};
