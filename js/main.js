(function(jq){
    var obj = {
        lon:null,
        lat:null,
        key:'',
        locationData:null,
        currentWeather:null,
        forCastData:null,
        airPolData:null
       
    };
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            obj.lon = parseInt(position.coords.longitude);
            obj.lat =  parseInt(position.coords.latitude);
console.log(obj);
            jq.ajax({// status
                url:`http://ipinfo.io/?token=87d575059b114f`,
                method:'GET',
                dataType:'json',
                success:function(data){
                    obj.locationData = data;
                    jq.ajax({// current weather
                        method:'GET',
                        url: "http://api.openweathermap.org/data/2.5/weather",
                        dataType:'json',
                        data:{
                                q:data.city.toLowerCase(),
                                appid:obj.key
                            },
                        success:function(data){
                            obj.currentWeather = data;
                            jq.ajax({// forcast
                                url:`http://api.openweathermap.org/data/2.5/forecast?lat=${obj.lat}&lon=${obj.lon}&appid=${obj.key}`,
                                method:'GET',
                                dataType:'json',
                                success:function(data){
                                    obj.forCastData = data;
                                    jq.ajax({// air polution
                                        url:`http://api.openweathermap.org/pollution/v1/co/${obj.lat},${obj.lon}/current.json?appid=${obj.key}`,
                                       method:'GET',
                                       dataType:'json',
                                       success:function(data){
                                           obj.airPolData = data;
                                           console.log(obj);
                                           var forEle = '';
                                           for(var i=0; i < obj.forCastData.list.length;i++){
                                            forEle +='<li>';
                                            forEle +=`<p><span class="itm">Time</span>:<span>${obj.forCastData.list[i].dt_txt.split(' ').join('<span class="red">')}</span></span></p>`;
                                            forEle +=`<p><span class="itm">Temp</span>:<span>${obj.forCastData.list[i].main.temp_min}-${obj.forCastData.list[i].main.temp_max}</span></p>`;
                                            forEle +=`<p><span class="itm">Humidity</span>:<span>${obj.forCastData.list[i].main.humidity}</span></p>`;
                                            forEle +=`<p><span class="itm">Wind</span>:<span>${obj.forCastData.list[i].wind.speed} mph</span></p>`;
                                            forEle +=`<p><span class="itm">Weather</span>:<span>${obj.forCastData.list[i].weather[0].description}</span></p>`;
                                            forEle +='</li>';
                                           }
                                           
                                           jq('#forc ul').empty().append(forEle);
                                           var polEle = '';
                                           for(var i=0; i < obj.airPolData.data.length;i++){
                                            polEle +='<li>';
                                            polEle +=`<p><span class="itm">Precision</span>:<span>${obj.airPolData.data[i].precision}</span></p>`;
                                            polEle +=`<p><span class="itm">Pressure</span>:<span>${obj.airPolData.data[i].pressure}</span></p>`;
                                            polEle +=`<p><span class="itm">Value</span>:<span>${(obj.airPolData.data[i].value * 1000000).toFixed(6)} ppm</span></p>`;
                                            polEle +='</li>';
                                           }
                                           jq('table tr td span.temp').empty().append(9/5 * (parseInt(obj.currentWeather.main.temp_max) - 273) + 32 + ' F');
                                           jq('table tr td span.des').empty().append(obj.currentWeather.weather[0].description);
                                          
                                           jq('table tr td span.add').empty().append(`${obj.locationData.city}, ${obj.locationData.region}, ${obj.locationData.country}`);
                                           jq('table tr td span.loc').empty().append(`${obj.locationData.loc}`);
                                           jq('#pol ul').empty().append(polEle);
                                       },
                                       error:function(data){

                                       }
                               
                                   });
                                },
                                error:function(data){

                                }
                        
                            });
                        },
                        error:function(data){
                           
                        }
                    });
                },
                error:function(data){

                }
        
            });// info end

           
        });// navigator end
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }


    // jq.ajax({
    //     url:`http://ipinfo.io/?token=87d575059b114f`,
    //    method:'GET',
    //    dataType:'json',
    //    success:function(data){
    //        console.log(data);
    //    }

//    });
    // var obj = {
    //     city:,
    //     region:'',
        
    // }
//     var dat = new Date().toISOString();
// console.log(dat);
//     var key = 'a879ed2f135e549dba0785c8f8b3b0ba';
//     console.log(navigator.geolocation.getCurrentPosition(function(position){
//         var lon = parseInt(position.coords.longitude);
//         var lat =  parseInt(position.coords.latitude);
//         console.log( lat);
//         jq.ajax({
//              url:`http://api.openweathermap.org/pollution/v1/co/${lat},${lon}/current.json?appid=${key}`,
//             // url:`http://api.openweathermap.org/pollution/v1/co/0.0,10.0/2016-03-01Z.json?appid=${key}`,
//             method:'GET',
//             success:function(data){
//                 console.log(data);
//             }
    
//         });
        // $.getJSON('http://ipinfo.io', function(data){
        //     console.log(data);
        // });

    //     jq.ajax({
    //         url:`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`,
    //        // url:`http://api.openweathermap.org/pollution/v1/co/0.0,10.0/2016-03-01Z.json?appid=${key}`,
    //        method:'GET',
    //        dataType:'json',
    //        success:function(data){
              
    //            console.log(data);
    //        }
   
    //    });
    //    $.getJSON('http://ipinfo.io', function(data){
    //        console.log(data);
    //    });
        
    // }));
    
})(jQuery.noConflict())