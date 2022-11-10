import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import PicTrans from "../../assets/PicTrans.png";
import style from "./BodyTransactions.module.css";
import NavigationComponent from "../navigationComponent.jsx";
import Modaledit from "./Modaledit.jsx"
import {gql, useQuery, useMutation} from '@apollo/client';
import LoadingSvg from "../Loading";
import {AiOutlineEdit, AiOutlineDelete} from "react-icons/ai";


const GetTransaction = gql`
  query MyQuery {
    Transaction {
      id
      transaction_name
      date
      price
    }
  }
`
const inputTransaction = gql`
mutation MyMutation($transaction_name: String = "", $price: bigint = "", $date: String = "") {
  insert_Transaction_one(object: {transaction_name: $transaction_name, price: $price, date: $date}) {
    id
  }
}
`

const deleteTransaction = gql`
mutation MyMutation2($id: Int!) {
  delete_Transaction_by_pk(id: $id) {
    id
  }
}`

const dataInsert = 
    {
      transaction_name: "",
      date: "",
      price: "0",
    };


const BodyTransactions = () => {

  const [Insert, setInsert] = useState(dataInsert)

  const {data, loading, error, refetch} = useQuery(GetTransaction)
  const [InsertTrans, {loading: loadingInsert, error: errorInsert}] = useMutation(inputTransaction, {refetchQueries: [GetTransaction]}, {
    onCompleted: (data) => {
      console.log(data)
      localStorage.setItem("transaction_name", JSON.stringify(Insert.transaction_name))
      localStorage.setItem("date", JSON.stringify(Insert.date))
      localStorage.setItem("price", JSON.stringify(Insert.price))
    }
  })
  
  const [deleteTrans, {loading: loadingDelete, error: errorDelete}] = useMutation(deleteTransaction, {refetchQueries: [GetTransaction]})


  
  if(loading || loadingInsert || loadingDelete){
    <LoadingSvg />
  }

  if(error || errorInsert || errorDelete){
    console.log(error)
    return null
}

  const handleInsert = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInsert({
      ...Insert,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    const newTransaction = {
      transaction_name: Insert.transaction_name,
      date: Insert.date,
      price: parseInt(Insert.price),
    }
    InsertTrans({variables: newTransaction})

    e.preventDefault();
  }

  const handleDelete = (idx) => {
    console.log("idx", idx)
    deleteTrans({
      variables: {
        id:idx
      }
    })
  }

  // console.log(Insert);
  

  const dataSummary = [
    {
      month: "This Month",
      value: "Rp. 300.000",
    },
    {
      month: "July",
      value: "Rp. 763.000",
    },
    {
      month: "June",
      value: "Rp. 975.000",
    },
  ];

  return (
    <div className={style.container}>
      <Row>
        <Col sm={3}>
          <NavigationComponent />
        </Col>
        <Col>
          <div className={style.content}>
            <Row>
              <Col>
                <div className={style.recent}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className={style.recentTitle}>
                      <p>Recent Transaction</p>
                    </div>
                  </div>
                  <div style={{ padding: "10px" }} className="table-responsive">
                    {data?.Transaction.map((data, index) => {
                      return (
                        <table
                          class="table table-hover "
                          style={{
                            borderBottom: "1px solid black",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td className="col-4">{data.transaction_name}</td>
                              <td className="col-4">{data.date}</td>
                              <td className="col-4">{data.price}</td>
                              <td><Modaledit/></td>
                              <td><span><AiOutlineDelete onClick={() => handleDelete(data.id)}/></span></td>
                            </tr>
                          </tbody>
                        </table>
                      );
                    })}
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  className="d-flex justify-content-around align-items-center"
                  id={style["imageTrans"]}
                >
                  <div className={style.profpic}>
                    <img
                      src={PicTrans}
                      alt="Generic placeholder image"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className={style.spent}>
                  <div>
                    <p id={style["subTitle"]}>Transaction Input</p>
                    <Form>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Transaction Name :</Form.Label>
                        <Form.Control
                          type="text"
                          name="transaction_name"
                          placeholder="Transaction Name"
                          onChange={handleInsert}
                          value={Insert.transaction_name}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupPassword"
                      >
                        <Form.Label>Date</Form.Label>
                        <Form.Control 
                        type="date" 
                        placeholder="Your Date" 
                        name="date"
                        onChange={handleInsert}
                          value={Insert.date}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupPassword"
                      >
                        <Form.Label>Price</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Your Price" 
                        name="price"
                        onChange={handleInsert}
                          value={Insert.price}/>
                      </Form.Group>
                    </Form>
                    <div>
                      <button
                        type="button"
                        className="btn btn-sm rounded-pill"
                        id={style["btnMore"]}
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default BodyTransactions;
