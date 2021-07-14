
const Order = require("./models/order");
const CodeCoupon = require("./models/CodeCoupon");
const Item = require("./models/item");

const getAllItems = async (req, res) => {
    let items;
    try {
        items = await Item.find();
    } catch (error) {
        return res.status(500).json({
            message:
                "getting items failed",
        });
    }
    res.json(items);
}

const getAllOrders = async (req, res) => {
    let orders;
    try {
        orders = await Order.find();
    } catch (error) {
        return res.status(500).json({
            message:
                "getting items failed",
        });
    }
    res.json({ orders });
}

const addItem = async (req, res) => {
    const { sizeType,
        type,
        name,
        description,
        price,
        discount,
        sizes,
        oneSize,
        newCollection,
        recommended } = req.body.item
    const newItem = new Item({
        sizeType,
        type,
        name,
        description,
        price,
        discount,
        sizes,
        oneSize,
        newCollection,
        recommended
    })
    newItem.save((err, item) => {
        if (err) return console.error(err);
        console.log(item.name + " saved to item collection.");
        return res.json(item)
    })
}

const getItemById = async (req, res) => {
    console.log('getItemById')
    const existItem = await Item.findById(req.params.id);
    console.log(existItem)
    return res.json(existItem)
}

const updateItem = async (req, res) => {
    const { id, item } = req.body
    console.log(item, id)
    // let newItem;
    try {
        await Item.findOneAndUpdate({ _id: id }, item, { new: true })
    } catch (error) {
        return res.status(500).json({
            message: "The Server is busy, please try again later \n" + error,
        });
    }

}

const buyItems = async (req, res) => {
    const { items, userDetail } = req.body
    console.log('items', items);

    const succeedItems = []
    const errItemsArray = [];
    // const succeedItems = [];
    if (items.length == 0) {
        res.status(201).json({
            message: "there is no items in the cart",
        });
    }

    async function itemsState() {
        await items.forEach(async (item, i) => {
            try {
                console.log('dsf;ksd')
                let currentItem = await Item.findOneAndUpdate(
                    { _id: item.id, [`oneSize.colors.${item.currentColor}.quantity`]: { $gte: item.quantity } },
                    {
                        $inc: { [`oneSize.colors.${item.currentColor}.quantity`]: -item.quantity }
                    }, { new: true }
                )
                console.log('currentItem', currentItem);
                if (!currentItem) {
                    console.log(1.7)
                    errItemsArray.push(item)
                } else {
                    console.log(1.7)
                    succeedItems.push(item);
                }
            }
            catch (err) {
                console.log(err)
            }
        })
    }

    function checkIfNeedUpdate() {
        console.log(3);
        console.log('succeedItems:', succeedItems)
        if (errItemsArray.length > 0) {
            succeedItems.forEach(async (item, i) => {
                await Item.findOneAndUpdate(
                    { _id: item.id, },
                    {
                        $inc: { [`oneSize.colors.${item.currentColor}.quantity`]: item.quantity }
                    }, { new: true }
                )
            })
            res.status(201).json({
                message: "not all the cart is available",
                items: errItemsArray
            });
        } else {
            res.status(201).json({
                message: "the items in the shop updated",
                items: errItemsArray
            });
        }
    }

    await itemsState()
    checkIfNeedUpdate()
    // const newPromise = new Promise((res, rej) => {
    //     if (items.length === 0) rej();
    //     itemsState(); res();
    // })
    // const asyncTestFunction = async () => {
    //     await newPromise
    //     checkIfNeedUpdate()
    // }
    // asyncTestFunction()
    // console.log(10)
    // itemsState();
    // console.log(20)

    // console.log(30)

    // var bar = new Promise((resolve, reject) => {
    //     if (items.length === 0) reject();
    //     items.forEach(async (item, i) => {
    //         let currentItem = await Item.findOneAndUpdate(
    //             { _id: item.id, [`oneSize.colors.${item.currentColor}.quantity`]: { $gte: item.quantity } },
    //             {
    //                 $inc: { [`oneSize.colors.${item.currentColor}.quantity`]: -item.quantity }
    //             }, { new: true }
    //         )
    //         if (!currentItem) {
    //             await Item.find({ _id: item.id }).exec((err, doc) => {
    //                 if (err) {
    //                     if (i === items.length - 1) resolve();
    //                     console.log(err + 'item not found')
    //                 } else {
    //                     errItemsArray.push({
    //                         id: doc[0]._id, currentColor: item.currentColor
    //                         , quantity: doc[0].oneSize.colors[item.currentColor].quantity
    //                     })
    //                     if (i === items.length - 1) resolve();
    //                 }
    //             })

    //         } else {
    //             succeedItems.push(currentItem);
    //             if (i === items.length - 1) resolve();
    //         }
    //     })
    // })

    // bar.then(async () => {

    //     if (errItemsArray.length > 0) {
    //         succeedItems.forEach(async (item, i) => {
    //             await Item.findOneAndUpdate(
    //                 { _id: item.id, },
    //                 {
    //                     $inc: { [`oneSize.colors.${item.currentColor}.quantity`]: item.quantity }
    //                 }, { new: true }
    //             )
    //             if (i === succeedItems.length - 1) {
    //                 return res.json({ message: 'אלו הם הפריטים שחסר מהכמות שלהם במלאי', errItemsArray })
    //             }
    //         })
    //     } else {
    //         return res.json('עבר בהצלחה')
    //     }
    // })
    //     .catch(err => {
    //         console.log(err)
    //         return res.json({ messageErr: 'אין פריטים במלאי', err })
    //     })
}


