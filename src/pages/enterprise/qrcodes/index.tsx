import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext, useEffect, useMemo, useState } from 'react'
import 'react-dropdown/style.css'
import ApiHandler from '../../../../services/apiHandler'
import GlobalStyle from '../../../../styles/globalStyle'
import { HeaderClient } from '../../../components/Enterprise/ClientsSection/Header'
import CreateLotModal from '../../../components/Enterprise/CreateLotModal'
import LeftSection from '../../../components/Enterprise/LeftSection'
import ListTable from '../../../components/Enterprise/ListTable'
import { BUSINESS_PATH } from '../../../constants/urls'
import { AuthContext } from '../../../context/auth'
import { BodyContainer } from '../../../pageStyles/clientsStyles'
import {
  ButtonIconContainer,
  Container,
  GrayDivider,
  RightSectionContainer,
  TableButton,
  TableButtonsContainer,
  TableButtonText,
} from '../../../pageStyles/qrcodeStyles'

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

const EnterpriseQRCodes = () => {
  const router = useRouter()
  const { id } = router.query

  const getQRCodes = async () => {
    try {
      const { data } = await api.get(`${BUSINESS_PATH}/clients/lots/${id}/qrcodes`)
      setQRCodes(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getQRCodes()
  }, [])

  const { getToken } = useContext(AuthContext)
  const api = new ApiHandler(true, getToken())
  const [createLotModalOpen, setCreateLotModalOpen] = useState(false)
  const [qrcodes, setQRCodes] = useState([])
  const columns = qrcodesColumns()

  const handleClickPrinter = async (id: string, isQRcode: boolean) => {
    const { data } = await api.get(`${BUSINESS_PATH}/qrcode-file/` + id + '?qrcode=' + isQRcode)
    window.open('data:application/pdf;charset=utf-16le;base64,' + data)
  }

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
          <HeaderClient pageType="qrcodes" name="iCods Tech" id={String(id)} />
          <GrayDivider />
          <BodyContainer>
            <TableButtonsContainer>
              <TableButton onClick={() => handleClickPrinter(String(id), false)}>
                <ButtonIconContainer src="/images/printer.svg" alt="Create QR Codes" />
                <TableButtonText>Imprmir Lote</TableButtonText>
              </TableButton>
            </TableButtonsContainer>
            <ListTable columns={columns} setData={setQRCodes} data={qrcodes} type={'qrcodes'} />
          </BodyContainer>
        </RightSectionContainer>
      </Container>
    </>
  )
}

export default EnterpriseQRCodes
