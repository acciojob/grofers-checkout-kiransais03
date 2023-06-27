const getSumBtn = document.createElement("button");
let pricearr;
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = (event) => {
//Add your code here
  pricearr = document.querySelectorAll('.price');
	let ans=Array.from(pricearr).reduce(myfunc,0);

    function myfunc(prevval,currelem,index,arr) {
    	return prevval+parseInt(currelem.innerText);
    }	
	
    let table=document.getElementsByTagName('table')[0];
  let trow= table.insertRow();
  let cell=trow.insertCell(0);
 cell.innerText=`${ans}`;
	cell.id='ans';
}

getSumBtn.addEventListener("click", getSum);