const cancelDeal = async (req, res) => {
    const { items } = req.body
    console.log('cancelDeal')
    // items.forEach(async (item, i) => {
    //     await Item.findOneAndUpdate(
    //         { _id: item.id, },
    //         {
    //             $inc: { [`oneSize.colors.${item.currentColor}.quantity`]: item.quantity }
    //         }, { new: true }
    //     )
    // })
}

const removeItem = async (req, res) => {

}

const newOrder = async (req, res) => {

}

const getOrderById = async (req, res) => {

}
const updateOrder = async (req, res) => {

}
const removeOrder = async (req, res) => {

}

const createCodeCoupon = async (req, res) => {

}

const getAllCoupons = async (req, res) => {

}

const getItemsByType = async (req, res) => {

    const items = await Item.find({ type: req.params.type })
    if (!items) {
        return res.json({ message: "items with this type didn't find" })
    }
    return res.json(items)
}

const getNewCollectionItems = async (req, res) => {

    const items = await Item.find({ newCollection: true })
    if (!items) {
        return res.json({ message: "new collection items didn't find" })
    }
    return res.json(items)
}

const getRecommendedItems = async (req, res) => {
    const items = await Item.find({ recommended: true })
    if (!items) {
        return res.json({ message: "recommended items didn't find" })
    }
    return res.json(items)
}

const getManyByIds = async (req, res) => {
    const ids = req.body
    console.log(ids)
    await Item.find({
        '_id': {
            $in: [...ids]
        }
    }, function (err, docs) {
        if (err) {
            return res.json({ message: err })
        }
        console.log(docs);
        return res.json(docs)

    });
    // console.log(wishList)
    // return res.json({ wishList })
}

exports.addItem = addItem;
exports.getAllItems = getAllItems;
exports.getItemById = getItemById;
exports.updateItem = updateItem;
exports.removeItem = removeItem;
exports.newOrder = newOrder;
exports.getOrderById = getOrderById;
exports.updateOrder = updateOrder;
exports.removeOrder = removeOrder;
exports.getAllOrders = getAllOrders;
exports.createCodeCoupon = createCodeCoupon;
exports.getAllCoupons = getAllCoupons;
exports.buyItems = buyItems
exports.getItemsByType = getItemsByType
exports.getNewCollectionItems = getNewCollectionItems;
exports.getRecommendedItems = getRecommendedItems;
exports.getManyByIds = getManyByIds;
exports.cancelDeal = cancelDeal;