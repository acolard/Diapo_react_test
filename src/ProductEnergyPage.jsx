import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

export default function ProductEnergyPage() {
  const energyCycleData = [
    { name: "Matières premières", value: 25 },
    { name: "Fabrication", value: 30 },
    { name: "Transport", value: 10 },
    { name: "Utilisation", value: 25 },
    { name: "Fin de vie", value: 10 },
  ];

  const performanceData = [
    { phase: "Production", conso: 120, recuperation: 10 },
    { phase: "Utilisation", conso: 300, recuperation: 0 },
    { phase: "Fin de vie", conso: 40, recuperation: 20 },
  ];

  const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans p-6 md:p-12">
      <header className="max-w-5xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Bilan énergétique d'un produit — Performance énergétique
        </h1>
        <p className="mt-3 text-gray-600">
          Page interactive pour comprendre et visualiser le bilan énergétique d’un produit à travers son cycle de vie et sa performance énergétique.
        </p>

        {/* Table des matières flottante */}
        <nav className="fixed top-6 right-6 bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg p-4 w-64 z-50 hidden lg:block">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">Table des matières</h2>
          <ul className="list-decimal list-inside space-y-1 text-blue-600">
            <li><a href="#bilan" className="hover:underline">Bilan énergétique</a></li>
            <li><a href="#cycle-vie" className="hover:underline">Répartition énergétique</a></li>
            <li><a href="#indicateurs" className="hover:underline">Indicateurs</a></li>
            <li><a href="#methodes" className="hover:underline">Méthodes d’évaluation</a></li>
            <li><a href="#leviers" className="hover:underline">Leviers d’amélioration</a></li>
            <li><a href="#outils" className="hover:underline">Outils & normes</a></li>
          </ul>
        </nav>
      </header>

      <article className="max-w-5xl mx-auto grid gap-10">
        <section id="bilan" className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-3">1. Bilan énergétique</h2>
          <p className="text-gray-700">
            Le <strong>bilan énergétique</strong> évalue toutes les consommations et transformations d’énergie liées au cycle de vie complet d’un produit.
          </p>
        </section>

        <section id="cycle-vie" className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">2. Répartition énergétique par étape du cycle de vie</h2>
          <div className="h-80">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={energyCycleData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
                  {energyCycleData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-600 text-center mt-2">
            Exemple de répartition de la consommation énergétique par phase du cycle de vie.
          </p>
        </section>

        <section id="indicateurs" className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-3">3. Indicateurs de performance énergétique</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Énergie grise totale (MJ ou kWh) — minimiser</li>
            <li>Consommation en phase d’usage (kWh/an) — réduire</li>
            <li>Rendement énergétique — maximiser</li>
            <li>Énergie récupérable en fin de vie — maximiser</li>
          </ul>

          <div className="mt-6 h-80">
            <ResponsiveContainer>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="phase" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="conso" fill="#2563eb" name="Consommation (kWh)" />
                <Bar dataKey="recuperation" fill="#10b981" name="Énergie récupérée (kWh)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section id="methodes" className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-3">4. Méthodes d’évaluation</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Analyse du cycle de vie (ACV) — ISO 14040 / 14044</li>
            <li>Bilan énergétique simplifié</li>
            <li>Étiquetage énergétique (A+++ à G)</li>
            <li>Analyse exergétique</li>
          </ul>
        </section>

        <section id="leviers" className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-3">5. Leviers d’amélioration</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Conception</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                <li>Éco-conception</li>
                <li>Matériaux à faible énergie grise</li>
                <li>Modularité & réparabilité</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Fabrication</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                <li>Procédés optimisés</li>
                <li>Récupération de chaleur</li>
                <li>Réduction des pertes</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Utilisation & Fin de vie</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                <li>Efficacité énergétique accrue</li>
                <li>Réutilisation & recyclage</li>
                <li>Valorisation énergétique</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="outils" className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-3">6. Outils, bases de données et normes</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Bases : Ecoinvent, Base ADEME</li>
            <li>Logiciels : SimaPro, OpenLCA</li>
            <li>Labels : EU Energy Label, Energy Star</li>
            <li>Normes : ISO 14040, ISO 50001, EN 16258</li>
          </ul>
        </section>

        <footer className="text-center text-sm text-gray-500 mt-6">
          <p>Visualisation dynamique du bilan énergétique — version interactive avec Recharts.</p>
        </footer>
      </article>
    </main>
  );
}
