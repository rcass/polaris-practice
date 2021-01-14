import logo from "./logo.svg";
import "./App.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider, Page, Layout, Card } from "@shopify/polaris";

function App() {
  return (
    <div className="App">
      <AppProvider i18n={enTranslations}>
        <body>
          <Page title="Settings" separator>
            <Layout>
              <Card title="Online store dashboard" sectioned>
                <p>View a summary of your online store’s performance.</p>
              </Card>
            </Layout>
          </Page>
        </body>
      </AppProvider>
    </div>
  );
}

export default App;
