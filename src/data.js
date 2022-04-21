
import Image12 from "./img/image12.png"
import WeddingPhotography from "./img/wedding-photography.png"
import MountainBike from "./img/mountain-bike 1.png"
import Indonesia from "./img/indonesia.jpg"
import Tailand from "./img/tailand.jpg"
import Vietnam from "./img/vietnam.jpg"
import Australia from "./img/australia.jpg"



export default  [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: `${Image12}`,
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 3,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: `${WeddingPhotography}`,
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: `${MountainBike}`,
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 5,
    },

    {
        id: 4,
        title: "Campingtour im Dschungel auf Bali",
        description: "Dies ist eine der wertvollsten Erfahrungen, um der Natur näher zu kommen, mit Balinesen zu interagieren und Anzüge für Alleinreisende, Paare, Freunde und Familie zu nutzen.",
        price: 68,
        coverImg: `${Indonesia}`,
        stats: {
            rating: 5,
            reviewCount: 202
        },
        location: "Indonesia",
        openSpots: 4,
    },
    {
        id: 5,
        title: "Entdecke das thailändische Landleben",
        description: "Wenn du ankommst, checken wir dich in unserem Bauernhaus ein, begrüßen dich mit frischem Kokosnussaft in einzigartigen Aromen und Früchten und wechseln dann dein Kleid in ein traditionelles Bauerntuch.",
        price: 138,
        coverImg: `${Tailand}`,
        stats: {
            rating: 4.96,
            reviewCount: 124
        },
        location: "Thailand",
        openSpots: 6,
    },

    {
        id: 6,
        title: "Entdecke die majestätische Lan Ha Bay",
        description: "We will do trekking and hiking in the afternoon to see Catba national park.If we have time we can go up to the most beautiful peak in Catba island to see Lan Ha bay, Halong bay and catba national park.",
        price: 138,
        coverImg: `${Vietnam}`,
        stats: {
            rating: 4.93,
            reviewCount:56
        },
        location: "Vietnam",
        openSpots: 0,
    },
    {
        id: 7,
        title: "Two day bush Survival Adventure",
        description: "This overnight course is for people who want to feel confident when exploring wilderness regions.It will teach you how to avoid embarrassing, or even life-threatening situations.",
        price: 410,
        coverImg: `${Australia}`,
        stats: {
            rating: 4.95,
            reviewCount:52
        },
        location: "Australia",
        openSpots: 31,
    }





]