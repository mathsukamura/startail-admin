export const ICON_NAMES = [
  'sort-asc',
  'sort-desc',

  'chevron-right',
  'chevron-down',
  'chevron-down-alt',
  'chevron-left-long',
  'chevron-right-long',
  'chevrons-up-down',
  'breadcrumb-arrow',

  'nav-dashboard',
  'nav-chat',
  'nav-calendar',
  'nav-user-profile',
  'nav-forms',
  'nav-tables',
  'nav-pages',
  'nav-charts',
  'nav-ui-elements',
  'nav-authentication',

  'plus',
  'minus',
  'close',
  'close-x',
  'delete',
  'three-dots',
  'export',
  'upload',
  'download',
  'print',
  'filter',
  'search',
  'search-stroke',

  'checkmark',
  'check-circle',
  'cross-small',

  'alert-success',
  'alert-error',
  'alert-warning',
  'alert-info',

  'modal-success',
  'modal-error',
  'modal-warning',
  'modal-info',

  'group',
  'box-line',
  'arrow-up',
  'arrow-down',

  'sun',
  'moon',

  'sidebar-toggle',
  'bell',
  'user',
  'billing',
  'settings',
  'sign-out',
  'star',
  'hamburger',

  'eye',
  'eye-off',
  'calendar-input',
  'clock',

  'send',
  'paperclip',
  'arrow-up-send',
  'chevron-left',

  'facebook',
  'x-twitter',
  'github',

  'link',
  'mail',

  'faq-plus',
  'faq-minus',

  'dropzone-upload',

  'close-sm',

  'calendar-stroke',
  'filter-lines',
  'edit-pencil',
  'pdf-file',
  'eye-stroke',
  'minus-line',
  'plus-line',
  'info-circle',
  'dollar-sign',
  'users-group',
  'activity',

  'card-box',
  'arrow-right-small',

  'badge-plus',
  'button-box',

  'eye-auth',
  'eye-off-auth',
  'sign-in',
  'github-24',
  'facebook-24',

  'chat-compose',
  'chat-badge',
  'phone',
  'dots-vertical',
  'image-plus',
] as const;

export type IconName = (typeof ICON_NAMES)[number];
