export function getCurrentDateTime(): string {
    return new Date().toLocaleString()
}

export function getCurrentUser(): string {
    return figma.currentUser?.name || 'Anonymous'
}

export function getFigmaNodeUrl(fileId: string): string {
    const currentNode = figma.currentPage.selection[0]
    const nodeId = currentNode ? currentNode.id : figma.currentPage.id
    return `https://www.figma.com/file/${fileId}?node-id=${nodeId}`
}

export function getSelectedNodeName(): string {
    const currentNode = figma.currentPage.selection[0]
    return currentNode ? currentNode.name : figma.currentPage.name
}

export function getCurrentFileId(): string {
    return figma.fileKey || ''
} 