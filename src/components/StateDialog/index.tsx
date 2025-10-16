"use client";

// shadcn/ui imports
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { SelectedState } from "@/types";

type StateDialogProps = {
  selected: SelectedState | null;
  onClose: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export function StateDialog({
  selected,
  onClose,
  activeTab,
  setActiveTab,
}: StateDialogProps) {
  return (
    <Dialog open={!!selected} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>
            {selected?.nome} ({selected?.sigla})
          </DialogTitle>
          <DialogDescription>
            Status:{" "}
            <span className="font-semibold capitalize">{selected?.status}</span>
          </DialogDescription>
        </DialogHeader>

        {selected && (
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList>
              {Object.keys(selected.leis || {}).map((statusKey) => (
                <TabsTrigger key={statusKey} value={statusKey}>
                  {statusKey}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.keys(selected.leis || {}).map((statusKey) => (
              <TabsContent key={statusKey} value={statusKey}>
                <ScrollArea className="h-60 pr-4 space-y-4">
                  {selected.leis?.[statusKey]?.length ? (
                    selected.leis[statusKey].map(
                      (
                        lei: { titulo: string; resumo: string; link: string },
                        idx: number
                      ) => (
                        <div
                          key={idx}
                          className="border rounded-lg p-3 shadow-sm bg-white space-y-2"
                        >
                          <h3 className="font-semibold text-sm">
                            {lei.titulo}
                          </h3>
                          <p className="text-xs text-gray-600">{lei.resumo}</p>
                          <Button asChild size="sm" className="mt-2">
                            <a
                              href={lei.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Acessar
                            </a>
                          </Button>
                        </div>
                      )
                    )
                  ) : (
                    <p className="text-gray-600">Nenhuma lei cadastrada</p>
                  )}
                </ScrollArea>
              </TabsContent>
            ))}
          </Tabs>
        )}

        <DialogFooter>
          <Button variant="destructive" onClick={onClose}>
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
