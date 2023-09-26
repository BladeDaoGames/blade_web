import { isMobile } from "react-device-detect";
import Mobile from "./component/mobile/mobile.tsx";
import Web from "./component/web/web.tsx";

function App() {

  const renderContent = () => {
    if (isMobile) {
      return <Mobile/>
    }
    return <Web/>
  }
  return (
      renderContent()
  )
}

export default App
