import { Insurances } from '@/components/common/home'
import { Insurance } from '@/components/common/Insurance'
import { MainLayout } from '@/components/common/layouts'
import { PageTitle } from '@/components/common/PageTitle'
import FAQTravel from '@/components/common/travel/faq-travel'
import { Carousel } from '@/components/ui'
import { insuranceInformation } from '@/utils/viagemInformation'
import { Box, Container, Link, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { styled } from 'styled-components'

export default function AutoDetalhes() {
    const items = [
        { src: '/images/produto-item-1.png', alt: 'Image 1', text: 'Seguro <br/> Viagem', href: '/seguros/viagem/detalhes', position: 40 }
    ];
    return (
        <MainLayout>
            <Container maxWidth="xl">
                <Box display="flex" justifyContent="center" sx={{ paddingTop: '30px' }}>
                    <PageTitle bold="Política de" regular="Privacidade" />
                </Box>
                <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#333333', fontSize: '32px', fontWeight: 700 }}>
                    1. Informações Gerais
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    A presente Política de Privacidade contém informações a respeito do modo como tratamos, total ou parcialmente, de forma automatizada ou não, os dados pessoais dos usuários que acessam o nosso site. Seu objetivo é esclarecer os interesses acerca dos tipos de dados que são coletados, dos motivos da coleta e da forma como o usuário poderá atualizar, gerenciar ou excluir estas informações.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Esta Política de Privacidade foi elaborada em conformidade com a Lei Federal n. 12.965 de 23 de abril de 2014 (Marco Civil da Internet), com a Lei Federal n. 13.709, de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais) e com o Regulamento UE n. 2016/679 de 27 de abril de 2016 (Regulamento Geral Europeu de Proteção de Dados Pessoais – RGPD).
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Esta Política de Privacidade poderá ser atualizada em decorrência de eventual atualização normativa, razão pela qual se convida o usuário a consultar periodicamente esta seção. O uso do site, serviços e produtos disponibilizados pela DGMAX pressupõe a aceitação irrevogável e expressa da política de privacidade e demais regras estabelecidas no Site.
                </Typography>

                <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#333333', fontSize: '32px', fontWeight: 700 }}>
                    2. Direitos do Usuário
                </Typography>

                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    O site se compromete a cumprir as normas previstas no LGPD, em respeito aos seguintes princípios:
                </Typography>

                <List sx={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                    {[
                        'Os dados pessoais do usuário serão processados de forma lícita, leal e transparente (licitude, lealdade e transparência);',
                        'Os dados pessoais do usuário serão coletados apenas para finalidades determinadas, explícitas e legítimas, não podendo ser tratados posteriormente de uma forma incompatível com essas finalidades (limitação das finalidades);',
                        'Os dados pessoais do usuário serão coletados de forma adequada, pertinente e limitada às necessidades do objetivo para os quais eles são processados (minimização dos dados);',
                        'Os dados pessoais do usuário serão exatos e atualizados sempre que necessário, de maneira que os dados inexatos sejam apagados ou retificados quando possível (exatidão);',
                        'Os dados pessoais do usuário serão conservados de uma forma que permita a identificação dos titulares dos dados apenas durante o período necessário para as finalidades para as quais são tratados (limitação da conservação);',
                        'Os dados pessoais do usuário serão tratados de forma segura, protegidos do tratamento não autorizado ou ilícito e contra a sua perda, destruição ou danificação acidental, adotando as medidas técnicas ou organizativas adequadas (integridade e confidencialidade).'
                    ].map((text, index) => (
                        <ListItem key={index} sx={{ display: 'list-item', paddingLeft: '4px' }}>
                            <ListItemText primary={text} sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }} />
                        </ListItem>
                    ))}
                </List>

                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    O usuário do site possui os seguintes direitos, conferidos pela Lei Geral de Proteção de Dados Pessoais e pelo LGPD:
                </Typography>

                <List sx={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                    {[
                        'Direito de confirmação e acesso: é o direito do usuário de obter do site a confirmação de que os dados pessoais que lhe digam respeito são ou não objeto de tratamento e, se for esse o caso, o direito de acessar os seus dados pessoais;',
                        'Direito de retificação: é o direito do usuário de obter do site, sem demora injustificada, a retificação dos dados pessoais inexatos, que lhe digam respeito;',
                        'Direito à eliminação dos dados (direito ao esquecimento): é o direito do usuário de ter seus dados apagados do site;',
                        'Direito à limitação do tratamento dos dados: é o direito do usuário de limitar o tratamento de seus dados pessoais, podendo obtê-la quando contesta a exatidão dos dados, quando o tratamento for ilícito, quando o site não precisar mais dos dados para as finalidades propostas e quando tiver se oposto ao tratamento dos dados e em caso de tratamento de dados desnecessários;',
                        'Direito da oposição: é o direito do usuário de, a qualquer momento, se opor por motivos relacionados com a sua situação particular, ao tratamento dos dados pessoais que lhe digam respeito, podendo se opor ainda ao uso de seus dados pessoais para definição de perfil de marketing (profiling);',
                        'Direito de portabilidade dos dados: é o direito do usuário de receber os dados pessoais que lhe digam respeito e que tenha fornecido ao site, num formato estruturado, de uso corrente e de leitura automática, e o direito de transmitir esses dados a outro site;',
                        'Direito de não ser submetido a decisões automatizadas: é o direito do usuário de não ficar sujeito a nenhuma decisão tomada exclusivamente com base no tratamento automatizado, incluindo a definição de perfis (profiling), que produza efeitos na sua esfera jurídica ou que o afete significativamente de forma similar.'
                    ].map((text, index) => (
                        <ListItem key={index} sx={{ display: 'list-item', paddingLeft: '4px' }}>
                            <ListItemText primary={text} sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }} />
                        </ListItem>
                    ))}
                </List>

                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    O usuário poderá exercer os seus direitos por meio de comunicação, escrita enviada ao site com o assunto “LGPD”, especificando:
                </Typography>

                <List sx={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                    {[
                        'Nome completo ou razão social, número do CPF (Cadastro de Pessoas Físicas, da Receita Federal do Brasil) ou CNPJ (Cadastro Nacional de Pessoa Jurídica, da Receita Federal do Brasil) e endereço de e-mail do usuário e, se for o caso, do seu representante;',
                        'Direito que deseja exercer junto ao site;',
                        'Data do pedido e assinatura do usuário;',
                        'Todo documento que possa demonstrar ou justificar o exercício de seu direito.'
                    ].map((text, index) => (
                        <ListItem key={index} sx={{ display: 'list-item', paddingLeft: '4px' }}>
                            <ListItemText primary={text} sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }} />
                        </ListItem>
                    ))}
                </List>

                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    O pedido deverá ser enviado ao e-mail, ou por correio, ao seguinte endereço:
                </Typography>

                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    <Link href="mailto:contato@dobyseg.com.br">contato@dobyseg.com.br</Link>
                </Typography>

                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    O usuário será informado em caso de retificação ou eliminação dos seus dados.
                </Typography>

                <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#333333', fontSize: '20px', fontWeight: 700 }}>
                    3. Dever de Não Fornecer Dados de Terceiros
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Durante a utilização do site, a fim de resguardar e de proteger os direitos de terceiros, o usuário do site deverá fornecer somente seus dados pessoais, e não os de terceiros.
                </Typography>

                <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#333333', fontSize: '32px', fontWeight: 700 }}>
                    4. Tipos de Dados Coletados
                </Typography>

                <Typography variant="h6" component="h3" gutterBottom sx={{ color: '#333333', fontSize: '24px', fontWeight: 700 }}>
                    4.0.1. Dados de identificação do usuário para realização de cadastro
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    A utilização, pelo usuário, de determinadas funcionalidades do site dependerá de cadastro, sendo que, nestes casos, os seguintes dados do usuário serão coletados e armazenados:
                </Typography>
                <List sx={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                    {[
                        'nome',
                        'endereço de e-mail',
                        'número de telefone',
                        'número de CPF',
                        'número de CNPJ'
                    ].map((text, index) => (
                        <ListItem key={index} sx={{ display: 'list-item', paddingLeft: '4px' }}>
                            <ListItemText primary={text} sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }} />
                        </ListItem>
                    ))}
                </List>

                <Typography variant="h6" component="h3" gutterBottom sx={{ color: '#333333', fontSize: '24px', fontWeight: 700 }}>
                    4.0.2. Dados relacionados à execução de contratos firmados com o usuário
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Para a execução de contrato de compra e venda ou de prestação de serviços eventualmente firmado entre o site e o usuário, poderão ser coletados e armazenados outros dados relacionados ou necessários a sua execução, incluindo o teor de eventuais comunicações tidas com o usuário.
                </Typography>

                <Typography variant="h6" component="h3" gutterBottom sx={{ color: '#333333', fontSize: '24px', fontWeight: 700 }}>
                    4.0.3. Registros de acesso
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Em atendimento às disposições do art. 15, caput e parágrafos, da Lei Federal n. 12.965/2014 (Marco Civil da Internet), os registros de acesso do usuário serão coletados e armazenados, por, pelo menos, seis meses.
                </Typography>

                <Typography variant="h6" component="h3" gutterBottom sx={{ color: '#333333', fontSize: '24px', fontWeight: 700 }}>
                    4.1. Fundamento jurídico para o tratamento dos dados pessoais
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Ao utilizar os serviços do site, o usuário está consentindo com a presente Política de Privacidade.
                    O usuário tem o direito de retirar seu consentimento a qualquer momento, não comprometendo a licitude do tratamento de seus dados pessoais antes da retirada. A retirada do consentimento poderá ser feita pelo e-mail: <Link href="mailto:contato@dobyseg.com.br">contato@dobyseg.com.br</Link>.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Poderão ainda ser coletados dados pessoais necessários para a execução e cumprimento dos serviços contratados pelo usuário no site.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    O tratamento de dados pessoais sem o consentimento do usuário apenas será realizado em razão de interesse legítimo ou para as hipóteses previstas em lei, ou seja, dentre outras as seguintes:
                </Typography>
                <List sx={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                    {[
                        'para o cumprimento da obrigação legal ou regulatória pelo controlador;',
                        'para a realização de estudos por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;',
                        'quando necessário para a execução de contrato ou de procedimentos preliminares relacionados a contrato do qual seja parte o usuário, a pedido do titular dos dados;',
                        'para o exercício regular de direitos em processo judicial, administrativo ou arbitral, esse último nos termos da Lei nº 9.307, de 23 de setembro de 1996 (Lei de Arbitragem);',
                        'para a proteção da vida ou da incolumidade física do titular dos dados ou de terceiro;',
                        'para a tutela da saúde, em procedimento realizado por profissionais da área da saúde ou por entidades sanitárias;',
                        'quando necessário para atender aos interesses legítimos do controlador ou de terceiro, exceto no caso de prevalecerem direitos e liberdades fundamentais do titular dos dados que exijam a proteção dos dados pessoais;',
                        'para a proteção do crédito, inclusive quanto ao disposto na legislação pertinente.'
                    ].map((text, index) => (
                        <ListItem key={index} sx={{ display: 'list-item', paddingLeft: '4px' }}>
                            <ListItemText primary={text} sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }} />
                        </ListItem>
                    ))}
                </List>

                <Typography variant="h6" component="h3" gutterBottom sx={{ color: '#333333', fontSize: '24px', fontWeight: 700 }}>
                    4.2. Finalidades do tratamento dos dados pessoais
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Os dados pessoais do usuário coletados pelo site têm por finalidade facilitar, agilizar e cumprir os compromissos estabelecidos com o usuário e a fazer cumprir as solicitações realizadas por meio do preenchimento de formulários.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Os dados pessoais poderão ser utilizados também com uma finalidade comercial, para personalizar o conteúdo oferecido ao usuário, bem como para dar subsídio ao site para a melhora da qualidade e funcionamento de seus serviços.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    O site recolhe os dados do usuário para que seja realizada definição de perfis (profiling), ou seja, tratamento automatizado de dados pessoais que consista em utilizar estes dados para avaliar certos aspectos pessoais do usuário, principalmente para analisar ou prever características relacionadas ao seu desempenho profissional, a sua situação econômica, saúde, preferências pessoais, interesses, fiabilidade, comportamento, localização ou deslocamento.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Os dados de cadastro serão utilizados para permitir o acesso do usuário a determinados conteúdos do site, exclusivos para usuários cadastrados.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    A coleta de dados relacionados ou necessários à execução de prestação de serviços eventualmente firmado com o usuário terá a finalidade de conferir às partes segurança jurídica, além de facilitar e viabilizar a conclusão do negócio.
                </Typography>

                <Typography variant="h6" component="h3" gutterBottom sx={{ color: '#333333', fontSize: '24px', fontWeight: 700 }}>
                    4.3. Prazo de conservação dos dados pessoais
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Os dados pessoais do usuário serão conservados por um período não superior ao exigido para cumprir os objetivos em razão dos quais eles são processados.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    O período de conservação dos dados são definidos de acordo com os seguintes critérios:
                </Typography>
                <List sx={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                    {[
                        'para o cumprimento de obrigação legal ou regulatória pelo controlador;',
                        'para estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;',
                        'para a transferência a terceiro, desde que respeitados os requisitos de tratamento de dados dispostos na legislação;',
                        'para uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que anonimizados os dados.'
                    ].map((text, index) => (
                        <ListItem key={index} sx={{ display: 'list-item', paddingLeft: '4px' }}>
                            <ListItemText primary={text} sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }} />
                        </ListItem>
                    ))}
                </List>

                <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#333333', fontSize: '32px', fontWeight: 700 }}>
                    5. Do Tratamento dos Dados Pessoais
                </Typography>

                <Typography variant="h6" component="h3" gutterBottom sx={{ color: '#333333', fontSize: '24px', fontWeight: 700 }}>
                    5.1. Do responsável pelo tratamento dos dados (data controller)
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    O controlador, responsável pelo tratamento dos dados pessoais do usuário, é a pessoa física ou jurídica, a autoridade pública, a agência ou outro organismo que, individualmente ou em conjunto com outras, determina as finalidades e os meios de tratamento de dados pessoais.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    O responsável pelo tratamento dos dados se encarregará diretamente do tratamento dos dados pessoais do usuário.
                </Typography>

                <Typography variant="h6" component="h3" gutterBottom sx={{ color: '#333333', fontSize: '24px', fontWeight: 700 }}>
                    5.2. Do encarregado de proteção de dados (data protection officer)
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    O encarregado de proteção de dados (data protection officer) é o profissional encarregado de informar, aconselhar e controlar o responsável pelo tratamento dos dados, bem como os trabalhadores que tratem os dados, a respeito das obrigações do site nos termos do LGDP, da Lei Geral de Proteção de Dados Pessoais e de outras disposições de proteção de dados presentes na legislação nacional e internacional, em cooperação com a autoridade de controle competente.
                </Typography>

                <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#333333', fontSize: '32px', fontWeight: 700 }}>
                    6. Segurança no Tratamento dos Dados Pessoais do Usuário
                </Typography>

                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    O site se compromete a aplicar as medidas técnicas e organizativas aptas a proteger os dados pessoais de acessos não autorizados e de situações de destruição, perda, alteração, comunicação ou difusão de tais dados.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Para a garantia da segurança, serão adotadas soluções que levem em consideração: as técnicas adequadas, os custos de aplicação; a natureza, o âmbito, o contexto e as finalidades do tratamento; e os riscos para os direitos e liberdades do usuário.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    O site utiliza certificado SSL (Secure Socket Layer) que garante que os dados pessoais se transmitam de forma segura e confidencial, de maneira que a transmissão dos dados entre o servidor e o usuário, e em retroalimentação, ocorra de maneira totalmente cifrada ou encriptada.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    No entanto, o site se exime de responsabilidade por culpa exclusiva de terceiro, como em caso de ataque de hackers ou crackers, ou culpa exclusiva do usuário, como no caso em que ele mesmo transfere seus dados a terceiro. O site se compromete, ainda, a comunicar o usuário em prazo adequado caso ocorra algum tipo de violação da segurança de seus dados pessoais que possa lhe causar um alto risco para seus direitos e liberdades pessoais.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    A violação de dados pessoais é uma violação de segurança que provoque, de modo acidental ou ilícito, a destruição, a perda, a alteração, a divulgação ou o acesso não autorizados a dados pessoais transmitidos, conservados ou sujeitos a qualquer outro tipo de tratamento.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Por fim, o site se compromete a tratar os dados pessoais do usuário com confidencialidade, dentro dos limites legais.
                </Typography>

                <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#333333', fontSize: '32px', fontWeight: 700 }}>
                    7. Dados de Navegação (Cookies)
                </Typography>

                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Cookies são pequenos arquivos de texto enviados pelo site ao computador do usuário e que nele ficam armazenados, com informações relacionadas à navegação do site.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Por meio dos cookies, pequenas quantidades de informação são armazenadas pelo navegador do usuário para que nosso servidor possa lê-las posteriormente. Podem ser armazenados, por exemplo, dados sobre o dispositivo utilizado pelo usuário, bem como seu local e horário de acesso ao site.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Os cookies não permitem que qualquer arquivo ou informação sejam extraídos do disco rígido do usuário, não sendo possível, ainda, que, por meio deles, se tenha acesso a informações pessoais que não tenham partido do usuário ou da forma como utiliza os recursos do site.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    É importante ressaltar que nem todo cookie contém informações que permitem a identificação do usuário, sendo que determinados tipos de cookies podem ser empregados simplesmente para que o site seja carregado corretamente ou para que suas funcionalidades funcionem do modo esperado.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    As informações eventualmente armazenadas em cookies que permitam identificar um usuário são consideradas dados pessoais. Dessa forma, todas as regras previstas nesta Política de Privacidade também lhes são aplicáveis.
                </Typography>

                <Typography variant="h6" component="h3" gutterBottom sx={{ color: '#333333', fontSize: '24px', fontWeight: 700 }}>
                    7.1. Cookies do site
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Os cookies do site são aqueles enviados ao computador ou dispositivo do usuário e administrador exclusivamente pelo site.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    As informações coletadas por meio destes cookies são utilizadas para melhorar e personalizar a experiência do usuário, sendo que alguns cookies podem, por exemplo, ser utilizados para lembrar as preferências e escolhas do usuário, bem como para o oferecimento de conteúdo personalizado.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Estes dados de navegação poderão, ainda, ser compartilhados com eventuais parceiros do site, buscando o aprimoramento dos produtos e serviços ofertados ao usuário.
                </Typography>

                <Typography variant="h6" component="h3" gutterBottom sx={{ color: '#333333', fontSize: '24px', fontWeight: 700 }}>
                    7.2. Gestão dos cookies e configurações do navegador
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    O usuário poderá se opor ao registro de cookies pelo site, bastando que desative esta opção no seu próprio navegador ou aparelho.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    A desativação dos cookies, no entanto, pode afetar a disponibilidade de algumas ferramentas e funcionalidades do site, comprometendo seu correto e esperado funcionamento. Outra consequência possível é a remoção das preferências do usuário que eventualmente tiverem sido salvas, prejudicando sua experiência.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    A seguir, são disponibilizados alguns links para as páginas de ajuda e suporte dos navegadores mais utilizados, que poderão ser acessados pelo usuário interessado em obter mais informações sobre a gestão de cookies em seu navegador:
                </Typography>

                <List sx={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                    <ListItem sx={{ display: 'list-item', paddingLeft: '4px' }}>
                        <Link href="https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                            Internet Explorer
                        </Link>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', paddingLeft: '4px' }}>
                        <Link href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                            Safari
                        </Link>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', paddingLeft: '4px' }}>
                        <Link href="https://support.google.com/chrome/answer/95647?hl=pt-BR&hlrm=pt" target="_blank" sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                            Google Chrome
                        </Link>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', paddingLeft: '4px' }}>
                        <Link href="https://support.mozzila.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sites-usam" target="_blank" sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                            Mozilla Firefox
                        </Link>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', paddingLeft: '4px' }}>
                        <Link href="https://support.opera.com/help/tutorials/security/privacy/" target="_blank" sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                            Opera
                        </Link>
                    </ListItem>
                </List>

                <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#333333', fontSize: '32px', fontWeight: 700 }}>
                    8. Das Alterações
                </Typography>

                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    A presente versão desta Política de Privacidade foi atualizada pela última vez em: dezembro de 2020.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    O editor se reserva o direito de modificar, a qualquer momento e sem qualquer aviso prévio, o site e as presentes normas, especialmente para adaptá-las às evoluções do site, seja pela disponibilização de novas funcionalidades, seja pela supressão ou modificação daquelas já existentes.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Dessa forma, convida-se o usuário a consultar periodicamente esta página para verificar as atualizações.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Ao utilizar o serviço após eventuais modificações, o usuário demonstra sua concordância com as novas normas. Caso discorde de alguma das modificações, deverá pedir, imediatamente, o cancelamento de sua conta e apresentar a sua ressalva ao serviço de atendimento, se assim o desejar.
                </Typography>

                <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#333333', fontSize: '32px', fontWeight: 700 }}>
                    9. Do Direito Aplicável e do Foro
                </Typography>

                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Para a solução das controvérsias decorrentes do presente instrumento, será aplicado integralmente o Direito brasileiro.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    Os eventuais litígios deverão ser apresentados no foro da comarca em que se encontra a sede do editor do site.
                </Typography>
                <Typography paragraph sx={{ color: '#333333', fontSize: '18px', fontWeight: 400 }}>
                    <strong>Mais informações:</strong> Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site. Esta política é efetiva a partir de Dezembro/2020.
                </Typography>
                <Box display="flex" justifyContent="center" sx={{ paddingBottom: '30px' }}>
                </Box>
            </Container>
        </MainLayout>
    )
}

