import { Baby, User, Stethoscope } from 'lucide-react';

export default function VacinasPage() {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 border-b pb-2">
        Calendário Nacional de Vacinação
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Mantenha sua caderneta de vacinação em dia! A proteção se estende da infância à terceira idade.
      </p>

      {/* Seção por Fases da Vida */}
      <div className="space-y-10">
        
        {/* Fase 1: Crianças */}
        <section className="bg-white p-8 rounded-xl shadow-2xl border-l-8 border-yellow-500">
          <div className="flex items-center mb-4">
            <Baby className="h-10 w-10 text-yellow-600 mr-4 bg-yellow-100 p-2 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900">Infância (0 a 10 anos)</h2>
          </div>
          <p className="text-gray-600 mb-4">
            A fase mais crucial para a proteção contra doenças graves.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
            <li>**Ao nascer:** BCG (Tuberculose) e Hepatite B.</li>
            <li>**2, 4 e 6 meses:** Pentavalente, Rotavírus e Pneumocócica.</li>
            <li>**15 meses:** Tríplice Viral (Sarampo, Caxumba, Rubéola) e Hepatite A.</li>
          </ul>
        </section>

        {/* Fase 2: Adolescentes e Adultos */}
        <section className="bg-white p-8 rounded-xl shadow-2xl border-l-8 border-purple-500">
          <div className="flex items-center mb-4">
            <User className="h-10 w-10 text-purple-600 mr-4 bg-purple-100 p-2 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900">Adultos e Adolescentes</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Reforços são necessários e novas vacinas, como a HPV, são importantes.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
            <li>**HPV:** Indicada para meninas e meninos na adolescência.</li>
            <li>**Dupla Adulto (dT):** Reforço a cada 10 anos contra Tétano e Difteria.</li>
            <li>**Hepatite B:** Esquema de 3 doses (caso não tenha sido vacinado na infância).</li>
          </ul>
        </section>

        {/* Fase 3: Idosos */}
        <section className="bg-white p-8 rounded-xl shadow-2xl border-l-8 border-red-500">
          <div className="flex items-center mb-4">
            <Stethoscope className="h-10 w-10 text-red-600 mr-4 bg-red-100 p-2 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900">Idosos e Grupos de Risco</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Foco na proteção contra doenças respiratórias.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
            <li>**Influenza (Gripe):** Dose anual.</li>
            <li>**Pneumocócica:** Proteção contra a pneumonia.</li>
            <li>**COVID-19:** Doses de reforço conforme as diretrizes atuais.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}