import DesktopNav from "./DesktopNav";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import NavItem from "./NavItem";

function DesktopMenu() {
  return (
    <DesktopNav>
      <NavItem url="/">Home</NavItem>
      <NavItem url="about-us">About Us</NavItem>
      <NavItem dropdown title="Services">
        <Dropdown>
          <DropdownItem url="service">Our Services</DropdownItem>
          <DropdownItem url="single-service">Service Details</DropdownItem>
          <DropdownItem url="pricing">Pricing Plans</DropdownItem>
        </Dropdown>
      </NavItem>
      <NavItem dropdown title="Portfolio">
        <Dropdown>
          <DropdownItem url="portfolio">Our Portfolio</DropdownItem>
          <DropdownItem url="single-portfolio">Project Details</DropdownItem>
        </Dropdown>
      </NavItem>
      <NavItem dropdown title="Company">
        <Dropdown>
          <DropdownItem url="team">Our Team</DropdownItem>
          <DropdownItem url="single-team">Team Member</DropdownItem>
          <DropdownItem url="career">Careers</DropdownItem>
          <DropdownItem url="single-career">Job Details</DropdownItem>
          <DropdownItem url="blog">Blog</DropdownItem>
          <DropdownItem url="single-blog">Blog Details</DropdownItem>
        </Dropdown>
      </NavItem>
      <NavItem dropdown title="Support">
        <Dropdown>
          <DropdownItem url="faq">FAQ</DropdownItem>
          <DropdownItem url="contact-us">Contact Us</DropdownItem>
          <DropdownItem url="terms-and-condition">
            Terms & Conditions
          </DropdownItem>
        </Dropdown>
      </NavItem>
    </DesktopNav>
  );
}

export default DesktopMenu;
