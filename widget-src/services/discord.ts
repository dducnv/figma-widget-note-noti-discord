interface DiscordMessage {
    content: null;
    embeds: Array<{
        title: string;
        description: string;
        color: number;
        fields: Array<{
            name: string;
            value: string;
            inline: boolean;
        }>;
        footer: {
            text: string;
        };
        timestamp: string;
    }>;
}

export async function sendToDiscord(
    webhookUrl: string,
    message: string,
    nodeName: string,
    nodeUrl: string,
    userName: string
): Promise<void> {
    const discordMessage: DiscordMessage = {
        content: null,
        embeds: [{
            title: `💬 New Figma Note (${nodeName})`,
            description: message,
            color: 0x00ff00,
            fields: [
                {
                    name: '🔗 Link to element',
                    value: `[Click to view in Figma](${nodeUrl})`,
                    inline: true
                },
            ],
            footer: {
                text: `👤: ${userName}`
            },
            timestamp: new Date().toISOString()
        }]
    }

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordMessage)
    })

    if (!response.ok) {
        throw new Error('Failed to send message to Discord')
    }
} 