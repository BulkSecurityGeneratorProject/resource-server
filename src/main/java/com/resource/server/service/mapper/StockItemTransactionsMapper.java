package com.resource.server.service.mapper;

import com.resource.server.domain.*;
import com.resource.server.service.dto.StockItemTransactionsDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity StockItemTransactions and its DTO StockItemTransactionsDTO.
 */
@Mapper(componentModel = "spring", uses = {StockItemsMapper.class, CustomersMapper.class, InvoicesMapper.class, SuppliersMapper.class, TransactionTypesMapper.class, PurchaseOrdersMapper.class})
public interface StockItemTransactionsMapper extends EntityMapper<StockItemTransactionsDTO, StockItemTransactions> {

    @Mapping(source = "stockItem.id", target = "stockItemId")
    @Mapping(source = "stockItem.stockItemName", target = "stockItemStockItemName")
    @Mapping(source = "customer.id", target = "customerId")
    @Mapping(source = "invoice.id", target = "invoiceId")
    @Mapping(source = "supplier.id", target = "supplierId")
    @Mapping(source = "supplier.supplierName", target = "supplierSupplierName")
    @Mapping(source = "transactionType.id", target = "transactionTypeId")
    @Mapping(source = "purchaseOrder.id", target = "purchaseOrderId")
    StockItemTransactionsDTO toDto(StockItemTransactions stockItemTransactions);

    @Mapping(source = "stockItemId", target = "stockItem")
    @Mapping(source = "customerId", target = "customer")
    @Mapping(source = "invoiceId", target = "invoice")
    @Mapping(source = "supplierId", target = "supplier")
    @Mapping(source = "transactionTypeId", target = "transactionType")
    @Mapping(source = "purchaseOrderId", target = "purchaseOrder")
    StockItemTransactions toEntity(StockItemTransactionsDTO stockItemTransactionsDTO);

    default StockItemTransactions fromId(Long id) {
        if (id == null) {
            return null;
        }
        StockItemTransactions stockItemTransactions = new StockItemTransactions();
        stockItemTransactions.setId(id);
        return stockItemTransactions;
    }
}
