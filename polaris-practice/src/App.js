import logo from "./logo.svg";
import "./App.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import {
  AppProvider,
  Page,
  Layout,
  Card,
  Stack,
  Button,
} from "@shopify/polaris";

function App() {
  return (
    <div className="App">
      <AppProvider i18n={enTranslations}>
        <body>
          <Page
            breadcrumbs={[{ content: "Orders", url: "/orders" }]}
            title="#1085"
            secondaryActions={[
              { content: "Print" },
              { content: "Unarchive" },
              { content: "Cancel order" },
            ]}
            pagination={{
              hasPrevious: true,
              hasNext: true,
            }}
          >
            <Card sectioned title="Fulfill order">
              <Stack alignment="center">
                <Stack.Item fill>
                  <p>Buy postage and ship remaining 2 items</p>
                </Stack.Item>
                <Button primary>Continue</Button>
              </Stack>
            </Card>
          </Page>

          {/* <Page title="Settings" separator>
            <Layout>
              <Layout.Section>
                <Card title="Order details" sectioned>
                  <p>Unfulfilled</p>
                  <p>item list will go here</p>
                </Card>
                <Card title="Order details" sectioned>
                  <p>Paid</p>
                  <p>subtotal, shipping and total will go here</p>
                </Card>
              </Layout.Section>
              <Layout.Section secondary>
                <Card title="Tags" sectioned>
                  <p>Add tags to your order.</p>
                </Card>
              </Layout.Section>
            </Layout>
          </Page> */}
        </body>
      </AppProvider>
    </div>
  );
}

export default App;
