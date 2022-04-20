import { useRouter } from 'next/router'
import React from 'react'
import { PATH_LIST_LOTS, PATH_LIST_QRCODES } from '../../constants/urls'
import { ChatIcon, DeleteIcon, DetailIcon, FunctionalitiesContainers, PrinterIcon } from './styles'

interface FunctionalitiesProps {
  type: 'clients' | 'lots' | 'qrcodes'
  clicked: (type: string) => void
}

export const Functionalities = ({ type, clicked }: FunctionalitiesProps) => {
  const functionalitiesTypes = {
    clients: () => ({
      detail: (
        <DetailIcon
          src="/images/detail.svg"
          onClick={() => clicked('clientsDetails')}
          alt="Detalhes"
        />
      ),
      chat: (
        <ChatIcon
          src="/images/chat.svg"
          alt="Chat de conversa"
          onClick={() => clicked('clientsChat')}
        />
      ),
      delete: (
        <DeleteIcon
          src="/images/delete.svg"
          alt="Deletar"
          onClick={() => clicked('clientsDelete')}
        />
      ),
    }),
    lots: () => ({
      detail: (
        <DetailIcon
          src="/images/detail.svg"
          onClick={() => clicked('lotsDetails')}
          alt="Detalhes"
        />
      ),
      printer: (
        <PrinterIcon
          src="/images/imprimir.svg"
          onClick={() => clicked('lotsPrinter')}
          alt="Imprimir"
        />
      ),
      delete: (
        <DeleteIcon src="/images/delete.svg" onClick={() => clicked('deleteLot')} alt="Deletar" />
      ),
    }),
    qrcodes: () => ({
      printer: (
        <PrinterIcon
          src="/images/imprimir.svg"
          onClick={() => clicked('qrcodePrinter')}
          alt="Imprimir"
        />
      ),
      delete: (
        <DeleteIcon
          src="/images/delete.svg"
          onClick={() => clicked('deleteQRCode')}
          alt="Deletar"
        />
      ),
    }),
  }

  const functionalities = Object.keys(functionalitiesTypes[type]())

  return (
    <FunctionalitiesContainers>
      {functionalities.map(function (key, index) {
        return functionalitiesTypes[type]()[key]
      })}
    </FunctionalitiesContainers>
  )
}
