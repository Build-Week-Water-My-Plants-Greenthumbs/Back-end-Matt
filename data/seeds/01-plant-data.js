const plants = [{
        name: "Peperomia Rosso",
        nickname: "Rosalia",
        plantId: 1,
        species: "Peperomia caperata rosso",
        light: "direct",
        image: "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
        frequency: 2,
        description: "Rosalia is a stunner with glossy green leaves accompanied by bright red undersplantIdes. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut."
    },
    {
        name: "String of Dolphins",
        nickname: "Flipper",
        plantId: 2,
        species: "Senecio peregrinus",
        light: "direct",
        image: "https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_DOLPHINS-1_800x.png?v=1587613674",
        frequency: 2,
        description: "Flipper's trailing stems are full of glossy succulent leaves, reminiscent to a pod of breaching dolphins. Flipper hails from South Africa, so he thrives in warm environments with lots of sun. This dolphin doesn't need too much water to thrive, making him low maintenance and easy to love."
    },
    {
        name: "Snake Plant",
        nickname: "Severus",
        plantId: 3,
        species: "Sansevieria zeylanica",
        light: "direct",
        image: "https://cdn.shopify.com/s/files/1/2781/9558/products/6__SANSEVIERIA_ZEYLANICA-1_800x.png?v=1587146468",
        frequency: 2,
        description: "One of the most popular and hardy of houseplants, he's virtually indestructible and adaptable to almost any condition. Whether you throw full, direct sunlight at him or shove him in the low-light corner of your apartment, he'll grow. And to top it off, he'll go weeks without water if he must."
    },
    {
        name: "ZZ Plant",
        nickname: "Dusty Gibbons",
        plantId: 4,
        species: "Zamioculcas zamiifolia",
        light: "direct",
        image: "https://cdn.shopify.com/s/files/1/2781/9558/products/6__ZZ-1_800x.png?v=1587411408",
        frequency: 2,
        description: "He's able to go without water for weeks on end and can survive in almost any light condition. As wildly successful as he is, he stays true to his roots and can often be seen basking in the streets of Brooklyn reminiscing about the good ole' days over at Plant-A-Fella Records."
    },
    {
        name: "Jade Plant",
        nickname: "Jade",
        plantId: 5,
        species: "Crassula ovata",
        light: "direct",
        image: "https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_JADE-1_800x.png?v=1587153094",
        frequency: 2,
        description: "Originally from South Africa, Jade loves sun-drenched beaches, the occasional surf, and sandy soils. Too much water too often doesn't sit well with her, so maybe offer her a beer? (Please don't give your plants beer)."
    },
    {
        name: "Rabbit Foot Fern",
        nickname: "Fortuna",
        plantId: 6,
        species: "Davallia fejeensis",
        light: "indirect",
        image: "https://cdn.shopify.com/s/files/1/2781/9558/products/FERN_RABBITSFOOT-1_800x.png?v=1587152433",
        frequency: 4,
        description: "Fortuna is a beautiful, resilient fern with furry rhizomes that resemble that of a rabbit’s foot. If luck hasn't been on your splantIde when raising plants, Fortuna may be the one to finally break that streak."
    },
    {
        name: "Peace Lily",
        nickname: "Lilian",
        plantId: 7,
        species: "Spathiphyllum wallisii",
        light: "low",
        image: "https://cdn.shopify.com/s/files/1/2781/9558/products/6__SPATH_PEACELILY-1_800x.png?v=1587653193",
        frequency: 6,
        description: "Don't let the 'peace' part fool you, she's here to grab your attention by the horns with her lush leaves, pearly white blooms, and air filtering prowess. She might need more attention than others, but like they say, nothing good comes easy."
    },
    {
        name: "Staghorn Fern",
        nickname: "Fernando",
        plantId: 8,
        species: "Platycerium bifurcatum",
        light: "indirect",
        image: "https://cdn.shopify.com/s/files/1/2781/9558/products/FERN_STAGHORN-11_800x.png?v=1587427931",
        frequency: 2,
        description: "There are dozens of species of staghorn ferns, and until recently, they were quite rare. Now though--thanks to Fernando's species native to Australia, Platycerium bifurcatum, that is relatively easy to care for and propagate--they’re increasingly popular house plants. "
    }
]

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('plants').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('plants').insert(plants)
        });
};