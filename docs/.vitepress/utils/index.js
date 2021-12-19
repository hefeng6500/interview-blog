const useBaiduTongji = () => {
  var _hmt = _hmt || [];
  (function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?1de472432e76a93aa5f97f550145dfb4";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
};

const useGoogleTongji = () => {
  // <!-- Global site tag (gtag.js) - Google Analytics -->
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-G913KVNC8X";

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-G913KVNC8X");

  const s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(script, s);
};

export const generateTongji = () => {
  useBaiduTongji();
  useGoogleTongji();
};
