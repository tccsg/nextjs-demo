export default () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-inner">
        Copyright © 2018-∞ WWW.GETLAID.CN All Rights Reserved 版权归YoPo所有
        </div>
      </div>
      <style>{`
        .footer {
          width: 100%;
          padding: 0 70px;
          border-top: 1px solid #eee;
          box-sizing: border-box
        }
        .footer .footer-inner {
          width: 100%;
          display: flex;
          flex: 1;
          justify-content: center;
          height: 50px;
          align-items: center;
          font-size: 12px;
          color: #999999
        }
      `}</style>
    </div>
  )
}