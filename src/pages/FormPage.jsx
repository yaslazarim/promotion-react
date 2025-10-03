import { useParams } from "react-router-dom";

function FormPage() {
  const { id } = useParams();

  return (
    <div>
      Form
      {id && <div>id: {id}</div>}
    </div>
  );
}

export default FormPage;
