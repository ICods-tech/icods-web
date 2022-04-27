import React from 'react'
import PropTypes from 'prop-types'
import { ToastContainer, ToastInnerText } from './styles'
import { toast } from 'react-toastify'
import { FaInfo, FaCheck, FaExclamationTriangle, FaBug, FaExclamationCircle } from 'react-icons/fa'

export const displayIcon = (type: 'success' | 'info' | 'error' | 'warning') => {
  switch (type) {
    case 'success':
      return <FaCheck />
    case 'info':
      return <FaInfo />
    case 'error':
      return <FaExclamationCircle />
    case 'warning':
      return <FaExclamationTriangle />
    default:
      return <FaBug />
  }
}

const ToastMessage = ({ type, message }) =>
  toast[type](
    <ToastContainer>
      <ToastInnerText>{message}</ToastInnerText>
    </ToastContainer>
  )

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

ToastMessage.dismiss = toast.dismiss

export default ToastMessage

