import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

const serviceCards = [
    {
        id: 1,
        title: "Detox & Balance",
        description: "Support your body’s natural reset with plant-based blends that encourage cleansing, calm digestion, and a sense of freshness daily.",
        tag: "Detox",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Fresh herbs and tea leaves on a table"
    },
    {
        id: 2,
        title: "Daily Vitality",
        description: "Elevate everyday energy with vibrant herbal infusions designed to sharpen focus, restore stamina, and promote a balanced routine.",
        tag: "Energy",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Fresh herbal tea cup with leaves"
    },
    {
        id: 3,
        title: "Immune Care",
        description: "Protect your wellness with immune-supporting blends featuring antioxidant-rich herbs that help you stay resilient all year round.",
        tag: "Wellness",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Herbal tea ingredients with citrus and ginger"
    }
];

function Home() {
    useEffect(() => {
        document.title = "Herbal Blend | Everyday Wellness";
    }, []);

    return (
        <>
            <Header />

            <main className="page-shell">
                <section className="hero" id="home">
                    <div className="hero-content">
                        <p className="eyebrow">Nature-powered wellness</p>
                        <h1>Pure Herbal Blends for Everyday Wellness</h1>
                        <h3>Pure Herbs. Powerful Wellness.</h3>
                        <p>
                            Discover the natural goodness of carefully crafted herbal blends,
                            thoughtfully made to support balance, vitality, and everyday wellbeing.
                        </p>

                        <div className="hero-actions">
                            <Link to="/contact" className="primary-btn">
                                Book a wellness consult
                            </Link>
                            <a href="#about" className="secondary-btn">
                                Learn more
                            </a>
                        </div>

                        <div className="hero-stats">
                            <div>
                                <strong>12k+</strong>
                                <span>happy customers</span>
                            </div>
                            <div>
                                <strong>100%</strong>
                                <span>plant-based blends</span>
                            </div>
                            <div>
                                <strong>24h</strong>
                                <span>response time</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-section" id="about">
                    <div className="section-heading">
                        <p className="eyebrow">About Herbal Blend</p>
                        <h2>About Herbal Blend</h2>
                        <h3>Wellness rooted in tradition and care.</h3>
                    </div>

                    <div className="about-grid">
                        <div className="about-copy">
                            <p>
                                At Herbal Blend, we believe that real wellbeing begins with the
                                ingredients you trust. Our blends are carefully sourced, expertly mixed,
                                and created to support mindful living and natural healing.
                            </p>
                            <p>
                                Whether you want to restore calm, increase daily energy, or build a
                                stronger immune routine, each formula is designed to nurture the body in
                                a gentle, balanced way.
                            </p>
                        </div>

                        <div className="about-points">
                            <div>
                                <span>01</span>
                                <p>Natural ingredients selected for purity and potency.</p>
                            </div>
                            <div>
                                <span>02</span>
                                <p>Tailored wellness support for everyday lifestyles.</p>
                            </div>
                            <div>
                                <span>03</span>
                                <p>Freshly blended formulas made with expert care.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features-section" id="services">
                    <div className="section-heading center">
                        <p className="eyebrow">Our services</p>
                        <h2>Choose the blend that fits your routine.</h2>
                    </div>

                    <div className="services-grid">
                        {serviceCards.map((card) => (
                            <ServiceCard
                                key={card.id}
                                title={card.title}
                                description={card.description}
                                tag={card.tag}
                                image={card.image}
                                imageAlt={card.imageAlt}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Home;