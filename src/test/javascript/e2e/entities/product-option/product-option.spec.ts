/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ProductOptionComponentsPage, ProductOptionDeleteDialog, ProductOptionUpdatePage } from './product-option.page-object';

const expect = chai.expect;

describe('ProductOption e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let productOptionUpdatePage: ProductOptionUpdatePage;
    let productOptionComponentsPage: ProductOptionComponentsPage;
    let productOptionDeleteDialog: ProductOptionDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load ProductOptions', async () => {
        await navBarPage.goToEntity('product-option');
        productOptionComponentsPage = new ProductOptionComponentsPage();
        await browser.wait(ec.visibilityOf(productOptionComponentsPage.title), 5000);
        expect(await productOptionComponentsPage.getTitle()).to.eq('resourceApp.productOption.home.title');
    });

    it('should load create ProductOption page', async () => {
        await productOptionComponentsPage.clickOnCreateButton();
        productOptionUpdatePage = new ProductOptionUpdatePage();
        expect(await productOptionUpdatePage.getPageTitle()).to.eq('resourceApp.productOption.home.createOrEditLabel');
        await productOptionUpdatePage.cancel();
    });

    it('should create and save ProductOptions', async () => {
        const nbButtonsBeforeCreate = await productOptionComponentsPage.countDeleteButtons();

        await productOptionComponentsPage.clickOnCreateButton();
        await promise.all([productOptionUpdatePage.setValueInput('value'), productOptionUpdatePage.productOptionSetSelectLastOption()]);
        expect(await productOptionUpdatePage.getValueInput()).to.eq('value');
        await productOptionUpdatePage.save();
        expect(await productOptionUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await productOptionComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last ProductOption', async () => {
        const nbButtonsBeforeDelete = await productOptionComponentsPage.countDeleteButtons();
        await productOptionComponentsPage.clickOnLastDeleteButton();

        productOptionDeleteDialog = new ProductOptionDeleteDialog();
        expect(await productOptionDeleteDialog.getDialogTitle()).to.eq('resourceApp.productOption.delete.question');
        await productOptionDeleteDialog.clickOnConfirmButton();

        expect(await productOptionComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
