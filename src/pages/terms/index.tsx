import Head from 'next/head'
import 'react-dropdown/style.css'
import GlobalStyle from '../../../styles/globalStyle'
import { Header } from '../../components/Enterprise/Header'
import { Footer } from '../../components/Footer'
import {
  ChangesTermsConditions,
  ContactUs,
  ContainerBody,
  ContentContainer,
  Paragraph,
  SectionContainer,
  Subtitle,
  TermsConditions,
} from '../../pageStyles/termsStyles'

const Terms = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Empresarial | iCods</title>
      </Head>
      <Header darkMode={false} />
      <ContentContainer>
        <SectionContainer>
          <h2> Termos de Serviço </h2>
        </SectionContainer>
        <ContainerBody>
          <TermsConditions>
            <Subtitle>Termos e Condições </Subtitle>
            <Paragraph>
              Ao descarregar ou utilizar a aplicação, estes termos aplicar-se-ão automaticamente a
              si - deve, portanto, certificar-se de que os lê cuidadosamente antes de utilizar a
              aplicação. Não está autorizado a copiar, ou modificar a aplicação, qualquer parte da
              aplicação, ou as nossas marcas comerciais, de forma alguma. Não está autorizado a
              tentar extrair o código fonte do aplicativo, e também não deve tentar traduzir o
              aplicativo para outras línguas, ou fazer versões derivadas. A própria aplicação, e
              todas as marcas registadas, direitos de autor, direitos de base de dados e outros
              direitos de propriedade intelectual relacionados com a mesma, ainda pertencem ao
              iCods.
            </Paragraph>
            <Paragraph>
              O iCods está empenhado em assegurar que a aplicação seja tão útil e eficiente quanto
              possível. Por esse motivo, reservamo-nos o direito de fazer alterações à aplicação ou
              de cobrar pelos seus serviços, em qualquer altura e por qualquer razão. Nunca lhe
              cobraremos pela aplicação ou pelos seus serviços sem lhe tornarmos muito claro o que
              está a pagar.
            </Paragraph>
            <Paragraph>
              A aplicação iCods armazena e processa dados pessoais que o cliente nos forneceu, a fim
              de prestar o nosso Serviço. É da sua responsabilidade manter o seu telefone e o acesso
              à aplicação em segurança. Por conseguinte, recomendamos-lhe que não quebre ou
              desenraize o seu telefone, que é o processo de remoção de restrições e limitações de
              software impostas pelo sistema operativo oficial do seu dispositivo. Pode tornar o seu
              telefone vulnerável a malware/vírus/ programas maliciosos, comprometer as
              características de segurança do seu telefone e pode significar que a aplicação iCods
              não funcionará correctamente ou não funcionará de todo.
            </Paragraph>
            <Paragraph>
              A aplicação utiliza serviços de terceiros que declaram os seus próprios Termos e
              Condições.
            </Paragraph>
            <Paragraph>
              Ligação aos Termos e Condições de fornecedores de serviços de terceiros utilizados
              pela aplicação
            </Paragraph>

            <Paragraph style={{ marginLeft: '30px' }}>
              <li>Google Play Services</li>
              <li>Facebook</li>
            </Paragraph>
            <Paragraph>
              Deve estar ciente de que existem certas coisas pelas quais o iCods não assumirá
              responsabilidade. Certas funções do aplicativo exigirão que o aplicativo tenha uma
              ligação activa à Internet. A ligação pode ser Wi-Fi, ou fornecida pelo seu fornecedor
              de rede móvel, mas iCods não pode assumir a responsabilidade pelo facto de a aplicação
              não funcionar em pleno se não tiver acesso a Wi-Fi, e não lhe restar nenhum dos seus
              dados.
            </Paragraph>
            <Paragraph>
              Se estiver a utilizar a aplicação fora de uma área com Wi-Fi, deve lembrar-se que os
              seus termos do acordo com o seu fornecedor de rede móvel continuarão a ser aplicáveis.
              Como resultado, poderá ser-lhe cobrado pelo seu fornecedor móvel o custo dos dados
              durante a duração da ligação ao aceder à aplicação, ou outros encargos de terceiros.
              Ao utilizar a aplicação, está a aceitar a responsabilidade por tais encargos,
              incluindo encargos de roaming de dados se utilizar a aplicação fora do seu território
              de origem (ou seja, região ou país) sem desligar o roaming de dados. Se o cliente não
              for o pagador da factura do aparelho em que está a utilizar a aplicação, deve estar
              ciente de que assumimos que recebeu autorização do pagador da factura para utilizar a
              aplicação.
            </Paragraph>
            <Paragraph>
              Na mesma linha, iCods nem sempre pode assumir a responsabilidade pela forma como
              utiliza a aplicação, ou seja, precisa de se certificar de que o seu dispositivo
              permanece carregado - se ficar sem bateria e não o conseguir ligar para utilizar o
              Serviço, iCods não pode aceitar a responsabilidade.
            </Paragraph>
            <Paragraph>
              Com respeito à responsabilidade do iCods pela sua utilização do aplicativo, quando
              utiliza o aplicativo, é importante ter em mente que, embora nos esforcemos por
              assegurar que está sempre actualizado e correcto, confiamos em terceiros para nos
              fornecerem informações para que as possamos colocar à sua disposição. iCods não aceita
              qualquer responsabilidade por qualquer perda, directa ou indirecta, que o utilizador
              experimente como resultado de confiar totalmente nesta funcionalidade do aplicativo.
            </Paragraph>
            <Paragraph>
              A dada altura, poderemos querer actualizar a aplicação. O aplicativo está actualmente
              disponível no Android & iOS - os requisitos para ambos os sistemas (e para quaisquer
              sistemas adicionais aos quais decidamos alargar a disponibilidade do aplicativo) podem
              mudar, e será necessário descarregar as actualizações se quiser continuar a utilizar o
              aplicativo. iCods não promete que actualizará sempre o aplicativo para que seja
              relevante para si e/ou funcione com a versão do Android & iOS que tenha instalado no
              seu dispositivo. No entanto, promete aceitar sempre actualizações à aplicação quando
              lhe for oferecida, Podemos também desejar deixar de fornecer a aplicação, e podemos
              terminar a utilização da mesma em qualquer altura sem lhe notificar a conclusão da
              mesma. A menos que lhe digamos o contrário, após qualquer rescisão, (a) os direitos e
              licenças concedidos nestes termos cessarão; (b) deverá deixar de utilizar a aplicação,
              e (se necessário) eliminá-la do seu dispositivo.
            </Paragraph>
          </TermsConditions>
          <ChangesTermsConditions>
            <Subtitle>Alterações a estes Termos e Condições</Subtitle>
            <Paragraph>
              Podemos actualizar os nossos Termos e Condições de vez em quando. Assim, é
              aconselhável que reveja esta página periodicamente para quaisquer alterações. Iremos
              notificar o utilizador de quaisquer alterações, publicando os novos Termos e Condições
              nesta página.
            </Paragraph>
            <Paragraph>Estes termos e condições são aplicáveis a partir de 2021-11-15</Paragraph>
          </ChangesTermsConditions>
          <ContactUs>
            <Subtitle>Contacte-nos</Subtitle>
            <Paragraph>
              Se tiver quaisquer perguntas ou sugestões sobre os nossos Termos e Condições, não
              hesite em contactar-nos em icods.tech@gmail.com.
            </Paragraph>
          </ContactUs>
        </ContainerBody>
      </ContentContainer>
      <Footer />
    </>
  )
}

export default Terms
