import { WebView } from '@tarojs/components';

const App = () => {
  console.log('webview');
  return (
    <>
      {/* <WebView height={100}*/}
      {/*  src="https://servicewechat.com/wxascheme/jump_wxa?url=weixin%3A%2F%2Fdl%2Fbusiness%2F%3Ft%3D0d3UloT2OQl%26domain%3Dsf1-ttcdn-tos.pstatp.com&pass_ticket=TBxv%2F2C6Ov5gQKCRynI6G4xM5eox%2FLjpZKuKsXbYMIy52pOtA5C6s3BqGGGvlzt53suF7JUXDNXys7mqmM9w3g%3D%3D"*/}
      {/* />*/}
      <WebView height={100}
        src="x-web-search://https://www.baidu.com"
      />
    </>
  );
};
export default App;
