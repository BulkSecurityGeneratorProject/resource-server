/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { ResourceTestModule } from '../../../test.module';
import { LastestMerchantUploadedDocumentDeleteDialogComponent } from 'app/entities/lastest-merchant-uploaded-document/lastest-merchant-uploaded-document-delete-dialog.component';
import { LastestMerchantUploadedDocumentService } from 'app/entities/lastest-merchant-uploaded-document/lastest-merchant-uploaded-document.service';

describe('Component Tests', () => {
    describe('LastestMerchantUploadedDocument Management Delete Component', () => {
        let comp: LastestMerchantUploadedDocumentDeleteDialogComponent;
        let fixture: ComponentFixture<LastestMerchantUploadedDocumentDeleteDialogComponent>;
        let service: LastestMerchantUploadedDocumentService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ResourceTestModule],
                declarations: [LastestMerchantUploadedDocumentDeleteDialogComponent]
            })
                .overrideTemplate(LastestMerchantUploadedDocumentDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(LastestMerchantUploadedDocumentDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LastestMerchantUploadedDocumentService);
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