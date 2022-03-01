import { ItemListDTO } from "../dto/item-list.dto";

export class ItemListModel {
    code: string;

    get iconURL() {
        return `${this.code}.png`;
    }

    constructor(data: ItemListDTO) {
        this.code = data.code;
    }
}
