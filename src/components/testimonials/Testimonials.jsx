import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Bhavesh Kore",
      title: " Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Oracle. Passed out from VIT , Chennai",
    },
    {
      id: 2,
      name: "Dnyanda ",
      title: "Full Stack Developer",
      img:
        "https://media-exp1.licdn.com/dms/image/C4E35AQGIUS8IEl5AxA/profile-framedphoto-shrink_400_400/0/1611642662518?e=1646924400&v=beta&t=5dHcuGzL-84kx68hhYC9Cru7sJF6WiZW-mX82diNe5o",
      icon: "assets/youtube.png",
      desc:
        "Amazon India, 5 years",
      featured: true,
    },
    {
      id: 3,
      name: "Abhishek Chede",
      title: "Founder of VIThelper",
      img:
        "https://media-exp1.licdn.com/dms/image/C4E03AQHk3mgsn7PBKg/profile-displayphoto-shrink_400_400/0/1614636565206?e=1652313600&v=beta&t=P-VZr-L1XXGYEHqvvkzvo48iVWLRL3LIsbsRsS30P1c",
      desc:
        "Founder VIThelper",
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
