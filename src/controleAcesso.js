
const naoPermitido = "Não permitido"
const permitido = "Permitido"

export function validarAcessoCinema(idade, classificacao) {
    let varUndefined
    if(idade < 0 || idade === null || varUndefined > 0) {
        return naoPermitido 
    }
    if(classificacao == null) {
        return naoPermitido
    }
    if(classificacao == 'L') {
        return permitido
    } else if(idade < Number(classificacao)) {
        return naoPermitido
    } else {
        return permitido
    }
    // return "Permitido"
    // return "Não permitido"
}