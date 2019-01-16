import Header from '../components/Header'
import Footer from '../components/Footer'

export default (props) => {
  return (
    <div>
      <Header active={props.active}></Header>
      <div id="LayoutContainer">
        {props.children}
      </div>
      <Footer></Footer>
      <style>{`
        #LayoutContainer {
          min-height: 600px;
          background-color: #f7f7f7
        }
      `}</style>
      <style global jsx> {`
        * {
          margin: 0;
          padding: 0;
        }
        li {
          list-style: none
        }
      `}
      </style>
    </div>
  )
}