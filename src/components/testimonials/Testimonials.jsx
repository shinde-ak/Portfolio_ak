import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Bhavesh Kore",
      title: " Engineer",
      img:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFlkAvOVLeo_Q/profile-displayphoto-shrink_400_400/0/1654349106204?e=1661990400&v=beta&t=ckt39urpZ8yU4kXBYbfbbzoyfQmDCetGVDB14-Th1Oo",
      icon: "assets/twitter.png",
      desc:
        " Passed out from VIT , Chennai",
    },
    {
      id: 2,
      name: "Lakshay singh ",
      title: "TCS ",
      img:"https://media-exp1.licdn.com/dms/image/D4D35AQHR4Of5oRFXrA/profile-framedphoto-shrink_400_400/0/1648204525600?e=1657029600&v=beta&t=2h8Zo4nFwHozGFAC39pRXoiQQPoCogs04s2oy4wAqbI",
      icon: "assets/youtube.png",
      desc:
        "TCS India",
      featured: true,
    },
    {
      id: 3,
      name: "Abhishek Chede",
      title: "HSBC",
      img:
        "https://media-exp1.licdn.com/dms/image/C5603AQFO85F3KoEPTw/profile-displayphoto-shrink_400_400/0/1628755280683?e=1661990400&v=beta&t=UbJIlSK9UtD0s8SEM-pE-HHliBldiIBJndx2fBt-FWI",
      desc:
        "Developer",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
