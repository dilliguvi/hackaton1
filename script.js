let some=document.createElement("div");
some.setAttribute("class","class-main")



var label=document.createElement("label");
label.innerHTML="Enter the country name";
label.setAttribute("class","max");
label.setAttribute("for","text");

var br=document.createElement("br");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","text");

var br1=document.createElement("br");

var button=document.createElement("button");
button.addEventListener("click",foo);
button.setAttribute("id","btn");
button.innerHTML="Search";




some.append(label,br,input,br1,button);
document.body.append(some);



async function foo(){
    try{
        let name=document.getElementById("text").value;
        let something=await fetch(`https://api.nationalize.io?name=${'name'}`);
        let nothing=await something.json();
        console.log(nothing);
        let names=nothing.name;
      console.log(names)
      let country= nothing.country[0].country_id;
      console.log(country);
      let country1=nothing.country[1].country_id;
      console.log(country1);
  let probability=nothing.country[0].probability;
  console.log(probability);
  let probability1=nothing.country[1].probability;
  console.log(probability1);
    
        }catch(error){
            alert("something went wrong");
     }
    }
foo();