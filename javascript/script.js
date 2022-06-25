window.tarefasFazer = [];
window.tarefasFazendo = [];
window.tarefasFeito = [];

document.getElementById("frase-btn").addEventListener("click", () => {
    document.getElementById("modal-fdia").classList.add("show-modal");
});

document.getElementById("close-fdia").addEventListener("click", () => {
    document.getElementById("modal-fdia").classList.remove("show-modal");
})

document.getElementById("seta-esquerda").addEventListener("click", () => {
    let i;
    let x;
    
    for(i = 1; i < 4; i++){
        if(document.getElementById(`kanban-radio${i}`).checked){
            x = i-1;
        }
    }

    if(x == 0){
        x = 3;
    }

    document.getElementById(`kanban-radio${x}`).checked = true;
});


document.getElementById("show-modal-add").addEventListener("click", () => {
    document.getElementById("modal-add").classList.add("show-modal");
});

document.getElementById("close-modal-add").addEventListener("click", () => {
    document.getElementById("modal-add").classList.remove("show-modal");
});

document.getElementById("label-dark").addEventListener("click", () => {
    light = document.getElementById("light");
    dark = document.getElementById("dark");
    html = document.querySelector('html');
    logoBlue = document.getElementById("logo-blue");
    logoWhite = document.getElementById("logo-white");

    if (dark.classList.contains("invisible")) {
        light.classList.add("invisible");
        dark.classList.remove("invisible");
        html.classList.toggle('darkmode');
        logoBlue.classList.remove("invisible");
        logoWhite.classList.add("invisible");
    } else {
        light.classList.remove("invisible");
        dark.classList.add("invisible");
        html.classList.toggle('darkmode');
        logoBlue.classList.add("invisible");
        logoWhite.classList.remove("invisible");
    }
});


document.getElementById("criar-task").addEventListener("click", () => {
    const text = document.getElementById("title-campo");
    const descricao = document.getElementById("desc-campo");
    const lista = document.querySelectorAll(".tasks");

    let title = text.value;
    let desc = descricao.value;

    if(title == ""){
        text.classList.add("invalida");
        return;
    }

    tarefa = {"title" : `${title}`,
              "desc" : `${desc}`};

    window.tarefasFazer.push(tarefa);

    criaTarefa(tarefa, lista[0]);
    
    text.value = "";
    descricao.value = "";

    document.getElementById("modal-add").classList.remove("show-modal");
});

