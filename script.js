let accordionContent = document.querySelectorAll('.accordion-content');

//Loop the options and assign a click handler for each one.
accordionContent.forEach((item, index) => {
    item.addEventListener('click', () =>{
//Selects the answer of each question and toggle 'is-open' class to assign it a height
    let answer = item.querySelector('.accordion-content-description');
    answer.classList.toggle('is-open');
    removeOpenedContent(index);
    toggleSVG(item);

    })
});


function removeOpenedContent(index) {
    accordionContent.forEach((item2, index2) => {
        if (index != index2) {
            // When a new item is selected (Changes the index), it removes is-open class of the last one and closes it.
            let answer2 = item2.querySelector('.accordion-content-description');
            answer2.classList.remove("is-open");
            //When a new item is selected, Minus Sign disappear and Plus sign apepars in the last item.
            let svgMinus2 = item2.querySelector('.svg-minus');
            let svgPlus2 = item2.querySelector ('.svg-plus');
            svgMinus2.classList.add('svg-disappear')
            svgPlus2.classList.remove('svg-disappear')
        }
    })
}

// When an item is selected, it changes bettwen minus and plus svg's by toggling the class 'svg-disappear'.
function toggleSVG(item) {
    let svgMinus = item.querySelector ('.svg-minus');
    let svgPlus = item.querySelector ('.svg-plus');
    svgMinus.classList.toggle('svg-disappear');
    svgPlus.classList.toggle('svg-disappear');
}
