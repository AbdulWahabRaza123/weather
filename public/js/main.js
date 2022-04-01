let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let text4 = document.getElementById('text4');
let text5 = document.getElementById('text5');
let button = document.getElementById('temp');
const getInfo=async(event)=>
{
    event.preventDefault();
    let textLat = text2.value;
    let textLon = text3.value;
    if (textLat==''||textLon=='') {
        alert("Please Enter the both latitude and longitude");
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${textLat}&lon=${textLon}&units=metric&appid=d5f9854b3d09dae9cd635631467327d2`;
            const response = await fetch(url);
            let data =await response.json();
        let arrData = [data];
        let getData = arrData[0];
            text4.value = getData.name;
            text5.value = getData.main.temp;
        } catch {
            alert("Please Enter the right latitude and longitude");
        }
    }
}
button.addEventListener('click',getInfo);