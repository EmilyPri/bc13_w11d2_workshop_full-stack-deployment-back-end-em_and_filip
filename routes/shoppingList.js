import express from "express";
import { getShoppingList, postListItem } from "../models/shoppingList.js";

const router = express.Router();

/* GET shopping list. */
router.get("/:id", async (req, res) => {
  const data = await getShoppingList(req.params.id);
  res.json({ success: true, payload: data });
});

router.post("/", async (req, res) => {
  const { listItem } = req.body;
  const result = await postListItem(listItem);
  res.status(201).json({ success: true, payload: result });
});

router.patch("/:id", async (req, res) => {
  // const listItemId = ();
  // const updatedComplete = ;
  const result = await updateListItem(req.params.id,req.body);
  res.status(201).json({ success: true, payload: result });
});

export default router;
