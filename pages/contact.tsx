import { Layout } from "../components/Layout";

const Contact = () => (
  <Layout>
    <div className="w-full h-full grid place-content-center text-center gap-4">
      <div className="text-2xl">
        Let's collaborate and create something exceptional togheter!
      </div>
      <div className="text-left flex flex-col gap-2">
        <a href="mailto:jan.ignacy.czerwinski@gmail.com">
          <b>email:</b> jan.ignacy.czerwinski@gmail.com
        </a>
        <a href="tel:+48728890475">
          <b>phone:</b> +48 728 890 475
        </a>
      </div>
    </div>
  </Layout>
);
export default Contact;
