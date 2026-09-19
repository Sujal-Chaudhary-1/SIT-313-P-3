// P1 banner: overlay text appears on hover (always visible on small/touch screens).
export default function Banner() {
  return (
    <div
      role="img"
      aria-label="Banner"
      className="group relative h-[400px] bg-dark bg-cover bg-center"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <div className="absolute inset-x-0 bottom-0 bg-dark p-4 text-center text-white opacity-0 transition-opacity group-hover:opacity-100 max-sm:opacity-100">
        Hey, I'm Sujal
      </div>
    </div>
  )
}
