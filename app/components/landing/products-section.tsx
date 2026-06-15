import type { TDefaultConfigurableData, TCoffeeProduct } from "~/modules/configurables/src/constants/configurables.default";

interface ProductsSectionProps {
  config: TDefaultConfigurableData;
}

const COFFEE_FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
  "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80",
];

interface ProductCardProps {
  product: TCoffeeProduct;
  index: number;
  primaryColor: string;
  accentColor: string;
  secondaryColor: string;
}

/** Individual product card with image, badge, name, description and price. */
function ProductCard({ product, index, primaryColor, accentColor, secondaryColor }: ProductCardProps) {
  const imageUrl = product.imageUrl || COFFEE_FALLBACK_IMAGES[index % COFFEE_FALLBACK_IMAGES.length];

  return (
    <article className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col bg-white">
      {/* Product image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {/* Badge */}
        {product.badge && (
          <span
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
            style={{ background: accentColor, color: "#fff" }}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        <h3
          className="text-lg font-bold mb-2 leading-snug"
          style={{ fontFamily: "'Playfair Display', serif", color: primaryColor }}
        >
          {product.name}
        </h3>
        {product.description && (
          <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">
            {product.description}
          </p>
        )}
        {product.price && (
          <div className="mt-auto">
            <span
              className="text-base font-bold"
              style={{ color: accentColor }}
            >
              {product.price}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}

/**
 * Products section — a responsive grid of coffee product cards.
 */
export function ProductsSection({ config }: ProductsSectionProps) {
  const primary = config.brandColor?.primary ?? "#6B3F1F";
  const accent = config.brandColor?.accent ?? "#C8860A";
  const secondary = config.brandColor?.secondary ?? "#F5E6C8";
  const products = config.products ?? [];

  return (
    <section
      id="produk"
      className="py-20 px-6"
      style={{ background: secondary + "44" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span
              className="text-3xl"
              aria-hidden="true"
            >
              ✦
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif", color: primary }}
          >
            {config.productsSectionTitle ?? "Pilihan Kopi Kami"}
          </h2>
          {config.productsSectionSubtitle && (
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              {config.productsSectionSubtitle}
            </p>
          )}
        </div>

        {/* Products grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                index={index}
                primaryColor={primary}
                accentColor={accent}
                secondaryColor={secondary}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10">
            Produk segera hadir...
          </p>
        )}
      </div>
    </section>
  );
}
