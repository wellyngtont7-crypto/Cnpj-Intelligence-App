export default function CNPJIntelligencePlatform() {
  const company = {
    corporateName: 'TECH SOLUTIONS BRASIL LTDA',
    tradeName: 'Tech Solutions',
    cnpj: '12.345.678/0001-99',
    status: 'ATIVA',
    trustScore: 87,
    risk: 'Baixo',
    openingDate: '2012-08-14',
    capital: 'R$ 1.250.000',
    city: 'São Paulo',
    state: 'SP',
    cnae: '6201-5/01 - Desenvolvimento de Software',
    website: 'https://techsolutions.com.br',
    email: 'contato@techsolutions.com.br',
    phone: '(11) 99999-9999',
    partners: [
      {
        name: 'Carlos Eduardo Silva',
        role: 'Sócio Administrador',
      },
      {
        name: 'Fernanda Lima',
        role: 'Sócia',
      },
    ],
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 bg-zinc-900/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              CNPJ Intelligence
            </h1>
            <p className="text-zinc-400 text-sm">
              Plataforma de Inteligência Empresarial
            </p>
          </div>

          <button className="bg-violet-600 hover:bg-violet-500 transition px-4 py-2 rounded-xl font-medium">
            Upgrade Pro
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <section className="mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <input
                placeholder="Digite um CNPJ"
                className="flex-1 bg-zinc-950 border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-violet-500"
              />

              <button className="bg-violet-600 hover:bg-violet-500 transition px-6 py-4 rounded-2xl font-semibold">
                Buscar Empresa
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  {company.corporateName}
                </h2>

                <p className="text-zinc-400">
                  {company.tradeName}
                </p>
              </div>

              <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl border border-green-500/30">
                {company.status}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4">
                <p className="text-zinc-500 text-sm mb-1">CNPJ</p>
                <p className="font-semibold">{company.cnpj}</p>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4">
                <p className="text-zinc-500 text-sm mb-1">Capital</p>
                <p className="font-semibold">{company.capital}</p>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4">
                <p className="text-zinc-500 text-sm mb-1">Cidade</p>
                <p className="font-semibold">
                  {company.city} - {company.state}
                </p>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4">
                <p className="text-zinc-500 text-sm mb-1">Abertura</p>
                <p className="font-semibold">{company.openingDate}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl p-8 shadow-2xl">
            <p className="text-white/70 mb-3">Score Empresarial</p>

            <div className="text-7xl font-black mb-4">
              {company.trustScore}
            </div>

            <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-xl">
              <p className="text-sm text-white/70 mb-1">Risco</p>
              <p className="font-bold text-xl">{company.risk}</p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6">
              Informações Empresariais
            </h3>

            <div className="space-y-5">
              <div>
                <p className="text-zinc-500 text-sm mb-1">CNAE Principal</p>
                <p className="font-medium">{company.cnae}</p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm mb-1">Website</p>
                <a
                  href={company.website}
                  className="text-violet-400 hover:underline"
                >
                  {company.website}
                </a>
              </div>

              <div>
                <p className="text-zinc-500 text-sm mb-1">Email</p>
                <p>{company.email}</p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm mb-1">Telefone</p>
                <p>{company.phone}</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6">
              Quadro Societário
            </h3>

            <div className="space-y-4">
              {company.partners.map((partner) => (
                <div
                  key={partner.name}
                  className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 flex items-center justify-between"
                >
                  <div>
                    <p className="font-semibold">{partner.name}</p>
                    <p className="text-zinc-500 text-sm">
                      {partner.role}
                    </p>
                  </div>

                  <button className="bg-zinc-800 hover:bg-zinc-700 transition px-4 py-2 rounded-xl text-sm">
                    Ver relações
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-4">
              Insights IA
            </h3>

            <div className="space-y-4">
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4">
                <p className="text-green-400 font-medium">
                  Empresa com baixo risco cadastral.
                </p>
              </div>

              <div className="bg-violet-500/10 border border-violet-500/20 rounded-2xl p-4">
                <p className="text-violet-300 font-medium">
                  Forte presença digital identificada.
                </p>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4">
                <p className="text-blue-300 font-medium">
                  Tempo de mercado acima da média do setor.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">
                Timeline Empresarial
              </h3>

              <button className="bg-zinc-800 hover:bg-zinc-700 transition px-4 py-2 rounded-xl text-sm">
                Exportar PDF
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-violet-500 mt-2" />

                <div>
                  <p className="font-semibold">
                    Alteração cadastral registrada
                  </p>
                  <p className="text-zinc-500 text-sm">
                    Janeiro de 2025
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-green-500 mt-2" />

                <div>
                  <p className="font-semibold">
                    Capital social atualizado
                  </p>
                  <p className="text-zinc-500 text-sm">
                    Outubro de 2024
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-blue-500 mt-2" />

                <div>
                  <p className="font-semibold">
                    Empresa aberta oficialmente
                  </p>
                  <p className="text-zinc-500 text-sm">
                    Agosto de 2012
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
