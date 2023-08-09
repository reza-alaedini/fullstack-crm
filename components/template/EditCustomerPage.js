import { useRouter } from "next/router";
import { useState } from "react";
import moment from "moment";
import Form from "../module/Form";

function EditCustomerPage({ data, id }) {
  const router = useRouter();
  const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "";
  const [form, setForm] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || "",
    address: data.address || "",
    postalCode: data.postalCode || "",
    date: date,
    products: data.products || [],
  });

  const cancelHandler = () => {
    router.push("/");
  };

  const editHandler = async () => {
    const res = await fetch(`/api/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "success") router.push("/");
  };

  return (
    <div className="customer-page">
      <h4>Edit Customer</h4>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={editHandler}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default EditCustomerPage;
