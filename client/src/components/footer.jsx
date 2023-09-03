import { Link } from "react-router-dom";
import Auth from "../utils/auth";

export default function Footer({ handlePageChange }) {
  return (
    <>
    <div className="footer white-text">
    <div className="footer-copyright">
            <div className="container">
            © 2023 Copyright MIT
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
          </div>
          </>
  )
};

