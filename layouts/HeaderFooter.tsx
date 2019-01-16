import Header from '../components/Header'

export default (props) => {
  return (
    <div>
      <Header></Header>
      {props.children}
    </div>
  )
}