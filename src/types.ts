export type languagesTypes = 'EN' | 'DE' | 'FA' | 'AR'
export type menuItemsTypes = menuItemTypes[]
export interface menuItemTypes{
    "id": string,
    "categories": number[],
    "name": {
       [key:string]:string
    },
    "price": string,
    "pickupPrice": string
}
