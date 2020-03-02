let tabs = document.body.querySelector('ul');
let tabsTitle = document.body.querySelectorAll('.tabs-title');
let tabsContent = document.body.querySelectorAll('.text-field>li');

tabs.addEventListener('click', function (e){
   e.target.classList.add('active');
   for (let i = 0; i < tabsTitle.length; i++) {
      if (e.target != tabsTitle[i]) {
         tabsTitle[i].classList.remove('active');
         tabsContent[i].classList.add('hidden');
      } else {
         tabsContent[i].classList.remove('hidden');
      }      
   }
});


const filterTitlesContainer = document.getElementById('filter-titles');
const projects = document.querySelectorAll('.project-item');
const loadButton = document.querySelector('.load-button');

filterTitlesContainer.addEventListener('click', (e) =>{
    if(e.target.classList.contains('filter-title')){
        const title = e.target;
        const type = title.dataset.filterby || 'project-item';
        const isActive = title.classList.contains('active');
        
        if (title != filterTitlesContainer.firstElementChild.firstElementChild) {
            if(!isActive){
                document.querySelector('.filter-title.active').classList.remove('active');
                title.classList.add('active');
                for (const iterator of projects) {
                    iterator.classList.remove('hidden'); 
                }
                loadButton.style.display = 'none';
                filterByClassName(projects, type);
            }
        }
        else{
            if(!isActive){
                for (let i = 12; i < projects.length; i++) {
                    projects[i].classList.add('hidden');
                }
                document.querySelector('.filter-title.active').classList.remove('active');
                title.classList.add('active');
                loadButton.style.display = 'flex';
                filterByClassName(projects, type);
                count=0;
            }
        }        
    }
})

function filterByClassName(elements, className){
    for(let elem of elements){
        elem.hidden = !elem.classList.contains(className);
    }
}



let count = 0;
loadButton.addEventListener('click', function(e){    
    if(count === 0){
        for (let i = 12; i < 24; i++) {
            projects[i].classList.remove('hidden'); 
        }  
    }
    else if(count === 1){
        for (let i = 24; i < 36; i++) {
            projects[i].classList.remove('hidden'); 
        }

        loadButton.style.display = 'none';
    }
    else{
        // loadButton.classList.add('hidden');
        // loadButton.style.display = 'none';
    }
    count++;

    
})