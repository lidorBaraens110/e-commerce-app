
const Order = require("./models/order");
const CodeCoupon = require("./models/CodeCoupon");
const Item = require("./models/item");
const types = ['מכנסיים קצרות', "מכנסיים ארוכות", "חצאיות", "ג'ינסים", "טייצים", "שמלות", "חולצות"]


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
    const existItem = await Item.findById(req.params.id);
    return res.json(existItem)
}

const updateItem = async (req, res) => {
    const { id, item } = req.body
    console.log(item, id)
    try {
        await Item.findOneAndUpdate({ _id: id }, item, { new: true })
    } catch (error) {
        return res.status(500).json({
            message: "The Server is busy, please try again later \n" + error,
        });
    }
}

const buyItems = async (req, res) => {
    const { items, userDetail } = req.body;
    const errItemsArray = [];

    if (items.length === 0) {
        return res.status(201).json({
            message: "there is no items in the cart",
        });
    }

    await Promise.all(items.map(async (item, i) => {
        console.log('new --------------------------------------------------------------------')
        try {
            let [currentItem] = await Item.find({
                _id: item.id,
                // [`oneSize.colors.${item.currentColor}.quantity`]: { $gte: item.quantity }
            })
            let currentColorQ = currentItem.oneSize.colors[item.currentColor].quantity
            const isQuantityAvailable = currentColorQ >= item.quantity
            if (!isQuantityAvailable) {
                errItemsArray.push({ ...item, totalQuantity: currentColorQ })
            }
        }
        catch (err) {
            console.log('err item couldnt upload --->>>>' + err)
        }
    })).then(() => {
        if (errItemsArray.length > 0) {
            return res.status(201).json({
                message: "not all the cart is available",
                items: errItemsArray
            });
        } else {
            items.forEach(async (item, i) => {
                try {
                    await Item.findOneAndUpdate(
                        { _id: item.id, },
                        {
                            $inc: { [`oneSize.colors.${item.currentColor}.quantity`]: -item.quantity }
                        }
                    )
                }
                catch (err) {
                    console.log('err updateItems', err)
                }
            })
        }
    }).then(() => {
        return res.status(201).json({
            message: "cart update",
            items: []
        });
    }).catch(err => console.log('err last---<<', err))
}


const cancelDeal = async (req, res) => {
    const { items } = req.body
    console.log('cancelDeal')
    console.log(items)
    items.forEach(async (item, i) => {
        await Item.findOneAndUpdate(
            { _id: item.id, },
            {
                $inc: { [`oneSize.colors.${item.currentColor}.quantity`]: item.quantity }
            }, { new: true }
        )
    })
}

const getSortedItems = async (req, res) => {
    const itemsPerPage = req.body.itemsPerPage
    const page = req.body.page
    let items = []
    if (req.body.type === 'new Collection') {
        items = await Item.find({ newCollection: true }).sort({ [req.body.sortedBy]: 1 })
    } else if (types.includes(req.body.type)) {
        items = await Item.find({ type: req.body.type }).sort({ [req.body.sortedBy]: 1 })
    } else {
        items = await Item.find({ name: { $regex: req.body.type } }).sort({ [req.body.sortedBy]: 1 })
    }
    const filteredItems = items.filter((x, i) => {
        return i >= (page - 1) * itemsPerPage && i < page * itemsPerPage
    })
    return res.json({ items: filteredItems, totalPage: Math.ceil(items.length / itemsPerPage) })
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


// const getItemsByType = async (req, res) => {
//     const items = await Item.find({ type: req.params.type })
//     if (!items) {
//         return res.json({ message: "items with this type didn't find" })
//     }
//     return res.json(items)
// }

// const getNewCollectionItems = async (req, res) => {

//     const items = await Item.find({ newCollection: true })
//     if (!items) {
//         return res.json({ message: "new collection items didn't find" })
//     }
//     return res.json(items)
// }

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

// const getItemsByName = async (req, res) => {
//     const items = await Item.find({ name: { $regex: req.params.name } })
//     return res.json(items)
// }

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
// exports.getItemsByType = getItemsByType
// exports.getNewCollectionItems = getNewCollectionItems;
exports.getRecommendedItems = getRecommendedItems;
exports.getManyByIds = getManyByIds;
exports.cancelDeal = cancelDeal;
// exports.getItemsByName = getItemsByName;
exports.getSortedItems = getSortedItems