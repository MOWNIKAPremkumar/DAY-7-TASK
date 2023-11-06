//a.Get all the countries from the Asia continent /region using the Filter function

var request= new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){ 
var result=JSON.parse(this.response);
// console.log(result);
var final= result.filter((ele)=>ele.region==="Asia")
console.log(final);
}

//b.Get all the countries with a population of less than 2 lakhs using Filter function

var request= new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){ 
var res=JSON.parse(this.response);
//console.log(result);
var fin= res.filter((ele)=>ele.population<200000)
var f= fin.map((ele=>console.log(ele.name.common)))
}

// c.//Print the following details name, capital, flag using forEach function.

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    //console.log(countryData);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
        console.log(`
        country name:${element.name.common},
        capital:${element.capital},
        flag:${element.flag}`);
    })}

//d.Print the total population of countries using reduce function

var request=new XMLHttpRequest();
    request.open('GET','https://restcountries.com/v3.1/all');
    request.send();
    request.onload=function (){
        var countryData=JSON.parse(this.response);
        //console.log(countryData)
        const population=countryData.reduce((a,e)=>
             a+e.population,0)
        
        console.log(population);}


//e.  Print the country which uses US Dollars as currency.


var request= new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){ 
var rlt=JSON.parse(request.response);
var currency= rlt.filter((value)=> value.currencies && value.currencies.USD)
currency.forEach((value)=>
console.log(value.name.common))
}
