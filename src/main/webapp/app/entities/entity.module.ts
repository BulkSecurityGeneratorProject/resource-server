import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#ResourceStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'product-description',
                loadChildren: './product-description/product-description.module#ResourceProductDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-transactions',
                loadChildren: './product-transactions/product-transactions.module#ResourceProductTransactionsModule'
            },
            {
                path: 'locations',
                loadChildren: './locations/locations.module#ResourceLocationsModule'
            },
            {
                path: 'product-inventory',
                loadChildren: './product-inventory/product-inventory.module#ResourceProductInventoryModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-sub-category',
                loadChildren: './product-sub-category/product-sub-category.module#ResourceProductSubCategoryModule'
            },
            {
                path: 'product-photo',
                loadChildren: './product-photo/product-photo.module#ResourceProductPhotoModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#ResourceStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#ResourceStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'product-description',
                loadChildren: './product-description/product-description.module#ResourceProductDescriptionModule'
            },
            {
                path: 'product-review',
                loadChildren: './product-review/product-review.module#ResourceProductReviewModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-transactions',
                loadChildren: './product-transactions/product-transactions.module#ResourceProductTransactionsModule'
            },
            {
                path: 'locations',
                loadChildren: './locations/locations.module#ResourceLocationsModule'
            },
            {
                path: 'product-inventory',
                loadChildren: './product-inventory/product-inventory.module#ResourceProductInventoryModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-sub-category',
                loadChildren: './product-sub-category/product-sub-category.module#ResourceProductSubCategoryModule'
            },
            {
                path: 'product-photo',
                loadChildren: './product-photo/product-photo.module#ResourceProductPhotoModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#ResourceStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#ResourceStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'product-description',
                loadChildren: './product-description/product-description.module#ResourceProductDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-transactions',
                loadChildren: './product-transactions/product-transactions.module#ResourceProductTransactionsModule'
            },
            {
                path: 'locations',
                loadChildren: './locations/locations.module#ResourceLocationsModule'
            },
            {
                path: 'product-inventory',
                loadChildren: './product-inventory/product-inventory.module#ResourceProductInventoryModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-sub-category',
                loadChildren: './product-sub-category/product-sub-category.module#ResourceProductSubCategoryModule'
            },
            {
                path: 'product-photo',
                loadChildren: './product-photo/product-photo.module#ResourceProductPhotoModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#ResourceStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#ResourceStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'product-description',
                loadChildren: './product-description/product-description.module#ResourceProductDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-transactions',
                loadChildren: './product-transactions/product-transactions.module#ResourceProductTransactionsModule'
            },
            {
                path: 'locations',
                loadChildren: './locations/locations.module#ResourceLocationsModule'
            },
            {
                path: 'product-inventory',
                loadChildren: './product-inventory/product-inventory.module#ResourceProductInventoryModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-sub-category',
                loadChildren: './product-sub-category/product-sub-category.module#ResourceProductSubCategoryModule'
            },
            {
                path: 'product-photo',
                loadChildren: './product-photo/product-photo.module#ResourceProductPhotoModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#ResourceStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#ResourceStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'product-description',
                loadChildren: './product-description/product-description.module#ResourceProductDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-transactions',
                loadChildren: './product-transactions/product-transactions.module#ResourceProductTransactionsModule'
            },
            {
                path: 'locations',
                loadChildren: './locations/locations.module#ResourceLocationsModule'
            },
            {
                path: 'product-inventory',
                loadChildren: './product-inventory/product-inventory.module#ResourceProductInventoryModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-sub-category',
                loadChildren: './product-sub-category/product-sub-category.module#ResourceProductSubCategoryModule'
            },
            {
                path: 'product-photo',
                loadChildren: './product-photo/product-photo.module#ResourceProductPhotoModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#ResourceStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#ResourceStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'product-description',
                loadChildren: './product-description/product-description.module#ResourceProductDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-transactions',
                loadChildren: './product-transactions/product-transactions.module#ResourceProductTransactionsModule'
            },
            {
                path: 'locations',
                loadChildren: './locations/locations.module#ResourceLocationsModule'
            },
            {
                path: 'product-inventory',
                loadChildren: './product-inventory/product-inventory.module#ResourceProductInventoryModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-sub-category',
                loadChildren: './product-sub-category/product-sub-category.module#ResourceProductSubCategoryModule'
            },
            {
                path: 'product-photo',
                loadChildren: './product-photo/product-photo.module#ResourceProductPhotoModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#ResourceStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#ResourceStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'product-description',
                loadChildren: './product-description/product-description.module#ResourceProductDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-transactions',
                loadChildren: './product-transactions/product-transactions.module#ResourceProductTransactionsModule'
            },
            {
                path: 'locations',
                loadChildren: './locations/locations.module#ResourceLocationsModule'
            },
            {
                path: 'product-inventory',
                loadChildren: './product-inventory/product-inventory.module#ResourceProductInventoryModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-sub-category',
                loadChildren: './product-sub-category/product-sub-category.module#ResourceProductSubCategoryModule'
            },
            {
                path: 'product-photo',
                loadChildren: './product-photo/product-photo.module#ResourceProductPhotoModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#ResourceStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#ResourceStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'product-description',
                loadChildren: './product-description/product-description.module#ResourceProductDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-transactions',
                loadChildren: './product-transactions/product-transactions.module#ResourceProductTransactionsModule'
            },
            {
                path: 'locations',
                loadChildren: './locations/locations.module#ResourceLocationsModule'
            },
            {
                path: 'product-inventory',
                loadChildren: './product-inventory/product-inventory.module#ResourceProductInventoryModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-sub-category',
                loadChildren: './product-sub-category/product-sub-category.module#ResourceProductSubCategoryModule'
            },
            {
                path: 'product-photo',
                loadChildren: './product-photo/product-photo.module#ResourceProductPhotoModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#ResourceStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'merchants',
                loadChildren: './merchants/merchants.module#ResourceMerchantsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#ResourceStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'product-description',
                loadChildren: './product-description/product-description.module#ResourceProductDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-transactions',
                loadChildren: './product-transactions/product-transactions.module#ResourceProductTransactionsModule'
            },
            {
                path: 'locations',
                loadChildren: './locations/locations.module#ResourceLocationsModule'
            },
            {
                path: 'product-inventory',
                loadChildren: './product-inventory/product-inventory.module#ResourceProductInventoryModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-sub-category',
                loadChildren: './product-sub-category/product-sub-category.module#ResourceProductSubCategoryModule'
            },
            {
                path: 'product-photo',
                loadChildren: './product-photo/product-photo.module#ResourceProductPhotoModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#ResourceStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'merchants',
                loadChildren: './merchants/merchants.module#ResourceMerchantsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'stock-groups',
                loadChildren: './stock-groups/stock-groups.module#ResourceStockGroupsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'product-description',
                loadChildren: './product-description/product-description.module#ResourceProductDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-transactions',
                loadChildren: './product-transactions/product-transactions.module#ResourceProductTransactionsModule'
            },
            {
                path: 'locations',
                loadChildren: './locations/locations.module#ResourceLocationsModule'
            },
            {
                path: 'product-inventory',
                loadChildren: './product-inventory/product-inventory.module#ResourceProductInventoryModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-sub-category',
                loadChildren: './product-sub-category/product-sub-category.module#ResourceProductSubCategoryModule'
            },
            {
                path: 'product-photo',
                loadChildren: './product-photo/product-photo.module#ResourceProductPhotoModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'stock-item-stock-groups',
                loadChildren: './stock-item-stock-groups/stock-item-stock-groups.module#ResourceStockItemStockGroupsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'merchants',
                loadChildren: './merchants/merchants.module#ResourceMerchantsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-model-description',
                loadChildren: './product-model-description/product-model-description.module#ResourceProductModelDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'merchants',
                loadChildren: './merchants/merchants.module#ResourceMerchantsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-model-description',
                loadChildren: './product-model-description/product-model-description.module#ResourceProductModelDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'merchants',
                loadChildren: './merchants/merchants.module#ResourceMerchantsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-model-description',
                loadChildren: './product-model-description/product-model-description.module#ResourceProductModelDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'merchants',
                loadChildren: './merchants/merchants.module#ResourceMerchantsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-model-description',
                loadChildren: './product-model-description/product-model-description.module#ResourceProductModelDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'merchants',
                loadChildren: './merchants/merchants.module#ResourceMerchantsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-model-description',
                loadChildren: './product-model-description/product-model-description.module#ResourceProductModelDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'merchants',
                loadChildren: './merchants/merchants.module#ResourceMerchantsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-model-description',
                loadChildren: './product-model-description/product-model-description.module#ResourceProductModelDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'merchants',
                loadChildren: './merchants/merchants.module#ResourceMerchantsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-model-description',
                loadChildren: './product-model-description/product-model-description.module#ResourceProductModelDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'merchants',
                loadChildren: './merchants/merchants.module#ResourceMerchantsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-model-description',
                loadChildren: './product-model-description/product-model-description.module#ResourceProductModelDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'merchants',
                loadChildren: './merchants/merchants.module#ResourceMerchantsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-model-description',
                loadChildren: './product-model-description/product-model-description.module#ResourceProductModelDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'merchants',
                loadChildren: './merchants/merchants.module#ResourceMerchantsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-model-description',
                loadChildren: './product-model-description/product-model-description.module#ResourceProductModelDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'merchants',
                loadChildren: './merchants/merchants.module#ResourceMerchantsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-model-description',
                loadChildren: './product-model-description/product-model-description.module#ResourceProductModelDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'merchants',
                loadChildren: './merchants/merchants.module#ResourceMerchantsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-model-description',
                loadChildren: './product-model-description/product-model-description.module#ResourceProductModelDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'merchants',
                loadChildren: './merchants/merchants.module#ResourceMerchantsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-model-description',
                loadChildren: './product-model-description/product-model-description.module#ResourceProductModelDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'merchants',
                loadChildren: './merchants/merchants.module#ResourceMerchantsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-model-description',
                loadChildren: './product-model-description/product-model-description.module#ResourceProductModelDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'merchants',
                loadChildren: './merchants/merchants.module#ResourceMerchantsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-model-description',
                loadChildren: './product-model-description/product-model-description.module#ResourceProductModelDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'merchants',
                loadChildren: './merchants/merchants.module#ResourceMerchantsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-model-description',
                loadChildren: './product-model-description/product-model-description.module#ResourceProductModelDescriptionModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'product-model',
                loadChildren: './product-model/product-model.module#ResourceProductModelModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'merchants',
                loadChildren: './merchants/merchants.module#ResourceMerchantsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'barcode-types',
                loadChildren: './barcode-types/barcode-types.module#ResourceBarcodeTypesModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-temp',
                loadChildren: './stock-item-temp/stock-item-temp.module#ResourceStockItemTempModule'
            },
            {
                path: 'upload-transactions',
                loadChildren: './upload-transactions/upload-transactions.module#ResourceUploadTransactionsModule'
            },
            {
                path: 'upload-action-types',
                loadChildren: './upload-action-types/upload-action-types.module#ResourceUploadActionTypesModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'materials',
                loadChildren: './materials/materials.module#ResourceMaterialsModule'
            },
            {
                path: 'dangerous-goods',
                loadChildren: './dangerous-goods/dangerous-goods.module#ResourceDangerousGoodsModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'currency',
                loadChildren: './currency/currency.module#ResourceCurrencyModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'lastest-merchant-uploaded-document',
                loadChildren:
                    './lastest-merchant-uploaded-document/lastest-merchant-uploaded-document.module#ResourceLastestMerchantUploadedDocumentModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'barcode-types',
                loadChildren: './barcode-types/barcode-types.module#ResourceBarcodeTypesModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-temp',
                loadChildren: './stock-item-temp/stock-item-temp.module#ResourceStockItemTempModule'
            },
            {
                path: 'upload-transactions',
                loadChildren: './upload-transactions/upload-transactions.module#ResourceUploadTransactionsModule'
            },
            {
                path: 'upload-action-types',
                loadChildren: './upload-action-types/upload-action-types.module#ResourceUploadActionTypesModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'materials',
                loadChildren: './materials/materials.module#ResourceMaterialsModule'
            },
            {
                path: 'dangerous-goods',
                loadChildren: './dangerous-goods/dangerous-goods.module#ResourceDangerousGoodsModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'currency',
                loadChildren: './currency/currency.module#ResourceCurrencyModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'lastest-merchant-uploaded-document',
                loadChildren:
                    './lastest-merchant-uploaded-document/lastest-merchant-uploaded-document.module#ResourceLastestMerchantUploadedDocumentModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'barcode-types',
                loadChildren: './barcode-types/barcode-types.module#ResourceBarcodeTypesModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-temp',
                loadChildren: './stock-item-temp/stock-item-temp.module#ResourceStockItemTempModule'
            },
            {
                path: 'upload-transactions',
                loadChildren: './upload-transactions/upload-transactions.module#ResourceUploadTransactionsModule'
            },
            {
                path: 'upload-action-types',
                loadChildren: './upload-action-types/upload-action-types.module#ResourceUploadActionTypesModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'materials',
                loadChildren: './materials/materials.module#ResourceMaterialsModule'
            },
            {
                path: 'dangerous-goods',
                loadChildren: './dangerous-goods/dangerous-goods.module#ResourceDangerousGoodsModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'currency',
                loadChildren: './currency/currency.module#ResourceCurrencyModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'lastest-merchant-uploaded-document',
                loadChildren:
                    './lastest-merchant-uploaded-document/lastest-merchant-uploaded-document.module#ResourceLastestMerchantUploadedDocumentModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'barcode-types',
                loadChildren: './barcode-types/barcode-types.module#ResourceBarcodeTypesModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-temp',
                loadChildren: './stock-item-temp/stock-item-temp.module#ResourceStockItemTempModule'
            },
            {
                path: 'upload-transactions',
                loadChildren: './upload-transactions/upload-transactions.module#ResourceUploadTransactionsModule'
            },
            {
                path: 'upload-action-types',
                loadChildren: './upload-action-types/upload-action-types.module#ResourceUploadActionTypesModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'materials',
                loadChildren: './materials/materials.module#ResourceMaterialsModule'
            },
            {
                path: 'dangerous-goods',
                loadChildren: './dangerous-goods/dangerous-goods.module#ResourceDangerousGoodsModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'currency',
                loadChildren: './currency/currency.module#ResourceCurrencyModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'barcode-types',
                loadChildren: './barcode-types/barcode-types.module#ResourceBarcodeTypesModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-temp',
                loadChildren: './stock-item-temp/stock-item-temp.module#ResourceStockItemTempModule'
            },
            {
                path: 'upload-transactions',
                loadChildren: './upload-transactions/upload-transactions.module#ResourceUploadTransactionsModule'
            },
            {
                path: 'upload-action-types',
                loadChildren: './upload-action-types/upload-action-types.module#ResourceUploadActionTypesModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'materials',
                loadChildren: './materials/materials.module#ResourceMaterialsModule'
            },
            {
                path: 'dangerous-goods',
                loadChildren: './dangerous-goods/dangerous-goods.module#ResourceDangerousGoodsModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'currency',
                loadChildren: './currency/currency.module#ResourceCurrencyModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'supplier-imported-document',
                loadChildren: './supplier-imported-document/supplier-imported-document.module#ResourceSupplierImportedDocumentModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'barcode-types',
                loadChildren: './barcode-types/barcode-types.module#ResourceBarcodeTypesModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-temp',
                loadChildren: './stock-item-temp/stock-item-temp.module#ResourceStockItemTempModule'
            },
            {
                path: 'upload-transactions',
                loadChildren: './upload-transactions/upload-transactions.module#ResourceUploadTransactionsModule'
            },
            {
                path: 'upload-action-types',
                loadChildren: './upload-action-types/upload-action-types.module#ResourceUploadActionTypesModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'materials',
                loadChildren: './materials/materials.module#ResourceMaterialsModule'
            },
            {
                path: 'dangerous-goods',
                loadChildren: './dangerous-goods/dangerous-goods.module#ResourceDangerousGoodsModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'currency',
                loadChildren: './currency/currency.module#ResourceCurrencyModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'supplier-imported-document',
                loadChildren: './supplier-imported-document/supplier-imported-document.module#ResourceSupplierImportedDocumentModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'barcode-types',
                loadChildren: './barcode-types/barcode-types.module#ResourceBarcodeTypesModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-temp',
                loadChildren: './stock-item-temp/stock-item-temp.module#ResourceStockItemTempModule'
            },
            {
                path: 'upload-transactions',
                loadChildren: './upload-transactions/upload-transactions.module#ResourceUploadTransactionsModule'
            },
            {
                path: 'upload-action-types',
                loadChildren: './upload-action-types/upload-action-types.module#ResourceUploadActionTypesModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'materials',
                loadChildren: './materials/materials.module#ResourceMaterialsModule'
            },
            {
                path: 'dangerous-goods',
                loadChildren: './dangerous-goods/dangerous-goods.module#ResourceDangerousGoodsModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'currency',
                loadChildren: './currency/currency.module#ResourceCurrencyModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'supplier-imported-document',
                loadChildren: './supplier-imported-document/supplier-imported-document.module#ResourceSupplierImportedDocumentModule'
            },
            {
                path: 'address-types',
                loadChildren: './address-types/address-types.module#ResourceAddressTypesModule'
            },
            {
                path: 'culture',
                loadChildren: './culture/culture.module#ResourceCultureModule'
            },
            {
                path: 'addresses',
                loadChildren: './addresses/addresses.module#ResourceAddressesModule'
            },
            {
                path: 'business-entity-address',
                loadChildren: './business-entity-address/business-entity-address.module#ResourceBusinessEntityAddressModule'
            },
            {
                path: 'ship-method',
                loadChildren: './ship-method/ship-method.module#ResourceShipMethodModule'
            },
            {
                path: 'person-email-address',
                loadChildren: './person-email-address/person-email-address.module#ResourcePersonEmailAddressModule'
            },
            {
                path: 'person-phone',
                loadChildren: './person-phone/person-phone.module#ResourcePersonPhoneModule'
            },
            {
                path: 'phone-number-type',
                loadChildren: './phone-number-type/phone-number-type.module#ResourcePhoneNumberTypeModule'
            },
            {
                path: 'contact-type',
                loadChildren: './contact-type/contact-type.module#ResourceContactTypeModule'
            },
            {
                path: 'business-entity-contact',
                loadChildren: './business-entity-contact/business-entity-contact.module#ResourceBusinessEntityContactModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#ResourceCountriesModule'
            },
            {
                path: 'state-provinces',
                loadChildren: './state-provinces/state-provinces.module#ResourceStateProvincesModule'
            },
            {
                path: 'cities',
                loadChildren: './cities/cities.module#ResourceCitiesModule'
            },
            {
                path: 'system-parameters',
                loadChildren: './system-parameters/system-parameters.module#ResourceSystemParametersModule'
            },
            {
                path: 'transaction-types',
                loadChildren: './transaction-types/transaction-types.module#ResourceTransactionTypesModule'
            },
            {
                path: 'people',
                loadChildren: './people/people.module#ResourcePeopleModule'
            },
            {
                path: 'payment-methods',
                loadChildren: './payment-methods/payment-methods.module#ResourcePaymentMethodsModule'
            },
            {
                path: 'delivery-methods',
                loadChildren: './delivery-methods/delivery-methods.module#ResourceDeliveryMethodsModule'
            },
            {
                path: 'supplier-categories',
                loadChildren: './supplier-categories/supplier-categories.module#ResourceSupplierCategoriesModule'
            },
            {
                path: 'suppliers',
                loadChildren: './suppliers/suppliers.module#ResourceSuppliersModule'
            },
            {
                path: 'supplier-transactions',
                loadChildren: './supplier-transactions/supplier-transactions.module#ResourceSupplierTransactionsModule'
            },
            {
                path: 'currency-rate',
                loadChildren: './currency-rate/currency-rate.module#ResourceCurrencyRateModule'
            },
            {
                path: 'purchase-orders',
                loadChildren: './purchase-orders/purchase-orders.module#ResourcePurchaseOrdersModule'
            },
            {
                path: 'purchase-order-lines',
                loadChildren: './purchase-order-lines/purchase-order-lines.module#ResourcePurchaseOrderLinesModule'
            },
            {
                path: 'buying-groups',
                loadChildren: './buying-groups/buying-groups.module#ResourceBuyingGroupsModule'
            },
            {
                path: 'customer-categories',
                loadChildren: './customer-categories/customer-categories.module#ResourceCustomerCategoriesModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#ResourceCustomersModule'
            },
            {
                path: 'customer-transactions',
                loadChildren: './customer-transactions/customer-transactions.module#ResourceCustomerTransactionsModule'
            },
            {
                path: 'payment-transactions',
                loadChildren: './payment-transactions/payment-transactions.module#ResourcePaymentTransactionsModule'
            },
            {
                path: 'invoice-lines',
                loadChildren: './invoice-lines/invoice-lines.module#ResourceInvoiceLinesModule'
            },
            {
                path: 'invoices',
                loadChildren: './invoices/invoices.module#ResourceInvoicesModule'
            },
            {
                path: 'order-lines',
                loadChildren: './order-lines/order-lines.module#ResourceOrderLinesModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#ResourceOrdersModule'
            },
            {
                path: 'special-deals',
                loadChildren: './special-deals/special-deals.module#ResourceSpecialDealsModule'
            },
            {
                path: 'cold-room-temperatures',
                loadChildren: './cold-room-temperatures/cold-room-temperatures.module#ResourceColdRoomTemperaturesModule'
            },
            {
                path: 'package-types',
                loadChildren: './package-types/package-types.module#ResourcePackageTypesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ResourceProductsModule'
            },
            {
                path: 'barcode-types',
                loadChildren: './barcode-types/barcode-types.module#ResourceBarcodeTypesModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'stock-item-temp',
                loadChildren: './stock-item-temp/stock-item-temp.module#ResourceStockItemTempModule'
            },
            {
                path: 'upload-transactions',
                loadChildren: './upload-transactions/upload-transactions.module#ResourceUploadTransactionsModule'
            },
            {
                path: 'upload-action-types',
                loadChildren: './upload-action-types/upload-action-types.module#ResourceUploadActionTypesModule'
            },
            {
                path: 'stock-item-transactions',
                loadChildren: './stock-item-transactions/stock-item-transactions.module#ResourceStockItemTransactionsModule'
            },
            {
                path: 'stock-item-holdings',
                loadChildren: './stock-item-holdings/stock-item-holdings.module#ResourceStockItemHoldingsModule'
            },
            {
                path: 'warranty-types',
                loadChildren: './warranty-types/warranty-types.module#ResourceWarrantyTypesModule'
            },
            {
                path: 'product-attribute',
                loadChildren: './product-attribute/product-attribute.module#ResourceProductAttributeModule'
            },
            {
                path: 'product-attribute-set',
                loadChildren: './product-attribute-set/product-attribute-set.module#ResourceProductAttributeSetModule'
            },
            {
                path: 'product-option',
                loadChildren: './product-option/product-option.module#ResourceProductOptionModule'
            },
            {
                path: 'product-option-set',
                loadChildren: './product-option-set/product-option-set.module#ResourceProductOptionSetModule'
            },
            {
                path: 'product-choice',
                loadChildren: './product-choice/product-choice.module#ResourceProductChoiceModule'
            },
            {
                path: 'product-set',
                loadChildren: './product-set/product-set.module#ResourceProductSetModule'
            },
            {
                path: 'product-set-details',
                loadChildren: './product-set-details/product-set-details.module#ResourceProductSetDetailsModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'materials',
                loadChildren: './materials/materials.module#ResourceMaterialsModule'
            },
            {
                path: 'dangerous-goods',
                loadChildren: './dangerous-goods/dangerous-goods.module#ResourceDangerousGoodsModule'
            },
            {
                path: 'product-brand',
                loadChildren: './product-brand/product-brand.module#ResourceProductBrandModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#ResourceProductCategoryModule'
            },
            {
                path: 'product-catalog',
                loadChildren: './product-catalog/product-catalog.module#ResourceProductCatalogModule'
            },
            {
                path: 'currency',
                loadChildren: './currency/currency.module#ResourceCurrencyModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            },
            {
                path: 'unit-measure',
                loadChildren: './unit-measure/unit-measure.module#ResourceUnitMeasureModule'
            },
            {
                path: 'vehicle-temperatures',
                loadChildren: './vehicle-temperatures/vehicle-temperatures.module#ResourceVehicleTemperaturesModule'
            },
            {
                path: 'shopping-carts',
                loadChildren: './shopping-carts/shopping-carts.module#ResourceShoppingCartsModule'
            },
            {
                path: 'shopping-cart-items',
                loadChildren: './shopping-cart-items/shopping-cart-items.module#ResourceShoppingCartItemsModule'
            },
            {
                path: 'wishlists',
                loadChildren: './wishlists/wishlists.module#ResourceWishlistsModule'
            },
            {
                path: 'wishlist-products',
                loadChildren: './wishlist-products/wishlist-products.module#ResourceWishlistProductsModule'
            },
            {
                path: 'compares',
                loadChildren: './compares/compares.module#ResourceComparesModule'
            },
            {
                path: 'compare-products',
                loadChildren: './compare-products/compare-products.module#ResourceCompareProductsModule'
            },
            {
                path: 'reviews',
                loadChildren: './reviews/reviews.module#ResourceReviewsModule'
            },
            {
                path: 'review-lines',
                loadChildren: './review-lines/review-lines.module#ResourceReviewLinesModule'
            },
            {
                path: 'product-tags',
                loadChildren: './product-tags/product-tags.module#ResourceProductTagsModule'
            },
            {
                path: 'supplier-imported-document',
                loadChildren: './supplier-imported-document/supplier-imported-document.module#ResourceSupplierImportedDocumentModule'
            },
            {
                path: 'stock-items',
                loadChildren: './stock-items/stock-items.module#ResourceStockItemsModule'
            },
            {
                path: 'product-document',
                loadChildren: './product-document/product-document.module#ResourceProductDocumentModule'
            },
            {
                path: 'photos',
                loadChildren: './photos/photos.module#ResourcePhotosModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ResourceEntityModule {}
