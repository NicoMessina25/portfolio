


async function loadProjects(arrProj){
    const response = await fetch("./js/projects.json");
    const projs = await response.json();
    projs.forEach((p)=>{
        arrProj.push(p);
    });
}

async function loadTechs(arrTech){
    const response = await fetch("./js/technologies.json");
    const techs = await response.json();
    techs.forEach((t)=>{
        arrTech.push(t);
    })
}

const divProjects = document.getElementById("divProjects");
const divTechs = document.getElementById("divTechnologies");
const arrProj = new Array();
const arrTech = new Array();
/* const arrButtons = new Array();
arrButtons.push(document.getElementById("menuItemMe"));
arrButtons.push(document.getElementById("menuItemProjects"));
arrButtons.push(document.getElementById("menuItemTechnologies"));
arrButtons.push(document.getElementById("menuItemContact")); */

loadProjects(arrProj).then(()=>{
    arrProj.forEach(({name, img, link, git})=>{
        const nameArray = name.split(" ");
        const title = document.createElement("h3");

        nameArray.forEach((word)=>{
            title.innerHTML += ` <span>${word.charAt(0)}</span>${word.slice(1)}`;
        });

        divProjects.innerHTML += `
            <article class="project flexible--column"> 
                <h3 class="title"> ${title.innerHTML} </h3>
                <img src="${img}" alt="">
                <a href="${link}" target="blank"><button class="button"><i class="fa-solid fa-square-arrow-up-right"></i>  Visitar Sitio</button></a>
                <a href="${git}" target="blank"><button class="button"><i class="fa-brands fa-github"></i>  GitHub</button></a>
            </article>
        `
    })
});

loadTechs(arrTech).then(()=>{
    arrTech.forEach(({name, img})=>{
        const nameArray = name.split(" ");
        const title = document.createElement("h3");
        
        nameArray.forEach((word)=>{
            title.innerHTML += ` <span>${word.charAt(0)}</span>${word.slice(1)}`;
        });

        divTechs.innerHTML += `
            <article class="technology flexible--column"> 
                <h3 class="title"> ${title.innerHTML} </h3>
                <img src="${img}" alt="">
            </article>
        `
    })

});

/* arrButtons.forEach((b)=>{
    let hFrom = window.scrollY;
    let hTo = document.getElementById(`section${b.getAttribute("id").slice(8)}`).offsetTop;
    let nIntervalId

    b.addEventListener("click", ()=>{
        if(hFrom - hTo != 0){
            nIntervalId = setInterval(()=>{
                    if(window.scrollY != hTo){
                        window.scrollBy(0,(window.scrollY > hTo)?-1:1);
                    } else {
                        clearInterval(nIntervalId);
                    }
                },100/Math.abs(hFrom-hTo))
        }
    });
    
   
}); */