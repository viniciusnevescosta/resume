if (!customElements.get('modal-comp')) {
	customElements.define(
		'modal-comp',
		class extends HTMLElement {
			private groupName: string

			constructor() {
				super()

				const TEMPLATE = document.createElement('template')
				TEMPLATE.innerHTML = `
                    <div class="container-popup">
                        <div class="popup">
                            <i id="close_modal" class="icon ri-close-line ri-xl" title="Fechar"></i>
                            <h3 class="popup-title"></h3>
                            <div class="popup-options">
                                <form></form>
                            </div>
                            <p class="popup-exit">
                                Pressione <kbd>ESC</kbd> para fechar
                            </p>
                        </div>
                        <div class="container-background"></div>
                    </div>
                `

				const CLONE = TEMPLATE.content.cloneNode(true)
				this.appendChild(CLONE)

				const TITLE = this.getAttribute('modal-title') || 'Options'
				this.groupName = TITLE.toLowerCase().replace(/\s+/g, '-')

				const TITLE_ELEMENT = this.querySelector('.popup-title')
				if (TITLE_ELEMENT) {
					TITLE_ELEMENT.textContent = TITLE
				} else {
					console.error('.popup-title element was not find.')
				}

				const FORM = this.querySelector('form')
				if (FORM) {
					while (this.firstElementChild !== FORM.parentElement) {
						if (this.firstElementChild) {
							FORM.appendChild(this.firstElementChild)
						}
					}
				} else {
					console.error('form element was not find.')
				}
			}

			get radioGroupName() {
				return this.groupName
			}
		},
	)
}

interface ModalCompElement extends HTMLElement {
	radioGroupName: string
}

if (!customElements.get('modal-input')) {
	customElements.define(
		'modal-input',
		class extends HTMLElement {
			constructor() {
				super()

				const template = document.createElement('template')
				template.innerHTML = `
                    <input type="radio">
                    <label></label>
                `

				this.appendChild(template.content.cloneNode(true))
			}

			connectedCallback() {
				const MODAL_COMP = this.closest('modal-comp') as ModalCompElement | null
				const VALUE = this.getAttribute('value') || 'default'

				const INPUT = this.querySelector('input')
				const LABEL = this.querySelector('label')

				if (!INPUT || !LABEL) {
					console.error('input or label element was not find.')
					return
				}

				INPUT.id = VALUE.toLowerCase()
				INPUT.value = VALUE.toUpperCase()
				INPUT.name = MODAL_COMP?.radioGroupName || 'default-group'
				INPUT.checked = this.hasAttribute('checked')

				LABEL.textContent = this.textContent
				LABEL.htmlFor = INPUT.id

				const PARENT = this.parentElement
				if (PARENT) {
					PARENT.insertBefore(INPUT, this)
					PARENT.insertBefore(LABEL, this)
					PARENT.removeChild(this)
				}
			}
		},
	)
}
