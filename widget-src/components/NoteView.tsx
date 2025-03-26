const { widget } = figma
const { AutoLayout, SVG, Text } = widget
import { Comment } from '../types/comment'

interface NoteViewProps {
    note: Comment
    onEdit: (id: string, text: string) => void
    onSendToDiscord: () => void
}

export function NoteView({ note, onEdit, onSendToDiscord }: NoteViewProps) {
    return (
        <AutoLayout
            direction="vertical"
            verticalAlignItems={'center'}
            horizontalAlignItems={'start'}
            spacing={12}
            width="fill-parent"
        >
            <AutoLayout
                width={"fill-parent"}
                spacing={8}
                verticalAlignItems={'center'}>
                <AutoLayout
                    fill={'#dedfe0'}
                    width={"fill-parent"}
                    padding={{ vertical: 5, horizontal: 5 }}
                    cornerRadius={6}
                >
                    <Text
                        fill="#5865F2"
                        fontSize={12}
                        onClick={() => onEdit(note.id, note.text)}
                    >
                        {note.text}
                    </Text>
                </AutoLayout>
                <SVG
                    tooltip="Send to Discord"
                    width={22}
                    height={22}
                    onClick={onSendToDiscord}
                    src={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L11 13" stroke="#5865F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#5865F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`}
                />
            </AutoLayout>

            <AutoLayout
                verticalAlignItems={'center'}
                width="fill-parent"
                spacing={8}
            >
                <AutoLayout
                    verticalAlignItems={'center'}
                    spacing={5}
                    direction="vertical"
                    width="fill-parent"
                >
                    <Text
                        fill="#5865F2"
                        fontSize={10}
                    >
                        {note.user}
                    </Text>
                    <Text
                        fill="#5865F2"
                        fontSize={10}
                    >
                        {note.timestamp}
                    </Text>
                </AutoLayout>

                <AutoLayout
                    verticalAlignItems={'start'}
                    horizontalAlignItems={'end'}
                    spacing={8}
                    cornerRadius={6}
                    padding={{ vertical: 8, horizontal: 16 }}
                >
                    <Text
                        fill="#5865F2"
                        fontSize={12}
                        fontWeight={'bold'}
                        onClick={() => onEdit(note.id, note.text)}
                        effect={{
                            type: 'drop-shadow',
                            color: { r: 0, g: 0, b: 0, a: 0.1 },
                            offset: { x: 0, y: 2 },
                            blur: 4,
                            spread: 0
                        }}
                    >
                        Edit
                    </Text>
                </AutoLayout>
            </AutoLayout>
        </AutoLayout>
    )
} 