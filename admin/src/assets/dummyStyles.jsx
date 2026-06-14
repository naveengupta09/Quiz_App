// Centralized styles for Navbar component
export const navbarStyles = {
  // Navigation bar
  nav: "bg-white/90 font-serif backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50 shadow-sm",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  innerContainer: "relative h-16 flex items-center justify-between",

  // Left: Logo + site name
  homeButton: "flex items-center gap-3 focus:outline-none group",
  logoWrapper: "relative h-12 w-12 flex items-center justify-center transition-all duration-300",
  logoImg: "h-8 w-8 object-cover rounded",
  siteNameWrapper: "flex flex-col items-start",
  siteName: "text-lg md:text-sm xl:text-xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
  siteSubtitle: "text-xs text-gray-500 font-medium",

  // Desktop center navigation
  desktopCenterContainer: "hidden md:block absolute left-1/2 transform -translate-x-1/2",
  desktopCenterInner: "flex items-center gap-3",

  // Dashboard button (desktop)
  dashboardButton: "group relative inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl text-sm font-bold text-white bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5",
  dashboardBlur: "absolute -inset-1 bg-linear-to-r from-indigo-400 to-purple-400 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-500",
  dashboardIcon: "h-4 w-4 z-10",
  dashboardText: "relative z-10 leading-none",

  // List button (desktop)
  listButton: "group relative inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm font-semibold text-indigo-700 bg-white border border-indigo-100 hover:bg-indigo-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-200 shadow-sm hover:shadow-md transition-all duration-250 transform hover:-translate-y-0.5",
  listIcon: "h-4 w-4 z-10 text-indigo-600",
  listText: "relative z-10 leading-none",

  // Desktop right content
  desktopRightContent: "hidden md:flex items-center gap-3",

  // Default profile button (desktop)
  profileGroup: "relative group",
  profileBlur: "absolute -inset-1 bg-linear-to-r from-indigo-300 to-purple-300 rounded-full blur opacity-20 group-hover:opacity-30 transition duration-300",
  profileButton: "relative cursor-pointer inline-flex items-center px-4 py-2.5 rounded-full bg-linear-to-r from-indigo-50 to-purple-50 text-indigo-700 text-sm font-bold hover:text-indigo-800 border border-indigo-100 hover:border-indigo-200 transition-all duration-200 shadow-sm",
  profileIcon: "h-5 w-5 mr-2",

  // Mobile menu trigger
  mobileMenuContainer: "md:hidden flex items-center",
  hamburgerButton: "relative  inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-300",
  menuIcon: "h-6 w-6",
  xIcon: "h-6 w-6",

  // Mobile overlay menu
  mobileOverlay: "md:hidden fixed inset-0 z-40",
  mobileBackdrop: "absolute inset-0 bg-black/40 backdrop-blur-sm",
  mobilePanel: "absolute inset-x-4 top-16 bg-white rounded-2xl shadow-2xl p-6 mx-4",
  mobileNav: "flex flex-col gap-4",

  // Mobile navigation items
  mobileNavButton: "w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-indigo-50 transition",
  mobileNavIcon: "h-5 w-5 text-indigo-600",
  mobileNavItemTitle: "font-semibold",
  mobileNavItemSubtitle: "text-xs text-gray-500",

  // Right content inside mobile menu (if provided)
  mobileRightContentContainer: "pt-2 border-t border-gray-100",
  mobileRightContentInner: "w-full",
};

