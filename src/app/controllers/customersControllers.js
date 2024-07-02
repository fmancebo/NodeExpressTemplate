const customers = [
  { id: 1, name: "Felipe Pai", cargo: "pai de familia" },
  { id: 2, name: "Nat Mae", cargo: "Dona de casa" },
  { id: 3, name: "Beni", cargo: "filho" },
  { id: 4, name: "feijao", cargo: "filho caçula" },
];

class CustomersControllers {
  // lista dos registros
  index(req, res) {
    return res.json(customers);
  }

  // recupera um registro especifico
  show(req, res) {
    const id = parseInt(req.params.id, 10);
    const customer = customers.find(item => item.id === id);
    const status = customer ? 200 : 404;

    return res.status(status).json(customer);
  }

  // cria um novo registro(custommer)
  create(req, res) {
    const { name, cargo } = req.body;
    const id = customers[customers.length - 1].id + 1;

    const newCustomer = { id, name, cargo };
    customers.push(newCustomer);

    return res.status(201).json(newCustomer);
  }

  // atualiza um registro
  update(req, res) {
    const id = parseInt(req.params.id, 10);
    const { name, cargo } = req.body;
    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;
    if (index >= 0) {
      customers[index] = { id, name, cargo };
      return res.status(status).json(customers[index]);
    }
    return res.status(status).json({ error: "Customer not found" });
  }

  // deleta um registro
  destroy(req, res) {
    const id = parseInt(req.params.id, 10);
    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;
    if (index >= 0) {
      customers.splice(index, 1);
      return res.status(status).json();
    }
    return res.status(status).json({ error: "Customer not found" });
  }
}

export default new CustomersControllers();
