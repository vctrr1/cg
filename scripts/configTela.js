window.onload = function() {
    
    // Manipulação atravez da escolha 2D ou 3D
    const checkbox2D = document.getElementById('2D');
    const checkbox3D = document.getElementById('3D');

    // Manipulação de elementos para serem visíveis ou não, de acordo com opções selecionadas 2D    
    const div2D = document.querySelector('.configPanel2D');
    const selectOpcoes2D = document.getElementById('opcoes2D');
    const divPixel = document.querySelector('.configPanel2D_opcoes_pixel');
    const divRetas = document.querySelector('.configPanel2D_opcoes_retas');
    const divCircunferencias = document.querySelector('.configPanel2D_opcoes_circunferencias');
    const divTransformacoes = document.querySelector('.configPanel2D_opcoes_transformacoes');
    const divCohenSutherland = document.querySelector('.configPanel2D_cohen-sutherland');
    const divElipse = document.querySelector('.configPanel2D_opcoes_elipse');
    const divBatimentosCard = document.querySelector('.configPanel2D_opcoes_BatimentosCardiacos');

    // Manipulação de elementos para serem visíveis ou não, de acordo com opções selecionadas 3D
    const div3D = document.querySelector('.configPanel3D');
    const selectOpcoes3D = document.getElementById('opcoes3D');
    const divTransformacoes3D = document.querySelector('.configPanel3D_opcoes_transformacoes');
    const divProjecoes3D = document.querySelector('.configPanel3D_opcoes_projecoes');
    
    // CheckBoxes das transformações/Composição
    const checkTranslacao = document.getElementById('checkTranslacao');
    const checkEscala = document.getElementById('checkEscala');
    const checkRotacao = document.getElementById('checkRotacao');
    const checkCisalhamento = document.getElementById('checkCisalhamento');
    const checkReflexao = document.getElementById('checkReflexao');

    // Seletor para todos os checkboxes dentro de .configPanel2D_opcoes_transformacoes
    const checkboxes2D = document.querySelectorAll('.configPanel2D_opcoes_transformacoes input[type="checkbox"]');
    // Seletor para todos os checkboxes dentro de .configPanel3D_opcoes_transformacoes
    const checkboxes3D = document.querySelectorAll('.configPanel3D_opcoes_transformacoes input[type="checkbox"]');

    // Inputs de entradas das transformações 2D
    const xTranslacao3D = document.getElementById('xTranslacao3D');
    const yTranslacao3D = document.getElementById('yTranslacao3D');
    const zTranslacao3D = document.getElementById('zTranslacao3D');
    const xEscala3D = document.getElementById('xEscala3D');
    const yEscala3D = document.getElementById('yEscala3D');
    const zEscala3D = document.getElementById('zEscala3D');
    const AnguloRotacao3D = document.getElementById('AnguloRotacao3D');
    const xCisalhamento3D = document.getElementById('xCisalhamento3D');
    const yCisalhamento3D = document.getElementById('yCisalhamento3D');
    const zCisalhamento3D = document.getElementById('zCisalhamento3D');
    const xReflexao3D =  document.getElementById('xReflexao3D');
    const yReflexao3D = document.getElementById('yReflexao3D');
    const zReflexao3D = document.getElementById('zReflexao3D');
    
    // Inputs de entradas das transformações 3D
    const xTranslacao = document.getElementById('xTranslacao');
    const yTranslacao = document.getElementById('yTranslacao');
    const xEscala = document.getElementById('xEscala');
    const yEscala = document.getElementById('yEscala');
    const AnguloRotacao = document.getElementById('AnguloRotacao');
    const xCisalhamento = document.getElementById('xCisalhamento');
    const yCisalhamento = document.getElementById('yCisalhamento');
    const xReflexao =  document.getElementById('xReflexao');
    const yReflexao = document.getElementById('yReflexao');

    // Variável para controle dos checkboxes das transformações/composição
    let verificaTipoDeFuncionamentoCheckBoxes = "";

    // Função para desativar TODAS as entradas de valores 2D
    function desativaEntradasDeValoresDasTransformacoes2D(){
        xTranslacao.disabled = true;
        yTranslacao.disabled = true;
        xEscala.disabled = true;
        yEscala.disabled = true;
        AnguloRotacao.disabled = true;
        xCisalhamento.disabled = true;
        yCisalhamento.disabled = true;
        xReflexao.disabled = true;
        yReflexao.disabled = true;;
        limpaCampoDasEntradas2D();
    }

    // Função para desativar TODAS as entradas de valores 3D
    function desativaEntradasDeValoresDasTransformacoes3D(){
        xTranslacao3D.disabled = true;
        yTranslacao3D.disabled = true;
        zTranslacao3D.disabled = true;
        xEscala3D.disabled = true;
        yEscala3D.disabled = true;
        zEscala3D.disabled = true;
        AnguloRotacao3D.disabled = true;
        xCisalhamento3D.disabled = true;
        yCisalhamento3D.disabled = true;
        zCisalhamento3D.disabled = true;
        xReflexao3D.disabled = true;
        yReflexao3D.disabled = true;
        zReflexao3D.disabled = true;
        limpaCampoDasEntradas3D();
    }

    // Função para limpar os campos de entradas 2D
    function limpaCampoDasEntradas2D(){
        xTranslacao.value = "";
        yTranslacao.value = "";
        xEscala.value = "";
        yEscala.value = "";
        AnguloRotacao.value = "";
        xCisalhamento.value = "";
        yCisalhamento.value = "";
    }

    // Função para limpar os campos de entradas 3D
    function limpaCampoDasEntradas3D(){
        xTranslacao3D.value = "";
        yTranslacao3D.value = "";
        zTranslacao3D.value = "";
        xEscala3D.value = "";
        yEscala3D.value = "";
        zEscala3D.value = "";
        AnguloRotacao3D.value = "";
        xCisalhamento3D.value = "";
        yCisalhamento3D.value = "";
        zCisalhamento3D.value = "";
    }

    // Desativa todas as divs referentes a div 2D
    function desativaDivs2D(){
        divPixel.style.display = 'none';
        divRetas.style.display = 'none';
        divCircunferencias.style.display = 'none';
        divTransformacoes.style.display = 'none';
        divCohenSutherland.style.display = 'none';
        divElipse.style.display = 'none';
        divBatimentosCard.style.display = 'none';
    }

    // Desativa todas as divs referentes a div 3D
    function desativaDivs3D(){
        divTransformacoes3D.style.display = "none";
        divProjecoes3D.style.display = 'none';
    }

    // Chama a função que desativa as entradas assim que a página é carregada
    desativaEntradasDeValoresDasTransformacoes2D();
    desativaEntradasDeValoresDasTransformacoes3D();

    // Ativa/mostra as divs que correspondem a marcação do input do value 2D
    checkbox2D.addEventListener('change', function() {         
        desativaDivs2D();
        desativaDivs3D();

        if (this.checked) {
            checkbox3D.checked = false;
            div2D.style.display = 'block';
            div3D.style.display = 'none';
            selectOpcoes2D.value = "opcao1";
            divPixel.style.display = 'block';
            verificaTipoDeFuncionamentoCheckBoxes = "";
            
        } 
        else {
            div2D.style.display = 'none';
            // Esconde todas as outras divs relacionadas à opção 2D
            desativaDivs2D();
        }
    });

    // Ativa/mostra as divs que correspondem a marcação do input do value 3D
    checkbox3D.addEventListener('change', function(){
        desativaDivs3D();
        desativaDivs2D();

        if(this.checked){
            checkbox2D.checked = false;
            div3D.style.display = 'block';
            div2D.style.display = 'none';
            selectOpcoes3D.value = 'opcao1';
            divTransformacoes3D.style.display = "block";
        }
        else {
            div3D.style.display = 'none';
            // Esconde todas as outras divs relacionadas à opção 3D
            desativaDivs3D();
        }
    });

    // Evento de alteração do select 2D
    selectOpcoes2D.addEventListener('change', function() {
        // Esconde todas as divs relacionadas à opção 2D
        desativaDivs2D();
        desativaDivs3D();

        // Exibe a div correspondente à opção selecionada no select
        switch (selectOpcoes2D.value) {
            case 'opcao1':
                divPixel.style.display = 'block';
                verificaTipoDeFuncionamentoCheckBoxes = "";
                break;

            case 'opcao2':
            case 'opcao3':
                divRetas.style.display = 'block';
                verificaTipoDeFuncionamentoCheckBoxes = "";
                break;

            case 'opcao4':
            case 'opcao5':
            case 'opcao6':
                divCircunferencias.style.display = 'block';
                verificaTipoDeFuncionamentoCheckBoxes = "";
                break;

            case 'opcao7':
                divElipse.style.display = 'block';
                verificaTipoDeFuncionamentoCheckBoxes = "";
                break;
                
            case 'opcao8':
                divTransformacoes.style.display = 'block';
                verificaTipoDeFuncionamentoCheckBoxes = 'opcao8';
                break;
                    
            case 'opcao9':
                divTransformacoes.style.display = 'block';
                verificaTipoDeFuncionamentoCheckBoxes = "opcao9";
                break;
                
            case 'opcao10':
                divCohenSutherland.style.display = 'block';
                verificaTipoDeFuncionamentoCheckBoxes = "";
                break;
            
            case 'opcao11':
                divBatimentosCard.style.display = 'block';
                verificaTipoDeFuncionamentoCheckBoxes = "";
                break;
        }
    });    

    // Evento de alteração do select 3D
    selectOpcoes3D.addEventListener('change', function(){
        desativaDivs2D();
        desativaDivs3D();
 
        switch(selectOpcoes3D.value){
            case "opcao1":
                divTransformacoes3D.style.display = "block";
                break;

            case "opcao2":
                divProjecoes3D.style.display = 'block';    
                break;
        }
    });

    // Função para desmarcar todos os checkboxes
    function desmarcaCheckBoxesTransComp(){
        checkTranslacao.checked = false;
        checkEscala.checked = false;
        checkRotacao.checked = false;
        checkCisalhamento.checked = false;
        checkReflexao.checked = false;
    }

    // Adiciona um ouvinte de evento de mudança para cada checkbox 2D
    checkboxes2D.forEach(function(checkbox) {        
        checkbox.addEventListener('click', function() {

            // Informações para transformações dos checkboxes
            if(verificaTipoDeFuncionamentoCheckBoxes === 'opcao8'){
                if(this.id === "checkTranslacao"){                
                    if(checkbox.checked){
                        desmarcaCheckBoxesTransComp();
                        checkTranslacao.checked = true;
                        limpaCampoDasEntradas2D();
                        desativaEntradasDeValoresDasTransformacoes2D();                        
                        xTranslacao.disabled = false;
                        yTranslacao.disabled = false;
                    }
                    else{
                        desmarcaCheckBoxesTransComp();
                        limpaCampoDasEntradas2D();
                        desativaEntradasDeValoresDasTransformacoes2D();
                    }                
                }
                else if(this.id === "checkEscala"){                
                    if(checkbox.checked){
                        desmarcaCheckBoxesTransComp();
                        checkEscala.checked = true;
                        limpaCampoDasEntradas2D();
                        desativaEntradasDeValoresDasTransformacoes2D();
                        xEscala.disabled = false;
                        yEscala.disabled = false;
                    }
                    else{
                        desmarcaCheckBoxesTransComp();
                        limpaCampoDasEntradas2D();
                        desativaEntradasDeValoresDasTransformacoes2D();
                    }                
                }
                else if(this.id === "checkRotacao"){                
                    if(checkbox.checked){
                        desmarcaCheckBoxesTransComp();
                        checkRotacao.checked = true;
                        limpaCampoDasEntradas2D();
                        desativaEntradasDeValoresDasTransformacoes2D();
                        AnguloRotacao.disabled = false;
                    }
                    else{
                        desmarcaCheckBoxesTransComp();
                        limpaCampoDasEntradas2D();
                        desativaEntradasDeValoresDasTransformacoes2D();
                    }                
                }
                else if(this.id === "checkCisalhamento"){                
                    if(checkbox.checked){
                        desmarcaCheckBoxesTransComp();
                        checkCisalhamento.checked = true;
                        limpaCampoDasEntradas2D();
                        desativaEntradasDeValoresDasTransformacoes2D();
                        xCisalhamento.disabled = false;
                        yCisalhamento.disabled = false;
                    }
                    else{
                        desmarcaCheckBoxesTransComp();
                        limpaCampoDasEntradas2D();
                        desativaEntradasDeValoresDasTransformacoes2D();
                    }                
                }
                else if(this.id === "checkReflexao"){                
                    if(checkbox.checked){
                        desmarcaCheckBoxesTransComp();
                        checkReflexao.checked = true;
                        desativaEntradasDeValoresDasTransformacoes2D();
                        xReflexao.disabled = false;
                        yReflexao.disabled = false;
                    }
                    else{
                        desmarcaCheckBoxesTransComp();
                        desativaEntradasDeValoresDasTransformacoes2D();
                    }                
                }
            }
            // Informações para composição dos checkboxes
            else if(verificaTipoDeFuncionamentoCheckBoxes === 'opcao9'){
                if(this.id === "checkTranslacao"){                
                    if(checkbox.checked){
                        xTranslacao.disabled = false;
                        yTranslacao.disabled = false;
                    }
                    else{
                        checkTranslacao.checked = false;
                        xTranslacao.value = "";
                        yTranslacao.value = "";
                        xTranslacao.disabled = true;
                        yTranslacao.disabled = true;
                    }
                }
                else if(this.id === "checkEscala"){                
                    if(checkbox.checked){                        
                        xEscala.disabled = false;
                        yEscala.disabled = false;
                    }
                    else{
                        checkEscala.checked = false;
                        xEscala.value = "";
                        yEscala.value = "";
                        xEscala.disabled = true;
                        yEscala.disabled = true;
                    }                
                }
                else if(this.id === "checkRotacao"){                
                    if(checkbox.checked){
                        AnguloRotacao.disabled = false;
                    }
                    else{
                        checkRotacao.checked = false;
                        AnguloRotacao.value = "";
                        AnguloRotacao.disabled = true;
                    }                
                }
                else if(this.id === "checkCisalhamento"){                
                    if(checkbox.checked){
                        xCisalhamento.disabled = false;
                        yCisalhamento.disabled = false;
                    }
                    else{
                        checkCisalhamento.checked = false;
                        xCisalhamento.value = "";
                        yCisalhamento.value = "";
                        xCisalhamento.disabled = true;
                        yCisalhamento.disabled = true;
                    }                
                }
                else if(this.id === "checkReflexao"){                
                    if(checkbox.checked){
                        xReflexao.disabled = false;
                        yReflexao.disabled = false;
                    }
                    else{
                        checkReflexao.checked = false;
                        xReflexao.checked = false;
                        yReflexao.checked = false;
                        xReflexao.disabled = true;
                        yReflexao.disabled = true;
                    }                
                }
            }            
        });        
    }); 
    
    // Adiciona um ouvinte de evento de mudança para cada checkbox 3D
    checkboxes3D.forEach(function(checkbox){
        checkbox.addEventListener('click', function(){
            if(this.id === "checkTranslacao3D"){
                if(checkbox.checked){
                    xTranslacao3D.disabled = false;
                    yTranslacao3D.disabled = false;
                    zTranslacao3D.disabled = false;
                }
                else{
                    xTranslacao3D.disabled = true;
                    yTranslacao3D.disabled = true;
                    zTranslacao3D.disabled = true;
                    xTranslacao3D.value = "";
                    yTranslacao3D.value = "";
                    zTranslacao3D.value = "";
                }
            }
            else if(this.id === "checkEscala3D"){
                if(checkbox.checked){
                    xEscala3D.disabled = false;
                    yEscala3D.disabled = false;
                    zEscala3D.disabled = false;
                }
                else{
                    xEscala3D.disabled = true;
                    yEscala3D.disabled = true;
                    zEscala3D.disabled = true;
                    xEscala3D.value = "";
                    yEscala3D.value = "";
                    zEscala3D.value = "";
                }
            }
            else if(this.id === "checkRotacao3D"){
                if(checkbox.checked){
                    AnguloRotacao3D.disabled = false;
                }
                else{
                    AnguloRotacao3D.disabled = true;
                    AnguloRotacao3D.value = "";
                }
            }
            else if(this.id === "checkCisalhamento3D"){
                if(checkbox.checked){
                    xCisalhamento3D.disabled = false;
                    yCisalhamento3D.disabled = false;
                    zCisalhamento3D.disabled = false;
                }
                else{
                    xCisalhamento3D.disabled = true;
                    yCisalhamento3D.disabled = true;
                    zCisalhamento3D.disabled = true;
                    xCisalhamento3D.value = "";
                    yCisalhamento3D.value = "";
                    zCisalhamento3D.value = "";
                }
            }
            else if(this.id === "checkReflexao3D"){
                if(checkbox.checked){
                    xReflexao3D.disabled = false;
                    yReflexao3D.disabled = false;
                    zReflexao3D.disabled = false;
                }
                else{
                    xReflexao3D.disabled = true;
                    yReflexao3D.disabled = true;
                    zReflexao3D.disabled = true;
                    xReflexao3D.checked = false;
                    yReflexao3D.checked = false;
                    zReflexao3D.checked = false;
                }
            }
        });        
    });


};
