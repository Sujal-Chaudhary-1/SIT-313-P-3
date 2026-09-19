import gallery from '../data/gallery'
import Section from './Section'
import SafeImage from './SafeImage'

export default function Gallery() {
  return (
    <Section id="gallery" title="Gallery">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
        {gallery.map((img) => (
          <SafeImage
            key={img.id}
            src={img.src}
            alt={img.alt}
            className="h-[200px] w-full rounded-lg object-cover"
          />
        ))}
      </div>
    </Section>
  )
}
