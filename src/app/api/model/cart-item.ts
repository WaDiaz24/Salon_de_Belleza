export interface CartItem {
    id: number;
    name: string;
    price: number;
    image_link: string;
    quantity: number;
    total?: number;
}