function criaTarefa(tarefa, lista){
    let listaT = document.querySelectorAll(".tasks");

    if(lista == listaT[0]){
        task = `<li class="task">
                    <div class="template-task" id="task-name">
                        <div class="template-container">
                            <div class="template-text">
                                <div class="header-task">
                                    <h2 class="title">${tarefa.title}</h2>
                                </div>

                                <div class="desc-task">
                                    <div class="desc-container disp-none-class">
                                        <div class="bottom-desc-container">
                                            <div class="ler-desc-container" id="ler-desc-container">
                                                <div class="ler-desc-content" id="ler-desc-btn">
                                                    <p class="ler-desc">Ler descrição</p>
                                                    <span class="material-icons">expand_more</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="esconder-desc-container disp-none-class" id="esconder-desc-container">
                                            <div class="esconder-desc-content" id="esconder-desc-btn">
                                                <p class="esc-desc">Esconder descrição</p>
                                                <span class="material-icons">expand_less</span>
                                            </div>
                                        </div>
                                        <p class="desc disp-none-class desc" id="desc">${tarefa.desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="icons-container">
                                <div class="expand-container">
                                    <span class="material-icons expand-excluir">more_vert</span>
                                    <div class="excluir-container disp-none-class excluir">
                                        <div class="excluir-content">
                                            <span class="material-icons" id="excluir-icon">delete</span>
                                            <p id="excluir-txt">Excluir</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="navegadores">
                                    <span class="material-icons disp-none-class navigate navigate-before">navigate_before</span>
                                    <span class="material-icons navigate navigate-next navegador-proximo">navigate_next</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>`
    } else if (lista == listaT[1]) {
        task = `<li class="task">
                    <div class="template-task" id="task-name">
                        <div class="template-container">
                            <div class="template-text">
                                <div class="header-task">
                                    <h2 class="title">${tarefa.title}</h2>
                                </div>

                                <div class="desc-task">
                                    <div class="desc-container disp-none-class">
                                        <div class="bottom-desc-container">
                                            <div class="ler-desc-container" id="ler-desc-container">
                                                <div class="ler-desc-content" id="ler-desc-btn">
                                                    <p class="ler-desc">Ler descrição</p>
                                                    <span class="material-icons">expand_more</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="esconder-desc-container disp-none-class" id="esconder-desc-container">
                                            <div class="esconder-desc-content" id="esconder-desc-btn">
                                                <p class="esc-desc">Esconder descrição</p>
                                                <span class="material-icons">expand_less</span>
                                            </div>
                                        </div>
                                        <p class="desc disp-none-class desc" id="desc">${tarefa.desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="icons-container">
                                <div class="expand-container">
                                    <span class="material-icons expand-excluir">more_vert</span>
                                    <div class="excluir-container disp-none-class excluir">
                                        <div class="excluir-content">
                                            <span class="material-icons" id="excluir-icon">delete</span>
                                            <p id="excluir-txt">Excluir</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="navegadores">
                                    <span class="material-icons navigate navigate-before">navigate_before</span>
                                    <span class="material-icons navigate navigate-next navegador-proximo">navigate_next</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>`
    } else {
        task = `<li class="task">
                    <div class="template-task" id="task-name">
                        <div class="template-container">
                            <div class="template-text">
                                <div class="header-task">
                                    <h2 class="title title-feito">${tarefa.title}</h2>
                                </div>

                                <div class="desc-task">
                                    <div class="desc-container disp-none-class">
                                        <div class="bottom-desc-container">
                                            <div class="ler-desc-container" id="ler-desc-container">
                                                <div class="ler-desc-content" id="ler-desc-btn">
                                                    <p class="ler-desc">Ler descrição</p>
                                                    <span class="material-icons">expand_more</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="esconder-desc-container disp-none-class" id="esconder-desc-container">
                                            <div class="esconder-desc-content" id="esconder-desc-btn">
                                                <p class="esc-desc">Esconder descrição</p>
                                                <span class="material-icons">expand_less</span>
                                            </div>
                                        </div>
                                        <p class="desc disp-none-class desc" id="desc">${tarefa.desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="icons-container">
                                <div class="expand-container">
                                    <span class="material-icons expand-excluir">more_vert</span>
                                    <div class="excluir-container disp-none-class excluir">
                                        <div class="excluir-content">
                                            <span class="material-icons" id="excluir-icon">delete</span>
                                            <p id="excluir-txt">Excluir</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="navegadores">
                                    <span class="material-icons navigate navigate-before">navigate_before</span>
                                    <span class="material-icons navigate replay navegador-proximo">replay</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>`
    }

            taskHtml = document.createRange().createContextualFragment(task);
            lista.appendChild(taskHtml);
}

document.getElementById("title-campo").addEventListener("focus", () => {
    const input = document.getElementById("title-campo");

    if(input.classList.contains("invalida")){
        input.classList.remove("invalida");
    }
});

document.getElementById("seta-direita").addEventListener("click", () => {
    let i;
    let x;
    
    for(i = 1; i < 4; i++){
        if(document.getElementById(`kanban-radio${i}`).checked){
            x = i+1;
        }
    }

    if(x == 4){
        x = 1;
    }

    document.getElementById(`kanban-radio${x}`).checked = true;
});

