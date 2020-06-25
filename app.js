(function () {
        
     let practicians = [
        {
            id:1,
            clinic:'Corazon del Mundo',
            city:'Asuncion',
            country:'Paraguay',
            continent:'Latina America',
            img_clinique:'https://www.lasource.ch/sites/default/files/styles/crop_3_2/public/images/content_types/page/specialites.jpg?itok=1eShRFbt',
            map_clinique:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473956.8728165655!2d-3.6422272556785296!3d40.533701196142616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb996f2c2577194c9!2sProcreaTec%20International%20Fertility%20Clinic!5e0!3m2!1sfr!2sfr!4v1593076116887!5m2!1sfr!2sfr",
            name_practician:'Alyson',
            img_practician:'',
            speciality_practician:'dentist',
            operations:['repair broken smile'],
            description_clinic:'Welcome to Corazon del Mundo clinic. ',
            package:[''],
        },
        {
            id:2,
            clinic:'Abidjan Center',
            city:'Abidjan',
            country:'Ivory Coast',
            continent:'Africa',
            img_clinique:'https://www.lasource.ch/sites/default/files/styles/crop_3_2/public/images/content_types/page/specialites.jpg?itok=1eShRFbt',
            map_clinique:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473956.8728165655!2d-3.6422272556785296!3d40.533701196142616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb996f2c2577194c9!2sProcreaTec%20International%20Fertility%20Clinic!5e0!3m2!1sfr!2sfr!4v1593076116887!5m2!1sfr!2sfr",
            name_practician:'Alexandra',
            img_practician:'',
            speciality_practician:'dentist',
            operations:[''],
            description_clinic:'Abidjan Center is the most famous medical center in Africa.',
            package:[''],
        },
        {
            id:3,
            clinic:'Sun Clinic',
            city:'London',
            country:'England',
            continent:'Europe',
            img_clinique:'https://www.lasource.ch/sites/default/files/styles/crop_3_2/public/images/content_types/page/specialites.jpg?itok=1eShRFbt',
            map_clinique:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473956.8728165655!2d-3.6422272556785296!3d40.533701196142616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb996f2c2577194c9!2sProcreaTec%20International%20Fertility%20Clinic!5e0!3m2!1sfr!2sfr!4v1593076116887!5m2!1sfr!2sfr",
            name_practician:'Ismael',
            img_practician:'',
            speciality_practician:'Dental Surgery',
            operations:['Dental'],
            description_clinic:'Every smile is awesome',
            package:[''],
        },
        {
            id:4,
            clinic:'The smiling clinic',
            city:'Pataya',
            country:'Thailand',
            continent:'Asia',
            img_clinique:'https://www.lasource.ch/sites/default/files/styles/crop_3_2/public/images/content_types/page/specialites.jpg?itok=1eShRFbt',
            map_clinique:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473956.8728165655!2d-3.6422272556785296!3d40.533701196142616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb996f2c2577194c9!2sProcreaTec%20International%20Fertility%20Clinic!5e0!3m2!1sfr!2sfr!4v1593076116887!5m2!1sfr!2sfr",
            name_practician:'Guillaume',
            img_practician:'',
            speciality_practician:'Dental surgery',
            operations:['Dental surgery'],
            description_clinic:'Smile big',
            package:[''],
        },
        {
            id:5,
            clinic:'Smile HQ',
            city:'Melbourn',
            country:'Australia',
            continent:'Oceania',
            img_clinique:'https://www.lasource.ch/sites/default/files/styles/crop_3_2/public/images/content_types/page/specialites.jpg?itok=1eShRFbt',
            map_clinique:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473956.8728165655!2d-3.6422272556785296!3d40.533701196142616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb996f2c2577194c9!2sProcreaTec%20International%20Fertility%20Clinic!5e0!3m2!1sfr!2sfr!4v1593076116887!5m2!1sfr!2sfr",
            name_practician:'Trad',
            img_practician:'',
            speciality_practician:'Dental surgery',
            operations:[''],
            description_clinic:"Brighten life with a smile",
            package:[''],
        }
    
    ];
        
  
     let template = document.getElementById('containPractician').innerHTML,
     result = document.getElementById('containPractician'),
     attachTemplateTopracticians;
       
   attachTemplateTopracticians = function (template, practicians) {
     
     let i = 0,
       len = practicians.length,
       fragment = "";
 
     function replace(obj) {
       let t, key, reg;
 
       for (key in obj) {
         reg = new RegExp("{" + key + "}", "ig");
         t = (t || template).replace(reg, obj[key]);
       }
 
       return t;
     }
 
     for (; i < len; i++) {
       fragment += replace(practicians[i]);
     }
 
     return fragment;
   };

   result.innerHTML = attachTemplateTopracticians(template, practicians);
        
}


    
    
    )();

    const openModal = (modalId) => {
      document.getElementById("modalId");
      modalId.style.display = "block";
    }
    
    const closeModal = (modalId) => {
      document.getElementById("modalId");
      modalId.style.display = "none";
    }
