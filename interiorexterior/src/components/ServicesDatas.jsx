import InteriorHeadingImg from "../assets/interiorimage1.jpg";
import InteriorBottomImg from "../assets/exteriorimage7.jpg";
import ExteriorHeadingImg from '../assets/exteriorimage1.jpg'
import ExteriorBottomImg from '../assets/exteriorimage2.jpg'
import WallProffingHeadingImg from '../assets/wall_proffing1.jpg'
import WallProffingBottomImg from '../assets/wall_proffing1.jpg'
import WoodPolishingHeadingImg from '../assets/woodProffing1.jpg'
import WoodPolishingBottomImg from '../assets/woodProffing2.jpg'
import CommercialHeadingImg from '../assets/wall_proffing7.jpg'
import CommercialBottomImg from '../assets/wall_proffing8.jpg'

const servicesData = {
    interiordesign: {
        headingImg: InteriorHeadingImg,
        heading: "Interior Design – Full Professional Content",
        description: "Create a Space That Truly Feels Like Home",
        headPara: "Your interiors should reflect your lifestyle, your personality, and the story you want your home or workspace to tell. At Interior and Exterior, our interior design services focus on creating spaces that are beautiful, functional, and thoughtfully planned.",
        ourApproach: "Our Approach",
        ourApproachPara: "We start by understanding how you live, what you love, and what inspires you. Whether you’re dreaming of a modern minimalist look, a warm and cozy ambience, or a luxurious designer finish, we bring your vision to life—down to the smallest detail.",
        whatWeOffer: [
            'Personalized colour and theme planning',
            'Furniture layout & space optimization',
            'Decorative finishes and textures',
            'Mood lighting design',
            'Décor styling & final setup',
        ],
        standOut: "Why We Stand Out",
        standOutPara: "Every design we create is tailored, practical, and built to last. We blend creativity with technical expertise to ensure your space not only looks beautiful, but also feels comfortable and works for your daily needs.",
        bottomImg: InteriorBottomImg,
    },

    exteriordesign: {
        headingImg: ExteriorHeadingImg,
        heading: "Exterior Design – Full Professional Content",
        description: "Make a Lasting First Impression",
        headPara: "Your building’s exterior is the first thing people notice. A well-designed exterior not only boosts visual appeal but also enhances the overall value of your property. At Interior and Exterior, we specialize in exterior design that combines durability, elegance, and modern aesthetics.",
        ourApproach: "Our Expertise Includes",
        ourApproachPara: "We deliver complete exterior transformations using premium materials and expert techniques that ensure long-lasting beauty and protection.",
        whatWeOffer: [
            'Exterior colour consultancy',
            'Weatherproof & fade-resistant painting',
            'Surface cleaning, prep & restoration',
            'Premium long-life coatings',
            'Design elements that elevate architecture',
        ],
        standOut: "Why Clients Choose Us",
        standOutPara: "We use high-quality products that stand strong against sun, rain, and climate wear. Our goal is to make your property look fresh, premium, and welcoming—year after year.",
        bottomImg: ExteriorBottomImg,
    },

    waterproofing: {
        headingImg: WallProffingHeadingImg,
        heading: "Waterproofing – Full Professional Content",
        description: "Protect Your Property from Water Damage",
        headPara: "Water leakage and damp walls can silently damage your home’s structure and hygiene. Our professional waterproofing services are designed to protect your property from the inside out, ensuring a dry, safe, and long-lasting environment.",
        ourApproach: "Our Waterproofing Solutions",
        ourApproachPara: "We provide end-to-end waterproofing using advanced methods and trusted materials for complete protection.",
        whatWeOffer: [
            'Terrace and roof waterproofing',
            'Bathroom & washroom leakage treatment',
            'Wall dampness & seepage repair',
            'Basement waterproofing',
            'Crack filling, sealing & chemical coating',
        ],
        standOut: "Our Promise",
        standOutPara: "We use tested techniques and industry-leading materials that provide long-term protection. Whether it’s a small seepage issue or a major leakage concern, our experts ensure a complete and reliable solution.",
        bottomImg: WallProffingBottomImg,
    },

    woodpolishing: {
        headingImg: WoodPolishingHeadingImg,
        heading: "Wood Polishing – Full Professional Content",
        description: "Bring Warmth and Elegance to Your Interiors",
        headPara: "Wood adds a charm that no other material can match. Our wood polishing services are crafted to enhance your interiors with detail, creativity, and fine craftsmanship. From classic to contemporary styles, we design wooden features that elevate your space beautifully.",
        ourApproach: "Our Wood Polishing Services",
        ourApproachPara: "We combine traditional craftsmanship with modern design to create stunning wooden elements tailored to your taste.",
        whatWeOffer: [
            'Designer wall paneling',
            'Door & window profiling',
            'Custom trims, borders & moldings',
            'Elegant wooden textures & patterns',
            'Finishing, polishing & protective coating',
        ],
        standOut: "Why Our Work Stands Out",
        standOutPara: "We combine craftsmanship with premium materials to create pieces that are both durable and visually stunning. Every design is handcrafted with precision to add warmth, luxury, and character to your home or commercial space.",
        bottomImg: WoodPolishingBottomImg,
    },

    commercialpainting: {
        headingImg: CommercialHeadingImg,
        heading: "Commercial Painting – Full Professional Content",
        description: "Professional Painting for Modern Workspaces",
        headPara: "Your commercial space reflects your brand. Our commercial painting services help you create a professional, clean, and inspiring environment for your employees and customers. From small offices to large industrial buildings, we handle projects of every size with precision and care.",
        ourApproach: "What We Deliver",
        ourApproachPara: "We ensure flawless execution with minimal disruption, using high-quality materials suited for high-traffic environments.",
        whatWeOffer: [
            'Interior & exterior commercial painting',
            'Brand-based color themes & design',
            'High-durability industrial coatings',
            'Fast, neat & disruption-free execution',
            'Safety-standard procedures & quality checks',
        ],
        standOut: "Why Businesses Trust Us",
        standOutPara: "We understand the importance of timelines, cleanliness, and professional finishing. Our trained team ensures smooth execution with minimal downtime so your operations continue without interruption.",
        bottomImg: CommercialBottomImg,
    },
};

export default servicesData;