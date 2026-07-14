import heroNetworkImg from "@/assets/hero-africa-network.webp";

const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden bg-[#04081a]">
    {/* Africa network map — glowing continent with connections radiating to world cities */}
    <img
      src={heroNetworkImg}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover object-center"
    />

    {/* Left gradient — protects text readability */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to right, rgba(4,8,26,0.97) 0%, rgba(4,8,26,0.90) 30%, rgba(4,8,26,0.62) 54%, rgba(4,8,26,0.20) 100%)",
      }}
    />

    {/* Top + bottom vignette */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#04081a]/60 via-transparent to-[#04081a]/80" />

    {/* Mobile: stronger full overlay for portrait screens */}
    <div className="absolute inset-0 md:hidden bg-gradient-to-b from-[#04081a]/85 via-[#04081a]/65 to-[#04081a]/40" />
  </div>
);

export default HeroBackground;
