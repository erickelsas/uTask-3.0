tarefas = [];
tarefa = new Object();

tarefa = {
    "title" : "",
    "desc" : ""
};


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

    let title = text.value;
    let desc = descricao.value;

    if(title == ""){
        text.classList.add("invalida");
        return;
    }

    tarefa = {"title" : `${title}`,
               "desc" : `${desc}`};

    tarefas.push(tarefa);

    criaTarefa(tarefa);

    console.log(tarefas)
    
    text.value = "";
    descricao.value = "";

    document.getElementById("modal-add").classList.remove("show-modal");
});

function criaTarefa(tarefa){
    let lista = document.querySelector(".tasks");
    console.log(lista)

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
                                <span class="material-icons disp-none-class navigate" id="navigate-before">navigate_before</span>
                                <span class="material-icons navigate" id="navigate-next">navigate_next</span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>`

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

/*document.getElementById("ler-desc-btn").addEventListener("click", () => {
    const lerDesc = document.getElementById("ler-desc-container");
    const esconderDesc = document.getElementById("esconder-desc-container");
    const desc = document.getElementById("desc");
    
    lerDesc.classList.add("disp-none-class");
    esconderDesc.classList.remove("disp-none-class");
    desc.classList.remove("disp-none-class");
});*/

document.getElementById("esconder-desc-btn").addEventListener("click", () => {
    const lerDesc = document.getElementById("ler-desc-container");
    const esconderDesc = document.getElementById("esconder-desc-container");
    const desc = document.getElementById("desc");

    lerDesc.classList.remove("disp-none-class");
    esconderDesc.classList.add("disp-none-class");
    desc.classList.add("disp-none-class");
});

document.querySelector('.tasks').addEventListener("click", (e) => {
    noPai = e.target.parentNode;
    excluirModal = noPai.lastElementChild;
        if (e.target && e.target.classList.contains("expand-excluir")) { //CLICK NO EXPAND VERTICAL
            if(excluirModal.classList.contains("disp-none-class")){ //VERIFICA SE O MODAL ESTÁ ABERTO
                excluirModal.classList.remove("disp-none-class");
            } else{
                excluirModal.classList.add("disp-none-class")
            }
        }

    teste = noPai.parentNode;
    console.log(teste)
        if(excluirModal.contains(e.target) && teste.classList.contains("excluir-container")){ //CLICK NO MODAL EXCLUIR
            teste.classList.add("disp-none-class")
        }
    });

