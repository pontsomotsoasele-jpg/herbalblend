import Header from "../components/Header";
import Footer from "../components/Footer";

const serviceCards = [
    {
        id: 1,
        title: "Calm & Unwind",
        description: "A soothing mix of chamomile, lavender, and lemon balm designed to ease evening stress and promote restful sleep.",
        tag: "Relaxation",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        imageAlt: "Chamomile tea in a clear cup with herbs"
    },
    {
        id: 2,
        title: "Morning Vitality",
        description: "An invigorating blend of peppermint, green tea, and ginkgo biloba to sharpen focus and elevate natural energy.",
        tag: "Energy",
        image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80",
        imageAlt: "Fresh mint green tea in a glass mug"
    },
    {
        id: 3,
        title: "Immune Shield",
        description: "Packed with elderberry, echinacea, and ginger to strengthen your daily immune response and support vital health.",
        tag: "Immunity",
        image: "https://images.unsplash.com/photo-1563822249510-096eedc833d7?auto=format&fit=crop&w=600&q=80",
        imageAlt: "Herbal tea with fresh berries and ginger"
    },
    {
        id: 4,
        title: "Digestive Balance",
        description: "A comforting blend of fennel, ginger, and peppermint formulated to settle stomach discomfort and support gut health.",
        tag: "Wellness",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
        imageAlt: "Warm ginger and mint tea poured into a glass"
    }
];

function Services() {
    return (
        <>
            <Header />

            <div className="services-page">
                <h1>Our Herbal Blends</h1>
                <p>
                    Explore our carefully crafted herbal blends, created to support your everyday wellness.
                </p>

                <div className="services-grid">
                    {serviceCards.map((card) => (
                        <div key={card.id} className="service-card">
                            <div className="card-image-wrapper">
                                <img src={card.image} alt={card.imageAlt} className="card-image" />
                                <span className="card-tag">{card.tag}</span>
                            </div>
                            <div className="card-body">
                                <h2>{card.title}</h2>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Services;