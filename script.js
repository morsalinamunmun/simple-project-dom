function calculateTriangleArea(){
    //get triangle base value
    const triangleBase = document.getElementById('triangle-base');
    const base = parseFloat(triangleBase.value);
    //triangleBase.value = '';
    //get triangle height value
    const triangleHeight = document.getElementById('triangle-height');
    const height = parseFloat(triangleBase.value);
    const area = 0.5 * base * height;
    //show triangle area
    const areaValue = document.getElementById('triangle-area');
    areaValue.innerText = area;
    //triangleHeight.value = '';
    

}

function calculateRectangleArea(){
    //get rectangle width value
    const rectangleWidth = document.getElementById('rectangle-width');
    //rectangleWidth.value = '';
    const width = parseFloat(rectangleWidth.value);
    const rectangleLength = document.getElementById('rectangle-length');
    const length = parseFloat(rectangleLength.value);
    const area = width * length;
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}

//reusable function-> reduce duplicate code
function calculateParallelogramArea(){
    const base = inputValue('parallelogram-base');
    const height = inputValue('parallelogram-height');
    const area = base * height;
    setAreaInnerText('parallelogram-area', area);
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