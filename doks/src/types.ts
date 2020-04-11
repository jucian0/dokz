export type DoksTableOfContents = {
    index: number
    endIndex: number
    map: {
        depth: number
        id: string
        children: {
            type: 'text'
            value: string
            depth: number
            position: any
        }[]
    }[]
}
