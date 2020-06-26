(function () {
        
  let dataClinics = [
   {
     id: 1,
     clinic: 'The Smiling House',
     img_clinique:'https://www.lasource.ch/sites/default/files/styles/crop_3_2/public/images/content_types/page/specialites.jpg?itok=1eShRFbt',
     city: 'Bucarest',
     country: 'Romania',
     price:[823,256],
     operation: ['dental braces','tooth whitening'],
     map_clinique:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473956.8728165655!2d-3.6422272556785296!3d40.533701196142616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb996f2c2577194c9!2sProcreaTec%20International%20Fertility%20Clinic!5e0!3m2!1sfr!2sfr!4v1593076116887!5m2!1sfr!2sfr",
     description_clinic:'Welcome to The Smiling House. ',
     disponibility:['Mai', 'September','February', 'March', 'April', 'October'],
     Language : 'English',
 },
 {
     id:2,
     clinic: 'Clinica del sol',
     img_clinique:'https://www.lasource.ch/sites/default/files/styles/crop_3_2/public/images/content_types/page/specialites.jpg?itok=1eShRFbt',
     city: 'Barcelona',
     country: 'Spain',
     price:[1995,999],
     operation: ['implant','dental braces'],
     map_clinique:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473956.8728165655!2d-3.6422272556785296!3d40.533701196142616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb996f2c2577194c9!2sProcreaTec%20International%20Fertility%20Clinic!5e0!3m2!1sfr!2sfr!4v1593076116887!5m2!1sfr!2sfr",
     description_clinic:'Welcome to Clinic del Sol. ',
     disponibility:['March', 'April', 'October', 'November', 'December'],
     Language : 'English',
 },
 {
     id:3,
     clinic: 'La Grande Boca',
     img_clinique:'https://www.lasource.ch/sites/default/files/styles/crop_3_2/public/images/content_types/page/specialites.jpg?itok=1eShRFbt',
     city: 'Barcelona',
     country: 'Spain',
     price:[2100, 1029,295],
     operation: ['implant','dental braces','tooth whitening'],
     map_clinique:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473956.8728165655!2d-3.6422272556785296!3d40.533701196142616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb996f2c2577194c9!2sProcreaTec%20International%20Fertility%20Clinic!5e0!3m2!1sfr!2sfr!4v1593076116887!5m2!1sfr!2sfr",
     description_clinic:'Welcome to Corazon del Mundo clinic. ',
     disponibility:['June', 'July', 'August', 'September'],
     Language : 'English',
 },
 {
     id:4,
     clinic: 'Helvetic Clinic',
     img_clinique:'https://www.lasource.ch/sites/default/files/styles/crop_3_2/public/images/content_types/page/specialites.jpg?itok=1eShRFbt',
     city: 'Budapest',
     country: 'Hungary',
     price:[268],
     operation: ['tooth whitening'],
     map_clinique:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473956.8728165655!2d-3.6422272556785296!3d40.533701196142616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb996f2c2577194c9!2sProcreaTec%20International%20Fertility%20Clinic!5e0!3m2!1sfr!2sfr!4v1593076116887!5m2!1sfr!2sfr",
     description_clinic:'Welcome to Helevtic Clinic. ',
     disponibility:['August', 'September','June', 'January','March'],
     Language : 'English',
 },
 {
     id:5,
     clinic: 'Teeth Clinic',
     img_clinique:'https://www.lasource.ch/sites/default/files/styles/crop_3_2/public/images/content_types/page/specialites.jpg?itok=1eShRFbt',
     city: 'Budapest',
     country: 'Hungary',
     price:[1960, 895,300],
     operation: ['implant','dental braces','tooth whitening'],
     map_clinique:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473956.8728165655!2d-3.6422272556785296!3d40.533701196142616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb996f2c2577194c9!2sProcreaTec%20International%20Fertility%20Clinic!5e0!3m2!1sfr!2sfr!4v1593076116887!5m2!1sfr!2sfr",
     description_clinic:'Welcome to Teeth Clinic. ', 
     disponibility:[ 'April', 'October', 'November'],
     Language : 'English',
   },
 ];


     let template = document.getElementById('containPractician').innerHTML,
     result = document.getElementById('containPractician'),
     attachTemplateTodataClinics;


    
attachTemplateTodataClinics = function (template, dataClinics) {
  
  let i = 0,
    len = dataClinics.length,
    fragment = "";

  function replace(obj) {
    let t
    let key
    let reg;

    for (key in obj) {
       reg = new RegExp("{" + key + "}", "ig");
       t = (t || template).replace(reg, obj[key]);       
    }

    return t;
  }

  for (; i < len; i++) {
    fragment += replace(dataClinics[i]);
  }

  return fragment;
};

result.innerHTML = attachTemplateTodataClinics(template, dataClinics);


let hotel = [{
 id: 1,
 name: 'La Cruz',
 city: 'Budapest',
 country: 'Hungary',
 off_season: ['June', 'July', 'August', 'September'],
 high_season: ['January', 'February', 'March', 'April', 'October', 'November', 'December'],
 price_off: 244,
 price_high: 476,
 disponibility:['June', 'July', 'August', 'September']
},
{
 id: 2,
 name: 'Gran Hotel',
 city: 'Barcelona',
 country: 'Espagne',
 off_season: ['January', 'February', 'October', 'November', 'December'],
 high_season: ['March', 'April', 'Mai', 'June', 'July', 'August', 'September'],
 price_off: 390,
 price_high: 660,
 disponibility:['March', 'April', 'Mai', 'June', 'July', 'August', 'September']
},
{
 id: 3,
 name: 'Beach Club',
 city: 'Bucarest',
 country: 'Romania',
 off_season: ['January', 'February', 'March', 'April', 'October', 'November', 'December'],
 high_season: ['Mai', 'June', 'July', 'August', 'September'],
 price_off: 377,
 price_high: 942,
 disponibility:['July', 'August', 'March', 'April', 'October', 'November', 'December']
},
{
 id: 4,
 name: 'Grandiose',
 city: 'Bucarest',
 country: 'Romania',
 off_season: ['January', 'February', 'March', 'April', 'October', 'November', 'December'],
 high_season: ['Mai', 'June', 'July', 'August', 'September'],
 price_off: 2528,
 price_high: 4050,
 disponibility:['Mai', 'September','February', 'March', 'April', 'October', 'November', 'December']
},
]


function dispo(a,b,month)
 {
         for(let k=0; k<hotel[a].disponibility.length; k++)
             {
                 for(let l=0; l<dataClinics[b].disponibility.length; l++)
                 {
                     if(hotel[a].disponibility[k]===dataClinics[b].disponibility[l])
                     {
                         console.log(hotel[a].disponibility[k]);
                     }
                 }
             }
 }

 function testOff(season) {

   for (i = 0; i < hotel.length; i++) {
       if (hotel[i].off_season.includes(season)) {
           console.log(`Hotel ${hotel[i].name}`);
       } else {
           console.log('non');
       }
   }
}

function testHigh(season) {

   for (let i = 0; i < hotel.length; i++) {
       if (hotel[i].high_season.includes(season)) {
           console.log(`Hotel ${hotel[i].name}`);
       } else {
           console.log('non');
       }
   }
}

function dispoMonth(month)
{
    for(let i=0;i<hotel.length;i++)
    {
        for(let j=0;j<clinic.length; j++)
        {   let place1 =hotel[i].disponibility.indexOf(month);
            let place2 =clinic[j].disponibility.indexOf(month);

                    if(place1!==-1 && place2!==-1){
                        
                    if(hotel[i].disponibility[place1]===clinic[j].disponibility[place2]&& hotel[i].city===clinic[j].city)
                    {
                        console.log(`The hotel ${hotel[i].name} and the clinic ${clinic[j].name} are available for this period ${hotel[i].disponibility[place1]}`);
                    }

                }}
            }
        }

    function dispoThreeMonth()
        {
            dispoMonth('July');
            dispoMonth('August');
            dispoMonth('September');
        }
    
    function dispoOther()
    {
        dispoMonth('October');
        dispoMonth('November');
        dispoMonth('December');
    }







} // Fin fonction
 )();  // Fin regExp //

 // Modal //

 const openModal = (modalId) => {
   document.getElementById("modalId");
   modalId.style.display = "block";
 }
 
 const closeModal = (modalId) => {
   document.getElementById("modalId");
   modalId.style.display = "none";
 }