import { useContext } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import FormInput from "./component/FormInput";
import Questions from "./component/Questions";
import { QuestionsContext } from "./component/QandAContext";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const { data, DeleteAll } = useContext(QuestionsContext);
  console.log(data);
  const RemoveAll = () => {
    DeleteAll();
    toast.success("تم مسح جميع الاسئلة", {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-message",
    });
  };
  return (
    <Container>
      <Row className="justify-content-center py-5">
        <Col sm="4" className="mb-4">
          <div className="text-center fs-4">اسئلة واجوبه شائعه</div>
        </Col>
        <Col sm="8" className="align-items-center justify-content-center">
          <FormInput />
          {data ? (
            data.length >= 1 ? (
              <>
                <Questions />
                <button className="btn-style w-100 py-2" onClick={RemoveAll}>
                  مسح الكل
                </button>
              </>
            ) : (
              <h4 className="text-center py-5">لايوجد لديك اي اسئلة</h4>
            )
          ) : (
            <h4 className="text-center py-5">لايوجد لديك اي اسئلة</h4>
          )}
        </Col>
      </Row>
      <>
        <ToastContainer />
      </>
    </Container>
  );
}

export default App;
