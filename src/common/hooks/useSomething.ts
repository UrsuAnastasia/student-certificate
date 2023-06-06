import { Modal } from 'antd'

export const errorModal = (title: string, content: string) => {
  Modal.error({
    title: title,
    content: content,
  })
}
export const successModal = (title: string, content: string) => {
  Modal.success({
    title: title,
    content: content,
  })
}
