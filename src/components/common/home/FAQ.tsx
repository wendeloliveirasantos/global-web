import React from 'react'
import styled from "styled-components"
import { FAQAccordion } from '../FAQAccordion'

const faq = [
    {
        question: "Quanto custa um seguro-viagem?",
        answer: "Ele varia de acordo com as coberturas e valores de indenizações definidos por você. À medida que você vai adicionando produtos e serviços ao seu seguro online, o valor muda e você vê na hora quanto vai pagar por tudo o que contratar."
    },
    {
        question: "Qual a forma de pagamento?",
        answer: "Através do cartão de crédito cadastrado na hora da contratação, conforme a duração do contrato e opção de pagamento que você escolheu."
    },
    {
        question: "Quais datas devo inserir na cotação como ida e volta de viagem?",
        answer: "A data de vigência do seu seguro deve coincidir com a data do seu bilhete, seja na ida ou volta. Ele deve ser adquirido conforme data de saída do Brasil, até a data de desembarque em território brasileiro, independente do horário."
    },
    {
        question: "Minha viagem foi adiada, como efetuo a alteração de datas do meu seguro?",
        answer: "É só acessar o nosso aplicativo ou a sua conta em nosso site. Caso não seja possível, entre em contato através do telefone (11)98674-0118 em horário comercial de segunda à sexta – das 09h às 18h (exceto feriados) ou contate diretamente a seguradora contratada. Depois disso você deve seguir alguns procedimentos de acordo com a cobertura. Vale lembrar que a apólice é um documento inalterável e será necessário substituir o documento atual por um novo."
    },
    {
        question: "Como efetuo o cancelamento do meu seguro-viagem?",
        answer: "É só acessar o nosso aplicativo ou a sua conta em nosso site. Caso não seja possível, entre em contato através do telefone (11)98674-0118 em horário comercial de segunda à sexta – das 09h às 18h (exceto feriados) ou contate diretamente a seguradora contratada. O cancelamento e reembolso serão feitos conforme as condições do contrato."
    },
    {
        question: "Vou viajar para vários países em uma mesma viagem, terei cobertura?",
        answer: "Com certeza! Ao realizar uma cotação, indique todos os países ou continentes que visitará e nosso site irá calcular o melhor plano que atende às necessidades de cada destino. É muito simples!"
    },
    {
        question: "Gastei com atendimento e remédios, como solicito o reembolso?",
        answer: "É só acessar o nosso aplicativo ou a sua conta em nosso site. Caso não seja possível, entre em contato através do telefone (11)98674-0118 em horário comercial de segunda à sexta – das 09h às 18h (exceto feriados) ou contate diretamente a seguradora contratada. . Vamos solicitar o comprovante de pagamento e NF referente a todos os gastos. Após até 5 dias úteis, entraremos em contato com a avaliação da sua solicitação. O pagamento é feito em 30 dias."
    },
    {
        question: "Vou viajar de carro, posso contratar um seguro-viagem?",
        answer: "Infelizmente não. O seguro é válido somente para viagens de avião, navio e ônibus rodoviário. Verifique diretamente com a seguradora do carro quais as coberturas disponíveis para viagens fora da sua cidade. E depois é só pegar a estrada!"
    },
]

export default function FAQ() {
    return (
        <Wrapper>
            <Header>
                <div>
                    <h1>Dúvidas Frequentes</h1>
                    <p>Contrate seu seguro com os itens que são essenciais para você e sua família. Veja os
                        detalhes de cobertura e monte o seu seguro-viagem de acordo com o seu perfil e com
                        o seu bolso.</p>
                </div>
            </Header>
            <FAQAccordion
                faqData={faq}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 40px 0;
`

const Header = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        max-width: 700px;
    }

    h1 {
        color: ${props => props.theme.colors.darkBlue};
    }

    p {
        color: ${props => props.theme.colors.textColor};
    }
    
`