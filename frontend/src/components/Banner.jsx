export default function Banner({ onSubscribe }) {
  return (
    <header className="relative isolate">
      {/* Desktop Banner */}
      <img
        src="/Tepbanner.webp"
        alt="Craft culture banner"
        className="hidden md:block h-[100vh] w-full object-cover center-center"
      />

      {/* Mobile Banner */}
      <img
        src="/Mobiletapbanner.webp"
        alt="Craft culture banner mobile"
        className="block md:hidden h-[95vh] w-full object-fit center-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-900/20 to-transparent" />
      <div className="absolute bottom-[22%] left-[9%] md:bottom-[16%] md:left-[6%] flex items-center justify-center text-center text-white">
        <img
          src="/subscribenow.png"
          alt="Subscribe Now"
          onClick={onSubscribe}
          className="hidden md:block cursor-pointer w-[700px] h-auto"
        />
        <img
          src="/Mobilesubscribebtn.png"
          alt="Subscribe Now"
          onClick={onSubscribe}
          className="md:hidden cursor-pointer w-[180px] h-auto"
        />
      </div>
    </header>
  );
}
