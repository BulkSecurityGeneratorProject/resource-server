/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { ResourceTestModule } from '../../../test.module';
import { ProductTransactionsDeleteDialogComponent } from 'app/entities/product-transactions/product-transactions-delete-dialog.component';
import { ProductTransactionsService } from 'app/entities/product-transactions/product-transactions.service';

describe('Component Tests', () => {
    describe('ProductTransactions Management Delete Component', () => {
        let comp: ProductTransactionsDeleteDialogComponent;
        let fixture: ComponentFixture<ProductTransactionsDeleteDialogComponent>;
        let service: ProductTransactionsService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ResourceTestModule],
                declarations: [ProductTransactionsDeleteDialogComponent]
            })
                .overrideTemplate(ProductTransactionsDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ProductTransactionsDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProductTransactionsService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
