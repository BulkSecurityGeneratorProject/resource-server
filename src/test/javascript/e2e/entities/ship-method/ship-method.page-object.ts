import { element, by, ElementFinder } from 'protractor';

export class ShipMethodComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-ship-method div table .btn-danger'));
    title = element.all(by.css('jhi-ship-method div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async clickOnLastDeleteButton() {
        await this.deleteButtons.last().click();
    }

    async countDeleteButtons() {
        return this.deleteButtons.count();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ShipMethodUpdatePage {
    pageTitle = element(by.id('jhi-ship-method-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    shipMethodNameInput = element(by.id('field_shipMethodName'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setShipMethodNameInput(shipMethodName) {
        await this.shipMethodNameInput.sendKeys(shipMethodName);
    }

    async getShipMethodNameInput() {
        return this.shipMethodNameInput.getAttribute('value');
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}

export class ShipMethodDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-shipMethod-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-shipMethod'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
