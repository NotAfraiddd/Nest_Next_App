'use client';
import { HomeIcon, User, MousePointer2 } from 'lucide-react';
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarFooter,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from 'next/navigation';
// Menu.
const MenuItems = [
  {
    title: 'Home',
    url: '/',
    icon: HomeIcon,
    subItems: [
      //     { title: 'Account', url: '#' },
      //     { title: 'Privacy', url: '#' },
    ],
    actives: ['/'],
  },
  {
    title: 'User',
    url: '/user',
    icon: User,
    subItems: [
      //     { title: 'Account', url: '#' },
      //     { title: 'Privacy', url: '#' },
    ],
    actives: ['/user'],
  },
];

export function AppSidebar() {
  const getPathname = usePathname();
  const router = useRouter();
  const { toggleSidebar, state } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="overflow-x-hidden">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {MenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {/* Menu button */}
                  <SidebarMenuButton asChild isActive={getPathname === item.url}>
                    <button onClick={() => router.push(item.url)} className="flex items-center">
                      <item.icon />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>

                  {/* Sub menu */}
                  {/* {item.subItems && (
                      <SidebarMenuSub>
                        {item.subItems.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    )} */}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* side bar footer */}
      <SidebarFooter className="flex-row cursor-pointer" onClick={toggleSidebar}>
        <MousePointer2
          style={{
            transform: state !== 'expanded' ? 'rotate(135deg)' : 'rotate(-45deg)',
          }}
        />
        {state === 'expanded' && <span>Collapse the menu</span>}
      </SidebarFooter>
    </Sidebar>
  );
}
