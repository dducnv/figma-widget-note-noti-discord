const { useEffect } = figma.widget

interface StorageData {
    webhookUrl: string;
    fileId: string;
}

export function useStorage(
    setWebhookUrl: (url: string) => void,
    setFileId: (id: string) => void,
    setIsInitialized: (value: boolean) => void
): void {
    useEffect(() => {
        Promise.all([
            figma.clientStorage.getAsync('discord_webhook_url'),
            figma.clientStorage.getAsync('figma_file_id')
        ]).then(([url, id]) => {

            if (url && typeof url === 'string') {
                setWebhookUrl(url)
            }
            if (id && typeof id === 'string') {
                setFileId(id)
            }
            setIsInitialized(true)
        })
    },)
}

export async function saveToStorage(data: StorageData): Promise<void> {
    await Promise.all([
        figma.clientStorage.setAsync('discord_webhook_url', data.webhookUrl),
        figma.clientStorage.setAsync('figma_file_id', data.fileId)
    ])
} 

export async function clearStorage(): Promise<void> {
    await Promise.all([
        figma.clientStorage.deleteAsync('discord_webhook_url'),
        figma.clientStorage.deleteAsync('figma_file_id')
    ])
} 