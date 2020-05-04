// Wait until DOM is ready to register callbacks
 document.addEventListener("DOMContentLoaded", function(){
    //Do this when DOM is loaded
    //Set event listeners/handlers for buttons
    document.getElementById('info').onclick = doinfo;
    document.getElementById('favorite').onclick = favorite;
  });

 var doinfo = function(){
    console.log("REQUESTING COUNTRY");
    //Performs api call
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var country = JSON.parse(this.responseText);
            console.log(country);
            showinfo(country); //Generates content
        }
        else
        { 
            console.log("this.readyState=",this.readyState);
            console.log("this.status=",this.status);
        }
    };
    var data = "https://corona.lmao.ninja/v2/countries/" + document.getElementById("country").value;
    console.log("requesting:", data);
    xmlhttp.open("GET", data, true)
    xmlhttp.send();
 }

 var favorite = function(country){
    var adding = document.getElementById("country").value;
    
    let workspace = document.getElementById("favcountries");
    workspace.innerHTML = "";

    var head = document.createElement('h2');
    var text = document.createTextNode(adding);
    head.appendChild(text);
    workspace.appendChild(head);
}
 
 //Organizes the contents from the api call into tables and displays them in the content div
 function showinfo(country) { 
    let workspace = document.getElementById("results");
    workspace.innerHTML = "";

    var header = document.createElement('h1'); 
    var textnode = document.createTextNode(country.country);
    header.appendChild(textnode);
    workspace.appendChild(header);
    
    
     
    var overall = new CanvasJS.Chart("overall", { //Thank you CanvasJS!
        animationEnabled: true,
        theme: "light2", 
        title:{
            text: "Overall Stats for " + country.country
        },
        data: [{        
            type: "column",  
            dataPoints: [
                { y: country.tests, label: "Tests Administered" },
                { y: country.cases, label: "Confirmed Cases" },
                { y: country.active,  label: "Active Cases" },
                { y: country.recovered,  label: "Recovered Cases" },
                { y: country.deaths,  label: "Deaths" },
            ]
        }]
    });
    overall.render();

     
    var today = new CanvasJS.Chart("today", { //Thank you CanvasJS!
        animationEnabled: true,
        theme: "light2",
        title:{
            text: country.country + " Stats for Today"
        },
        data: [{        
            type: "column",  
            dataPoints: [      
                { y: country.todayCases, label: "Today's Cases" },
                { y: country.todayDeaths,  label: "Today's Deaths" }
            ]
        }]
    });
    today.render();
     
 }
