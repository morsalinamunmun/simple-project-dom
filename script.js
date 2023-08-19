function calculateTriangleArea(){
    //get triangle base value
    const base = inputValue('triangle-base');
    //triangleBase.value = '';
    //get triangle height value
    const height = inputValue('triangle-height');
     //validation
     if(isNaN(base) || isNaN(height)){
        alert('Please provide a number');
        return;
    }
    const area = 0.5 * base * height;
    //show triangle area
    setAreaInnerText('triangle-area', area);
    //triangleHeight.value = '';
    
    //add to calculation entry
    addToCalculateEntry('Triangle', area);
}

function calculateRectangleArea(){
    //get rectangle width value
    const width = inputValue('rectangle-width');
    //rectangleWidth.value = '';
    const length = inputValue('rectangle-length');
    //validation
    if(isNaN(width) || isNaN(length)){
        alert('Please provide a number');
        return;
    }
    const area = width * length;
   setAreaInnerText('rectangle-area', area);
   //add to calculation entry
   addToCalculateEntry('Rectangle', area);
}

//reusable function-> reduce duplicate code
function calculateParallelogramArea(){
    const base = inputValue('parallelogram-base');
    const height = inputValue('parallelogram-height');
    //validation
    if(isNaN(base) || isNaN(height)){
        alert('Please provide a number');
        return;
    }
    const area = base * height;
    setAreaInnerText('parallelogram-area', area);

    //add to calculation entry
    addToCalculateEntry('Parallelogram', area);
}

function calculateEllipseArea(){
    const a = inputValue('ellipse-a');
    const b = inputValue('ellipse-b');

    //Math.pi or 3.14
    const area = (Math.PI * a * b).toFixed(2);
    setAreaInnerText('ellipse-area', area);
    //fixed 2 decimal
    /*const area = 3.14 * a * b;
    const twoDecimal = area.toFixed;
    setAreaInnerText('ellipse-area', twoDecimal);*/

    //add to calculation entry
    addToCalculateEntry('Ellipse', area);
}
//reusable get input value field in number
function inputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}
//reusable set span, p, div, etc text
function setAreaInnerText(areaId, area){
    const areaElement = document.getElementById(areaId);
    areaElement.innerText = area;   
}

//add to calculation entry
/* 
1. get the element where you want to add the dynamic html
 */
function addToCalculateEntry(areaType, area){
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    //p.innerHTML = areaType + ' ' + area;
    p.classList.add('my-4');
    p.innerHTML =` ${count+1}.
    ${areaType} ${area} cm<sup>2</sup>
    <button class="btn btn-success btn-sm ">Convert To m</button>
    `;
    calculationEntry.appendChild(p);
}

//data validation
/*1. set the proper type of th input field. (number, data, email)
2. check type using typeof
3. NaN means: Not a number, isNaN is checking wether the input is not a number or not*/ 

