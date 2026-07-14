const credentials = [
  { label: "1º escritório", detail: "Credenciado XP com DNA PJ" },
  { label: "CVM 178/23", detail: "Assessoria de Investimento registrada" },
  { label: "Parceria", detail: "XP Investimentos" },
  { label: "São José do Rio Preto", detail: "Sede no Noroeste Paulista" },
];

export function CredentialBand() {
  return (
    <div className="grid grid-cols-2 divide-x divide-y divide-white/10 border border-white/10 bg-ink md:grid-cols-4 md:divide-y-0">
      {credentials.map((item) => (
        <div key={item.label} className="px-6 py-7 text-center md:text-left">
          <p className="font-display text-lg font-semibold tracking-tight text-paper">
            {item.label}
          </p>
          <p className="mt-1 text-xs leading-snug text-haze">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
