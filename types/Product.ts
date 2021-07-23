export interface Product {
    name: string
    description: string
    dateClose: string
    dateOpen: string
    link: string
    type: "app" | "hardware" | "service"
}
