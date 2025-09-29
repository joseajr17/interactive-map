type MapLegendProps = {
  statusColors: Record<string, string>;
};

export function MapLegend({ statusColors }: MapLegendProps) {
  // Dados da legenda
  const legendItems = [
    {
      id: "proposta_e_promulgada",
      label: "Proposta e Promulgada",
      color: statusColors.proposta_e_promulgada,
    },
    { id: "promulgada", label: "Promulgada", color: statusColors.promulgada },
    { id: "proposta", label: "Proposta", color: statusColors.proposta },
    { id: "nenhuma", label: "Nenhuma Lei", color: statusColors.nenhuma },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 bg-white rounded-lg shadow-md">
      {legendItems.map((item) => (
        <div key={item.id} className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-sm border border-gray-300"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-sm font-medium text-gray-700">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
