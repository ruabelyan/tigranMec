import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HomeSIngleService = ({ icon, title, border_class, subServices }) => {
  const { t } = useTranslation();
  const serviceBoxStyles = {
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const serviceThumbStyles = {
    marginBottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    backgroundColor: "#f5f5f5",
  };

  const imgStyles = {
    minWidth: "25px",
    height: "25px",
    marginRight: "5px",
  };

  const titleStyles = {
    marginBottom: "10px",
    fontWeight: "bold",
    color: "#2c3e50",
  };

  const paragraphStyles = {
    fontSize: "0.95rem",
    color: "#6c757d",
  };

  const linkStyles = {
    color: "#647589",
    fontWeight: "bold",
    textDecoration: "none",
  };
  return (
    <>
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div
          className={
            border_class
              ? `service-box ${border_class} text-center mb-30`
              : "service-box text-center mb-30 d-flex align-items-center"
          }
          style={serviceBoxStyles}
        >
          <div style={serviceThumbStyles} className="service-thumb">
            <img style={imgStyles} src={`img/services/arrow.png`} alt="" />
          </div>
          <div className="service-content">
            <h4 style={titleStyles}>{title}</h4>

            {subServices?.map((service) => {
              return <p style={paragraphStyles}>{service}</p>;
            })}

            {/* <Link
              className="service-link"
              to="/servicesDetails"
              style={linkStyles}
            >
              {t("read_more_key")}
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSIngleService;
