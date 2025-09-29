export default function Topbar() {
  return (
    <header className="fixed top-0 left-0 z-40 w-full h-16 bg-white border-b border-gray-200 shadow-sm transition-all duration-300 md:pl-64">
      <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
        <div className="text-xl font-bold text-teal-600">
          💉 VaciNexo
        </div>
        <nav className="flex items-center space-x-4">
          {/* Futuros botões de usuário, notificações, etc. */}
          <span className="text-sm text-gray-500 hidden sm:block">
            Seu Hub de Informações
          </span>
        </nav>
      </div>
    </header>
  );
}
