const router = require("express").Router();

//Imported Item Model
const ItemModel = require("../model/item");


//Add a Item
/**Add a new item - USER TASK
 * API - http://localhost:3001/insertitem/addItem
 */
router.route("/addItem").post(async (req, res) => {
    if (req.body) {
        const Item = new ItemModel(req.body);
        await Item.save()
            .then((data) => {
                res.status(200).send({ data: data });
            })
            .catch((error) => {
                res.status(500).send({ error: error });
            });
    }
});

/**GET AN ITEM - USER TASK
 * API - http://localhost:3001/insertitem/getItemById/${this.props.match.params.id
 */

router.route("/getItemById/:id").get(async (req, res) => {
    if (req.params && req.params.id) {
        await ItemModel.findById(req.params.id)
            .then((data) => {
                res.status(200).send({ data: data });
            })
            .catch((error) => {
                res.status(500).send({ error: error });
            });
    }
});



/**
//Delete the Item - USER TASK
 * API - http://localhost:3001/insertitem/deleteItem/${this.props.match.params.id
*/
router.route("/deleteItem/:id").delete(async (req, res) => {
    if (req.params && req.params.id) {
        await ItemModel.findByIdAndDelete(req.params.id)
            .then((data) => {
                res.status(200).send({ data: data });
            })
            .catch((error) => {
                res.status(500).send({ error: error });
            });
    }
});

module.exports = router;
