'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface NavBarProps {
  currentPath: string;  // 改用路径而不是 ID
}

export default function NavBar(params: NavBarProps) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // 向上滚动时显示，向下滚动时隐藏
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navItems = [
    { name: '主页', href: '/', current: false },
    { name: '近期活动', href: '/events', current: false },
    { name: '活动记录', href: '/posts', current: false },
    { name: '星空画廊', href: '/gallery', current: false },
    { name: '协会介绍', href: '#', current: false },
    { name: '加入我们', href: '#', current: false }
  ].map(item => ({
    ...item,
    // 修改匹配逻辑：检查当前路径是否以导航项的 href 开头
    current: params.currentPath === item.href || 
             (item.href !== '/' && params.currentPath.startsWith(item.href))
  }));

  return (
    /* Disclosure里面DisclosureButton是触发器，触发对应的DisclosurePanel */
    <Disclosure as="nav" className="bg-gray-800 w-full shadow-lg top-0 fixed z-[99]">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className={`relative flex items-center justify-between h-16 transition-all duration-300 ease-in-out
          ${visible ? 'sm:h-28' : 'sm:h-16'}`}> 
          {/*小屏幕时使用*/}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* Icon for large screens */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 hidden sm:block">
            <a href="/">
              <Image 
                src="/assets/icons/android-chrome-512x512.png" 
                alt="TAS Logo" 
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </a>
          </div>

          {/*大屏幕时使用*/}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
            <div className="hidden sm:block">
              <div className="flex flex-col items-center pt-14"> {/* 增加顶部padding为icon留出空间 */}
                {/* NavItems */}
                <div 
                  className={`flex space-x-4 transition-all duration-300 ease-in-out transform ${
                    visible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-4 pointer-events-none'
                  }`}
                >
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={
                        (item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white')
                        + ' rounded-md px-3 py-2 text-sm font-medium'
                      }
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Icon for mobile screens */}
          <div className="absolute inset-y-0 left-1/2 flex items-center sm:hidden -translate-x-1/2">
            <a href="/">
              <Image 
                src="/assets/icons/android-chrome-192x192.png" 
                alt="TAS Logo" 
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>
      
      {/*小屏幕时显示的菜单里面的按钮*/}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navItems.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={
                (item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white')
                + ' rounded-md px-3 py-2 text-sm font-medium'
              }
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
