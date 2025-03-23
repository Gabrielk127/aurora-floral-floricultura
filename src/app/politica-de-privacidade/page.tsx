import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PoliticaDePrivacidade() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-[#d8b5b4] hover:text-[#b08e8d] hover:bg-[#f2e6e5] -ml-4 cursor-pointer"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Voltar para a página inicial
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-[#f2e6e5] p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#d8b5b4] mb-6 text-center">
            Política de Privacidade
          </h1>
          <p className="text-muted-foreground text-sm mb-8 text-center">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-[#d8b5b4] mb-3">
                1. Introdução
              </h2>
              <p className="text-muted-foreground mb-3">
                A Aurora Floral está comprometida em proteger sua privacidade.
                Esta Política de Privacidade explica como coletamos, usamos,
                divulgamos, transferimos e armazenamos suas informações. Por
                favor, reserve um momento para se familiarizar com nossas
                práticas de privacidade.
              </p>
              <p className="text-muted-foreground mb-3">
                Ao utilizar nosso site, você concorda com a coleta e uso de
                informações de acordo com esta política.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d8b5b4] mb-3">
                2. Coleta de Informações
              </h2>
              <p className="text-muted-foreground mb-3">
                Coletamos informações para fornecer melhores serviços a todos os
                nossos usuários. As informações que coletamos incluem:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <span className="font-medium">
                    Informações que você nos fornece:
                  </span>{" "}
                  Quando você se cadastra em nosso site, realiza uma compra ou
                  entra em contato conosco, podemos solicitar informações
                  pessoais como nome, endereço de e-mail, endereço para entrega,
                  número de telefone e informações de pagamento.
                </li>
                <li>
                  <span className="font-medium">
                    Informações que coletamos automaticamente:
                  </span>{" "}
                  Coletamos informações sobre como você usa nosso site, como os
                  tipos de conteúdo que você visualiza ou com os quais se
                  envolve, ou a frequência e duração de suas atividades.
                </li>
                <li>
                  <span className="font-medium">
                    Informações de dispositivo:
                  </span>{" "}
                  Coletamos informações específicas do dispositivo, como modelo
                  de hardware, versão do sistema operacional, identificadores
                  exclusivos de dispositivo e informações de rede móvel,
                  incluindo número de telefone.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d8b5b4] mb-3">
                3. Uso das Informações
              </h2>
              <p className="text-muted-foreground mb-3">
                Utilizamos as informações coletadas para:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Processar, entregar e manter seu pedido;</li>
                <li>Fornecer, manter, proteger e melhorar nossos serviços;</li>
                <li>Desenvolver novos serviços;</li>
                <li>Proteger a Aurora Floral e nossos usuários;</li>
                <li>Personalizar sua experiência;</li>
                <li>
                  Comunicar-se com você sobre promoções, eventos e outras
                  notícias relacionadas à Aurora Floral;
                </li>
                <li>Cumprir obrigações legais.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d8b5b4] mb-3">
                4. Compartilhamento de Informações
              </h2>
              <p className="text-muted-foreground mb-3">
                Não compartilhamos informações pessoais com empresas,
                organizações ou indivíduos externos à Aurora Floral, exceto nas
                seguintes circunstâncias:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <span className="font-medium">Com seu consentimento:</span>{" "}
                  Compartilharemos informações pessoais com empresas,
                  organizações ou indivíduos externos à Aurora Floral quando
                  tivermos seu consentimento para fazê-lo.
                </li>
                <li>
                  <span className="font-medium">
                    Para processamento externo:
                  </span>{" "}
                  Fornecemos informações pessoais a nossos afiliados ou outras
                  empresas ou pessoas confiáveis para processá-las para nós, com
                  base em nossas instruções e em conformidade com nossa Política
                  de Privacidade.
                </li>
                <li>
                  <span className="font-medium">Por motivos legais:</span>{" "}
                  Compartilharemos informações pessoais com empresas,
                  organizações ou indivíduos externos à Aurora Floral se
                  acreditarmos de boa-fé que o acesso, uso, preservação ou
                  divulgação das informações seja razoavelmente necessário para
                  cumprir qualquer lei, regulamento, processo legal ou
                  solicitação governamental aplicável.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d8b5b4] mb-3">
                5. Cookies e Tecnologias Semelhantes
              </h2>
              <p className="text-muted-foreground mb-3">
                Utilizamos cookies e tecnologias semelhantes para coletar e
                armazenar informações quando você visita nosso site. Isso pode
                incluir o uso de cookies ou tecnologias semelhantes para
                identificar seu navegador ou dispositivo.
              </p>
              <p className="text-muted-foreground mb-3">
                Os cookies nos permitem reconhecê-lo quando você retorna ao
                nosso site, lembrar suas preferências e oferecer uma experiência
                mais personalizada. Você pode configurar seu navegador para
                recusar todos os cookies ou para indicar quando um cookie está
                sendo enviado. No entanto, algumas funcionalidades do site podem
                não funcionar corretamente se os cookies estiverem desativados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d8b5b4] mb-3">
                6. Direitos do Usuário
              </h2>
              <p className="text-muted-foreground mb-3">
                Você tem os seguintes direitos em relação aos seus dados
                pessoais:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Direito de acesso aos seus dados pessoais;</li>
                <li>
                  Direito de retificação de dados incompletos, inexatos ou
                  desatualizados;
                </li>
                <li>Direito de eliminação dos dados pessoais;</li>
                <li>Direito de portabilidade dos dados;</li>
                <li>Direito de revogar o consentimento a qualquer momento;</li>
                <li>
                  Direito de apresentar uma reclamação a uma autoridade de
                  controle.
                </li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Para exercer qualquer um desses direitos, entre em contato
                conosco através do e-mail: contato@aurorafloral.com.br.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d8b5b4] mb-3">
                7. Segurança dos Dados
              </h2>
              <p className="text-muted-foreground mb-3">
                Trabalhamos arduamente para proteger a Aurora Floral e nossos
                usuários contra acesso não autorizado ou alteração, divulgação
                ou destruição não autorizada das informações que detemos. Em
                particular:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Criptografamos muitos de nossos serviços usando SSL;</li>
                <li>
                  Revisamos nossas práticas de coleta, armazenamento e
                  processamento de informações, incluindo medidas de segurança
                  física, para proteger contra acesso não autorizado aos
                  sistemas;
                </li>
                <li>
                  Restringimos o acesso a informações pessoais a funcionários,
                  contratados e agentes da Aurora Floral que precisam conhecer
                  essas informações para processá-las para nós, e que estão
                  sujeitos a rigorosas obrigações contratuais de
                  confidencialidade.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d8b5b4] mb-3">
                8. Alterações na Política
              </h2>
              <p className="text-muted-foreground mb-3">
                Nossa Política de Privacidade pode mudar de tempos em tempos.
                Não reduziremos seus direitos sob esta Política de Privacidade
                sem seu consentimento explícito. Publicaremos quaisquer
                alterações na política de privacidade nesta página e, se as
                alterações forem significativas, forneceremos um aviso mais
                proeminente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d8b5b4] mb-3">
                9. Contato
              </h2>
              <p className="text-muted-foreground mb-3">
                Se você tiver alguma dúvida sobre esta Política de Privacidade,
                entre em contato conosco através do e-mail:
                contato@aurorafloral.com.br ou pelo telefone (11) 9999-9999.
              </p>
            </section>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/">
            <Button className="bg-[#d8b5b4] hover:bg-[#b08e8d] text-white cursor-pointer">
              Voltar para a página inicial
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
