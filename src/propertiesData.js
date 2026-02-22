import Prptes1 from './img/prptes/prptes1.png'
import Prptes2 from './img/prptes/prptes2.png'
import Prptes3 from './img/prptes/prptes3.png'
import Prptes4 from './img/prptes/prptes4.png'
import Prptes5 from './img/prptes/prptes5.png'
import Prptes6 from './img/prptes/prptes6.png'

export const propertiesData = [
    {
        id: 1,
        title: "Modern Apartment",
        location: "Mungo Park Estate",
        price: 8000,
        type: "apartment",
        transaction: "rent",
        img: Prptes1,
        featured: true,
        stats: { beds: 3, baths: 2, sqft: 1200 }
    },
    {
        id: 2,
        title: "Cozy Studio",
        location: "Sunset Boulevard",
        price: 10000,
        type: "apartment",
        transaction: "rent",
        img: Prptes2,
        featured: true,
        stats: { beds: 1, baths: 1, sqft: 500 }
    },
    {
        id: 3,
        title: "Family Home",
        location: "Greenwich Village",
        price: 25000,
        type: "house",
        transaction: "rent",
        img: Prptes3,
        featured: false,
        stats: { beds: 4, baths: 3, sqft: 2500 }
    },
    {
        id: 4,
        title: "Ocean View Villa",
        location: "Malibu Beach",
        price: 650000,
        type: "house",
        transaction: "buy",
        img: Prptes4,
        featured: true,
        stats: { beds: 5, baths: 4, sqft: 4000 }
    },
    {
        id: 5,
        title: "Urban Loft",
        location: "Downtown Manhattan",
        price: 1800000,
        type: "apartment",
        transaction: "buy",
        img: Prptes5,
        featured: true,
        stats: { beds: 2, baths: 2, sqft: 1500 }
    },
    {
        id: 6,
        title: "Suburban Mansion",
        location: "Beverly Hills",
        price: 700000,
        type: "house",
        transaction: "buy",
        img: Prptes6,
        featured: false,
        stats: { beds: 6, baths: 5, sqft: 6000 }
    }
];
