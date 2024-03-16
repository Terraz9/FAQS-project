const accordionContent = document.querySelectorAll('.accordion-content');

accordionContent.forEach((item, index) => {
    let header = item.querySelector(".accordion-content-title");
    header.addEventListener("click", () => {
        item.classList.add('is-open');

        let answer = item.querySelector(".accordion-content-description");
        if(item.classList.contains("is-open")) {
            answer.style.height = `${answer.scrollHeight}px`;
        } else {
            answer.style.height = '0px';
        }
        removeOpenedContent(index);
    })
})


function removeOpenedContent(index) {
    accordionContent.forEach((item2, index2) => {
        if(index != index2) {
            item2.classList.remove('is-open');
            let answer2 = item2.querySelector(".accordion-content-description");
            answer2.style.height = '0px';
        }
        
    })
}