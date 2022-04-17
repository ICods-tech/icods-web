import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
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

const EnterpriseQRCodes = () => {
  const handleGenerateQRCodes = useCallback(async () => {
    try {
      const lotId = 123;
      api
        .get('/business-printer-lot/' + lotId,
          { responseType: 'blob' }
        )
        .then((response) => {
          const pdfFile = new Blob([response.data], { type: 'application/pdf' })
          const fileURL = URL.createObjectURL(pdfFile)
          window.open(fileURL)
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  const getQRCodes = async () => {
    const { id } = router.query
    try {
      const { data } = await api.get(`/client-business-qrcodes/${id}`)
      // const filteredResponse = data.map((qrcodes) => {
      //   return { ...qrcodes, id: qrcodes.id.slice(0, 8) }
      // })
  
      setQRCodes(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getQRCodes();
  },[])


  const { getToken } = useContext(AuthContext)
  const api = new ApiHandler(true, getToken())
  const router = useRouter()
  const [createLotModalOpen, setCreateLotModalOpen] = useState(false)
  const [qrcodes, setQRCodes] = useState([])
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
          <HeaderClient pageType='qrcodes' name="iCods Tech"/>
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

