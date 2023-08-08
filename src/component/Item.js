import React, { useContext } from "react";
import { Accordion, Row } from "react-bootstrap";
import { QuestionsContext } from "./QandAContext";
import { toast } from "react-toastify";
const Item = () => {
  const { data, DeleteItem } = useContext(QuestionsContext);
  const Removeitem = (id) => {
    DeleteItem(id);
    toast.success("تم مسح السؤال", {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-message",
    });
  };
  const mappingData = data?.map((item, idx) => {
    return (
      <Accordion.Item eventKey={item.id} className="my-2" key={idx}>
        <Accordion.Header>
          <div className="m-auto">{item.q}</div>
        </Accordion.Header>
        <Accordion.Body>
          <div className="answer justify-content-between">
            <p className="answer-text">{item.a}</p>
            <button
              className="btn btn-danger"
              onClick={() => Removeitem(item.id)}
            >
              مسح الاجابة
            </button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    );
  });
  return (
    <Row>
      <Accordion>{mappingData}</Accordion>
    </Row>
  );
};

export default Item;
