package com.resource.server.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A ReviewLines.
 */
@Entity
@Table(name = "review_lines")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class ReviewLines extends AbstractAuditingEntity implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "product_rating")
    private Integer productRating;

    @Lob
    @Column(name = "product_review")
    private String productReview;

    @Column(name = "seller_rating")
    private Integer sellerRating;

    @Lob
    @Column(name = "seller_review")
    private String sellerReview;

    @Column(name = "delivery_rating")
    private Integer deliveryRating;

    @Lob
    @Column(name = "delivery_review")
    private String deliveryReview;

    @Lob
    @Column(name = "photo")
    private byte[] photo;

    @Column(name = "photo_content_type")
    private String photoContentType;

    @OneToOne(mappedBy = "stockItemOnReviewLine")
    @JsonIgnore
    private StockItems stockItem;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH})
    @JsonIgnoreProperties("reviewLineLists")
    private Reviews review;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getProductRating() {
        return productRating;
    }

    public ReviewLines productRating(Integer productRating) {
        this.productRating = productRating;
        return this;
    }

    public void setProductRating(Integer productRating) {
        this.productRating = productRating;
    }

    public String getProductReview() {
        return productReview;
    }

    public ReviewLines productReview(String productReview) {
        this.productReview = productReview;
        return this;
    }

    public void setProductReview(String productReview) {
        this.productReview = productReview;
    }

    public Integer getSellerRating() {
        return sellerRating;
    }

    public ReviewLines sellerRating(Integer sellerRating) {
        this.sellerRating = sellerRating;
        return this;
    }

    public void setSellerRating(Integer sellerRating) {
        this.sellerRating = sellerRating;
    }

    public String getSellerReview() {
        return sellerReview;
    }

    public ReviewLines sellerReview(String sellerReview) {
        this.sellerReview = sellerReview;
        return this;
    }

    public void setSellerReview(String sellerReview) {
        this.sellerReview = sellerReview;
    }

    public Integer getDeliveryRating() {
        return deliveryRating;
    }

    public ReviewLines deliveryRating(Integer deliveryRating) {
        this.deliveryRating = deliveryRating;
        return this;
    }

    public void setDeliveryRating(Integer deliveryRating) {
        this.deliveryRating = deliveryRating;
    }

    public String getDeliveryReview() {
        return deliveryReview;
    }

    public ReviewLines deliveryReview(String deliveryReview) {
        this.deliveryReview = deliveryReview;
        return this;
    }

    public void setDeliveryReview(String deliveryReview) {
        this.deliveryReview = deliveryReview;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public ReviewLines photo(byte[] photo) {
        this.photo = photo;
        return this;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public String getPhotoContentType() {
        return photoContentType;
    }

    public ReviewLines photoContentType(String photoContentType) {
        this.photoContentType = photoContentType;
        return this;
    }

    public void setPhotoContentType(String photoContentType) {
        this.photoContentType = photoContentType;
    }

    public StockItems getStockItem() {
        return stockItem;
    }

    public ReviewLines stockItem(StockItems stockItems) {
        this.stockItem = stockItems;
        return this;
    }

    public void setStockItem(StockItems stockItems) {
        this.stockItem = stockItems;
    }

    public Reviews getReview() {
        return review;
    }

    public ReviewLines review(Reviews reviews) {
        this.review = reviews;
        return this;
    }

    public void setReview(Reviews reviews) {
        this.review = reviews;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ReviewLines reviewLines = (ReviewLines) o;
        if (reviewLines.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), reviewLines.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ReviewLines{" +
            "id=" + getId() +
            ", productRating=" + getProductRating() +
            ", productReview='" + getProductReview() + "'" +
            ", sellerRating=" + getSellerRating() +
            ", sellerReview='" + getSellerReview() + "'" +
            ", deliveryRating=" + getDeliveryRating() +
            ", deliveryReview='" + getDeliveryReview() + "'" +
            ", photo='" + getPhoto() + "'" +
            ", photoContentType='" + getPhotoContentType() + "'" +
            "}";
    }
}
