import moment from "moment";

export default [
  {
    id: "1",
    description: "Sledge 1",
    note: "",
    amount: 1000,
    createdAt: moment(0).subtract(4, "days").valueOf()
  },
  {
    id: "2",
    description: "Creep 2",
    note: "",
    amount: 3000,
    createdAt: 0
  },
  {
    id: "3",
    description: "Zombat 3",
    note: "",
    amount: 2000,
    createdAt: moment(0).add(4, "days").valueOf()
  }
];
