  var React = require('react');
  var ReactDOM = require('react-dom');

  var Footer = function(props) {

      return (
          <footer className="page-footer">
              <div>
                    <div className="footer-div-container">
                      <div className="jon-footer">Jon Holmberg</div>
                      <div className="social-links">
                        <a href="https://github.com/Holmberg18"><i className="fa fa-github my-github" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/holmbergj/"><i className="fa fa-linkedin my-linkedin" aria-hidden="true"></i></a>
                      </div>
                    </div>
              </div>
          </footer>
      );
  };

  module.exports = Footer;
