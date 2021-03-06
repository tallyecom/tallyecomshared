import {
  // Button,
  Card,
  // Checkbox,
  // Form,
  // FormLayout,
  Heading,
  // Icon,
  Layout,
  // List,
  // Map,
  // Navigation,
  Page, //,
  // Stack,
  // Subheading,
  // TextField,
  // TextContainer,
  // TopBar,
} from "@shopify/polaris";

// import {
//   CirclePlusOutlineMinor,
//   CustomersMajor,
//   HomeMajor,
//   MarketingMajor,
//   OnlineStoreMajor,
//   OrdersMajor,
//   ProductsMajor,
//   ViewMinor,
//   SettingsMajor,
// } from "@shopify/polaris-icons";

const aboutus = () => (
  <Page
    title="About Us"
    breadcrumbs={[{ content: "About us", url: "/aboutus" }]}
  >
    <Layout>
      <Layout.Section>
        <Card>
          <Card.Section title="Developer">
            <Heading>See-D Solutions</Heading>
            <br />
            <p>5, Sai Prasad Building, 1st Floor,</p>
            <p>3rd MamletdarWadi, Malad (West),</p>
            <p>Mumbai - 400064., Maharashtra, India</p>
            <br />
            <p>Support : +919082048148</p>
            <br />
            <p>E-mail : info@tallyecom.in</p>
          </Card.Section>
        </Card>
      </Layout.Section>
    </Layout>
  </Page>
);

export default aboutus;
