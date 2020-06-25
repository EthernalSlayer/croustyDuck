let hotel = [{
        id: 1,
        name: 'La Cruz',
        city: 'Budapest',
        country: 'Hungary',
        off_season: ['June', 'July', 'August', 'September'],
        high_season: ['January', 'February', 'March', 'April', 'October', 'November', 'December'],
        price_off: 244,
        price_high: 476
    },
    {
        id: 2,
        name: 'Gran Hotel',
        city: 'Barcelona',
        country: 'Espagne',
        off_season: ['January', 'February', 'October', 'November', 'December'],
        high_season: ['March', 'April', 'Mai', 'June', 'July', 'August', 'September'],
        price_off: 390,
        price_high: 660
    },
    {
        id: 3,
        name: 'Beach Club',
        city: 'Bucarest',
        country: 'Romania',
        off_season: ['January', 'February', 'March', 'April', 'October', 'November', 'December'],
        high_season: ['Mai', 'June', 'July', 'August', 'September'],
        price_off: 377,
        price_high: 942
    },
    {
        id: 4,
        name: 'Grandiose',
        city: 'Bucarest',
        country: 'Romania',
        off_season: ['January', 'February', 'March', 'April', 'October', 'November', 'December'],
        high_season: ['Mai', 'June', 'July', 'August', 'September'],
        price_off: 2528,
        price_high: 4050
    },
]
let clinic = [{
        id: 1,
        name: 'The Smiling House',
        city: 'Bucarest',
        country: 'Romania',
        price:[823,256],
        operation: ['dental braces','tooth whitening'],
    },
    {
        id:2,
        name: 'Clinica del sol',
        city: 'Barcelona',
        country: 'Spain',
        price:[1995,999],
        operation: ['implant','dental braces'],
    },
    {
        id:3,
        name: 'La Grande Boca',
        city: 'Barcelona',
        country: 'Spain',
        price:[2100, 1029,295],
        operation: ['implant','dental braces','tooth whitening'],
    },
    {
        id:4,
        name: 'Helvetic Clinic',
        city: 'Budapest',
        country: 'Hungary',
        price:[268],
        operation: ['tooth whitening'],
    },
    {
        id:5,
        name: 'Teeth Clinic',
        city: 'Budapest',
        country: 'Hungary',
        price:[1960, 895,300],
        operation: ['implant','dental braces','tooth whitening'],
    },
]

function testOff(arbre) {

    for (i = 0; i < hotel.length; i++) {
        if (hotel[i].off_season.includes(arbre)) {
            console.log(`Hotel ${hotel[i].name}`);
        } else {
            console.log('non');
        }
    }
}

function testHigh(arbre) {

    for (i = 0; i < hotel.length; i++) {
        if (hotel[i].high_season.includes(arbre)) {
            console.log(`Hotel ${hotel[i].name}`);
        } else {
            console.log('non');
        }
    }
}
testOff('November');