import "@/styles/globals.css";
import Layout from "../../layout/Layout";
import { FormProvider } from "@/context/form_context";

export default function App({ Component, pageProps }) {
  return (
    <FormProvider>
      <Component {...pageProps} />;
    </FormProvider>
  );
}
