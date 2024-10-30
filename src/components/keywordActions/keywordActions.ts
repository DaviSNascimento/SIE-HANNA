export interface keywordAction {
    keyword: string
    action: () => void
}

export const keywordActions: keywordAction[] = [
    {
        keyword: "help",
        action: () => console.log("Help command executed")
    }
]