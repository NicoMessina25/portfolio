


async function loadProjects(arrProj){
    const response = await fetch("../js/projects.json");
    const projs = await response.json();
    projs.forEach((p)=>{
        arrProj.push(p);
    });
}

async function loadTechs(arrTech){
    const response = await fetch("../js/technologies.js");
    const techs = await response.json();
    techs.forEach((t)=>{
        arrTech.push(t);
    })
}

const divProjects = document.getElementById("divProjects");
const arrProj = new Array();
const arrTech = new Array();

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
