const { widget } = figma
const { AutoLayout, Input, Text } = widget
interface ConfigurationViewProps {
    webhookUrl: string
    fileId: string
    setWebhookUrl: (url: string) => void
    setFileId: (id: string) => void
    onSave: () => void
    onCancel: () => void
    onClear: () => void
}

export function ConfigurationView({
    webhookUrl,
    fileId,
    setWebhookUrl,
    setFileId,
    onSave,
    onCancel,
    onClear
}: ConfigurationViewProps) {
    return (
        <AutoLayout
            direction="vertical"
            verticalAlignItems={'center'}
            spacing={8}
            padding={16}
            cornerRadius={16}
            fill={'#F5F5F5'}
            stroke={'#E6E6E6'}
            width={300}
        >
            <Text
                fontSize={14}
                fill="#5865F2"
                fontWeight={'bold'}
            >
                Configure Discord Webhook
            </Text>

            <Input
                value={webhookUrl}
                placeholder="Enter Discord webhook URL"
                onTextEditEnd={(e) => setWebhookUrl(e.characters)}
                width="fill-parent"
                fontSize={12}
                inputFrameProps={{
                    fill: '#fff',
                    padding: {
                        vertical: 8,
                        horizontal: 12
                    },
                    cornerRadius: 6
                }}
            />

            <Input
                value={fileId}
                placeholder="Enter Figma file ID or Link https://www.figma.com/design/xxx (optional)"
                onTextEditEnd={(e) => setFileId(e.characters)}
                width="fill-parent"
                fontSize={12}
                inputFrameProps={{
                    fill: '#fff',
                    padding: {
                        vertical: 8,
                        horizontal: 12
                    },
                    cornerRadius: 6
                }}
            />

            <Text
                fontSize={10}
                fill="#666"
                width="fill-parent"
            >
                *File ID is optional. If not provided, current file ID will be used.
            </Text>

            <AutoLayout
                horizontalAlignItems={'center'}
                spacing={8}
            >
                <AutoLayout
                    verticalAlignItems={'center'}
                    spacing={8}
                    fill="#5865F2"
                    padding={{ vertical: 8, horizontal: 16 }}
                    cornerRadius={6}
                    onClick={onSave}
                >
                    <Text
                        fill="#fff"
                        fontSize={12}
                    >
                        Save
                    </Text>
                </AutoLayout>

                <AutoLayout
                    verticalAlignItems={'center'}
                    spacing={8}
                    stroke="#5865F2"
                    padding={{ vertical: 8, horizontal: 16 }}
                    cornerRadius={6}
                    onClick={onCancel}
                >
                    <Text
                        fill="#5865F2"
                        fontSize={12}
                    >
                        Cancel
                    </Text>
                </AutoLayout>

                <AutoLayout
                    verticalAlignItems={'center'}
                    spacing={8}
                    stroke="#ff0400"
                    padding={{ vertical: 8, horizontal: 16 }}
                    cornerRadius={6}
                    onClick={onClear}
                >
                    <Text
                        fill="#ff0400"
                        fontSize={12}
                    >
                        Clear
                    </Text>
                </AutoLayout>
            </AutoLayout>
        </AutoLayout>
    )
} 