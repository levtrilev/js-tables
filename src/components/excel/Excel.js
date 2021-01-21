import { $ } from '../../core/Dom'

export class Excel {
    constructor(selector, options) {
        // this.$el = document.querySelector(selector)
        this.$el = $(selector)
        this.components = options.components || []
    }

    getRoot() {
        const $root = $.create('div', 'excel')
        // const $root = document.createElement('div')
        // $root.classList.add('excel')

        this.components = this.components.map(Component => {
            const $el = $.create('div', Component.className)
            // const $el = document.createElement('div')
            // $el.classList.add(Component.className)
            const component = new Component($el)
            // $el.innerHTML = component.toHTML()
            // // DEBUG
            // if (component.name) {
            //     window['c_' + component.name] = component
            // }
            $el.html(component.toHTML())
            // $root.insertAdjacentHTML('beforeend', component.toHTML())
            $root.append($el)
            return component
        });
        return $root
    }

    render() {
        // afterbegin, afterend, beforebegin, beforeend
        // this.$el.insertAdjacentHTML('afterbegin', `<h1>Test</h1>`)
        // const node = document.createElement('h1')
        // node.textContent = 'more TEST'
        // this.$el.append(node)
        this.$el.append(this.getRoot())
        // console.log(this.components)
        this.components.forEach(component => component.init());
    }
}
