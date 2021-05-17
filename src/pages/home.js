import { HeaderContainer } from "../containers/header";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";
const Home = () => {
  return (
    <>
      <HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
      </HeaderContainer>
    </>
  );
};

export default Home;
