const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const AuthorModel = require("../models").Author;
const TitleModel = require("../models").Title;

router.get("/profile/:id", async (req, res) => {
  let author = await AuthorModel.findByPk(req.params.id, {
    include: UserModel,
  });
  res.json({ author });
});

router.get("/", async (req, res) => {
  let authors = await AuthorModel.findAll();
  res.json({ authors });
});

router.post("/", async (req, res) => {
  let author = await AuthorModel.create(req.body);
  res.json({ author });
});

router.put("/:id", async (req, res) => {
  let author = await AuthorModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  res.json({ author });
});

router.delete("/:id", async (req, res) => {
  await AuthorModel.destroy({
    where: { id: req.params.id },
  });

  res.json({
    message: `Author with id ${req.params.id} was deleted`,
  });
});

router.post('/:id/newtitle', async (req, res) => {
  const authorId = req.params.id;
	req.body.authorId = authorId;
  let title = await TitleModel.create(req.body);

  let author = await AuthorModel.findByPk(req.params.id, {
    include: TitleModel
  });
  res.json({ author });
});

module.exports = router;