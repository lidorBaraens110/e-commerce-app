const express = require("express");
// const mongoose = require("mongoose");
const router = express.Router();
const {
    addItem,
    getAllItems,
    getItemById,
    updateItem,
    removeItem,
    buyItems,
    newOrder,
    getOrderById,
    updateOrder,
    removeOrder,
    getAllOrders,
    createCodeCoupon,
    getAllCoupons,
    getItemsByType,
    getNewCollectionItems,
    getRecommendedItems,
    getManyByIds,
    cancelDeal
} = require("./controller");



//get
router.get('/getAllItems', getAllItems);
router.get('/getItemById/:id', getItemById);
router.get('/getAllOrders', getAllOrders);
router.get('/getOrderById/:id', getOrderById);
router.get('/getAllCoupon/', getAllCoupons);
router.get('/getItemsByType/:type', getItemsByType);
router.get('/getNewCollectionItems', getNewCollectionItems);
router.get('/getRecommendedItems', getRecommendedItems);

//post
router.post("/addItem", addItem);
router.post("/updateItem", updateItem);
router.post("/removeItem", removeItem);
router.post("/newOrder", newOrder);
router.post('/updateOrder', updateOrder);
router.post('/removeOrder', removeOrder);
router.post('/createCodeCoupon', createCodeCoupon);
router.post('/buyItems', buyItems)
router.post('/getManyByIds', getManyByIds)
router.post('/cancelDeal', cancelDeal)

module.exports = router;
