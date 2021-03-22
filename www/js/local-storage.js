const controles = document.querySelector('.controles');
const cssText = document.querySelector('.css-preview');
const btnPreview = document.querySelector('.btn-preview');

controles.addEventListener('change', handChange)

const handStyle = {
    element: btnPreview,

    texto(value) {
        this.element.innerHTML = value;
    },
    color(value) {
        this.element.innerHTML = value;
    },
    backgoundColor(value) {
        this.element.backgoundColor = value
    },
    height(value) {
        this.element.height = value + 'px';
    },
    width(value) {
        this.element.width = value + 'px';
    },
    border(value) {
        this.element.border = value;
    },
    borderRadius(value) {
        this.element.borderRadius = value + 'px';
    },
    fontFamily(value) {
        this.element.style.fontFamily = value;
    },
    fontSize(value) {
        this.element.style.fontSize = value + 'rem';
    },
}

function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);

    hanleStyle[name](value);
    saveValues(name, value);
    showCss();
}

//save values
function saveValues(name, value) {
    localStorage[name] = value;
    console.log(localStorage);
}

//set values
function setValue() {
    const properties = Object.keys(localStorage);
    properties.forEach(propertie => {
        handStyle[propertie](localStorage[propertie]);
        controles.elements[propertie].value = localStorage[propertie];
    });
    showCss();

    //chamando a func
    setValues();

    function showCss() {
        cssText.innerHTML = '<span>' + btnPreview.style.cssText.split('; ').join('; </span><span');
    }
}