import { Verified, ReportGmailerrorred, Balance } from '@mui/icons-material';

export default function VacinasSegurasPage() {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-green-600 mb-6 border-b pb-2">
        Vacinas são Seguras? A Ciência por Trás da Confiança
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        **Sim, vacinas são extremamente seguras.** Elas são submetidas aos mais rigorosos testes antes de chegarem ao público.
      </p>

      {/* Seção de Fases de Teste */}
      <div className="space-y-10">
        
        {/* Fato 1: Rigor dos Testes */}
        <section className="flex flex-col md:flex-row bg-white p-6 rounded-xl shadow-2xl items-center">
          <Verified className="h-12 w-12 text-green-600 mr-6 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Processo de Aprovação em 4 Fases</h2>
            <p className="text-gray-600">
              Todas as vacinas passam por anos de pesquisa e 3 fases de testes clínicos com milhares de voluntários. A **Fase 4 (Farmacovigilância)** continua monitorando a segurança mesmo após a aprovação para garantir a detecção de efeitos raros.
            </p>
          </div>
        </section>

        {/* Fato 2: Desmistificando Mitos */}
        <section className="flex flex-col md:flex-row bg-white p-6 rounded-xl shadow-2xl items-center">
          <ReportGmailerrorred className="h-12 w-12 text-red-500 mr-6 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Mito: &quot;Causam Autismo&quot;</h2>
            <p className="text-gray-600">
              **Falso.** Este mito foi amplamente refutado por décadas de estudos científicos em todo o mundo. A pesquisa original que o propôs foi desmentida e o autor teve sua licença médica cassada. Não há ligação comprovada.
            </p>
          </div>
        </section>

        {/* Fato 3: Benefício vs. Risco */}
        <section className="flex flex-col md:flex-row bg-white p-6 rounded-xl shadow-2xl items-center">
          <Balance className="h-12 w-12 text-teal-600 mr-6 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Os Benefícios Superam os Riscos</h2>
            <p className="text-gray-600">
              Reações graves a vacinas são **extremamente raras**. Os efeitos colaterais mais comuns (dor no local, febre leve) são leves e passageiros. O risco de complicações graves de doenças preveníveis por vacina é infinitamente maior.
            </p>
          </div>
        </section>
      </div>
      
      <div className="mt-12 text-center text-sm text-gray-500">
  **Fonte de Confiança:** Consulte sempre órgãos oficiais como a ANVISA, o Ministério da Saúde e a Organização Mundial da Saúde (OMS).
      </div>
    </div>
  );
}