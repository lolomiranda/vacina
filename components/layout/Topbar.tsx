export default function Topbar() {
  return (
    <header className="fixed top-0 left-0 z-40 w-full h-16 bg-white border-b border-gray-200 shadow-sm transition-all duration-300 md:pl-64">
      <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center text-3xl font-extrabold text-teal-600 gap-3">
          <span className="hidden sm:inline">VaciNexo</span>
          <span className="text-3xl">💉</span>
        </div>
        <nav className="flex items-center space-x-4">
          {/* Futuros botões de usuário, notificações, etc. */}
          <span className="text-sm text-gray-500 hidden sm:flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15h-1v-6h2v6h-1zm0-8h-1V7h2v2h-1z" fill="currentColor"/>
            </svg>
          </span>
        </nav>
      </div>
    </header>
  );
}
