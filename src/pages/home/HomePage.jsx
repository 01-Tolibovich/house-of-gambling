import { ButtonUI, LogoSliderDesktop } from "../../components";

import "./styles.scss";

const HomePage = () => {
  const blog = [
    {
      text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
      date: "10.02.2023",
    },
    {
      text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer ",
      date: "10.02.2023",
    },
    {
      text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
      date: "10.02.2023",
    },
    {
      text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
      date: "10.02.2023",
    },
  ];
  return (
    <main className="home-page">
      <div className="main-info">
        <h1 className="title">
          HOUSE OF <span>GAMBLING</span>
        </h1>
        <span className="description">
          Raise your ROI with direct advertiser
        </span>
        <ButtonUI primaryButton>Become a Partner</ButtonUI>
      </div>
      <div className="logo-icon-block">
        <div className="first-column"><LogoSliderDesktop rtl={true}/></div>
        <div className="second-column"><LogoSliderDesktop rtl={false}/></div>
        <div className="third-column"><LogoSliderDesktop rtl={true}/></div>
      </div>
      <div className="articles-wrapper">
        {blog.map((item, index) => (
        <article key={index}>
          <p>{item.text}</p>
          <small>{item.date}</small>
        </article>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
