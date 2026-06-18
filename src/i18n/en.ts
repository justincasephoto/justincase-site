export const en = {
  meta: {
    siteName: 'Justin Case',
    siteDescription: 'Fine-art photography from Kraków, Poland. Portraits, street photography, jazz concerts, and fine art.',
  },
  nav: {
    work: 'Work',
    about: 'About',
    booking: 'Booking',
    prints: 'Prints',
    journal: 'Journal',
    contact: 'Contact',
    portraits: 'Portraits',
    street: 'Street',
    jazz: 'Jazz & Music',
    fineArt: 'Fine Art',
    menu: 'Menu',
    close: 'Close menu',
  },
  home: {
    title: 'Justin Case',
    eyebrow: 'Photography',
    tagline: 'Fine-art photography · Kraków, Poland',
    cta: 'View Work',
  },
  work: {
    title: 'Work',
    description: 'Selected photographs by Justin Case.',
    heading: 'Work',
    subtitle: 'Selected series',
    galleries: {
      portraits: { title: 'Portraits', description: 'Intimate studies of people.' },
      street: { title: 'Street', description: 'The city in motion.' },
      jazz: { title: 'Jazz & Music', description: 'Sound made visible.' },
      'fine-art': { title: 'Fine Art', description: 'Beyond the document.' },
    },
  },
  gallery: {
    backToWork: '← Work',
    noPhotos: 'Photos coming soon.',
    noPhotosHint: "To add photos: edit the gallery's .md file and add Drive URLs to the photos array.",
  },
  about: {
    title: 'About',
    description: 'About Justin Case, fine-art photographer based in Kraków.',
    heading: 'About',
    body: `I photograph people. On the street, in concert halls, in the soft hours before noon.

I am looking for the moment before self-consciousness arrives — the half-second when someone is simply themselves. The slightly parted lip. The hand that has not decided what to do yet. The eye that does not know it is being watched.

Based in Kraków, Poland. Available for commissioned work worldwide.

[Replace this placeholder with your own artist statement.]`,
    location: 'Kraków, Poland',
    available: 'Available worldwide',
  },
  booking: {
    title: 'Booking',
    description: 'Book a photography session with Justin Case.',
    heading: 'Booking',
    intro: 'Available for portrait sessions, street photography walks, concert and event coverage, and fine-art commissions. All enquiries are replied to within 48 hours.',
    sessions: [
      {
        name: 'Portrait Session',
        duration: '1–2 hours',
        detail: 'Indoor or outdoor · Location scouting · High-resolution digital files · Print-ready retouching',
      },
      {
        name: 'Street Photography Walk',
        duration: '2–3 hours',
        detail: 'Collaborative city exploration · Kraków old town or Nowa Huta · Candid documentary style',
      },
      {
        name: 'Concert & Event',
        duration: 'Full event',
        detail: 'Jazz · Classical · Underground · Gallery openings · Full editorial licensing',
      },
      {
        name: 'Fine Art Commission',
        duration: 'By arrangement',
        detail: 'Limited-edition prints · Series work · Editorial and exhibition use',
      },
    ],
    formTitle: 'Send an Enquiry',
    formNote: 'Prefer email? Write to',
    tallyUrl: 'https://tally.so/r/PLACEHOLDER',
  },
  prints: {
    title: 'Prints',
    description: 'Fine-art prints by Justin Case, available in limited editions.',
    heading: 'Prints',
    intro: 'Museum-quality giclée prints on Hahnemühle Photo Rag, available in limited editions. Every print is signed and numbered.',
    comingSoon: 'Online print shop coming soon.',
    enquire: 'To enquire about a specific print, use the booking form or write directly.',
    cta: 'Enquire About a Print',
    ctaHref: '/en/booking',
  },
  journal: {
    title: 'Journal',
    description: 'Writing about photography, light, and the city.',
    heading: 'Journal',
    empty: 'No posts yet.',
    readMore: 'Read →',
    backToJournal: '← Journal',
  },
  contact: {
    title: 'Contact',
    description: 'Get in touch with Justin Case.',
    heading: 'Contact',
    email: 'thephotographerfromkrakow@gmail.com',
    instagram: '@thephotographerfromkrakow',
    instagramUrl: 'https://instagram.com/thephotographerfromkrakow',
    location: 'Kraków, Poland',
    bookingCta: 'To book a session, use the',
    bookingLink: 'Booking page',
  },
  privacy: {
    title: 'Privacy Policy',
    description: 'GDPR/RODO privacy policy for justincase.photo',
    heading: 'Privacy Policy',
    subheading: 'Polityka Prywatności',
  },
  barePortraits: {
    title: 'Bare Portraits',
    description: 'Fine-art nude photography by Justin Case.',
    ageGateHeading: 'Age Verification Required',
    ageGateBody: 'This section contains fine-art nude photography intended for adults. By continuing you confirm that you are 18 years of age or older and that viewing this content is legal in your jurisdiction.',
    ageGateConfirm: 'I am 18 or older — Enter',
    ageGateDecline: 'Exit',
    heading: 'Bare Portraits',
    intro: 'A series of fine-art nude portraits. Work in progress — returning soon.',
  },
  cookie: {
    message: 'This site uses no tracking or advertising cookies. One first-party cookie stores your preferences.',
    accept: 'Got it',
  },
  footer: {
    rights: '© {year} Justin Case. All rights reserved.',
    privacy: 'Privacy Policy',
    tagline: 'Photography is not a crime.',
  },
  notFound: {
    title: '404',
    heading: '404',
    body: 'This frame is empty.',
    cta: 'Return Home',
  },
  stub: {
    heading: 'Coming Soon',
    body: 'This language version is under construction.',
    cta: 'View in English →',
  },
};

export type UI = typeof en;
