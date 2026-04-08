const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Property = require('./models/Property');

dotenv.config();

const properties = [
    // Edappally
    {
        title: "Luxurious 3BHK Apartment in Edappally",
        description: "Spacious 3BHK flat near Lulu Mall with modern amenities and great connectivity.",
        price: "85 Lacs",
        location: "Near Lulu Mall",
        area: "Edappally",
        city: "Kochi",
        type: "Apartment",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
        bedrooms: "3 BHK",
        bathrooms: 3,
        sqft: "1650 sqft",
        possession: "Ready to Move",
        builder: "Sobha",
        amenities: ["Swimming Pool", "Gym", "Clubhouse", "24/7 Security"],
        rating: 4.8,
        reviews: 32,
        status: "Available",
        is_featured: true
    },
    {
        title: "Premium Villa in Kakkanad",
        description: "Independent 4BHK Villa near Infopark in a gated community.",
        price: "1.5 Cr",
        location: "Infopark Road",
        area: "Kakkanad",
        city: "Kochi",
        type: "Villa",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?w=800&q=80",
        bedrooms: "4 BHK",
        bathrooms: 4,
        sqft: "2400 sqft",
        possession: "Dec 2025",
        builder: "Asset Homes",
        amenities: ["Park", "Jogging Track", "Community Hall"],
        rating: 4.9,
        reviews: 21,
        status: "Under Construction",
        is_featured: true
    },
    // Marine Drive
    {
        title: "Waterfront Apartment in Marine Drive",
        description: "High-end 3BHK apartment with stunning views of the backup waters.",
        price: "2.5 Cr",
        location: "Marine Drive",
        area: "Marine Drive",
        city: "Kochi",
        type: "Apartment",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
        bedrooms: "3 BHK",
        bathrooms: 3,
        sqft: "2200 sqft",
        possession: "Ready to Move",
        builder: "Puravankara",
        amenities: ["Rooftop Garden", "Gym", "Covered Parking", "Sea View"],
        rating: 5.0,
        reviews: 12,
        status: "Available",
        is_featured: true
    },
    // Panampilly Nagar
    {
        title: "Elite Residence in Panampilly Nagar",
        description: "Premium 4BHK residence in the most prestigious neighborhood of Kochi.",
        price: "3.2 Cr",
        location: "Panampilly Nagar",
        area: "Panampilly Nagar",
        city: "Kochi",
        type: "Apartment",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        bedrooms: "4 BHK",
        bathrooms: 4,
        sqft: "3000 sqft",
        possession: "Immediate",
        builder: "Abad Builders",
        amenities: ["Concierge", "Infinity Pool", "Spa"],
        is_featured: true
    },
    // Fort Kochi
    {
        title: "Heritage Villa in Fort Kochi",
        description: "Beautifully restored vintage villa with modern interiors in the heart of Fort Kochi.",
        price: "2.8 Cr",
        location: "Fort Kochi",
        area: "Fort Kochi",
        city: "Kochi",
        type: "Villa",
        image: "https://images.unsplash.com/photo-1600596542815-2495db98dada?w=800&q=80",
        bedrooms: "3 BHK",
        bathrooms: 3,
        sqft: "1800 sqft",
        possession: "Immediate",
        is_featured: false
    },
    // Vyttila
    {
        title: "Affordable 2BHK in Vyttila",
        description: "Centrally located apartment near Hub, ideal for families.",
        price: "55 Lacs",
        location: "Vyttila",
        area: "Vyttila",
        city: "Kochi",
        type: "Apartment",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
        bedrooms: "2 BHK",
        bathrooms: 2,
        sqft: "1100 sqft",
        possession: "Ready to Move",
        builder: "Skyline",
        amenities: ["Water Supply", "Lift"],
        is_featured: false
    },
    // Aluva
    {
        title: "Riverfront Plot in Aluva",
        description: "Approved plot in a rapidly developing residential area near Periyar river.",
        price: "45 Lacs",
        location: "Aluva",
        area: "Aluva",
        city: "Kochi",
        type: "Plot",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        sqft: "1500 sqft",
        possession: "Immediate",
        is_featured: false
    }
];

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/homznspace')
    .then(async () => {
        console.log('✅ Connected to MongoDB...');

        // Clear existing data
        await Property.deleteMany({});
        console.log('🗑️ Existing properties cleared');

        // Insert new data
        await Property.insertMany(properties);
        console.log('🌱 Data seeded successfully (Kochi Areas)');

        process.exit();
    })
    .catch(err => {
        console.error('❌ Error seeding data:', err);
        process.exit(1);
    });
