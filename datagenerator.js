var fs = require('fs');



const productCategories = ["Women", "Men", "Kids", "Home","Electronics","Toys", "Accessories", "Books", "Beauty","Grocery"];
const ProductNames = [
    "Apathesis",
    "Apocalypso",
    "Aria Safari",
    "Arise and Shinola",
    "Aromastotle",
    "Ass Texas",
    "Attila the Humm",
    "Aurora Tori Spelling",
    "Away we golf",
    "Bali Who",
    "Basking Bingo",
    "Beauteous Maximus",
    "Bébé Boom",
    "Bella Outdoors",
    "Below the Beltway",
    "Bible Quest",
    "Blog a Thong",
    "Book Bound",
    "Book Trials",
    "Bora Bora Boar Hunt",
    "Boston Fantastic",
    "Bowels and Whistles",
    "Brand Royalty",
    "Break a Peg Leg",
    "Bring Pluto Back!",
    "Buzzplosion",
    "Cabbage Training",
    "CactiDance",
    "Call it Green",
    "Camp Grandmada",
    "Campxotica",
    "Candidate For a Day",
    "Candle Opera",
    "Candlelight Virgil",
    "Candy Candy!",
    "Centigrand",
    "Chapter Elvis",
    "Cheering Larry",
    "Chewing Guam",
    "Chillennium",
    "Chiropractic Sojourn",
    "Christmas PeaceFest ",
    "Christmas Together",
    "Circuitship",
    "CircusRodeo",
    "Citroën to the Boën",
    "Club Hell Yea",
    "Coffee Dreamtime",
    "Coffee Rodeo",
    "Coffee RoundUp",
    "Coffee Tsunami",
    "Norse Nurse",
    "Nose Curtains",
    "Nose Needles",
    "Noseballs",
    "Noslow",
    "Notecushion",
    "Notes-n-Quotes",
    "Nuclear Winter Mint",
    "Nuclear Winter Squash",
    "Nucloud",
    "Nucrete",
    "Nuetrinofast",
    "NumberCruncher",
    "NuPhoney",
    "Nurture Cream",
    "Nutri-Taco",
    "Nutritious Pirate",
    "nuWay",
    "Objective Banking",
    "Obones",
    "Occupassion",
    "OCTAPAN ",
    "Octaplex Ports",
    "Octaports",
    "Octopush",
    "Octorex",
    "OdorAll",
    "OdorEx",
    "OdorOn",
    "Off the Cufflinks",
    "OffAndOn",
    "Oh That Baby",
    "Old Butter Scotch",
    "Old Plywood (Scotch)",
    "Old World Technology",
    "Olucore",
    "Omatom",
    "OmniDog",
    "Omnigoggles",
    "On Any Line"
];
let id = 1;
let completejson = [];
var picsArr;
fs.readdir(__dirname+'/public/unsamples',(err, doc)=> {
    picsArr = doc;
    for (let i = 0; i < 100; i++) {
        testDataJSON();
    }
    fs.writeFile('myjsonfile.json', completejson, function(err) {
        if (err) throw err;
        console.log('complete');
    });
});

function testDataJSON() {
    let eventJSON = {
        id:id,
        productPrice: Math.floor(Math.random() * 1000) + 300,
        productImage: '/unsamples/'+ picsArr.pop(),
        productCategory: productCategories[Math.floor(Math.random() * productCategories.length)],
        productName: ProductNames[Math.floor(Math.random() * ProductNames.length)]
    }
    console.log(eventJSON);
    completejson =[...completejson, JSON.stringify(eventJSON)]
    id++;
}


