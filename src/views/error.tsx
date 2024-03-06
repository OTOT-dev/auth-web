import { useRouteError } from "react-router-dom";

export default function ErrorView() {
  const error = useRouteError() as { statusText?: string, message?: string };
  console.error(`路由错误 => ${error}`);

  return (
    <div id="route-error-page">
      <h1>出错啦！</h1>
      <p>您访问的路由出错啦！</p>
      <p>
        <i>{error.statusText || error.message || '未知路由错误，可尝试查看浏览器控制台以获取详情'}</i>
      </p>
    </div>
  );
}
