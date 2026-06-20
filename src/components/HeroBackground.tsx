import worldMap from "@/assets/world-map-africa.png";

const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* World map image */}
    <img
      src={worldMap}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover object-center"
    />

    {/* Left gradient — protects text readability */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to right, rgba(3,12,27,0.96) 0%, rgba(3,12,27,0.88) 28%, rgba(3,12,27,0.60) 52%, rgba(3,12,27,0.18) 100%)",
      }}
    />

    {/* Top + bottom vignette */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#030c1b]/60 via-transparent to-[#030c1b]/75" />

    {/* Mobile: stronger full overlay for portrait screens */}
    <div className="absolute inset-0 md:hidden bg-gradient-to-b from-[#030c1b]/80 via-[#030c1b]/60 to-transparent" />
  </div>
);

export default HeroBackground;
