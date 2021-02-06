const saloon={
    name:"Lyra",
    address:{
        street: "Blvd 63",
        number: "1"
    },
    hours:{
        open:"8:00 am",
        closes: "5:00 pm"
    },
    pets:[
        {name:"Lyra,",age:"11 Weeks",breed:"Husky",gender:"Female",owner:"Nick and Yvonne",contact:"813-399-0882"},
        {name:"Luna,",age:"11 Weeks",breed:"Husky",gender:"Female",owner:"Nick and Yvonne",contact:"813-399-0882"},
        {name:"Lyla,",age:"11 Weeks",breed:"Husky",gender:"Female",owner:"Nick and Yvonne",contact:"813-399-0882"},
        {name:"Roxy,",age:"10",breed:"Hound,Beagle",gender:"Female",owner:"Yvonne",contact:"813-399-0882"},
        {name:"Shadow,",age:"10",breed:"Hound,Beagle",gender:"Female",owner:"Yvonne",contact:"813-399-0882"}
    ]
}
/*
        name, age, breed, gender, service, owners name, contact phone
*/
document.getElementById("footer-text").innerHTML=`
    <p> ${saloon.name} </p>
    <p> ${saloon.address.street}, ${saloon.address.number} </p>
    <p> It's open from ${saloon.hours.open} to ${saloon.hours.closes}</p>
`;
for(var i=0;i<5;i++){
    console.log(saloon.pets[i]);
}
for(var i=0; i<4;i++){
    console.log(saloon.name[i]);
}