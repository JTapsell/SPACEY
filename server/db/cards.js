const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCard,
  getCards,
  submitCards,
  addCard,
  deleteCard
}

function getCards (db = connection) {
  return db('cards')
    .join('categories', 'categories.id', 'cards.categoryId')
    .select('cards.id', 'cards.categoryId', 'cards.question', 'cards.answer')
}

function getCard (id, db = connection) {
  return db('cards')
    .where('categoryId', id)
    .first()
}

function addCard (newCard, db = connection) {
  return db('cards')
    .insert(newCard)
}

function submitCards (submission, db = connection) {
  return db('cards')
    .where({ usersId: submission.userId })
    .insert([{ question: submission.question }, { answer: submission.answer }])
}

function deleteCard (id, db = connection) {
  return db('cards')
    .where('id', id)
    .del()
}
