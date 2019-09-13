package com.resource.server.service.dto;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the ShoppingCartItems entity.
 */
public class ShoppingCartItemsDTO extends AbstractAuditingDTO implements Serializable {

    private Long id;

    private Integer quantity;


    private Long stockItemId;

    private String stockItemStockItemName;

    private Long cartId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Long getStockItemId() {
        return stockItemId;
    }

    public void setStockItemId(Long stockItemsId) {
        this.stockItemId = stockItemsId;
    }

    public String getStockItemStockItemName() {
        return stockItemStockItemName;
    }

    public void setStockItemStockItemName(String stockItemsStockItemName) {
        this.stockItemStockItemName = stockItemsStockItemName;
    }

    public Long getCartId() {
        return cartId;
    }

    public void setCartId(Long shoppingCartsId) {
        this.cartId = shoppingCartsId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        ShoppingCartItemsDTO shoppingCartItemsDTO = (ShoppingCartItemsDTO) o;
        if (shoppingCartItemsDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), shoppingCartItemsDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ShoppingCartItemsDTO{" +
            "id=" + getId() +
            ", quantity=" + getQuantity() +
            ", stockItem=" + getStockItemId() +
            ", stockItem='" + getStockItemStockItemName() + "'" +
            ", cart=" + getCartId() +
            "}";
    }
}
