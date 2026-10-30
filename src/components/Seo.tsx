const SITE = 'https://dev-jobs-rouge.vercel.app/'; // ჩაწერეთ თქვენი რეალური დომენი

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  jsonLd?: Record<string, unknown>;
};

export default function Seo({
  title,
  description,
  path = '/',
  image,
  jsonLd,
}: SeoProps) {
  const url = `${SITE}${path}`;
  const img = image || `${SITE}/images/share-1200.jpg`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </>
  );
}