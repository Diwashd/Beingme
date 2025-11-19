import Seo from '../../components/Seo';
import { zodiacSEO } from '../../seo.config';

// Dummy fetch for example
export async function getStaticProps({ params }) {
    const product = {
        slug: params.slug,
        name: params.slug.charAt(0).toUpperCase() + params.slug.slice(1),
        description: `Express yourself with our ${params.slug} zodiac T-shirt. Fully customizable and premium quality apparel.`,
    };
    return { props: { product } };
}

export async function getStaticPaths() {
    const signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
    const paths = signs.map(sign => ({ params: { slug: sign } }));
    return { paths, fallback: false };
}

export default function ProductPage({ product }) {
    const ogImage = zodiacSEO[product.name]?.image || '/images/og/default.jpg';

    return (
        <>
            <Seo
                title={`${product.name} Zodiac T-Shirt | Being Me Nepal`}
                description={product.description}
                url={`https://beingmenepal.com/product/${product.slug}`}
                image={`https://beingmenepal.com${ogImage}`}
            />
            <h1>{product.name} Zodiac T-Shirt</h1>
            <p>{product.description}</p>
        </>
    );
}
