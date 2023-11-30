export interface ICart {
    id: string,
    userId?: number,
    total: number,
    items?: ICartItem[]
}

export interface ICartItem {
    sessionId?: string,
    bookId: string,
    quantity: number,
    title?: string,
    price?: string,
    total?: number,
    urlThumbnail?: string,
    author?: string
}
