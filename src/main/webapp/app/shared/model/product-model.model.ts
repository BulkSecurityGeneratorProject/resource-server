import { IProductModelDescription } from 'app/shared/model/product-model-description.model';

export interface IProductModel {
    id?: number;
    productModelName?: string;
    calalogDescription?: string;
    instructions?: string;
    photoContentType?: string;
    photo?: any;
    descriptions?: IProductModelDescription[];
    merchantMerchantName?: string;
    merchantId?: number;
}

export class ProductModel implements IProductModel {
    constructor(
        public id?: number,
        public productModelName?: string,
        public calalogDescription?: string,
        public instructions?: string,
        public photoContentType?: string,
        public photo?: any,
        public descriptions?: IProductModelDescription[],
        public merchantMerchantName?: string,
        public merchantId?: number
    ) {}
}
