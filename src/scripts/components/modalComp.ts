if (!customElements.get('modal-comp')) {
	customElements.define(
		'modal-comp',
		class extends HTMLElement {
			constructor() {
				super()

				const TEMPLATE = document.createElement('template')
				TEMPLATE.innerHTML = `
          <div id="container-popup--open" class="container-popup">
              <div class="popup">
                  <i id="close_modal" class="icon ri-close-line ri-xl" title="Fechar"></i>
                  <h3 class="popup-title">Título</h3>
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

				const FORM = this.querySelector('form') as HTMLFormElement
				while (this.firstChild) {
					FORM.appendChild(this.firstChild)
				}
			}
		},
	)
}