// ==================== Dashboard Styles ====================
export const dashboardStyles = {
  // ----- Layout -----
  page: "min-h-screen font-serif bg-linear-to-br from-gray-50 to-gray-100 p-4 md:p-6",
  container: "max-w-7xl mx-auto",

  // ----- Header -----
  headerWrapper: "mb-8 md:mb-12",
  headerInner: "flex flex-col md:flex-row md:items-center items-center justify-center gap-4 mb-6",
  title: "text-3xl md:text-4xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-center",

  // ----- Grid -----
  grid: "grid grid-cols-1 lg:grid-cols-3 gap-6",
  mainColumn: "lg:col-span-2 space-y-6",

  // ----- Form Card -----
  card: "relative overflow-hidden rounded-3xl border border-indigo-100 bg-white/95 p-5 md:p-6 shadow-[0_24px_70px_rgba(79,70,229,0.12)]",
  cardGlow: "pointer-events-none absolute -top-20 right-0 h-40 w-40 rounded-full bg-indigo-100/80 blur-3xl",
  cardTitle: "text-2xl font-bold text-gray-900",
  cardSubtitle: "mt-2 max-w-2xl text-sm md:text-base text-gray-500 leading-6",
  cardHeader: "relative z-10 mb-6 space-y-2",
  cardEyebrow: "inline-flex w-fit items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600",
  fieldGrid: "relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-5 md:gap-6",
  fieldBlock: "rounded-2xl border border-gray-100 bg-gray-50/80 p-4 md:p-5 shadow-sm",
  fieldBlockWide: "relative z-10 mt-5 rounded-2xl border border-gray-100 bg-gray-50/80 p-4 md:p-5 shadow-sm",
  fieldLabelRow: "flex items-center justify-between gap-3 mb-2",
  fieldHint: "text-xs font-medium text-gray-400",

  // ----- Form Fields -----
  formFields: "space-y-0",

  // ----- Labels -----
  label: "block text-sm font-semibold text-gray-700",

  // ----- Input Base -----
  inputBase: "w-full px-4 py-3 rounded-2xl bg-white border shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:-translate-y-0.5 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 focus:outline-none",
  inputErrorBorder: "border-red-300",
  inputNormalBorder: "border-gray-300",

  // ----- Error Message -----
  errorMessage: "mt-1 text-sm text-red-600 flex items-center gap-1",
  errorIcon: "w-4 h-4",

  // ----- Difficulty Level Buttons -----
  levelGrid: "grid grid-cols-1 sm:grid-cols-3 gap-3",
  levelButtonBase: "group w-full p-4 md:p-5 rounded-2xl border bg-white transition-all text-left shadow-sm hover:-translate-y-0.5 hover:shadow-md",
  levelButtonTextBase: "font-medium",
  // (dynamic selected classes are built in the component using lvl.bg and lvl.color)

  // ----- Time Limit -----
  timeContainer: "flex flex-col sm:flex-row gap-3 sm:items-center",
  timeInputWrapper: "relative flex-1",
  timeInputBase: "w-full px-4 md:px-4 py-3 pl-11 border rounded-2xl bg-white shadow-sm transition-all duration-200 focus:-translate-y-0.5 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 focus:outline-none",
  timeDisplay: "sm:min-w-24 px-4 py-3 rounded-2xl bg-indigo-50 text-indigo-700 text-center font-semibold border border-indigo-100",
  timeHint: "mt-3 flex items-start text-sm text-gray-500 gap-2",
  timeHintIcon: "w-4 h-4 mr-1 shrink-0",

  // ----- CSV Upload Dropzone -----
  dropzoneBase: "group border-2 border-dashed rounded-3xl p-6 md:p-8 text-center cursor-pointer transition-all duration-200 bg-white hover:bg-indigo-50/30",
  dropzoneDragging: "border-indigo-500 bg-indigo-50 ring-4 ring-indigo-100",
  dropzoneError: "border-red-300 bg-red-50",
  dropzoneNormal: "border-gray-200 hover:border-indigo-300 hover:shadow-sm",
  hiddenInput: "hidden",
  uploadIconBase: "w-14 h-14 mx-auto mb-4 transition-transform duration-200 group-hover:scale-105",
  uploadIconDragging: "text-blue-500",
  uploadIconNormal: "text-gray-400",
  dropzoneTextPrimary: "text-gray-800 font-semibold mb-1",
  dropzoneTextSecondary: "text-sm text-gray-500 max-w-md mx-auto",

  // ----- Success Loaded Indicator -----
  successContainer: "mt-4 p-4 md:p-5 bg-green-50 border border-green-200 rounded-2xl",
  successInner: "flex items-center justify-between",
  successLeft: "flex items-center gap-3",
  successIcon: "w-5 h-5 text-green-600",
  successText: "font-medium text-green-800",
  previewToggleButton: "flex cursor-pointer items-center gap-2 px-4 py-2.5 bg-white border border-green-200 text-green-700 rounded-xl hover:bg-green-50 transition",
  previewIcon: "w-4 h-4",

  // ----- Submit Button -----
  submitBase: "relative z-10 w-full py-3.5 md:py-4 rounded-2xl font-semibold text-lg transition-all duration-200",
  submitValid: "bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5",
  submitInvalid: "bg-gray-100 text-gray-400 cursor-not-allowed",
  submitInner: "flex items-center justify-center gap-3",
  submitIcon: "w-5 h-5",

  // ----- Preview Card -----
  previewCard: "relative overflow-hidden bg-white/95 rounded-3xl shadow-[0_24px_70px_rgba(79,70,229,0.1)] border border-indigo-100 p-4 md:p-6",
  previewCardGlow: "pointer-events-none absolute -left-10 top-0 h-24 w-24 rounded-full bg-indigo-100/70 blur-3xl",
  previewHeader: "flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-4",
  previewTitle: "text-lg md:text-xl font-bold text-gray-900",
  previewSubtitle: "text-gray-500 mt-1",
  previewRight: "flex items-center gap-3",
  timeBadge: "flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100",
  timeBadgeIcon: "w-4 h-4",
  timeBadgeText: "text-sm font-medium",
  countBadge: "px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100",

  // ----- Preview List -----
  previewList: "space-y-4",
  previewItem: "border border-gray-200/80 rounded-2xl p-4 md:p-5 bg-white hover:border-indigo-200 hover:shadow-sm transition",
  previewNumber: "shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center font-bold",
  previewContent: "flex-1",
  previewQuestion: "font-semibold text-gray-900 leading-7",
  optionsGrid: "grid grid-cols-1 sm:grid-cols-2 gap-3",
  optionItemBase: "p-3 rounded-xl border transition",
  optionItemCorrect: "bg-green-50 border-green-200 shadow-sm",
  optionItemIncorrect: "bg-gray-50 border-gray-200",
  optionLetterBase: "w-6 h-6 rounded flex items-center justify-center text-sm font-semibold",
  optionLetterCorrect: "bg-green-600 text-white",
  optionLetterIncorrect: "bg-white text-gray-600 border border-gray-300",
  optionTextCorrect: "font-medium text-green-800",
  optionTextIncorrect: "text-gray-700",
  optionEmptyText: "text-gray-400",
  correctIcon: "ml-auto",
  correctIconSvg: "w-5 h-5 text-green-500",
  optionFooter: "mt-3 pt-3 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3",
  answerBadge: "inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-800 rounded-lg",
  answerBadgeIcon: "w-4 h-4",
  answerBadgeText: "text-sm font-medium",
  positionText: "text-sm text-gray-500",

  // ----- Right Column (Tips & Summary) -----
  rightColumn: "space-y-6",

  // Tips Card
  tipsCard: "relative overflow-hidden bg-linear-to-br from-indigo-50 via-white to-purple-50 rounded-3xl border border-indigo-100 p-4 md:p-6 shadow-[0_18px_50px_rgba(79,70,229,0.08)]",
  tipsCardGlow: "pointer-events-none absolute -right-10 top-0 h-24 w-24 rounded-full bg-purple-100/80 blur-3xl",
  tipsTitle: "text-lg md:text-xl font-bold text-gray-900 mb-4",
  tipsList: "space-y-3",
  tipsItem: "flex items-start gap-3",
  tipsNumber: "w-7 h-7 bg-white text-indigo-600 border border-indigo-200 rounded-full flex items-center justify-center text-sm font-bold shadow-sm shrink-0",
  tipsText: "text-sm text-gray-700 leading-6",

  // Summary Card
  summaryCard: "relative overflow-hidden rounded-3xl border border-indigo-100 bg-white/95 p-4 md:p-6 shadow-[0_18px_50px_rgba(79,70,229,0.08)]",
  summaryCardGlow: "pointer-events-none absolute -right-12 top-0 h-24 w-24 rounded-full bg-indigo-100/80 blur-3xl",
  summaryTitle: "text-lg md:text-xl font-bold text-gray-900 mb-4",
  summaryRows: "space-y-2",
  summaryRow: "flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0",
  summaryLabel: "text-sm text-gray-600",
  summaryValue: "font-semibold text-gray-900",
  summaryIcon: "w-4 h-4 text-indigo-400",
  summaryStatusRow: "flex items-center justify-between py-2", // no border
  statusBadgeBase: "px-3 py-1 rounded-full text-sm font-semibold shadow-sm",
  statusBadgeReady: "bg-green-100 text-green-800 border border-green-200",
  statusBadgeIncomplete: "bg-yellow-100 text-yellow-800 border border-yellow-200",

  // ----- Toast Notification -----
  toastOuter: "fixed top-6 right-4 z-50 max-w-sm w-full transform transition-all duration-300",
  toastVisible: "translate-x-0 opacity-100",
  toastHidden: "translate-x-full opacity-0",
  toastInner: "rounded-xl shadow-lg p-4",
  toastSuccess: "bg-green-50 border border-green-200",
  toastError: "bg-red-50 border border-red-200",
  toastInfo: "bg-blue-50 border border-blue-200",
  toastIconSuccess: "w-6 h-6 text-green-600 shrink-0",
  toastIconError: "w-6 h-6 text-red-600 shrink-0",
  toastIconInfo: "w-6 h-6 text-blue-600 shrink-0",
  toastTextBase: "font-medium",
  toastTextSuccess: "text-green-800",
  toastTextError: "text-red-800",
  toastTextInfo: "text-blue-800",
  toastCloseButton: "text-gray-400 hover:text-gray-600",
};

