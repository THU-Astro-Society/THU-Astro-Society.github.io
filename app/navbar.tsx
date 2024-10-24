import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

interface NavBarProps {
  currentId: number;
}

export default function NavBar(params: NavBarProps) {
  const navItems = [
    { name: 'Home', href: '/', current: false },
    { name: '活动记录', href: '/posts', current: false },
    { name: '协会介绍', href: '#', current: false },
  ].map((item, index) => {
    if (index == params.currentId) {
      return { ...item, current: true };
    }
    return item;
  });
  return (
    /* Disclosure里面DisclosureButton是触发器，触发对应的DisclosurePanel */
    <Disclosure as="nav" className="bg-gray-800 w-full shadow-lg top-0 fixed">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
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
          {/*大屏幕时使用*/}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
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
