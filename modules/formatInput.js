export function formatInput(value) {
    return value.trim().replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}
