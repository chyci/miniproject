// import React, { useState } from 'react';
// import {Button, Form} from 'react-bootstrap';
// import Modal from 'react-bootstrap/Modal';
// import { AiOutlineEdit } from "react-icons/ai";
// import { gql, useQuery , useMutation } from '@apollo/client';
// import style from "./BodyTransactions.module.css";

// const getTransEdit = gql`
// query MyQuery($id: Int = 10) {
//     Transaction_by_pk(id: $id) {
//       transaction_name
//       date
//       price
//     }
//   }
// `

// const editTransaction = gql`
//   mutation MyMutation(
//     $id: Int = 10
//     $transaction_name: String = ""
//     $price: bigint = ""
//     $date: String = ""
//   ) {
//     update_Transaction_by_pk(
//       pk_columns: { id: $id }
//       _set: { transaction_name: $transaction_name, price: $price, date: $date }
//     ) {
//       transaction_name
//       date
//       price
//     }
//   }
// `;


// function Modaledit() {
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     // const idUpdate = localStorage.getItem('idUpdate')

//     // const {transaction, loading, error} = useQuery(getTransEdit, 
//     //     {variables: {id: idUpdate},
//     // onCompleted: (queryData) => {
//     //     console.log(queryData)
//     // }
//     // })

//     // const getDataEdit = transaction.map((data) => {return{
//     //     id: data.id,
//     //     transactionName: data.transaction_name,
//     //     date: data.date,
//     //     price: data.price
//     // }})

//     // console.log([getDataEdit])
  
//     return (
//       <>
//         <Button className={style.edit} onClick={handleShow}>
//         <span className={style.editi}><AiOutlineEdit/></span>
//         </Button>
  
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//           <Modal.Title id={style["subTitle"]}>Transaction Input</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//           <Form>
//                       <Form.Group className="mb-3" controlId="formGroupEmail">
//                         <Form.Label>Transaction Name :</Form.Label>
//                         <Form.Control
//                           type="text"
//                           placeholder="Transaction Name"
//                         />
//                       </Form.Group>
//                       <Form.Group
//                         className="mb-3"
//                         controlId="formGroupPassword"
//                       >
//                         <Form.Label>Date</Form.Label>
//                         <Form.Control type="date" placeholder="Your Date" />
//                       </Form.Group>
//                       <Form.Group
//                         className="mb-3"
//                         controlId="formGroupPassword"
//                       >
//                         <Form.Label>Price</Form.Label>
//                         <Form.Control type="text" placeholder="Your Price" />
//                       </Form.Group>
//                     </Form>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
  
//  export default Modaledit;