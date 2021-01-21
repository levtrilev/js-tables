// import { stringify } from 'querystring'

const CODES = {
    A: 65,
    Z: 90
}

function toCell(selected = '', _) {
    return `
        <div class="cell${selected}" contenteditable>
        </div>
    `
}

function toColumn(char = 'A') {
    return `
    <div class="column">
        ${char}
    </div>
    `
}

function createRow(index, content) {
    return `
        <div class="row">
            <div class="row-info">${index !== null ? index : ''}</div>
            <div class="row-data">${content}</div>
        </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(index + 65)
}

export function createTable(rowsCount = 10) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')
    rows.push(createRow(null, cols))
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')
    for (let i = 0; i < rowsCount; i++) {
            rows.push(createRow(i + 1, cells))
    }
    return rows.join('')
}
