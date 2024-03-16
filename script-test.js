let accordionContent = document.querySelectorAll('.accordion-content');

accordionContent.forEach((item, index) => {
    item.addEventListener('click', () =>{
    let answer = item.querySelector('.accordion-content-description');
    answer.classList.toggle('is-open');
    removeOpenedContent(index);
    })
});


function removeOpenedContent(index) {
    accordionContent.forEach((item2, index2) => {
        if (index != index2) {
            let answer2 = item2.querySelector('.accordion-content-description');
            answer2.classList.remove("is-open");
        }
    })
}