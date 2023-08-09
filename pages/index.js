import HomePage from "@/components/template/HomePage";

// DB
import connectDB from "@/utils/connectDB";
import Customer from "@/models/Customer";

function Index({ customers }) {
  return (
    <>
      <HomePage customers={customers} />
    </>
  );
}

export default Index;

export async function getServerSideProps() {
  try {
    await connectDB();
    const customers = await Customer.find();
    return {
      props: { customers: JSON.parse(JSON.stringify(customers)) },
    };
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
}
