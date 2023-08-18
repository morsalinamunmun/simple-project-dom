function calculateTriangleArea(){
    //get triangle base value
    const triangleBase = document.getElementById('triangle-base');
    const base = parseFloat(triangleBase.value);
    triangleBase.value = '';
    //get triangle height value
    const triangleHeight = document.getElementById('triangle-height');
    const height = parseFloat(triangleBase.value);
    const area = 0.5 * base * height;
    //show triangle area
    const areaValue = document.getElementById('triangle-area');
    areaValue.innerText = area;
    triangleHeight.value = '';
    

}

function calculateRectangleArea(){
    //get rectangle width value
    const rectangleWidth = document.getElementById('rectangle-width');
    rectangleWidth.value = '';
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
    
}

function inputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}