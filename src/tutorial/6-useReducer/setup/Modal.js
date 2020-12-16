/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'

const Modal = ({ modalContent, closeModal }) => {
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		closeModal()
	// 	}, 3000)
	// })

	useEffect(() => {
		const timeOut = setTimeout(() => {
			closeModal()
		}, 3000)
		return () => {
			clearTimeout(timeOut)
		}
	})
	return (
		<div className='modal'>
			<p>{modalContent}</p>
		</div>
	)
}

export default Modal
