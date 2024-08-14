import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      const leftnavBar = () => (
        <div className="left-nav-bar">
          <h1>Left Navbar Menu</h1>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      )

      const turnContent = () => (
        <div className="content">
          <h1>Content</h1>
          <p>
            Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
            elusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim
            ad minim veniam.
          </p>
        </div>
      )

      const rightnavBar = () => (
        <div className="right-nav-bar">
          <h1>Right Navbar</h1>
          <div className="blocks">
            <div>Ad 1</div>
            <div>Ad 2</div>
          </div>
        </div>
      )

      return (
        <div className="body-container">
          {showLeftNavbar && leftnavBar()}
          {showContent && turnContent()}
          {showRightNavbar && rightnavBar()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
