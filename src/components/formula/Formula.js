import { ExcelComponent } from '../../core/ExcelComponent';

export class Formula extends ExcelComponent {
    static className = 'excel__formula'

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click']
        })
    }

    toHTML() {
        return `
            <div class="formula_info">fx</div>
            <div class="formula_input" contenteditable spellcheck="false"></div>
        `
    }

    onInput(event) {
        console.log(this.$root)
        console.log('Formula onInput event: ', event.target.textContent.trim())
    }

    onClick(event) {
        // eslint-disable-next-line no-trailing-spaces

    }
}
