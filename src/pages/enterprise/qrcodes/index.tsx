import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext, useMemo, useState } from 'react'
import 'react-dropdown/style.css'
import ApiHandler from '../../../../services/apiHandler'
import GlobalStyle from '../../../../styles/globalStyle'
import { HeaderClient } from '../../../components/Enterprise/ClientsSection/Header'
import CreateLotModal from '../../../components/Enterprise/CreateLotModal'
import LeftSection from '../../../components/Enterprise/LeftSection'
import ListTable from '../../../components/Enterprise/ListTable'
import { AuthContext } from '../../../context/auth'
import { ButtonIconContainer, Container, GrayDivider, RightSectionContainer, TableButton, TableButtonsContainer, TableButtonText } from './syles'

function qrcodesColumns() {
  const columns = useMemo(
    () => [
      {
        Header: 'Código QR Code',
        accessor: 'id',
      },
      {
        Header: 'Estado',
        accessor: 'status',
      },
      {
        Header: 'Funcionalidades',
        accessor: 'functionalities',
      },
    ],
    []
  )

  return columns
}

const EnterpriseQRCodes = ({ qrcodes }) => {

  qrcodes = [
    {
      "id": "596975a9-07de-4408-8f41-604c80e00a15",
      "status": "ACTIVE",
      "link": "",
      "content": "",
      "favorited": false,
      "madeColor": "noColor",
      "receivedColor": "noColor",
      "postId": null,
      "created_at": "2022-04-07T03:33:32.980Z",
      "received_at": null,
      "user": null
    },
    {
      "id": "da90b883-a761-456b-aa95-8d1c1de98b4f",
      "status": "IN_PROGRESS",
      "link": "",
      "content": "",
      "favorited": false,
      "madeColor": "noColor",
      "receivedColor": "noColor",
      "postId": null,
      "created_at": "2022-04-07T03:33:32.966Z",
      "received_at": null,
      "user": null
    },
    {
      "id": "ce4fb79b-c2c1-430f-bea9-fb487d0313a7",
      "status": "INACTIVE",
      "link": "",
      "content": "",
      "favorited": false,
      "madeColor": "noColor",
      "receivedColor": "noColor",
      "postId": null,
      "created_at": "2022-04-07T03:33:32.994Z",
      "received_at": null,
      "user": null
    }
  ]

  // MELHORAR ISSO DEPOIS
  qrcodes = qrcodes.map((qrcodes) => ({ ...qrcodes, id: qrcodes.id.slice(0, 8) }))

  const { getToken } = useContext(AuthContext)
  const api = new ApiHandler(true, getToken())
  const router = useRouter()
  const [createLotModalOpen, setCreateLotModalOpen] = useState(false)
  const columns = qrcodesColumns()

  console.log({qrcodes, columns});

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Empresarial | iCods</title>
      </Head>
      <Container>
        <LeftSection />
        <CreateLotModal
          createLotModalOpen={createLotModalOpen}
          closeModal={() => setCreateLotModalOpen(false)}
        />
        <RightSectionContainer>
          <HeaderClient pageType='qrcodes' name="Ivonaldo Ivonaldo" position="Design Gráfico" />
          <GrayDivider />
          <TableButtonsContainer>
            <TableButton onClick={() => setCreateLotModalOpen(true)}>
              <ButtonIconContainer src="/images/printer.svg" alt="Create QR Codes" />
              <TableButtonText>Imprmir Lote</TableButtonText>
            </TableButton>
          </TableButtonsContainer>
          <ListTable
            columns={columns}
            data={qrcodes}
            type={'qrcodes'}
          />
        </RightSectionContainer>
      </Container>
    </>
  )
}

export default EnterpriseQRCodes

