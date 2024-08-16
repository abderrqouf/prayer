
let params = {
    "country":"DZ",
    "city":"Touggourt"
}

axios.get('http://api.aladhan.com/v1/timingsByCity', {
    params:params
  })
  .then(function (response) {
    const timings = response.data.data.timings
    document.getElementById("fajr-time").innerHTML = timings.Fajr
    document.getElementById("sunrise-time").innerHTML = timings.Sunrise
    document.getElementById("dhurh-time").innerHTML = timings.Dhuhr
    document.getElementById("asr-time").innerHTML = timings.Asr
    document.getElementById("sunset-time").innerHTML = timings.Sunset
    document.getElementById("isha-time").innerHTML = timings.Isha

    const readableDate = response.data.data.date.readable
    const weekDay = response.data.data.date.hijri.weekday.ar
    const numAr = response.data.data.date.hijri.month.number
    const  monAr= response.data.data.date.hijri.month.ar
    const year = response.data.data.date.hijri.year

    const data = weekDay + " " + readableDate 
    const dataAr = numAr+ " " + monAr + " " + year

    console.log(dataAr)

    document.getElementById("data").innerHTML = data
    document.getElementById("data-ar").innerHTML = dataAr
    
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });