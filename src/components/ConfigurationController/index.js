import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowRightNavbar,
        onToggleShowLeftNavbar,
        onToggleShowContent,
      } = value
      const handleContentChange = () => {
        onToggleShowContent()
      }

      const handleLeftNavbarChange = () => {
        onToggleShowLeftNavbar()
      }

      const handleRightNavbarChange = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="container">
          <h1 className="title">Layout</h1>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="content"
              defaultChecked
              onChange={handleContentChange}
            />
            <label htmlFor="content" className="checkbox-container">
              Content
            </label>
            <br />
            <input
              type="checkbox"
              id="left-navbar"
              defaultChecked
              onChange={handleLeftNavbarChange}
            />
            <label htmlFor="left-navbar" className="checkbox-container">
              Left Navbar
            </label>
            <br />
            <input
              type="checkbox"
              id="right-navbar"
              defaultChecked
              onChange={handleRightNavbarChange}
            />
            <label htmlFor="right-navbar" className="checkbox-container">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
