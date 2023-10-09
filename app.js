const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content'); 

function PageTransitions(){
     
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
    })
}

    allSections[0].addEventListener('click', (e) => {
        const targetElement = e.target.closest('[data-id]');
        
        if (targetElement) {
            const id = targetElement.dataset.id;
    
            // Remove the "active" class from all sectBtns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            });
    
            // Add the "active" class to the clicked element
            targetElement.classList.add('active');
    
            // Remove the "active" class from all sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });
    
            // Add the "active" class to the corresponding section
            const element = document.getElementById(id);
            if (element) {
                element.classList.add('active');
            }
        }
    });

    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element=document.body;
        element.classList.toggle('light-mode')
    })

}

PageTransitions();
