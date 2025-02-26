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
                    <form>
                      <input type="radio" id="html" name="fav_language" value="HTML" checked="checked">
                      <label for="html">HTML</label>
                      
                      <input type="radio" id="css" name="fav_language" value="CSS">
                      <label for="css">CSS</label>
                      
                      <input type="radio" id="javascript" name="fav_language" value="JavaScript">
                      <label for="javascript">JavaScript</label>
                    </form>
                  </div>
                  <p class="popup-exit" title="Fechar" aria-label="Instrução de fechamento">
                    Pressione <kbd>ESC</kbd> para fechar
                  </p>
              </div>
              <div class="container-background"></div>
          </div>
        `

				this.appendChild(TEMPLATE.content.cloneNode(true))
			}
		},
	)
}
