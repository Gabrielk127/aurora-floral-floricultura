import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermosDeUso() {
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
            Termos de Uso
          </h1>
          <p className="text-muted-foreground text-sm mb-8 text-center">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-[#d8b5b4] mb-3">
                1. Aceitação dos Termos
              </h2>
              <p className="text-muted-foreground mb-3">
                Ao acessar e utilizar o site da Aurora Floral, você concorda em
                cumprir e estar vinculado aos seguintes termos e condições de
                uso. Se você não concordar com qualquer parte destes termos, não
                deverá utilizar nosso site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d8b5b4] mb-3">
                2. Uso do Site
              </h2>
              <p className="text-muted-foreground mb-3">
                O conteúdo do site da Aurora Floral é destinado apenas para seu
                uso pessoal e não comercial. Você concorda em utilizar o site
                apenas para fins legais e de maneira que não infrinja os
                direitos de terceiros ou restrinja ou iniba o uso e
                aproveitamento do site por qualquer terceiro.
              </p>
              <p className="text-muted-foreground mb-3">Você não deve:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  Usar o site de qualquer maneira que possa causar danos ao site
                  ou prejudicar a disponibilidade ou acessibilidade do mesmo;
                </li>
                <li>
                  Usar o site para transmitir, ou facilitar a transmissão de,
                  qualquer material publicitário ou promocional não solicitado;
                </li>
                <li>
                  Usar o site para qualquer finalidade fraudulenta, ou em
                  conexão com um crime ou atividade ilegal;
                </li>
                <li>
                  Usar o site para enviar, usar ou reutilizar qualquer material
                  que não esteja em conformidade com nossos padrões de conteúdo.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d8b5b4] mb-3">
                3. Propriedade Intelectual
              </h2>
              <p className="text-muted-foreground mb-3">
                Todo o conteúdo incluído no site, como textos, gráficos,
                logotipos, ícones, imagens, clipes de áudio, downloads digitais,
                compilações de dados e software, é propriedade da Aurora Floral
                ou de seus fornecedores de conteúdo e está protegido pelas leis
                brasileiras e internacionais de direitos autorais.
              </p>
              <p className="text-muted-foreground mb-3">
                Você não pode extrair e/ou reutilizar sistematicamente partes do
                conteúdo do site sem o consentimento expresso por escrito da
                Aurora Floral. Em particular, você não pode utilizar qualquer
                mineração de dados, robôs ou ferramentas similares de coleta e
                extração de dados para extrair (seja uma vez ou várias vezes)
                para reutilização de qualquer parte substancial deste site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d8b5b4] mb-3">
                4. Compras e Entregas
              </h2>
              <p className="text-muted-foreground mb-3">
                Ao realizar uma compra em nosso site, você concorda com os
                seguintes termos:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  As imagens dos produtos são meramente ilustrativas. Devido à
                  natureza dos produtos florais, podem ocorrer variações de cor,
                  formato e tamanho;
                </li>
                <li>
                  A Aurora Floral reserva-se o direito de substituir flores ou
                  itens por outros de valor e qualidade similares, caso os
                  originais não estejam disponíveis;
                </li>
                <li>
                  Os prazos de entrega são estimados e podem variar de acordo
                  com a disponibilidade, localização e condições climáticas;
                </li>
                <li>
                  Pedidos cancelados estão sujeitos à nossa política de
                  cancelamento e reembolso.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d8b5b4] mb-3">
                5. Limitação de Responsabilidade
              </h2>
              <p className="text-muted-foreground mb-3">
                A Aurora Floral não será responsável por quaisquer danos
                diretos, indiretos, incidentais, consequenciais ou punitivos
                resultantes do seu acesso ou uso, ou incapacidade de acessar ou
                usar o site.
              </p>
              <p className="text-muted-foreground mb-3">
                Não garantimos que o site estará disponível ininterruptamente,
                será seguro ou livre de erros, ou que quaisquer defeitos serão
                corrigidos. O site e seu conteúdo são fornecidos como estão e
                conforme disponíveis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d8b5b4] mb-3">
                6. Alterações nos Termos
              </h2>
              <p className="text-muted-foreground mb-3">
                A Aurora Floral reserva-se o direito de modificar estes termos a
                qualquer momento. As alterações entrarão em vigor imediatamente
                após sua publicação no site. É sua responsabilidade verificar
                periodicamente se houve alterações. O uso contínuo do site após
                a publicação de quaisquer alterações constitui aceitação dessas
                alterações.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d8b5b4] mb-3">
                7. Legislação Aplicável
              </h2>
              <p className="text-muted-foreground mb-3">
                Estes termos e condições são regidos e interpretados de acordo
                com as leis brasileiras, e quaisquer disputas relacionadas a
                estes termos e condições estarão sujeitas à jurisdição exclusiva
                dos tribunais brasileiros.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#d8b5b4] mb-3">
                8. Contato
              </h2>
              <p className="text-muted-foreground mb-3">
                Se você tiver alguma dúvida sobre estes Termos de Uso, entre em
                contato conosco através do e-mail: contato@aurorafloral.com.br
                ou pelo telefone (11) 9999-9999.
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