export const ContainerBox = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 0px 35px 0px;
    background: #EFF2F0;
    box-shadow: 0px 4px 4px 0px #00000040;
`;

export const WelcomeContainer = styled.div`
    position: relative;
    width: 100%;
    height: 958px;
    background: transparent no-repeat;
    background-size: cover;

    @media (max-width: 1400px) {
        height: unset;
    }

    @media (max-width: 450px) {
        width: 100%;
        height: unset;
        background-position: -110px 0;
    }
`;

export const Welcome = styled.div`
    width: 100%;
    height: 958px;
    background: transparent no-repeat;
    background-size: cover;
    color: ${props => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
        font-size: 88px;

        &#regular {
            font-weight: 400;
        }

        &#italic {
            font-style: italic;
        }
    }

    h2 {
        font-size: 51px;
        margin-top: 100px;
    }

    p {
        width: 800px;
        font-size: 40px;
        margin-top: 40px;
    }

    @media (max-width: 800px) {
        padding: 300px 20px 500px;
    }

    @media (max-width: 600px) {
        p {
            width: 100%;
        }
    }

    @media (max-width: 450px) {
        h1 {
            font-size: 52px;
        }

        h2 {
            width: 200px;
            font-size: 28px;
            margin-top: 60px;
        }

        p {
            font-size: 19px;
        }
    }

    @media (max-width: 400px) {
        padding: 0 10px;
    }
`;

export const ButtonBox = styled(Box)`
    @media (max-width: 599px) {
        width: 100%;
    }
    @media (min-width: 600px) {
        width: 225px;
    }
`

export const TextContainer = styled(Box)`
    color: #333333;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    word-wrap: break-word
`;

export const TextBoxContainer = styled(Box)` 
  @media (min-width: 899px) {
    display: none;
  }
`