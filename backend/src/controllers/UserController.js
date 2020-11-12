const User = require("../model/User");

module.exports = {
  async list(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
  async create(req, res) {
    const { name, email, age } = req.body;
    const user = await User.create({ name, email, age });
    return res.json(user);
  },
  async update(req, res) {
    const { name, email, age } = req.body;
    const { id } = req.params;
    await User.update({ name, email, age }, { where: { id } });
    return res.json({ message: "Usuário atualizado com sucesso" });
  },
  async delete(req, res) {
    const { id } = req.body;
    await User.destroy({ where: { id } });
    return res.json({ message: "Usuário removido com sucesso" });
  },
};
