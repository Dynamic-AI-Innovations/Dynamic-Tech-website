const items = [
  "Software Engineering", "Artificial Intelligence", "Internet of Things",
  "Web Development", "Mobile Applications", "Cloud Solutions",
  "Cybersecurity", "Ideation & Strategy", "UI/UX Design",
  "Data Analytics", "IT Infrastructure", "Hardware Supply",
  "Building Africa's Silicon Valley",
];

const MarqueeBanner = () => (
  <div className="relative overflow-hidden border-y border-border py-5 bg-secondary/30">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="mx-8 text-sm font-medium text-muted-foreground">
          {item}
          <span className="ml-8 text-primary/40">◆</span>
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeBanner;
