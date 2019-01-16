import HeaderFooter from '../../layouts/HeaderFooter'
import dynamic from 'next/dynamic'
const Olddriver = dynamic(import('../../components/OldDriver'),{
  loading: () => <p>loading...</p>
})

export default () => {
  return (
    <HeaderFooter active="home">
      <div id="homepage">
        {/* <img src="/static/images/yq.jpg"></img> */}
        <Olddriver></Olddriver>
      </div>
      <style>{`
        #homepage {
          width: 100%;
          height:600px;
          background-color: #f7f7f7;
          display: flex;
          justify-content: center;
          align-items: center
        }
      `}</style>
    </HeaderFooter>
  )
}