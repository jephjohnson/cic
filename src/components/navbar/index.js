import React from "react"
import { Link } from 'gatsby'
import Hamburger from '../hamburger/'
import CN from 'classnames';
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import * as toggleactionCreators from '../../actions/toggleActions';

import logo from '../../img/logo.png'

const mapStateToProps = (state) => ({ hidden: state.toggle.hidden });
const mapDispatchToProps = (dispatch) => bindActionCreators({...toggleactionCreators}, dispatch)


class Navbar extends React.Component {
  
  toggleDiv() {
    this.props.toggleDiv();
  }

  render () {
    const { hidden} = this.props;

    const navLinks = [
      {route: '/', text: 'What'},
      {route: '/how', text: 'How'},
      {route: '/products', text: 'Profile'},
      {route: '/contact', text: 'Contact'},
      
    ];

    const Links = navLinks.map((b, i) =>
      <Link key={ i } to={b.route} activeStyle={{color: 'red'}} className="link is-info navbar-item is-hidden-desktop">
        {b.text}
      </Link>
    );

    const Links1 = navLinks.slice(0, 2).map((b, i) =>
      <p key={ i } className="level-item has-text-centered is-hidden-touch">
        <Link to={b.route} activeStyle={{color: 'red',  borderBottom: '2px solid red'}} className="link is-info">
          {b.text}
        </Link>
      </p>
    );

    const Links2 = navLinks.slice(-2).map((b, i) =>
    <p key={ i } className="level-item has-text-centered is-hidden-touch">
      <Link to={b.route} activeStyle={{color: 'red', borderBottom: '2px solid red'}} className="link is-info">
        {b.text}
      </Link>
    </p>
  );

    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="level container">
          { Links1 }
          <div className="navbar-brand level-item has-text-centered">
              <Link to="/" className="navbar-item">
                <figure className="image">
                  <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
                </figure>
              </Link>
              <Hamburger onClick={this.toggleDiv.bind(this)} className={CN('navbar-burger burger', {'is-active': hidden})} />
          </div>
          <div id="navMenu" onClick={this.toggleDiv.bind(this)} className={CN('navbar-menu is-hidden-desktop', {'is-active': hidden})}>
            <div className="navbar-end">
              {Links}
            </div>
          </div>
          { Links2 }
        </div>
      </nav>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)



