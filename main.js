// //function Loadjson(file,callback){
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
//     xhr.onreadystatechange=function(){
//     	if(xhr.readyState === 4 && xhr.status == "200"){
//           callback(xhr.responseText);
//     	}
// 	};
// xhr.send(null);
// }
// Loadjson("data.json",function(text){
//   var data = JSON.parse(text);
//   console.log(data);
//   basics(data.details);
//   careerinfo(data.career);
//   educationinfo(data.education);
//   skillset(data.skills);
//   achievements(data.achievements);
// })
 function Loadjson(file){
 	return new Promise((resolve,reject)=>{
 		return fetch(file).then(response=>{
 			if(response.ok){
 				resolve(response.json());
 			}
 			else{
 				reject(new Error('error'));
 			}
 		})
 	})
}
var newfile = Loadjson("data.json");
newfile.then(data=>{
	 console.log(data);
 	 basics(data.details);
  	 careerinfo(data.career);
 	 educationinfo(data.education);
 	 skillset(data.skills);
 	 achievements(data.achievements);
})
var left = document.querySelector(".left");
function basics(det){
  var img = document.createElement("img");
  img.src = det.image;
  left.appendChild(img);
  var name =  document.createElement("h3");
  name.textContent = det.name;
  left.appendChild(name);
  var pno =  document.createElement("h3");
  pno.textContent = det.phno;
  left.appendChild(pno);
  var email =  document.createElement("a");
  email.href = "mailto:daniesamanvitha7@gmail.com";
  email.textContent = det.email;
  left.appendChild(email);
  var adrs =  document.createElement("h2");
  adrs.textContent = "Address";
  left.appendChild(adrs);
  var ele =  document.createElement("hr");
  left.appendChild(ele);
  var add =  document.createElement("p");
  add.textContent = det.Address;
  left.appendChild(add);
}
var right = document.querySelector(".right");
function careerinfo(info1){
	var co =  document.createElement("h2");
	co.textContent = "Career Objective";
	right.appendChild(co);
	var co1 = document.createElement("hr");
	right.appendChild(co1);
	var c =  document.createElement("p");
    c.textContent = info1.info;
    right.appendChild(c);
}
function educationinfo(edu){
	var ed = document.createElement("h2");
	ed.textContent="Education qualifications";
	right.appendChild(ed);
	var hh = document.createElement("hr");
	right.appendChild(hh);
	var table1 = document.createElement("table");
	table1.border = "1";
	right.appendChild(table1);
	tabledata="";
	for(i=0;i<edu.length;i++){
		tabledata+= "<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
	}
	table1.innerHTML = tabledata;
}
function skillset(std){
	var sk = document.createElement("h2");
	sk.textContent="Technical Skills";
	right.appendChild(sk);
	var h = document.createElement("hr");
	right.appendChild(h);
	for(i=0;i<std.length;i++){
		var  s = document.createElement("h3");
		s.textContent=std[i].title;
		right.appendChild(s);
		var ul = document.createElement("ul");
		var li = document.createElement("li");
		li.textContent = std[i].info;
		ul.appendChild(li);
		right.appendChild(ul);
	}
}
function achievements(ach){
	var a = document.createElement("h2");
	a.textContent="Achievements";
	right.appendChild(a);
	var ac = document.createElement("hr");
	right.appendChild(ac);
    for(i=0;i<ach.length;i++){
		var  s = document.createElement("h3");
		s.textContent=ach[i].title;
		right.appendChild(s);
		var ul = document.createElement("ul");
		var li = document.createElement("li");
		li.textContent = ach[i].info;
		ul.appendChild(li);
		right.appendChild(ul);
	}
}
function openpage(){
	window.open("resume.html","_self",true)
}


