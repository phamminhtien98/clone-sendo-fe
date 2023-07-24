import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

interface Props {
  children?: React.ReactNode;
}

const SenDoLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default SenDoLayout;
