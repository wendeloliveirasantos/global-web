export const insuranceInformation = {
  title: `A Sua Jornada Segura começa aqui:`,
  description: `Com a Dobyseg, você explora o mundo com a certeza de estar sempre protegido. Conheça nossas opções de seguros-viagem.`,
  advantages: [
    {
      title: `Opção 1`,
      description: `Coberturas`,
      items: [
        `Despesas médicas e hospitalares`,
        `Traslado médico`,
        `Morte ou Invalidez`,
        `Perda ou Atraso de Bagagem`,
        `Atraso de Voo`,
        `Assistência 24h em Português`,
      ],
      more: `Mais informações você encontra nas Condições Gerais do seguro viagem.`
    },
    {
      title: `Opção 2`,
      description: `Coberturas`,
      items: [
        `Perda ou Atraso de Bagagem`,
        `Atraso de Voo`,
        `Assistência 24h em Português`,
      ],
      more: `Mais informações você encontra nas Condições Gerais do seguro viagem.`
    },
    {
      title: `Opção 3`,
      description: `Coberturas`,
      items: [
        `Despesas médicas e hospitalares`,
        `Traslado médico`,
        `Morte ou Invalidez`,
        `Assistência 24h em Português`,
      ],
      more: `Mais informações você encontra nas Condições Gerais do seguro viagem.`
    },
    {
      title: `Opção 4`,
      description: `Coberturas`,
      items: [
        `Despesas médicas e hospitalares`,
        `Traslado médico`,
        `Morte ou Invalidez`,
        `Perda ou Atraso de Bagagem`,
        `Atraso de Voo`,
        `Assistência 24h em Português`,
        `Repatriação de Menor`,
        `Hospedagem para acompanhante`,
      ],
      more: `Mais informações você encontra nas Condições Gerais do seguro viagem.`
    }
  ],
  services: {
    
  },
  // services: {
  //   description: `Confira as assistências para deixar o seu seguro auto ainda mais personalizado. 
  //     São os serviços que você contrata na hora de fechar o seguro para veículos e pode usar quando precisar. Eles são 
  //     complementares a sua cobertura e garantem até mesmo facilidades para o seu dia a dia. `,
  //   items: [
  //     `Reboque`,
  //     `Pane seca`,
  //     `Troca de pneus`,
  //     `Autosocorro após pane`,
  //     `Meio de transporte alternativo`,
  //     `Histórico veicular`,
  //     `Serviço de leva e traz`,
  //     `Lavagem e higienização`,
  //     `Vidros`,
  //     `Carro reserva`,
  //     `Faróis, lanternas e retrovisores`,
  //     `Reparos simples`,
  //     `Reparos completos`,
  //     `Reparos na lataria`,
  //     `Chaveiro`
  //   ]
  // },
  frequentQuestions: [
    {
      question: `Como o seguro é cobrado?`,
      answer: `Através do cartão de crédito cadastrado na hora da contratação, conforme a duração do contrato e opção de pagamento que você escolheu. `
    },
    {
      question: `Se eu for trocar de carro preciso fazer um novo seguro ou só transferência?`,
      answer: `Não precisa, é só abrir uma solicitação de troca de veículo no seu contrato. É fácil e pode ser feito 
              através do aplicativo, site ou por telefone pelo (11)98674-0118 em horário comercial de segunda à sexta – 
              das 09h às 18h (exceto feriados) ou contate diretamente a seguradora contratada. A gente só vai te pedir 
              algumas informações do carro, agendar a vistoria e enviaremos a aprovação em até 7 dias úteis.`
    },
    {
      question: `O que é vistoria prévia?`,
      answer: `Quando você contrata um seguro, a gente precisa saber qual o status do seu carro e se a documentação está correta para finalizar a contratação do seu seguro.`
    },
    {
      question: `Qual o prazo para fazer a vistoria?`,
      answer: `Você tem até 7 dias após a contratação. Se não for feita, o seguro será cancelado e o seu pagamento estornado automaticamente.`
    },
    {
      question: `Como faço a abertura de sinistro?`,
      answer: `É só acessar o nosso aplicativo ou a sua conta em nosso site. Caso não seja possível, entre em contato 
              através do telefone (11)98674-0118 em horário comercial de segunda à sexta – das 09h às 18h (exceto feriados) 
              ou contate diretamente a seguradora contratada.`
    },
    {
      question: `Quais os documentos que preciso para abertura de sinistro?`,
      answerType: 'auto',
      answer: {
        documents: [
          {
            coverage: `Em caso de roubo e furto`,
            list: [
              `CNH (carteira de motorista do condutor) – obrigatório;`,
              `CRLV (documento do carro) – obrigatório;`,
              `Comprovante de residência do segurado – obrigatório;`,
              `Boletim de Ocorrência – obrigatório.`
            ]
          },
          {
            coverage: `Colisão`,
            list: [
              `CNH (carteira de motorista do condutor) – obrigatório;`,
              `CRLV (documento do carro) – obrigatório;`,
              `Comprovante de residência do segurado – obrigatório;`,
              `Boletim de Ocorrência – obrigatório quando houver vítimas;`,
              `Fotos do veículo.`
            ]
          },
          {
            coverage: `Eventos da natureza`,
            list: [
              `CNH (carteira de motorista do condutor) – obrigatório;`,
              `CRLV (documento do carro) – obrigatório;`,
              `Comprovante de residência do segurado – obrigatório;`,
              `Boletim de Ocorrência – obrigatório quando houver vítimas;`,
              `Fotos do veículo.`
            ]
          },
          {
            coverage: `Incêndio`,
            list: [
              `CNH (carteira de motorista do condutor) – obrigatório;`,
              `CRLV (documento do carro) – obrigatório;`,
              `Comprovante de residência do segurado – obrigatório;`,
              `Boletim de Ocorrência (boletim de ocorrência);`,
              `Fotos do veículo;`,
              `Laudo pericial do Corpo de Bombeiros.`,
              `Danos corporais a terceiros`
            ]
          },
          {
            coverage: `Danos corporais a terceiros`,
            insuredDocuments: {
              title: `Documentos do segurado`,
              list: [
                `CNH (carteira de motorista do condutor) – obrigatório;`,
                `CRLV (documento do carro) – obrigatório;`,
                `Comprovante de residência do segurado – obrigatório;`,
                `Boletim de Ocorrência - obrigatório somente em caso de vítimas;`,
                `Fotos do veículo - obrigatório se o acionamento for somente para atender ao terceiro.`
              ]
            },
            thirdPartDocuments: {
              title: `Documentos do terceiro`,
              list: [
                `Documento de identificação (CPF e RG) – obrigatório;`,
                `Comprovante de Residência do terceiro – obrigatório;`,
                `Boletim de Ocorrência - obrigatório.`
              ]
            },
            harm: {
              title: `Quando há apenas danos corporais`,
              list: [
                `Laudo médico com a descrição dos danos sofridos;`,
                `Relatório médico de alta - obrigatório.`
              ]
            },
            death: {
              title: `Quando há morte`,
              list: [
                `Laudo do IML;`,
                `Certidão de óbito;`,
                `Comprovante de rendimentos;`,
                `Documentos de beneficiários.`
              ]
            }
          },
          {
            coverage: `Danos materiais a terceiros`,
            insuredDocuments: {
              title: `Documentos do segurado`,
              list: [
                `CNH (carteira de motorista do condutor) – obrigatório;`,
                `CRLV (documento do carro) – obrigatório;`,
                `Comprovante de residência do segurado – obrigatório;`,
                `Boletim de Ocorrência - obrigatório somente em caso de vítimas;`,
                `Fotos do veículo - obrigatório se o acionamento for somente para atender ao terceiro.`
              ]
            },
            thirdPartDocuments: {
              title: `Documentos do terceiro`,
              list: [
                `CNH (carteira de motorista do condutor) – obrigatório;`,
                `CRLV (documento do carro) – obrigatório;`,
                `Comprovante de residência do terceiro – obrigatório;`,
                `Boletim de Ocorrência - obrigatório somente em caso de vítimas;`,
                `Fotos do veículo/objeto batido.`
              ]
            }
          },
          {
            coverage: `Acidentes de passageiros com despesas médicas e hospitalares`,
            insuredDocuments: {
              title: `Documentos do segurado`,
              list: [
                `CNH (carteira de motorista do condutor) – obrigatório;`,
                `CRLV (documento do carro) – obrigatório;`,
                `Comprovante de residência do segurado – obrigatório;`,
                `Boletim de Ocorrência - obrigatório;`,
                `Fotos do veículo - obrigatório se o acionamento for somente para atender ao terceiro.`
              ]
            },
            passengerDocuments: {
              title: `Documentos do passageiro`,
              list: [
                `Comprovante de residência do passageiro – obrigatório;`,
                `Boletim de Ocorrência - obrigatório;`,
                `Laudo médico com a descrição dos danos sofridos;`,
                `Relatório médico de alta;`,
                `Relatório do hospital;`,
                `Recibos de honorários médicos;`,
                `Recibos de internação;`,
                `Recibos de Medicamentos.`
              ]
            }
          }
        ]
      }
    },
    {
      question: `Como faço para enviar os documentos?`,
      answer: `Contratante
            Você pode mandar os documentos necessários direto pelo nosso aplicativo ou pelo acesso ao seu perfil em nosso site.
            Terceiro
            Você pode acessar o link que enviamos para acessar sua conta e anexar a documentação necessária.`
    },
    {
      question: `Como acompanho o status?`,
      answer: `Através do nosso aplicativo ou do seu perfil no nosso site. Mas avisaremos o andamento de tudo por 
              e-mail. Caso ainda fique qualquer dúvida, é só entrar em contato através do telefone (11)98674-0118 em 
              horário comercial de segunda à sexta – das 09h às 18h (exceto feriados) ou contate diretamente a 
              seguradora contratada.`
    },
    {
      question: `Posso aumentar ou diminuir o valor da franquia?`,
      answer: `Você define o valor da sua franquia na hora de contratar ou renovar o seu seguro.`
    },
    {
      question: `Quanto tempo demora para análise de sinistro?`,
      answer: `Até 10 dias úteis após o envio dos documentos e em caso de vistoria 5 dias úteis depois da realização dela.`
    },
    {
      question: `Como agendar a vistoria em caso de sinistro?`,
      answer: `Através do nosso aplicativo, do seu perfil no nosso site ou contato através do telefone (11)98674-0118 
              em horário comercial de segunda à sexta – das 09h às 18h (exceto feriados) ou contate diretamente a seguradora 
              contratada. Você escolhe o dia e o horário que for melhor para você, de acordo com as datas disponíveis.`
    },
    {
      question: `Onde é feita a vistoria?`,
      answer: `Em uma das oficinas referenciadas do seu seguro ou de sua escolha desde que ela possua CNPJ e emita 
              Nota Fiscal. Em caso de uma oficina que não seja referenciada, precisamos de todas as informações para 
              que nosso técnico possa ir até o local.`
    },
    {
      question: `Como faço o pagamento da franquia?`,
      answer: `O pagamento será feito diretamente para a oficina, quando for retirar o carro. A forma de pagamento vai variar de acordo com as opções do próprio estabelecimento.`
    },
    {
      question: `Em quanto tempo recebo o valor do seguro?`,
      answer: `O valor é pago em até 30 dias do envio completo dos documentos.`
    },
    {
      question: `Meu sinistro pode ser negado?`,
      answer: `Sim, isso acontece em casos como inconsistência nos documentos apresentados ou até mesmo por falta de cobertura.`
    },
    {
      question: `Como definir o condutor principal?`,
      answer: `É aquele que utiliza o carro 5 ou mais dias da semana, mas se for usado por mais de um condutor em dias 
              diferentes ou horários diferentes de um mesmo dia, é preciso descrever como condutor no contrato a pessoa mais jovem.`
    },
    {
      question: `Se outra pessoa estiver dirigindo o meu carro o seguro cobre?`,
      answer: `Cobre sim, desde que a idade do condutor esteja prevista no contrato e as documentações deles estejam todas em ordem.`
    },
    {
      question: `Como posso utilizar a assistência de carro reserva?`,
      answer: `Você pode utilizar caso fique sem carro porque acionou alguma cobertura do seguro, como alagamento, batida, incêndio, roubo ou furto.`
    }
  ]
};
