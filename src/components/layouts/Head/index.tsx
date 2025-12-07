import NextHead from "next/head";

type HeadProps = {
  title: string;
  description: string;
  url: string;
  image: string;
};

type Props = Partial<HeadProps>;

export default function Head({
  title = "Gabriel Perroud - Full-Stack Developer",
  description = "Portfolio website",
  url = "https://gabrielprrd.vercel.app/",
  image = "https://i.ibb.co/Rhg3gKn/Screenshot-2023-07-03-at-19-54-14.png",
}: Props) {
  return (
    <NextHead>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:domain" content={url} />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </NextHead>
  );
}
