import NavComp from "../NavComp/NavComp";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import { UserContextProvider } from "../Context/UserContext";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import toastCls from "./Toast.module.css";

export default function Layout(props: React.PropsWithChildren) {
  return (
    <UserContextProvider>
      <NavComp />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              color: "rgb(19, 168, 168)",
              textAlign: "center",
              fontWeight: "bold",
            },
            iconTheme: {
              primary: "rgb(19, 168, 168)",
              secondary: "white",
            },
          },
          error: {
            duration: 4000,
            style: {
              color: "red",
              textAlign: "justify",
            },
          },
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== "loading" && (
                  <button
                    onClick={() => toast.dismiss(t.id)}
                    className={toastCls.dismissBtn}
                  >
                    &#x2715;
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
      <Content>{props.children}</Content>
      <Footer />
    </UserContextProvider>
  );
}
