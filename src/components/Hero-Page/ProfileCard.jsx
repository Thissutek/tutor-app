export default function ProfileCard({ imageSrc, name, text }) {
    return(
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">

      {/* Circular Profile Image */}
      <div className="w-32 h-32 rounded-full overflow-hidden">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <h3 className="mt-4 text-xl font-semibold">{name}</h3>

      {/* Centered Text */}
      <p className="mt-2 text-center">{text}</p>
    </div>
    )
}