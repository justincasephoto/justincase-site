import type { UI } from './en';

export const pl: UI = {
  meta: {
    siteName: 'Justin Case',
    siteDescription: 'Fotografia artystyczna z Krakowa. Portrety, fotografia uliczna, koncerty jazzowe i sztuka piękna.',
  },
  nav: {
    work: 'Portfolio',
    about: 'O mnie',
    booking: 'Rezerwacja',
    prints: 'Odbitki',
    journal: 'Blog',
    contact: 'Kontakt',
    portraits: 'Portrety',
    street: 'Ulica',
    jazz: 'Jazz i Muzyka',
    fineArt: 'Sztuka Piękna',
    menu: 'Menu',
    close: 'Zamknij menu',
  },
  home: {
    title: 'Justin Case',
    eyebrow: 'Fotografia',
    tagline: 'Fotografia artystyczna · Kraków',
    cta: 'Zobacz Portfolio',
  },
  work: {
    title: 'Portfolio',
    description: 'Wybrane fotografie Justina Case.',
    heading: 'Portfolio',
    subtitle: 'Wybrane serie',
    galleries: {
      portraits: { title: 'Portrety', description: 'Intymne studia postaci.' },
      street: { title: 'Ulica', description: 'Miasto w ruchu.' },
      jazz: { title: 'Jazz i Muzyka', description: 'Dźwięk uczyniony widzialnym.' },
      'fine-art': { title: 'Sztuka Piękna', description: 'Poza dokumentem.' },
    },
  },
  gallery: {
    backToWork: '← Portfolio',
    noPhotos: 'Zdjęcia wkrótce.',
    noPhotosHint: 'Aby dodać zdjęcia: edytuj plik .md galerii i dodaj URL-e Drive do tablicy photos.',
  },
  about: {
    title: 'O mnie',
    description: 'O Justinie Case – fotografu artystycznym z Krakowa.',
    heading: 'O mnie',
    body: `Fotografuję ludzi. Na ulicy, w salach koncertowych, w miękkich godzinach przedpołudnia.

Szukam momentu, zanim nadejdzie samoświadomość — tej połowy sekundy, kiedy ktoś jest po prostu sobą. Lekko rozchylona warga. Ręka, która jeszcze nie wie, co ma zrobić. Oko, które nie wie, że jest obserwowane.

Na stałe w Krakowie. Dostępny do pracy na całym świecie.

[Zastąp ten tekst własnym opisem artystycznym.]`,
    location: 'Kraków, Polska',
    available: 'Dostępny na całym świecie',
  },
  booking: {
    title: 'Rezerwacja',
    description: 'Zarezerwuj sesję fotograficzną z Justinem Case.',
    heading: 'Rezerwacja',
    intro: 'Dostępny na sesje portretowe, spacery fotograficzne, relacje z koncertów i wydarzeń oraz zlecenia artystyczne. Odpowiadam na wszystkie zapytania w ciągu 48 godzin.',
    sessions: [
      {
        name: 'Sesja Portretowa',
        duration: '1–2 godziny',
        detail: 'Wnętrze lub plener · Scouting lokalizacji · Pliki cyfrowe wysokiej rozdzielczości · Retusz gotowy do druku',
      },
      {
        name: 'Spacer Fotograficzny',
        duration: '2–3 godziny',
        detail: 'Wspólna eksploracja miasta · Stare Miasto lub Nowa Huta · Styl dokumentalny',
      },
      {
        name: 'Koncert i Wydarzenie',
        duration: 'Całe wydarzenie',
        detail: 'Jazz · Muzyka klasyczna · Underground · Wernisaże · Pełna licencja redakcyjna',
      },
      {
        name: 'Zlecenie Artystyczne',
        duration: 'Do uzgodnienia',
        detail: 'Edycje limitowane · Prace seryjne · Użytek redakcyjny i wystawienniczy',
      },
    ],
    formTitle: 'Wyślij Zapytanie',
    formNote: 'Wolisz email? Napisz do',
    tallyUrl: 'https://tally.so/r/PLACEHOLDER',
  },
  prints: {
    title: 'Odbitki',
    description: 'Artystyczne odbitki Justina Case w limitowanych edycjach.',
    heading: 'Odbitki',
    intro: 'Odbitki giclée muzealnej jakości na papierze Hahnemühle Photo Rag, dostępne w limitowanych edycjach. Każda odbitka jest sygnowana i numerowana.',
    comingSoon: 'Sklep z odbitkami wkrótce.',
    enquire: 'Aby zapytać o konkretną odbitkę, skorzystaj z formularza rezerwacji lub napisz bezpośrednio.',
    cta: 'Zapytaj o Odbitkę',
    ctaHref: '/pl/booking',
  },
  journal: {
    title: 'Blog',
    description: 'Teksty o fotografii, świetle i mieście.',
    heading: 'Blog',
    empty: 'Brak wpisów.',
    readMore: 'Czytaj →',
    backToJournal: '← Blog',
  },
  contact: {
    title: 'Kontakt',
    description: 'Skontaktuj się z Justinem Case.',
    heading: 'Kontakt',
    email: 'thephotographerfromkrakow@gmail.com',
    instagram: '@thephotographerfromkrakow',
    instagramUrl: 'https://instagram.com/thephotographerfromkrakow',
    location: 'Kraków, Polska',
    bookingCta: 'Aby zarezerwować sesję, przejdź do',
    bookingLink: 'strony Rezerwacji',
  },
  privacy: {
    title: 'Polityka Prywatności',
    description: 'Polityka prywatności RODO/GDPR dla justincase.photo',
    heading: 'Privacy Policy',
    subheading: 'Polityka Prywatności',
  },
  barePortraits: {
    title: 'Nagie Portrety',
    description: 'Artystyczna fotografia aktu Justina Case.',
    ageGateHeading: 'Wymagana weryfikacja wieku',
    ageGateBody: 'Ta sekcja zawiera artystyczną fotografię aktu przeznaczoną dla dorosłych. Kontynuując, potwierdzasz, że masz 18 lat lub więcej i że oglądanie tej treści jest legalne w Twoim kraju.',
    ageGateConfirm: 'Mam 18 lat lub więcej — Wejdź',
    ageGateDecline: 'Wyjdź',
    heading: 'Nagie Portrety',
    intro: 'Seria artystycznych portretów aktu. W trakcie pracy — wkrótce powrót.',
  },
  cookie: {
    message: 'Ta strona nie używa ciasteczek śledzących ani reklamowych. Jedno własne ciasteczko przechowuje Twoje preferencje.',
    accept: 'Rozumiem',
  },
  footer: {
    rights: '© {year} Justin Case. Wszelkie prawa zastrzeżone.',
    privacy: 'Polityka Prywatności',
    tagline: 'Fotografia nie jest przestępstwem.',
  },
  notFound: {
    title: '404',
    heading: '404',
    body: 'Ta klatka jest pusta.',
    cta: 'Wróć do strony głównej',
  },
  stub: {
    heading: 'Wkrótce',
    body: 'Ta wersja językowa jest w budowie.',
    cta: 'Zobacz po angielsku →',
  },
};
