import Link from "next/link";


const social_links = [
  {
    link: "https://facebook.com/bdmatrix",
    target: "_blank",
    icon: "fab fa-facebook-f",
  },
  {
    link: "https://wa.me/923001234567",
    target: "_blank",
    icon: "fab fa-whatsapp",
  },
  {
    link: "https://www.instagram.com/bdmatrix",
    target: "_blank",
    icon: "fa-brands fa-instagram",
  },
  {
    link: "https://www.linkedin.com/company/bdmatrix",
    target: "_blank",
    icon: "fa-brands fa-linkedin",
  },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <Link
          key={i}
          href={l.link}
          className={l.color}
          target={l.target ? l.target : ""}
        >
          <i className={l.icon}></i>
        </Link>
      ))}
    </>
  );
};

export default SocialLinks;




const copy_right_text = {
  copy_right: <>© Copyright <span>©{new Date().getFullYear()}</span> BD Matrix. All Rights Reserved </>,
}
const { copy_right } = copy_right_text

export const CopyRight = () => {
  return (
    <>
      {copy_right}
    </>
  )
}




// home 03 social link data
const social_links_two = [
  {
    link: "http://facebook.com",
    target: "_blank",
    icon: "fab fa-facebook-f",
  },
  {
    link: "http://twitter.com",
    target: "_blank",
    icon: "fab fa-twitter",
  },
  {
    link: "https://www.linkedin.com",
    target: "_blank",
    icon: "fab fa-linkedin-in",
  },
  {
    link: "https://www.youtube.com",
    target: "_blank",
    icon: "fab fa-youtube",
  },

];


export const SocialLinksTwo = () => {
  return (
    <>
      {social_links_two.map((link, i) => (
        <Link
          key={i}
          target={link.target}
          className={`icon-color-${link.color}`}
          href={link.link}
        >
          <i className={link.icon}></i>
          <span></span>
        </Link>
      ))}
    </>
  );
}