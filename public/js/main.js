var submitBtn = document.getElementById('submitbtn');
var cityname = document.getElementById('cityname');
var city_name = document.getElementById('city_name');
var temp = document.getElementById('temp');
var temp_status = document.getElementById('temp_status');
 var datahide = document.querySelector('.middle_layer');

var getInfo = async(event) => {
    
    event.preventDefault();
   
    var cityval = cityname.value;
    if(cityval == ""){
        city_name.innerHTML=`Please write the name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=dd1071165395b404b93c418c6c5bcf41`
        var response =await fetch(url);
        var data = await response.json();
        console.log(data);
        var arrData = [data];
        city_name.innerHTML = `${arrData[0].name} ,${arrData[0].sys.country}  `
        var tempKlvn = arrData[0].main.temp;
        var tempCs = tempKlvn - 273.15 ;
        temp.innerText = Math.ceil(tempCs)
        // when we have to apply css or html tag in js use below method
        // var cels = ` <p><sup>o</sup>C</p>`
        // temp.innerHTML += cels;
        temp_status.innerText = arrData[0].weather[0].main;
        datahide.classList.remove('data_hide');

    }
    catch{
        city_name.innerHTML=`Please enter city name properly`
        datahide.classList.add('data_hide');
        }
    }
}


submitBtn.addEventListener('click',getInfo)