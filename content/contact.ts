export const contactContent = {
  hero: {
    image: "/new zealand/new-zealand-17.jpg",
    imageAlt: "Contact Francesc Jimenez",
    title: "Contact",
    subtitle: "Part of your vision",
  },
  intro: {
    title: "Get in Touch",
    description: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.",
    contactItems: [
      {
        type: "email",
        title: "Email",
        content: "contactar@francescjimenez.com",
      },
    ],
    formTitle: "Send a Message",
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Do you offer prints of your photographs?",
        answer:
          "Yes, most of my photographs are available as fine art prints. You can inquire about specific images through the contact form.",
      },
      {
        question: "Are you available for commercial photography?",
        answer:
          "Absolutely. I work with brands and publications on commercial projects. Please reach out with details about your project for a custom quote.",
      },
      {
        question: "Do you offer photography workshops?",
        answer:
          "Yes, I regularly host workshops both in-person and online. Join my newsletter to be notified when new workshop dates are announced.",
      },
      {
        question: "Can I license your photos for my website/publication?",
        answer:
          "Yes, licensing options are available for both digital and print use. Please contact me with details about your intended use for licensing information.",
      },
    ],
  },
  featuredCollections: {
    title: "Featured Collections",
    description: "Explore some of my most popular photography collections from around the world",
    cta: { label: "View All Collections", href: "/showcase" },
  },
} as const
