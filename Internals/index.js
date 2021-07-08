const inputRoute = document.getElementById("input");
const submit = document.getElementById("submit");
const result = document.getElementById('sresult');
let routes = [];

submit.addEventListener('click',()=>{
    let location = inputRoute.value;
    let match=[]
    routes.forEach((route)=>{
        route.places.forEach((place)=>{
            if(place == location){
                match.push({rno:route.r_no,driverName:route.driver,contactNo:route.contact});
            }
        });
    });
    if(match.length == 0){
        result.innerText="Sorry! No buses available for that area";
    }else{
        text = `Buses going to ${location}\n `;
        match.forEach((matched_data)=>{
            text += ` Bus no: ${matched_data.rno} contact driver ${matched_data.driverName} ph:${matched_data.contactNo}\n`;
        })
        result.innerText=text; 
    }
});

//Code for adding routes

const rno = document.getElementById('add-route-no');
const driver = document.getElementById('add-driver-name');
const phoneNum = document.getElementById('add-driver-no');
const newVia = document.getElementById('add-route-via');
let via = [];
const addNewRoute = document.getElementById('submit-route-data');
const addNewVia = document.getElementById('submit-via');

addNewRoute.addEventListener('click', () =>{
    let newRoute = {
        r_no: rno.value,
        places: via,
        driver: driver.value,
        contact: phoneNum.value
    };

    routes.push(newRoute);
    console.log(newRoute);
    via = [];
    rno.value = "";
    driver.value = "";
    phoneNum.value = "";

});

addNewVia.addEventListener('click', () =>{
    via.push(newVia.value);
    newVia.value = "";
    
})