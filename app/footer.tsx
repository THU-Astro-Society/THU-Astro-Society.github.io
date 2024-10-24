

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        {/* 上部分：导航链接 */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="text-lg text-gray-100">清华学生天文协会</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <p className="text-gray-100">联系邮箱: astrotsinghua@163.com</p>
            <p className="text-gray-100">联系微信: tsinghuaastro</p>
          </div>
        </div>

        {/* 下部分：版权声明 */}
        <div className="text-center text-sm text-gray-400">
          &copy; 2024 清华学生天文协会 
          &nbsp;&nbsp;
          <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802041571" target="_blank">京公网安备 11010802041571</a>
          &nbsp;&nbsp;
          <a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2021004998号-2</a>
        </div>
      </div>
    </footer>
  );
}