import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ThemeToggleButtonComponent } from '../../components/common/theme-toggle/theme-toggle-button.component';
import { NotificationDropdownComponent } from '../../components/header/notification-dropdown/notification-dropdown.component';
import { UserDropdownComponent } from '../../components/header/user-dropdown/user-dropdown.component';
import { IconComponent } from '../../components/ui/icon/icon.component';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule,
    ThemeToggleButtonComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    IconComponent,
  ],
  templateUrl: './app-header.component.html',
  host: { class: 'contents' },
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  isApplicationMenuOpen = false;
  scrollOffset = 0;
  readonly isMobileOpen$;

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  constructor(
    public sidebarService: SidebarService,
    private router: Router
  ) {
    this.isMobileOpen$ = this.sidebarService.isMobileOpen$;
  }

  ngOnInit() {
    document.addEventListener('scroll', this.onScroll, { passive: true });
    document.addEventListener('keydown', this.handleKeyDown);
  }

  ngOnDestroy() {
    document.removeEventListener('scroll', this.onScroll);
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  private onScroll = () => {
    this.scrollOffset =
      document.body.scrollTop || document.documentElement.scrollTop;
  };

  handleToggle() {
    if (window.innerWidth >= 768) {
      this.sidebarService.toggleExpanded();
    } else {
      this.sidebarService.toggleMobileOpen();
    }
  }

  toggleApplicationMenu() {
    this.isApplicationMenuOpen = !this.isApplicationMenuOpen;
  }

  focusSearch() {
    this.searchInput?.nativeElement?.focus();
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  handleKeyDown = (event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
      event.preventDefault();
      this.searchInput?.nativeElement?.focus();
    }
  };
}
