import {validarAcessoCinema} from '../src/controleAcesso.js'
import assert from 'node:assert'

describe('Testando funções de acesso ao cinema', () => {
    it('Idade deve ser positiva', () => {
        let respostaAcesso = validarAcessoCinema(-1)
        assert.equal(respostaAcesso, 'Não permitido')
    });
    it('Se classificação == L retorne positivo', () => {
        let respostaAcesso = validarAcessoCinema(10, "L")
        assert.equal(respostaAcesso, 'Permitido')
    });
    it('Idade igual a nulo', () => {
        let respostaAcesso = validarAcessoCinema(null,"L")
        assert.equal(respostaAcesso,'Não permitido')
    });
    it('Se classificação igual a nulo', () => {
        let respostaAcesso = validarAcessoCinema(10, null)
        assert.equal(respostaAcesso, 'Não permitido')
    });
    it('Verificar que quando uma idade é inferior a classificação retorna Não permitido', () => {
        let respostaAcesso = validarAcessoCinema(10,"16")
        assert.equal(respostaAcesso, 'Não permitido')
    });
    it('Validar que quando uma idade é igual a classificação retorna Permitido', () => {
        let respostaAcesso = validarAcessoCinema(16,"16")
        assert.equal(respostaAcesso,"Permitido")
    });
})