import { capitalize } from './utils'

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error('No $root provided for DomListener!')
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDOMListeners() {
        this.listeners.forEach( listener => {
            const method = 'on' + capitalize(listener)
            if (!this[method]) {
                // eslint-disable-next-line max-len
                throw new Error(`Method ${method} not implemented for ${this.name || ''} Component`)
            }
            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method])
        })
    }
    removeDOMListeners() {
        this.listeners.forEach( listener => {
            const method = 'on' + capitalize(listener)
            this.$root.off(listener, this[method])
        })
    }
}
