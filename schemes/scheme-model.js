const db = require("../data/dbConfig");

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function findSteps(id) {
  return db("schemes")
    .where({ id })
    .select(
      "schemes.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .join("steps", "schemes.id", "=", "steps.schemes.id");
}

function add(scheme) {
  return db("schemes").insert("scheme");
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes, id);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};
