import { useState, useEffect } from "react";

import "./card.css"
import ExhibitComponent from "../Exhibit/index";
import { v4Api, v6Api } from "../../constants";
import { getIPAddress } from "../../Services/FetchIP";

export default function CardComponent(props) {
  const { children } = props;
  const [v4Data, setV4Data] = useState();
  const [v6Data, setV6Data] = useState();

  useEffect(() => {
    const res = getIPAddress(v4Api);
    res.then((data) => {
      setV4Data(data.ip);
    });
  }, []);

  useEffect(() => {
    const res = getIPAddress(v6Api);
    res.then((data) => {
      setV6Data(data.ip);
    });
  }, []);

  return (
    <ExhibitComponent mainStyles="card-main" title="IP Addresses">
      <div className="class-body">
        <div className="class-child">
          <div>IPv4:  </div>
          <div className="adrress-section">{v4Data}</div>
        </div>
        <div className="class-child">
          <div>IPv6:  </div>
          <div className="adrress-section">{v6Data}</div>
        </div>
      </div>
    </ExhibitComponent>
  );
}
