import { BrowserRouter as Router, Routes, Route } from "react-router";
import { PublicLayout } from "@/layouts/public_layout";
import HomePage from "@/routes/home";
import AuthenticationLayout from "@/layouts/auth_layout";
import { SingInPage } from "@/routes/sing-in";
import { SingUpPage } from "./routes/sing-up";
import ProtecedRoutes from "./layouts/proteced_Routes";
import { MainLayout } from "./layouts/main_layout";
import { Generate } from "./components/generate";
import { Dashboard } from "./routes/dashboard";
import { CreateEditPage } from "./routes/create_edit_page";
import { MockLoadPage } from "./routes/mock_load_page";
import { MockInterviewPage } from "./routes/mock_interview_page";
import { Feedback } from "./routes/feedback";

const App = () => {
  return (
    <Router>
      <Routes>
        {/*public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />}></Route>
        </Route>

        {/*authentication layout*/}
        <Route element={<AuthenticationLayout />}>
          <Route path="/singin/*" element={<SingInPage />}></Route>
          <Route path="/singup/*" element={<SingUpPage />}></Route>
        </Route>

        {/*proteced routes */}
        <Route
          element={
            <ProtecedRoutes>
              <MainLayout />
            </ProtecedRoutes>
          }
        >
          {/*add all the protect router*/}
          <Route element={<Generate />} path="/generate">
            <Route index element={<Dashboard />} />
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage />} />
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
            <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
