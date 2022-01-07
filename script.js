var checkedItems=[];
var Food=['north-indian','south-indian','chinese','continental','mexican'];
var txt1;
//code to check only 2 items are selected out of 5
const add=(fs)=>{
if(checkedItems.includes(fs)){
const index=checkedItems.indexOf(fs);
checkedItems.splice(index,1);
if(checkedItems.length<2){
Food.forEach((fs) => {
if(!checkedItems.includes(fs)){
document.getElementById(fs).disabled=false;
}
});
}

}else{
checkedItems.push(fs);
if(checkedItems.length==2){
    Food.forEach((fs) => {
        if(!checkedItems.includes(fs)){
        document.getElementById(fs).disabled=true;
        }
});

}

}
txt1=checkedItems.join(',');
}

// console.log(checkedItems.join(''));
//Access the submit button 
var entry=document.getElementById("button");
entry.addEventListener("click",AddRow);
var list1=[];
var list2=[];
var list3=[];
var list4=[];
//var list5=[];
//var list6=[];
var list7=[];
var list8=[];
var n=1;
var x=0;

function AddRow(){

let gender=document.forms[0];

let txt='';
let i;
for(i=0;i<gender.length;i++){
if(gender[i].checked){
txt=txt+gender[i].value+"";
}
}
//  document.getElementById("gender").value=txt;
// console.log(txt);
var AddRown=document.getElementById("show");
var NewRow=AddRown.insertRow(n);

//assign the data given on form to respective lists 
list1[x]=document.getElementById("fname").value;
list2[x]=document.getElementById("lname").value;
list3[x]=document.getElementById("address").value;
list4[x]=document.getElementById("pincode").value;
// list5[x]=document.getElementById("gender").value;

const radioButtonValue = document.querySelector(`input[type="radio"][name=gender]:checked`).value;

//list6[x]=document.getElementById("food").value;
list7[x]=document.getElementById("state").value;
list8[x]=document.getElementById("country").value;


// console.log(list1[x],list2[x],list3[x],list4[x],list5[x],list6[x],list7[x],list8[x]);
var cel1=NewRow.insertCell(0);
var cel2=NewRow.insertCell(1);
var cel3=NewRow.insertCell(2);
var cel4=NewRow.insertCell(3);
var cel5=NewRow.insertCell(4);
var cel6=NewRow.insertCell(5);
var cel7=NewRow.insertCell(6);
var cel8=NewRow.insertCell(7);

cel1.innerHTML=list1[x];
cel2.innerHTML=list2[x];
cel3.innerHTML=list3[x];
cel4.innerHTML=list4[x];
cel5.innerHTML=radioButtonValue;
cel6.innerHTML=txt1;
cel7.innerHTML=list7[x];
cel8.innerHTML=list8[x];

// console.log(cel1,cel2,cel3,cel4,cel5,cel6,cel7,cel8);
n++;
x++;
//below is the code line to clear the form after we finished appending on table
document.getElementById("subname").reset();
}
