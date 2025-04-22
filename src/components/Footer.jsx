export default function Footer() {
  return (
    <footer className="py-6">
      <div className="container mx-auto flex justify-between items-center px-8">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">Aims2Learn</a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col text-right">
          <p className="text-sm py-2">📞 647-686-7551</p>
          <p className="text-sm py-2">✉️ admin@aims2learn.com</p>
        </div>
      </div>
    </footer>
  )
}
