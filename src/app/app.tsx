import { Footer } from "./footer/footer";
import { Form } from "./form/form";
import { Header } from "./header/header";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Form />
      </main>
      <Footer />
    </>
  );
};
