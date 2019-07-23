import React from "react";
import Header from "../../atoms/app-header";
import Footer from "../../atoms/app-footer";
import SigninModal from "../../molecules/signin-modal";

function SimpleAppBar() {
  return (
    <div>
      <Header />
      <SigninModal />
      <Footer />
    </div>
  );
}

export default SimpleAppBar;
