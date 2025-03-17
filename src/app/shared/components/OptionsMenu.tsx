import type { optionsMenuProps } from '../interfaces/IOptionsMenuProps'

type modalType = 'theme' | 'lang' | 'file'

export const OptionsMenu = ({ onClickModal }: optionsMenuProps) => {
	const handleKeyPress = (event: React.KeyboardEvent, type: modalType) => {
		if (event.key === 'Enter' || event.key === ' ') {
			onClickModal(type)
		}
	}

	return (
		<div className='container-aside'>
			<aside>
				<nav className='options-menu'>
					<i
						id='theme'
						className='icon ri-moon-line ri-2x'
						title='Alterar tema'
						role='button'
						tabIndex={0}
						onClick={() => onClickModal('theme')}
						onKeyDown={e => handleKeyPress(e, 'theme')}
					/>
					<i
						id='lang'
						className='icon ri-earth-line ri-2x'
						title='Alterar idioma'
						role='button'
						tabIndex={0}
						onClick={() => onClickModal('lang')}
						onKeyDown={e => handleKeyPress(e, 'lang')}
					/>
					<i
						id='file'
						className='icon ri-file-download-line ri-2x'
						title='Baixar currículo'
						role='button'
						tabIndex={0}
						onClick={() => onClickModal('file')}
						onKeyDown={e => handleKeyPress(e, 'file')}
					/>
				</nav>
			</aside>
		</div>
	)
}
