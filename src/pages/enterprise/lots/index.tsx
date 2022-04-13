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


function lotsColumns() {
  const columns = useMemo(
    () => [
      {
        Header: 'Código do Lote',
        accessor: 'id',
      },
      {
        Header: 'Quantidade QR Codes',
        accessor: 'numberOfQRCodes',
      },
      {
        Header: 'Data de criação',
        accessor: 'created_at',
      },
      {
        Header: 'Última modificação',
        accessor: 'updated_at',
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

const EnterpriseLots = ({ lots }) => {
  lots = [
    {
      "id": "762090f5-2c53-4112-9db1-0509ecff42dc",
      "numberOfQRCodes": 10,
      "created_at": "2022-04-09T20:54:07.872Z",
      "updated_at": "2022-04-09T20:54:08.258Z"
    },
    {
      "id": "d1d6b503-aeee-4bff-9560-7a905d0227c3",
      "numberOfQRCodes": 10,
      "created_at": "2022-04-09T20:54:09.419Z",
      "updated_at": "2022-04-09T20:54:09.635Z"
    }
  ]

  // MELHORAR ISSO DEPOIS
  lots = lots.map((lots) => ({ ...lots, created_at: new Date(lots.created_at).toLocaleDateString() }))
  lots = lots.map((lots) => ({ ...lots, updated_at: new Date(lots.updated_at).toLocaleDateString() }))
  lots = lots.map((lots) => ({ ...lots, id: lots.id.slice(0, 8) }))

  const { getToken } = useContext(AuthContext)
  const api = new ApiHandler(true, getToken())
  const router = useRouter()
  const [createLotModalOpen, setCreateLotModalOpen] = useState(false)
  const columns = lotsColumns()

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
          <HeaderClient pageType='lots' name="Ivonaldo Ivonaldo" position="Design Gráfico" />
          <GrayDivider />
          <TableButtonsContainer>
            <TableButton onClick={() => setCreateLotModalOpen(true)}>
              <ButtonIconContainer src="/images/enterprise/qrcodes.svg" alt="Create QR Codes" />
              <TableButtonText>Criar QR Code</TableButtonText>
            </TableButton>
          </TableButtonsContainer>
          <ListTable
            columns={columns}
            data={lots}
            type={'lots'}
          />
        </RightSectionContainer>
      </Container>
    </>
  )
}

export default EnterpriseLots

