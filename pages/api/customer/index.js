import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", message: "Error in Connection with DB" });
  }

  if (req.method === "POST") {
    const data = req.body.data;

    if (!data.name || !data.lastName || !data.email)
      return res
        .status(500)
        .json({ status: "failed", message: "Invaild data" });

    try {
      const customerData = await Customer.create(data);
      res.status(201).json({
        status: "success",
        message: "New Customer Created in DB",
        data: customerData,
      });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "failed", message: "Error in Storing data in DB" });
    }
  }
}
