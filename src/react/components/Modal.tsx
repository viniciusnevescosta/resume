import * as React from 'react'
import type { OptionsModalProps } from '../interfaces/IOptionsModalProps'
import { useI18n } from '../context/I18nContext'

export const OptionsModal = ({
    modalTitle,
    modalOptions,
    isOpen,
    onClose
}: OptionsModalProps & { onClose: () => void }) => {
    const [visibility, setVisibility] = React.useState(isOpen)
    const i18n = useI18n()

    const handleClose = React.useCallback(() => {
        setVisibility(false)
        onClose()
    }, [onClose])

    const closeModal = React.useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose()
            }
        },
        [handleClose]
    )

    React.useEffect(() => {
        setVisibility(isOpen)
    }, [isOpen])

    React.useEffect(() => {
        if (isOpen === false) {
            handleClose()
        }
    }, [isOpen, handleClose])

    React.useEffect(() => {
        if (visibility) {
            document.addEventListener('keydown', closeModal)
        } else {
            document.removeEventListener('keydown', closeModal)
        }

        return () => {
            document.removeEventListener('keydown', closeModal)
        }
    }, [visibility, closeModal])

    const radioGroup = modalOptions.map((option) => (
        <div key={option.id} className="radio-option">
            <input
                id={option.id}
                name="radio-group"
                value={option.value}
                type="radio"
                onClick={option.onClick}
                defaultChecked={option.checked}
            />
            <label htmlFor={option.id}>{option.value}</label>
        </div>
    ))

    return (
        <>
            {visibility && (
                <div className="container-popup">
                    <div className="popup">
                        <i
                            id="close_modal"
                            className="icon ri-close-line ri-xl"
                            title={i18n.modal.closeMessage}
                            role="button"
                            tabIndex={0}
                            onClick={handleClose}
                            onKeyDown={(e) =>
                                e.key === 'Enter' && handleClose()
                            }
                        />
                        <h3 className="popup-title">{modalTitle}</h3>
                        <div className="popup-options">
                            <form>{radioGroup}</form>
                        </div>
                        <p
                            className="popup-exit"
                            dangerouslySetInnerHTML={{
                                __html: i18n.modal.kbdMessage
                            }}
                        />
                    </div>
                    <div
                        className="container-background"
                        onClick={handleClose}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) =>
                            (e.key === 'Enter' || e.key === ' ') &&
                            handleClose()
                        }
                    />
                </div>
            )}
        </>
    )
}
