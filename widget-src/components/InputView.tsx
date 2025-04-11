const { widget } = figma
const { AutoLayout, Input, Text } = widget

interface InputViewProps {
    comment: string
    isEditing: boolean
    onCommentChange: (text: string) => void
    onSend: () => void
}

export function InputView({
    comment,
    isEditing,
    onCommentChange,
    onSend
}: InputViewProps) {
    return (
        <AutoLayout
            horizontalAlignItems={'center'}
            verticalAlignItems={'center'}
            spacing={8}
            width="fill-parent"
        >
            <Input
                value={comment}
                placeholder="Type your notes."
                onTextEditEnd={(e) => onCommentChange(e.characters)}
                width="fill-parent"
                fontSize={14}
                inputFrameProps={{
                    fill: '#fff',
                    padding: {
                        vertical: 6,
                        horizontal: 12
                    },
                    cornerRadius: 6
                }}
            />

            <AutoLayout
                verticalAlignItems={'center'}
                spacing={8}
                fill="#5865F2"
                padding={{ vertical: 6, horizontal: 12 }}
                cornerRadius={6}
            >
                <Text
                    fill="#fff"
                    fontSize={12}
                    onClick={onSend}
                    effect={{
                        type: 'drop-shadow',
                        color: { r: 0, g: 0, b: 0, a: 0.1 },
                        offset: { x: 0, y: 2 },
                        blur: 4,
                        spread: 0
                    }}
                >
                    {isEditing ? 'Update' : 'Save'}
                </Text>
            </AutoLayout>
        </AutoLayout>
    )
} 