const PurchaseAgreement = artifacts.require("PurchaseAgreement");

contract("PurchaseAgreement", (accounts) =>{
    before(async () => {
        instance = await PurchaseAgreement.deployed();
    })

    it("Ensures that value is 2x the purchase price", async () =>{
        let price = await instance.getPurchasePrice();
        assert.equal(price, price / 2, "The initial price should be 2x the purchase price");
    })
})