// ==================== Hero Styles ====================
export const heroStyles = {
  wrapper: "relative min-h-[calc(100vh-4rem)] overflow-hidden bg-linear-to-br from-slate-950 via-indigo-950 to-purple-950 text-white",
  backgroundGlowOne: "absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl",
  backgroundGlowTwo: "absolute right-0 top-0 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl",
  content: "relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8",
  card: "w-full max-w-3xl rounded-[2rem] border border-white/10 bg-white/10 p-8 sm:p-10 backdrop-blur-xl shadow-[0_30px_120px_rgba(15,23,42,0.45)]",
  badge: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-indigo-100",
  iconWrap: "mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-indigo-700 shadow-2xl shadow-indigo-500/20",
  title: "text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white",
  titleAccent: "bg-linear-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent",
  subtitle: "mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-8 text-slate-300",
  statsRow: "mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3",
  statPill: "rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-left backdrop-blur-md",
  statLabel: "text-xs uppercase tracking-[0.18em] text-slate-400",
  statValue: "mt-2 text-lg font-semibold text-white",
  actions: "mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center",
  primaryAction: "inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:bg-slate-100",
  secondaryAction: "inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10",
  footerNote: "mt-6 text-sm text-slate-400",
};

// ==================== ListPage Styles ====================
export const listPageStyles = {
  // ----- Custom CSS (animations) -----
  customCSS: `
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes float { 0%,100% { transform: translateY(0px);} 50% { transform: translateY(-10px);} }
    @keyframes border-glow { 0%,100% { box-shadow: 0 0 20px rgba(59,130,246,0.3);} 50% { box-shadow: 0 0 40px rgba(59,130,246,0.6);} }
    .animate-blob { animation: blob 7s infinite; }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-4000 { animation-delay: 4s; }
    .animate-float { animation: float 3s ease-in-out infinite; }
    .animate-shimmer { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent); background-size: 200% 100%; animation: shimmer 2s infinite; }
    .animate-border-glow { animation: border-glow 2s ease-in-out infinite; }
  `,

  // ----- Layout -----
  page: "min-h-screen font-sans bg-linear-to-br from-slate-50 via-white to-slate-100 p-4 md:p-8",
  container: "max-w-7xl font-[pacifico] mx-auto relative",

  // ----- Header -----
  headerWrapper: "mb-8 md:mb-12 relative",
  headerInner: "flex flex-col items-center justify-center gap-4 mb-6",
  title: "text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center",
  subtitle: "text-sm md:text-base text-slate-600 max-w-2xl text-center px-4",

  // ----- Search & Filter -----
  searchContainer: "relative mb-6",
  animatedBorderBase: "absolute -inset-0.5 rounded-2xl blur opacity-30 transition duration-1000 bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500",
  animatedBorderActive: "animate-border-glow",
  inputWrapper: "relative bg-white rounded-2xl p-1 shadow-sm",
  searchIcon: "absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 z-10",
  inputBase: "w-full pl-12 pr-4 py-3 sm:py-4 bg-white/80 backdrop-blur-sm rounded-xl transition-all duration-300 placeholder-slate-400 text-slate-700 font-medium border outline-none focus:outline-none focus:ring-0 focus:border-transparent",
  inputBorder: "border-slate-200",
  inputBorderTransparent: "border-transparent",
  filterWrapper: "absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-3",
  filterIcon: "w-4 h-4 text-slate-500",
  select: "appearance-none bg-transparent border-0 focus:outline-none focus:ring-0 text-slate-700 font-medium cursor-pointer text-sm",

  // ----- Toast -----
  toastContainer: "fixed top-6 right-6 z-50",
  toastOuter: "max-w-sm w-full pointer-events-auto transition-all transform origin-top-right",
  toastVisible: "opacity-100 translate-y-0",
  toastHidden: "opacity-0 -translate-y-4",
  toastInner: "bg-white rounded-xl shadow-lg border border-slate-100 p-3 flex items-start gap-3",
  toastIconBox: "p-2 rounded-lg bg-green-50",
  toastIcon: "w-5 h-5 text-green-600",
  toastMessage: "font-semibold text-slate-800",
  toastClose: "p-2 rounded-full hover:bg-slate-100 transition",
  toastCloseIcon: "w-4 h-4 text-slate-500",

  // ----- Grid & Cards -----
  grid: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6",
  cardGroup: "relative group",
  card: "relative bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200 hover:border-slate-300 overflow-hidden transition-all duration-400 group-hover:scale-[1.02] group-hover:shadow-2xl shadow-lg shadow-slate-200/50",
  cardHeader: "relative p-5 sm:p-6 overflow-hidden",
  cardHeaderInner: "relative z-10 flex items-start sm:items-center justify-between gap-4 flex-col sm:flex-row",
  cardHeaderLeft: "flex items-start sm:items-center gap-4",
  iconWrapper: "p-3 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center",
  techName: "text-xl mt-2 md:mt-0 sm:text-xl lg:text-lg font-bold text-white drop-shadow-lg",

  // Level badge (base classes)
  levelBadgeBase: "inline-flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-sm border shadow-lg text-xs sm:text-sm lg:flex-col xl:flex-row lg:items-center lg:gap-1",
  levelIconBase: "w-4 h-4",

  // Stats cards
  cardBody: "p-5 sm:p-6",
  cardBodyContent: "space-y-4 mb-4",
  statsGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  statCardBase: "p-3 rounded-2xl border transition-colors duration-300 bg-linear-to-br",
  statCardTime: "border-blue-100 hover:border-blue-200 from-blue-50 to-white",
  statCardQuestions: "border-emerald-100 hover:border-emerald-200 from-emerald-50 to-white",
  statCardDate: "border-purple-100 hover:border-purple-200 from-purple-50 to-white",
  statIconBox: "p-2 rounded-lg",
  statIconBoxBlue: "bg-blue-100",
  statIconBoxEmerald: "bg-emerald-100",
  statIconBoxPurple: "bg-purple-100",
  statIcon: "w-4 h-4",
  statIconBlue: "text-blue-600",
  statIconEmerald: "text-emerald-600",
  statIconPurple: "text-purple-600",
  statLabel: "text-xs text-slate-500",
  statValue: "font-bold text-sm text-slate-800",

  // Card footer
  cardFooter: "flex items-center justify-between pt-4 border-t border-slate-100",
  deleteButton: "flex cursor-pointer items-center gap-2 px-4 py-2 text-rose-600 hover:text-rose-700 hover:bg-linear-to-r hover:from-rose-50 hover:to-pink-50 rounded-xl transition-all duration-250 group/delete border border-rose-100 hover:border-rose-200 hover:shadow-sm",
  trashIcon: "w-4 h-4 transition-transform group-hover/delete:scale-110",
  deleteText: "font-semibold text-sm",

  // ----- Empty State -----
  emptyContainer: "text-center py-14 relative",
  emptyBlurWrapper: "absolute inset-0 flex items-center justify-center pointer-events-none",
  emptyBlurCircle: "w-56 h-56 bg-linear-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30",
  emptyContent: "relative",
  emptyIconBox: "w-20 h-20 mx-auto mb-4 bg-linear-to-r from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center shadow",
  emptyIcon: "w-10 h-10 text-slate-400",
  emptyTitle: "text-xl sm:text-2xl font-bold text-slate-800 mb-2",
  emptyText: "text-slate-600 max-w-md mx-auto mb-6 px-4",
  emptyButton: "inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-blue-500 to-indigo-500 text-white rounded-2xl hover:from-blue-600 hover:to-indigo-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5",
  emptyButtonIcon: "w-5 h-5",
  emptyButtonText: "font-bold text-sm",
};