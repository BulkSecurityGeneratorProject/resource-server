/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { ResourceTestModule } from '../../../test.module';
import { ProductOptionSetComponent } from 'app/entities/product-option-set/product-option-set.component';
import { ProductOptionSetService } from 'app/entities/product-option-set/product-option-set.service';
import { ProductOptionSet } from 'app/shared/model/product-option-set.model';

describe('Component Tests', () => {
    describe('ProductOptionSet Management Component', () => {
        let comp: ProductOptionSetComponent;
        let fixture: ComponentFixture<ProductOptionSetComponent>;
        let service: ProductOptionSetService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ResourceTestModule],
                declarations: [ProductOptionSetComponent],
                providers: []
            })
                .overrideTemplate(ProductOptionSetComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(ProductOptionSetComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProductOptionSetService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new ProductOptionSet(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.productOptionSets[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
