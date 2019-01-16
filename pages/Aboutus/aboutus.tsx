import HeaderFooter from "../../layouts/HeaderFooter"

export default () => {
  return (
    <HeaderFooter active="aboutus">
      <div id="aboutuspage">
        <h1>ABOUT YOPO</h1>
      </div>
      <style>{`
        #aboutuspage {
          height: 600px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </HeaderFooter>
  )
}