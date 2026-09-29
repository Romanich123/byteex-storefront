export const fallbackPage = {
  title: "Don’t apologize for being comfortable.",
  announcement: "FREE SHIPPING on orders > $200",
  ctaLabel: "Customize Your Outfit",
  heroImages: [
    "/images/grey-set.webp",
    "/images/robe.webp",
    "/images/reading.webp",
  ],
  heroBenefits: [
    "Beautiful, comfortable loungewear for day or night.",
    "No wasteful extras, like tags or plastic packaging.",
    "Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.",
  ],
  benefitsTitle: "Loungewear you can be proud of.",
  benefits: [
    {
      title: "Ethically sourced.",
      icon: "cloud",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
    },
    {
      title: "Responsibly made.",
      icon: "sun",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
    },
    {
      title: "Made for living in.",
      icon: "leaf",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
    },
    {
      title: "Unimaginably comfortable.",
      icon: "waves",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
    },
  ],
  gallery: [
    { image: "/images/robe.webp", name: "White Robe" },
    { image: "/images/grey-set.webp", name: "Everyday Lounge Set" },
    { image: "/images/reading.webp", name: "Slow Morning Essentials" },
  ],
  storyTitle: "Be your best self.",
  storyImage: "/images/story.webp",
  story: [
    "Hi! My name’s [Insert Name], and I founded [Insert] in _____.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
    "Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu congue, faucibus libero nec, placerat ligula.",
    "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.",
    "Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus, ac convallis urna massa at nibh.",
    "Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in sapien.",
    "Cras mattis varius mollis.",
  ],
  steps: [
    {
      title: "You save.",
      text: "Browse our comfort sets and save 15% when you bundle.",
      icon: "cart",
    },
    {
      title: "We ship.",
      text: "We ship your items within 1–2 days of receiving your order.",
      icon: "truck",
    },
    {
      title: "You enjoy!",
      text: "Wear [insert] around the house, out on the town, or in bed.",
      icon: "sun",
    },
  ],
  reviews: [
    {
      name: "Jane, S.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo.",
    },
    {
      name: "Jane, S.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane, S.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo.",
    },
  ],
  faqs: Array.from({ length: 6 }, (_, i) => ({
    question: "lorem ipsum dolor sit amet",
    answer:
      i === 0
        ? "Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible."
        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  })),
  impact: [
    { value: "3,927 kg", label: "of CO2 saved", icon: "cloud" },
    {
      value: "2,546,167 days",
      label: "of drinking water saved",
      icon: "water",
    },
    { value: "7,321 kWh", label: "of energy saved", icon: "bolt" },
  ],
  finalTitle: "Find something you love.",
  finalText: "Click below to browse our collection!",
  finalImage: "/images/final-collage.webp",
};
export type PageContent = typeof fallbackPage;
