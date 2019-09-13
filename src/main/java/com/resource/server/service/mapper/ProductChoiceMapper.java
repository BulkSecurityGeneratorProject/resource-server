package com.resource.server.service.mapper;

import com.resource.server.domain.*;
import com.resource.server.service.dto.ProductChoiceDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity ProductChoice and its DTO ProductChoiceDTO.
 */
@Mapper(componentModel = "spring", uses = {ProductCategoryMapper.class, ProductAttributeSetMapper.class, ProductOptionSetMapper.class})
public interface ProductChoiceMapper extends EntityMapper<ProductChoiceDTO, ProductChoice> {

    @Mapping(source = "productCategory.id", target = "productCategoryId")
    @Mapping(source = "productCategory.name", target = "productCategoryName")
    @Mapping(source = "productAttributeSet.id", target = "productAttributeSetId")
    @Mapping(source = "productAttributeSet.name", target = "productAttributeSetName")
    @Mapping(source = "productOptionSet.id", target = "productOptionSetId")
    @Mapping(source = "productOptionSet.value", target = "productOptionSetValue")
    ProductChoiceDTO toDto(ProductChoice productChoice);

    @Mapping(source = "productCategoryId", target = "productCategory")
    @Mapping(source = "productAttributeSetId", target = "productAttributeSet")
    @Mapping(source = "productOptionSetId", target = "productOptionSet")
    ProductChoice toEntity(ProductChoiceDTO productChoiceDTO);

    default ProductChoice fromId(Long id) {
        if (id == null) {
            return null;
        }
        ProductChoice productChoice = new ProductChoice();
        productChoice.setId(id);
        return productChoice;
    }
}
