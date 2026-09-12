import { cn } from "@/lib/utils";

type Shot = { src: string; alt: string };

export function ImageRail({
  images,
  className,
}: {
  images: readonly Shot[];
  className?: string;
}) {
  const loop = [...images, ...images];
  return (
    <div className={cn("image-rail-mask", className)} aria-hidden={false}>
      <div className="image-rail">
        {loop.map((img, i) => (
          <figure key={`${img.src}-${i}`} className="image-rail-card">
            <img
              src={img.src}
              alt={i < images.length ? img.alt : ""}
              loading={i < 3 ? "eager" : "lazy"}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

export function PhotoMosaic({
  images,
}: {
  images: readonly Shot[];
}) {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
      {images.slice(0, 6).map((img, i) => (
        <figure
          key={img.src}
          className={cn(
            "img-zoom overflow-hidden",
            i === 0 && "col-span-2 row-span-2 min-h-64 md:min-h-[28rem]",
            i === 5 && "md:col-span-2",
          )}
        >
          <img
            src={img.src}
            alt={img.alt}
            className={cn(
              "w-full object-cover",
              i === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-[4/3] md:aspect-[16/10]",
            )}
          />
        </figure>
      ))}
    </div>
  );
}
