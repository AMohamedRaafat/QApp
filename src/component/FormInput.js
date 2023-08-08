import React, { useRef, useContext } from "react";
import { Row, Form, Col } from "react-bootstrap";
import { QuestionsContext } from "./QandAContext";
import { toast } from "react-toastify";
import { queryAllByLabelText } from "@testing-library/react";
const FormInput = () => {
  const { AddItem } = useContext(QuestionsContext);
  const q = useRef();
  const a = useRef();
  const handleItem = () => {
    if (q.current.value.length === 0 || a.current.value.length === 0) {
      toast.error("من فضلك اكمل البيانات", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast-message",
      });
    } else {
      const newItem = {
        id: Math.random(),
        q: q.current.value,
        a: a.current.value,
      };
      AddItem(newItem);
      q.current.value = "";
      a.current.value = "";
      toast.success("تمت الاضافة بنجاح", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast-message",
      });
    }
  };
  return (
    <Row className="justify-content-center">
      <Col sm="5" className="mb-4">
        <Form.Control
          type="text"
          ref={q}
          placeholder="ادخل السؤال"
          className="input-style"
        />
      </Col>
      <Col sm="5" className="mb-4">
        <Form.Control
          type="text"
          ref={a}
          placeholder="ادخل الاجابة"
          className="input-style"
        />
      </Col>
      <Col sm="2" className="justify-content-center mb-4">
        <button onClick={handleItem} className="btn-style w-100">
          إضافة
        </button>
      </Col>
    </Row>
  );
};
export default FormInput;
