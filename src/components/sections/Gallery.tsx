import SectionHead from '@/components/ui/SectionHead'
import { siteConfig } from '@/config/site.config'
import type { GalleryImage } from '@/types'

export default function Gallery() {
  const { variants, gallery, copy } = siteConfig

  return (
    <section className="section" style={{ background: 'var(--surface-2)' }}>
      <div className="wrap">
        <SectionHead
          eyebrow={copy.galleryEyebrow}
          title={copy.galleryTitle}
          subtitle={copy.gallerySubtitle}
        />

        {/* Galerie photos */}
        <div
          className={
            variants.gallery === 'mosaique'
              ? 'reveal grid gap-[14px] grid-cols-2 md:grid-cols-4'
              : 'reveal grid gap-[14px] grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
          }
          style={
            variants.gallery === 'mosaique'
              ? { gridAutoRows: '220px', gridAutoFlow: 'dense' }
              : undefined
          }
        >
          {gallery.images.map((img, i) => (
            <GalleryItem
              key={i}
              img={img}
              variant={variants.gallery}
              index={i}
              total={gallery.images.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function GalleryItem({ img, variant, index, total }: { img: GalleryImage; variant: string; index: number; total: number }) {
  const style: React.CSSProperties = {}
  let cls = 'group relative overflow-hidden rounded-[10px]'
  if (variant === 'classique') {
    // Mobile/tablette : flux normal (1 cellule). Placement spécial seulement en lg (grille 6 colonnes).
    cls += ' aspect-[4/3]'
    const remainder = total % 3
    const isOrphan = remainder > 0 && index >= total - remainder
    if (!isOrphan) {
      cls += ' lg:col-span-2'
    } else if (remainder === 1) {
      cls += ' lg:col-start-3 lg:col-span-2'
    } else {
      // 2 orphelins : centrés côte à côte
      cls += index === total - 2 ? ' lg:col-start-2 lg:col-span-2' : ' lg:col-start-4 lg:col-span-2'
    }
  }
  if (variant === 'mosaique') {
    if (img.tall) style.gridRow = 'span 2'
    if (img.wide) style.gridColumn = 'span 2'
  }

  return (
    <div style={style} className={cls}>
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(transparent 55%, rgba(16,21,38,.5))' }} />
      <span className="absolute left-[18px] bottom-[16px] text-white text-[14px] font-semibold opacity-0 translate-y-[6px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
        {img.caption}
      </span>
    </div>
  )
}
