import HeaderBox from "@/components/ui/HeaderBox";
import Rightsidebar from "@/components/ui/Rightsidebar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    firstName: "Suman",
    lastName: "Shrestha",
    email: "suman@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.77}
          />
        </header>
        RECENT TRANSACTION
      </div>
      <Rightsidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1250.3 }, { currentBalance: 200.3 }]}
      />
    </section>
  );
};

export default Home;
