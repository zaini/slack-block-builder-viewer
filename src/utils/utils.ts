import { Bits, Blocks, Elements, Surfaces, HomeTab, Message, Modal, WorkflowStep, Md, Button, ChannelMultiSelect, ChannelSelect, Checkboxes, ConversationMultiSelect, ConversationSelect, DatePicker, ExternalMultiSelect, ExternalSelect, Img, OverflowMenu, RadioButtons, StaticMultiSelect, StaticSelect, TextInput, TimePicker, UserMultiSelect, UserSelect, Actions, Context, Divider, File, Header, Image, Input, Section, Attachment, ConfirmationDialog, Option, OptionGroup } from 'slack-block-builder';

export const evaluateBlocks = (block_string: string) => {
    const x = eval(`(function a(Bits, Blocks, Elements, Surfaces, HomeTab, Message, Modal, WorkflowStep, Md, Button, ChannelMultiSelect, ChannelSelect, Checkboxes, ConversationMultiSelect, ConversationSelect, DatePicker, ExternalMultiSelect, ExternalSelect, Img, OverflowMenu, RadioButtons, StaticMultiSelect, StaticSelect, TextInput, TimePicker, UserMultiSelect, UserSelect, Actions, Context, Divider, File, Header, Image, Input, Section, Attachment, ConfirmationDialog, Option, OptionGroup) 
    { const code = ${block_string}; const json = code.buildToJSON(); const preview = code.printPreviewUrl(); return [json, preview]; })`)
    const [json, preview] = x(Bits, Blocks, Elements, Surfaces, HomeTab, Message, Modal, WorkflowStep, Md, Button, ChannelMultiSelect, ChannelSelect, Checkboxes, ConversationMultiSelect, ConversationSelect, DatePicker, ExternalMultiSelect, ExternalSelect, Img, OverflowMenu, RadioButtons, StaticMultiSelect, StaticSelect, TextInput, TimePicker, UserMultiSelect, UserSelect, Actions, Context, Divider, File, Header, Image, Input, Section, Attachment, ConfirmationDialog, Option, OptionGroup)
    const blocks = JSON.parse(json)["blocks"]

    const q = new URLSearchParams()
    q.append('blocks', JSON.stringify(blocks))
    q.append('mode', 'message')

    return {
        previewUrl: `https://api.slack.com/tools/block-kit-builder?${q}`,
        json: json,
        blocks: JSON.stringify(blocks)
    }
}