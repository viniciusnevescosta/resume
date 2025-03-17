import { useCallback, useEffect, useState } from 'react'
import type { OptionsModalProps } from '../interfaces/IOptionsModalProps'

export const OptionsModal = ({
	modalTitle,
	modalOptions,
	isOpen,
	onClose,
}: OptionsModalProps & { onClose: () => void }) => {
	const [visibility, setVisibility] = useState(isOpen)

	const handleClose = useCallback(() => {
		setVisibility(false)
		onClose()
	}, [onClose])

	const closeModal = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				handleClose()
			}
		},
		[handleClose],
	)

	useEffect(() => {
		setVisibility(isOpen)
	}, [isOpen])

	useEffect(() => {
		if (isOpen === false) {
			handleClose()
		}
	}, [isOpen, handleClose])

	useEffect(() => {
		visibility === true
			? document.addEventListener('keydown', closeModal)
			: document.removeEventListener('keydown', closeModal)

		return () => {
			document.removeEventListener('keydown', closeModal)
		}
	}, [visibility, closeModal])

	const radioGroup = modalOptions.map(option => (
		<div key={option.id} className='radio-option'>
			<input
				id={option.id}
				name='radio-group'
				value={option.value}
				type='radio'
			/>
			<label htmlFor={option.id}>{option.value}</label>
		</div>
	))

	return (
		<>
			{visibility && (
				<div className='container-popup'>
					<div className='popup'>
						<i
							id='close_modal'
							className='icon ri-close-line ri-xl'
							title='Fechar'
							role='button'
							tabIndex={0}
							onClick={handleClose}
							onKeyDown={e => e.key === 'Enter' && handleClose()}
						/>
						<h3 className='popup-title'>{modalTitle}</h3>
						<div className='popup-options'>
							<form>{radioGroup}</form>
						</div>
						<p className='popup-exit'>
							Pressione <kbd>ESC</kbd> para fechar
						</p>
					</div>
					<div
						className='container-background'
						onClick={handleClose}
						role='button'
						tabIndex={0}
						onKeyDown={e =>
							(e.key === 'Enter' || e.key === ' ') && handleClose()
						}
					/>
				</div>
			)}
		</>
	)
}
