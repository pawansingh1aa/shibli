export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  sourceUrl?: string;
}

export default function ImageGallery({ images }: { images: GalleryImage[] }) {
  if (images.length === 0) {
    return (
      <div className="rounded-sm border border-dashed border-hairline p-8 text-center text-sm text-graphite">
        No independently verified, rights-cleared images are available for
        this section yet.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {images.map((img) => (
        <figure key={img.src} className="border border-hairline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="h-56 w-full object-cover"
          />
          {img.caption && (
            <figcaption className="p-3 text-xs text-graphite">
              {img.caption}
              {img.sourceUrl && (
                <>
                  {" — "}
                  <a
                    href={img.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-maroon hover:text-maroon-dark"
                  >
                    source
                  </a>
                </>
              )}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
