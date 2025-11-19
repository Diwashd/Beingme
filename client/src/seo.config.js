// seo.config.js
const defaultSEO = {
    title: "Being Me Nepal | Zodiac-Based Custom T-Shirts & Apparel",
    description: "Being Me brings self-expression to the front line with premium fits, bold zodiac drops, and fully customizable apparel. Craft your identity, design your vibe, and wear a story that’s unmistakably yours.",
    openGraph: {
        type: 'website',
        url: 'https://beingmenepal.com',
        images: [
            { url: 'https://beingmenepal.com/images/og/home.jpg', width: 1200, height: 630, alt: 'Being Me Nepal Zodiac T-Shirt' },
        ],
    },
    twitter: {
        handle: '@BeingMeNepal',
        site: '@BeingMeNepal',
        cardType: 'summary_large_image',
    },
    keywords: 'Zodiac T-Shirt Nepal, Custom Zodiac Apparel, Personalized T-Shirts, Being Me Nepal',
};

const zodiacSEO = {
    Aries: { image: '/images/og/aries.jpg' },
    Taurus: { image: '/images/og/taurus.jpg' },
    Gemini: { image: '/images/og/gemini.jpg' },
    Cancer: { image: '/images/og/cancer.jpg' },
    Leo: { image: '/images/og/leo.jpg' },
    Virgo: { image: '/images/og/virgo.jpg' },
    Libra: { image: '/images/og/libra.jpg' },
    Scorpio: { image: '/images/og/scorpio.jpg' },
    Sagittarius: { image: '/images/og/sagittarius.jpg' },
    Capricorn: { image: '/images/og/capricorn.jpg' },
    Aquarius: { image: '/images/og/aquarius.jpg' },
    Pisces: { image: '/images/og/pisces.jpg' },
};

export { defaultSEO, zodiacSEO };
