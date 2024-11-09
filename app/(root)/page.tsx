import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <>
      <h1 className="text-3xl font-black">Welcome to next js 15</h1>
    </>
  );
};

export default Home;
