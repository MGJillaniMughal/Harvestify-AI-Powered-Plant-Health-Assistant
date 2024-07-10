export interface Testimonial {
  name: string;
  content: string;
  title: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Maria Thompson",
    location: "Austin, Texas",
    content:
      "Harvestify has completely transformed the way I garden! I was always guessing what was wrong with my plants. Now, I just snap a photo, and Harvestify tells me exactly what's happening and how to treat it. My garden has never looked healthier!",
    title: "CEO, Quantum Innovations",
  },
  {
    name: "Jamal Ahmed",
    location: "Sacramento, California",
    content:
      "Harvestify has completely transformed the way I garden! I was always guessing what was wrong with my plants. Now, I just snap a photo, and Harvestify tells me exactly what's happening and how to treat it. My garden has never looked healthier!",
    title: "CEO, Apex Dynamics",
  },
  {
    name: "Emma Clarkson",
    location: "Seattle, Washington",
    content:
      "I was at a loss—my plants were all starting to wilt and I couldn't figure out why. Then I found Harvestify. Just by uploading a photo of the affected leaves, the app quickly diagnosed the problem and guided me on how to treat it. It was like a breath of fresh air for my garden and me. Harvestify really saved my plants!",
    title: "CEO, InnovaTech",
  },
];
