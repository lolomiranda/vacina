import { Syringe, Shield, Microscope } from 'lucide-react';

export default function OQueSaoVacinasPage() {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-teal-600 mb-6 border-b pb-2">
        O que são Vacinas e Como Elas Funcionam?
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Vacinas são um dos maiores triunfos da medicina moderna. Elas treinam seu corpo para se defender, sem que você precise ficar doente.
      </p>

      {/* Seção de Cards - O Mecanismo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        
        {/* Card 1: Introdução do Inimigo */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 transition duration-300 hover:shadow-xl">
          <Microscope className="h-8 w-8 text-blue-500 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Apresentando o Vírus</h2>
          <p className="text-gray-600">
            A vacina contém uma pequena porção (ou uma versão enfraquecida/inativada) do agente infeccioso. É o suficiente para o corpo reconhecer, mas não para causar a doença.
          </p>
        </div>

        {/* Card 2: Treinamento do Exército */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-teal-500 transition duration-300 hover:shadow-xl">
          <Syringe className="h-8 w-8 text-teal-500 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Ativação Imunológica</h2>
          <p className="text-gray-600">
            Ao receber a vacina, seu **sistema imunológico** é ativado. Ele produz **anticorpos** (os "soldados") e **células de memória** para combater a ameaça simulada.
          </p>
        </div>

        {/* Card 3: Defesa Rápida */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500 transition duration-300 hover:shadow-xl">
          <Shield className="h-8 w-8 text-green-500 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Proteção Duradoura</h2>
          <p className="text-gray-600">
            Se você for exposto ao vírus real, as células de memória agem rapidamente, neutralizando a ameaça antes que ela se espalhe. **Você está protegido!**
          </p>
        </div>
      </div>
      
      <section className="mt-12 p-6 bg-teal-50 rounded-lg border-l-4 border-teal-600">
        <h3 className="text-2xl font-semibold text-teal-800 mb-3">
          Imunidade de Rebanho
        </h3>
        <p className="text-gray-700">
          Quando grande parte de uma população está vacinada, a doença não consegue se espalhar, protegendo até mesmo aqueles que não podem ser vacinados (como bebês ou pessoas com imunidade comprometida). Este é o poder coletivo da vacinação.
        </p>
      </section>
    </div>
  );
}