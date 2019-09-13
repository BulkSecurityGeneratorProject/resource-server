/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ProductCatalogComponentsPage, ProductCatalogDeleteDialog, ProductCatalogUpdatePage } from './product-catalog.page-object';

const expect = chai.expect;

describe('ProductCatalog e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let productCatalogUpdatePage: ProductCatalogUpdatePage;
    let productCatalogComponentsPage: ProductCatalogComponentsPage;
    let productCatalogDeleteDialog: ProductCatalogDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load ProductCatalogs', async () => {
        await navBarPage.goToEntity('product-catalog');
        productCatalogComponentsPage = new ProductCatalogComponentsPage();
        await browser.wait(ec.visibilityOf(productCatalogComponentsPage.title), 5000);
        expect(await productCatalogComponentsPage.getTitle()).to.eq('resourceApp.productCatalog.home.title');
    });

    it('should load create ProductCatalog page', async () => {
        await productCatalogComponentsPage.clickOnCreateButton();
        productCatalogUpdatePage = new ProductCatalogUpdatePage();
        expect(await productCatalogUpdatePage.getPageTitle()).to.eq('resourceApp.productCatalog.home.createOrEditLabel');
        await productCatalogUpdatePage.cancel();
    });

    it('should create and save ProductCatalogs', async () => {
        const nbButtonsBeforeCreate = await productCatalogComponentsPage.countDeleteButtons();

        await productCatalogComponentsPage.clickOnCreateButton();
        await promise.all([productCatalogUpdatePage.productCategorySelectLastOption(), productCatalogUpdatePage.productSelectLastOption()]);
        await productCatalogUpdatePage.save();
        expect(await productCatalogUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await productCatalogComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last ProductCatalog', async () => {
        const nbButtonsBeforeDelete = await productCatalogComponentsPage.countDeleteButtons();
        await productCatalogComponentsPage.clickOnLastDeleteButton();

        productCatalogDeleteDialog = new ProductCatalogDeleteDialog();
        expect(await productCatalogDeleteDialog.getDialogTitle()).to.eq('resourceApp.productCatalog.delete.question');
        await productCatalogDeleteDialog.clickOnConfirmButton();

        expect(await productCatalogComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
