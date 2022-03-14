export const TOAST_CONFIG = {
    isCloseable: true,
    position: 'top'
}

export const WARNING_TOAST = {
    ...TOAST_CONFIG,
    status: 'warning'
}

export const ERROR_TOAST = {
    ...TOAST_CONFIG,
    status: 'error'
}

export const SUCCESS_TOAST = {
    ...TOAST_CONFIG,
    status: 'success'
}