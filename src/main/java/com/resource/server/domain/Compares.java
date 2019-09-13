package com.resource.server.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Compares.
 */
@Entity
@Table(name = "compares")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Compares extends AbstractAuditingEntity implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @OneToOne
    @JoinColumn(unique = true)
    private People compareUser;

    @OneToMany(mappedBy = "compare")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<CompareProducts> compareLists = new HashSet<>();
    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public People getCompareUser() {
        return compareUser;
    }

    public Compares compareUser(People people) {
        this.compareUser = people;
        return this;
    }

    public void setCompareUser(People people) {
        this.compareUser = people;
    }

    public Set<CompareProducts> getCompareLists() {
        return compareLists;
    }

    public Compares compareLists(Set<CompareProducts> compareProducts) {
        this.compareLists = compareProducts;
        return this;
    }

    public Compares addCompareList(CompareProducts compareProducts) {
        this.compareLists.add(compareProducts);
        compareProducts.setCompare(this);
        return this;
    }

    public Compares removeCompareList(CompareProducts compareProducts) {
        this.compareLists.remove(compareProducts);
        compareProducts.setCompare(null);
        return this;
    }

    public void setCompareLists(Set<CompareProducts> compareProducts) {
        this.compareLists = compareProducts;
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
        Compares compares = (Compares) o;
        if (compares.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), compares.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Compares{" +
            "id=" + getId() +
            "}";
    }
}
