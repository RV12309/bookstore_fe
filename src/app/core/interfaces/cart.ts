export interface ICart {
    id?: string,
    userId?: number,
    total?: number,
    items?: ICartItem[]
}

export interface ICartItem {
    sessionId?: string,
    bookId?: string,
    quantity?: number
}
