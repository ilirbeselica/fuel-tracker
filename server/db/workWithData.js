const Derivati = require("./models/derivate.js");

const writeData = async (data) => {

  const newDate = new Date(Date.now() + 86400000);
  const requestDate = new Date(data.data)
  if (requestDate > newDate) return 'Date is invalid'
  const serial = `${data.tabela}-${requestDate.getDate()}${requestDate.getMonth() + 1}${requestDate.getFullYear()}`
  data.serial = serial;
  const input = new Derivati(data);
  try {
    const res = await input.save();
    return res;
  } catch (error) {
    return error;
  }
};

const findData = async (prej, deri, tabela) => {
  const res = await Derivati.find({
    data: { $gte: prej, $lte: deri },
    tabela: tabela || { $regex: ".*?" },
  });
  return res;
};

const deleteData = async (id) => {
  const res = await Derivati.deleteOne({
    _id: id,
  });
  return res;
};

module.exports = {
  writeData,
  findData,
  deleteData,
};
