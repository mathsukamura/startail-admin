import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { ThemeService } from '../../services/theme.service';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { IconComponent } from '../../components/ui/icon/icon.component';
import type { IconName } from '../../components/ui/icon/icon-names';
import { combineLatest, Subscription } from 'rxjs';

type NavItem = {
  name: string;
  icon: IconName;
  path?: string;
  new?: boolean;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    RouterModule,
    IconComponent
  ],
  templateUrl: './app-sidebar.component.html',
  host: { class: 'contents' },
  styles: `
    :host ::ng-deep .menu-item-icon-size svg {
      stroke: currentColor;
      stroke-width: 1px;
    }
  `,
})
export class AppSidebarComponent {

  navItems: NavItem[] = [
    {
      icon: 'nav-dashboard',
      name: "Dashboard",
      path: "/",
    },
    {
      icon: 'nav-chat',
      name: "Chats",
      path: "/chats",
    },
    {
      icon: 'nav-calendar',
      name: "Calendar",
      path: "/calendar",
    },
    {
      icon: 'nav-user-profile',
      name: "User Profile",
      path: "/profile",
    },
  ];
  componentItems: NavItem[] = [
    {
      name: "Forms",
      icon: 'nav-forms',
      subItems: [
        { name: "Form Elements", path: "/form-elements", pro: false }
      ],
    },
    {
      name: "Tables",
      icon: 'nav-tables',
      subItems: [
        { name: "Basic Tables", path: "/basic-tables", pro: false },
      ],
    },
    {
      name: "Pages",
      icon: 'nav-pages',
      subItems: [
        { name: "Blank Page", path: "/blank", pro: false },
        { name: "401 Unauthorized", path: "/401", pro: false },
        { name: "403 Forbidden", path: "/403", pro: false },
        { name: "404 Not Found", path: "/404", pro: false },
        { name: "500 Server Error", path: "/500", pro: false },
        { name: "503 Maintenance", path: "/503", pro: false },
      ],
    },
  ];
  othersItems: NavItem[] = [
    {
      icon: 'nav-charts',
      name: "Charts",
      subItems: [
        { name: "Line Chart", path: "/line-chart", pro: false },
        { name: "Bar Chart", path: "/bar-chart", pro: false },
        { name: "Pie Chart", path: "/pie-chart", pro: false },
        { name: "Donut Chart", path: "/donut-chart", pro: false },
        { name: "Area Chart", path: "/area-chart", pro: false },
      ],
    },
    {
      icon: 'nav-ui-elements',
      name: "UI Elements",
      subItems: [
        { name: "Alerts", path: "/alerts", pro: false },
        { name: "Avatar", path: "/avatars", pro: false },
        { name: "Badge", path: "/badge", pro: false },
        { name: "Buttons", path: "/buttons", pro: false },
        { name: "Images", path: "/images", pro: false },
        { name: "Videos", path: "/videos", pro: false },
      ],
    },
    {
      icon: 'nav-authentication',
      name: "Authentication",
      subItems: [
        { name: "Sign In", path: "/signin", pro: false },
        { name: "Sign Up", path: "/signup", pro: false },
      ],
    },
  ];

  openSubmenu: string | null | number = null;
  subMenuHeights: { [key: string]: number } = {};
  @ViewChildren('subMenu') subMenuRefs!: QueryList<ElementRef>;

  readonly isExpanded$;
  readonly isMobileOpen$;
  readonly isHovered$;
  readonly theme$;

  private subscription: Subscription = new Subscription();

  constructor(
    public sidebarService: SidebarService,
    private themeService: ThemeService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.isExpanded$ = this.sidebarService.isExpanded$;
    this.isMobileOpen$ = this.sidebarService.isMobileOpen$;
    this.isHovered$ = this.sidebarService.isHovered$;
    this.theme$ = this.themeService.theme$;
  }

  ngOnInit() {
    this.subscription.add(
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.setActiveMenuFromRoute(this.router.url);
        }
      })
    );

    this.subscription.add(
      combineLatest([this.isExpanded$, this.isMobileOpen$, this.isHovered$]).subscribe(
        ([isExpanded, isMobileOpen, isHovered]) => {
          if (!isExpanded && !isMobileOpen && !isHovered) {
            this.cdr.detectChanges();
          } else {
          }
        }
      )
    );

    this.setActiveMenuFromRoute(this.router.url);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  toggleSubmenu(section: string, index: number) {
    const key = `${section}-${index}`;

    if (this.openSubmenu === key) {
      this.openSubmenu = null;
      this.subMenuHeights[key] = 0;
    } else {
      this.openSubmenu = key;

      setTimeout(() => {
        const el = document.getElementById(key);
        if (el) {
          this.subMenuHeights[key] = el.scrollHeight;
          this.cdr.detectChanges(); // Ensure UI updates
        }
      });
    }
  }

  onSidebarMouseEnter() {
    this.isExpanded$.subscribe(expanded => {
      if (!expanded) {
        this.sidebarService.setHovered(true);
      }
    }).unsubscribe();
  }

  private setActiveMenuFromRoute(currentUrl: string) {
    const menuGroups = [
      { items: this.navItems, prefix: 'main' },
      { items: this.componentItems, prefix: 'components' },
      { items: this.othersItems, prefix: 'others' },
    ];

    menuGroups.forEach(group => {
      group.items.forEach((nav, i) => {
        if (nav.subItems) {
          nav.subItems.forEach(subItem => {
            if (currentUrl === subItem.path) {
              const key = `${group.prefix}-${i}`;
              this.openSubmenu = key;

              setTimeout(() => {
                const el = document.getElementById(key);
                if (el) {
                  this.subMenuHeights[key] = el.scrollHeight;
                  this.cdr.detectChanges(); // Ensure UI updates
                }
              });
            }
          });
        }
      });
    });
  }

  onSubmenuClick() {
    console.log('click submenu');
    this.isMobileOpen$.subscribe(isMobile => {
      if (isMobile) {
        this.sidebarService.setMobileOpen(false);
      }
    }).unsubscribe();
  }  

  
}
