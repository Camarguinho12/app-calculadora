function calcular(tipo, valor){
    const display = document.querySelector('#display');

    if(tipo.toLowerCase() === 'acao'){
        if(valor.toLowerCase() === 'c'){
            display.value = '';
        }else if((valor === '/') || (valor === '*') || (valor === '-') || (valor === '+') || (valor === '.')){
            const ultCaractDig = display.value.slice(-1);

            if((ultCaractDig !== '/') && (ultCaractDig !== '*') && (ultCaractDig !== '-') && (ultCaractDig !== '+') && (ultCaractDig !== '.')){
                display.value += valor;
            }else{
                console.log(display.value = display.value.slice(0, -1) + valor);
            }
        }else if(valor === '='){
            const ultCaractDig = display.value.slice(-1);

            if((ultCaractDig === '/') || (ultCaractDig === '*') || (ultCaractDig === '-') || (ultCaractDig === '+') || (ultCaractDig === '.')){
                display.value = display.value;
            }else if(display.value === ''){
                display.value = '';
            }else{
                const resultado = eval(display.value);

                display.value = resultado;
            }
        }
    }else if(tipo.toLowerCase() === 'valor'){
        display.value += valor;
    }
    
}

document.querySelector('#zero').addEventListener('click', () => calcular('valor', 0));
document.querySelector('#um').addEventListener('click', () => calcular('valor', 1));
document.querySelector('#dois').addEventListener('click', () => calcular('valor', 2));
document.querySelector('#tres').addEventListener('click', () => calcular('valor', 3));
document.querySelector('#quatro').addEventListener('click', () => calcular('valor', 4));
document.querySelector('#cinco').addEventListener('click', () => calcular('valor', 5));
document.querySelector('#seis').addEventListener('click', () => calcular('valor', 6));
document.querySelector('#sete').addEventListener('click', () => calcular('valor', 7));
document.querySelector('#oito').addEventListener('click', () => calcular('valor', 8));
document.querySelector('#nove').addEventListener('click', () => calcular('valor', 9));

document.querySelector('#divisao').addEventListener('click', () => calcular('acao', '/'));
document.querySelector('#multiplicacao').addEventListener('click', () => calcular('acao', '*'));
document.querySelector('#menos').addEventListener('click', () => calcular('acao', '-'));
document.querySelector('#mais').addEventListener('click', () => calcular('acao', '+'));
document.querySelector('#ponto').addEventListener('click', () => calcular('acao', '.'));

document.querySelector('#igual').addEventListener('click', () => calcular('acao', '='));
document.querySelector('#clear').addEventListener('click', () => calcular('acao', 'c'));