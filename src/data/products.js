const products = [
  {
    id: 1,
    name: "Gulfstream G650",
    price: 65000000,
    description: "Ultra-long-range business jet with luxurious interior and advanced avionics.",
    image: "/assets/images/g650.jpg"
  },
  {
    id: 2,
    name: "Dassault Falcon 8X",
    price: 59000000,
    description: "Three-engine long-range business jet with excellent fuel efficiency.",
    image: "/assets/images/falcon8x.jpg"
  },
  {
    id: 3,
    name: "Bombardier Global 7500",
    price: 73000000,
    description: "Luxurious and spacious ultra-long-range private jet.",
    image: "/assets/images/global7500.jpg"
  },
  {
    id: 4,
    name: "Airbus ACH160 Helicopter",
    price: 12500000,
    description: "Advanced light helicopter designed for luxury and speed.",
    image: "/assets/images/ach160.jpg"
  },
  {
    id: 5,
    name: "Cessna Citation XLS+",
    price: 13500000,
    description: "Mid-size business jet with excellent reliability and performance.",
    image: "/assets/images/xlsplus.jpg"
  },
  // Add 25+ more planes here with the same structure:
  {
    id: 6,
    name: "Pilatus PC-24",
    price: 10500000,
    description: "Versatile light jet with great short runway performance.",
    image: "/assets/images/pc24.jpg"
  },
  {
    id: 7,
    name: "Embraer Phenom 300E",
    price: 9300000,
    description: "Popular light business jet with excellent speed and range.",
    image: "/assets/images/phenom300e.jpg"
  },
  {
    id: 8,
    name: "Bell 525 Relentless",
    price: 13000000,
    description: "Next-gen super-medium helicopter with fly-by-wire controls.",
    image: "/assets/images/bell525.jpg"
  },
  {
    id: 9,
    name: "Textron King Air 350i",
    price: 7500000,
    description: "Turboprop aircraft popular for short and mid-range travel.",
    image: "/assets/images/kingair350i.jpg"
  },
  {
    id: 10,
    name: "HondaJet Elite",
    price: 5400000,
    description: "Innovative very light jet with over-the-wing engine mounts.",
    image: "/assets/images/hondajet.jpg"
  },
  {
    id: 11,
    name: "Sikorsky S-76D",
    price: 13000000,
    description: "Medium-size commercial helicopter with great range.",
    image: "/assets/images/s76d.jpg"
  },
  {
    id: 12,
    name: "Beechcraft King Air 250",
    price: 4900000,
    description: "Reliable turboprop for business and utility use.",
    image: "/assets/images/kingair250.jpg"
  },
  {
    id: 13,
    name: "Pilatus PC-12 NGX",
    price: 4800000,
    description: "Single-engine turboprop with excellent versatility.",
    image: "/assets/images/pc12ngx.jpg"
  },
  {
    id: 14,
    name: "AgustaWestland AW139",
    price: 12000000,
    description: "Medium utility helicopter widely used for VIP transport.",
    image: "/assets/images/aw139.jpg"
  },
  {
    id: 15,
    name: "Cirrus Vision Jet",
    price: 2400000,
    description: "Personal jet with single-engine and advanced safety features.",
    image: "/assets/images/cirrusvision.jpg"
  },
  {
    id: 16,
    name: "Learjet 75 Liberty",
    price: 13000000,
    description: "Light business jet with great speed and comfort.",
    image: "/assets/images/learjet75.jpg"
  },
  {
    id: 17,
    name: "Eurocopter EC130",
    price: 2800000,
    description: "Light utility helicopter with quiet operation.",
    image: "/assets/images/ec130.jpg"
  },
  {
    id: 18,
    name: "Cessna Citation Latitude",
    price: 18000000,
    description: "Super mid-size jet with spacious cabin and long range.",
    image: "/assets/images/citationlatitude.jpg"
  },
  {
    id: 19,
    name: "Robinson R44",
    price: 500000,
    description: "Popular four-seat light helicopter.",
    image: "/assets/images/r44.jpg"
  },
  {
    id: 20,
    name: "Mitsubishi SpaceJet M90",
    price: 25000000,
    description: "Regional jet with focus on fuel efficiency and comfort.",
    image: "/assets/images/spacejetm90.jpg"
  },
  {
    id: 21,
    name: "Gulfstream G280",
    price: 24500000,
    description: "Super mid-size jet with great speed and cabin comfort.",
    image: "/assets/images/g280.jpg"
  },
  {
    id: 22,
    name: "Dassault Falcon 2000LXS",
    price: 34000000,
    description: "Twin-engine business jet with excellent range and comfort.",
    image: "/assets/images/falcon2000.jpg"
  },
  {
    id: 23,
    name: "Bell 407GXi",
    price: 4500000,
    description: "Light single-engine helicopter with smooth performance.",
    image: "/assets/images/bell407.jpg"
  },
  {
    id: 24,
    name: "Cessna Caravan 208B",
    price: 2800000,
    description: "Versatile turboprop for utility and passenger missions.",
    image: "/assets/images/caravan208b.jpg"
  },
  {
    id: 25,
    name: "Pilatus PC-6 Porter",
    price: 2000000,
    description: "STOL utility aircraft for rugged operations.",
    image: "/assets/images/pc6porter.jpg"
  },
  {
    id: 26,
    name: "Sikorsky S-92",
    price: 27000000,
    description: "Heavy-lift helicopter for offshore and VIP transport.",
    image: "/assets/images/s92.jpg"
  },
  {
    id: 27,
    name: "Embraer Legacy 500",
    price: 19000000,
    description: "Mid-size jet with spacious cabin and modern avionics.",
    image: "/assets/images/legacy500.jpg"
  },
  {
    id: 28,
    name: "Cirrus SR22",
    price: 800000,
    description: "Single-engine piston aircraft with advanced avionics.",
    image: "/assets/images/sr22.jpg"
  },
  {
    id: 29,
    name: "AgustaWestland AW109",
    price: 6000000,
    description: "Lightweight twin-engine helicopter for VIP travel.",
    image: "/assets/images/aw109.jpg"
  },
  {
    id: 30,
    name: "Diamond DA62",
    price: 1000000,
    description: "Twin-engine light aircraft with great fuel economy.",
    image: "/assets/images/da62.jpg"
  },
  {
    id: 31,
    name: "Beechcraft Baron G58",
    price: 1600000,
    description: "Twin piston aircraft perfect for personal/business use.",
    image: "/assets/images/baron_g58.jpg"
  },
];

export default products;
