import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import AdaptiveContent from "./Components/AdaptiveContent";
import Table from "./Components/Table";
import DetailsTable from "./Components/DetailsTable";

const App = () => {
  const [switcher, setSwitch] = useState(false);

  const switcherIsTurnOn = () => setSwitch(true);
  const switcherIsTurnOff = () => setSwitch(false);

  return (
    <>
      <CssBaseline />
      <AdaptiveContent />
      {!switcher && <Table onSwitched={switcherIsTurnOn} />}
      {switcher && <DetailsTable onSwitched={switcherIsTurnOff} />}
    </>
  );
};

export default App;