const liEvents = (e, kb) => {
        noPai = e.target.parentNode;
        excluirModal = noPai.lastElementChild;

        if (e.target && e.target.classList.contains("expand-excluir")) {
            if(excluirModal.classList.contains("disp-none-class")){
                excluirModal.classList.remove("disp-none-class");
                e.target.classList.add("expand-excluir-clicked");
            } else{
                excluirModal.classList.add("disp-none-class");
                e.target.classList.remove("expand-excluir-clicked");
            }
        }

        teste = noPai.parentNode;

        if(teste.classList.contains("excluir-container")){
            ul = e.target.closest(".tasks");

            li = e.target.closest(".task");
            nodes = Array.from(ul.children);
            idLi = nodes.indexOf(li);

            if(kb == 0){
                window.tarefasFazer.splice(idLi, 1);
            } else if(kb == 1){
                window.tarefasFazendo.splice(idLi, 1);
            } else if(kb == 0) {
                window.tarefasFeito.splice(idLi, 1);
            }
                

            ul.removeChild(li);
            teste.classList.add("disp-none-class");
        }

        if(!e.target.classList.contains("expand-excluir") && !teste.classList.contains("excluir-container")){
            li = e.target.closest(".task");
            excluirModal = li.firstElementChild.firstElementChild.lastElementChild.firstElementChild.lastElementChild
            
            if(!excluirModal.classList.contains("disp-none-class")){
                excluirModal.previousElementSibling.classList.remove("expand-excluir-clicked");
                excluirModal.classList.add("disp-none-class");
            }
        
        }

        if(e.target.classList.contains("navigate-before")){
            ul = e.target.closest(".tasks");
            li = e.target.closest(".task");
            nodes = Array.from(ul.children);
            idLi = nodes.indexOf(li);

            if(kb == 1){
                tarefaRem = window.tarefasFazendo.splice(idLi, 1);

                tarefa = {"title": `${tarefaRem[0].title}`,
                          "desc": `${tarefaRem[0].desc}`};
    
                window.tarefasFazer.push(tarefa);
            } else if(kb == 2){
                tarefaRem = window.tarefasFeito.splice(idLi, 1);

                tarefa = {"title": `${tarefaRem[0].title}`,
                          "desc": `${tarefaRem[0].desc}`};
    
                window.tarefasFazendo.push(tarefa);
            }

            criaTarefa(tarefa, kbTasks[kb-1]);

            ul.removeChild(li);
        }

        if(e.target.classList.contains("navegador-proximo")){
            ul = e.target.closest(".tasks");
            li = e.target.closest(".task");
            nodes = Array.from(ul.children);
            idLi = nodes.indexOf(li);

            if(kb == 0){
                tarefaRem = window.tarefasFazer.splice(idLi, 1);

                tarefa = {title: `${tarefaRem[0].title}`,
                          desc: `${tarefaRem[0].desc}`};
    
                window.tarefasFazendo.push(tarefa);
            } else if (kb == 1) {
                tarefaRem = window.tarefasFazendo.splice(idLi, 1);

                tarefa = {title: `${tarefaRem[0].title}`,
                          desc: `${tarefaRem[0].desc}`};
    
                window.tarefasFeito.push(tarefa);
            } else if (kb == 2) {
                tarefaRem = window.tarefasFeito.splice(idLi, 1);

                tarefa = {title: `${tarefaRem[0].title}`,
                          desc: `${tarefaRem[0].desc}`};
    
                window.tarefasFazer.push(tarefa);
            }

            
            if(kb + 1 == 3){
                kbProx = 0
            } else {
                kbProx = kb + 1;
            }

            criaTarefa(tarefa, kbTasks[kbProx]);

            ul.removeChild(li);
        }

        if(teste.classList.contains("ler-desc-container")){ //CLICK NO LER DESC
            teste.classList.add("disp-none-class");

            pai = teste.parentNode
            escondDesc = pai.nextElementSibling
            escondDesc.classList.remove("disp-none-class");

            desc = escondDesc.nextElementSibling
            desc.classList.remove("disp-none-class");
        }

        if(teste.classList.contains("esconder-desc-container")){ //CLICK NO ESCONDER DESC
            teste.classList.add("disp-none-class");

            bottom = teste.previousElementSibling
            lerDesc = bottom.firstElementChild
            lerDesc.classList.remove("disp-none-class");

            desc = teste.nextElementSibling
            desc.classList.add("disp-none-class");
        }
} 


const kbTasks = document.querySelectorAll('.tasks');

kbTasks[0].addEventListener("click", (e) => {
        liEvents(e, 0);
    });

kbTasks[1].addEventListener("click", (e) => {
        liEvents(e, 1);
    });
kbTasks[2].addEventListener("click", (e) => {
        liEvents(e, 2);
    });
    
//CONSUMINDO API
window.addEventListener("load", () => {
    const url = "https://murmuring-forest-23300.herokuapp.com/https://positive-vibes-api.herokuapp.com/quotes/random"


    fetch(url)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error();
        })
    .then(data => {
        fdia = document.querySelectorAll(".frasedodia");
        fdia[1].innerHTML = data.data;
        fdia[0].innerHTML = data.data;
        })
    .catch((error) => {
        fdia = document.querySelectorAll(".frasedodia");
        fraseDefault = "Se você quer um pedacinho do paraíso, acredite em Deus. Mas se você quer conquistar o mundo, acredite em você porque Deus já te deu tudo o que você precisa para você vencer."
        fdia[1].innerHTML = fraseDefault;
        fdia[0].innerHTML = fraseDefault;
    })
});