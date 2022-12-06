import { pool } from "../db/index.js";

export async function getShoppingList(id) {
  const data = await pool.query("SELECT * FROM shopping WHERE id=$1;", [id]);
  console.log("The shopping list is", data.rows[0]);
  return data.rows[0];
}

export async function postListItem(listItem) {
  const { item, completed } = listItem;
  const data = await pool.query(
    `INSERT INTO shopping (
      item,
      completed
    ) VALUES ($1,$2) RETURNING *;`,
    [item, completed]
  );
  return data.rows[0];
}

export async function markCompleted(id, completed){
  const data = await pool.query(
    `UPDATE shopping SET completed = $1 WHERE id=$2 RETURNING *;`,
    [completed, id]
  );
  return data.rows[0];
}
