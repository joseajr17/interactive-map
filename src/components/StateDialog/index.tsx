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

import { Law, SelectedState } from "@/types";

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
    <Dialog open={!!selected} onOpenChange={onClose} data-test="state-dialog">
      <DialogContent
        className="max-w-lg max-h-[80vh]"
        data-test="state-dialog-content"
      >
        <DialogHeader data-test="state-dialog-header">
          <DialogTitle data-test="state-dialog-title">
            {selected?.name} ({selected?.acronym})
          </DialogTitle>
          <DialogDescription data-test="state-dialog-description">
            Status:{" "}
            <span className="font-semibold capitalize">{selected?.status}</span>
          </DialogDescription>
        </DialogHeader>

        {selected && (
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
            data-test="state-dialog-tabs"
          >
            <TabsList data-test="state-dialog-tabs-list">
              {Object.keys(selected.laws || {}).map((statusKey) => (
                <TabsTrigger
                  key={statusKey}
                  value={statusKey}
                  data-test={`state-dialog-tab-${statusKey}`}
                >
                  {statusKey}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.keys(selected.laws || {}).map((statusKey) => (
              <TabsContent
                key={statusKey}
                value={statusKey}
                data-test={`state-dialog-tab-content-${statusKey}`}
              >
                <ScrollArea className="h-60 pr-4 space-y-4">
                  {selected.laws?.[statusKey]?.length ? (
                    selected.laws[statusKey].map((law: Law, idx: number) => (
                      <div
                        key={idx}
                        className="border rounded-lg p-3 shadow-sm bg-white space-y-2"
                        data-test={`state-law-card-${idx}`}
                      >
                        <h3
                          className="font-semibold text-sm"
                          data-test="state-law-title"
                        >
                          {law.title}
                        </h3>
                        <p
                          className="text-xs text-gray-600"
                          data-test="state-law-summary"
                        >
                          {law.summary}
                        </p>
                        <Button
                          asChild
                          size="sm"
                          className="mt-2"
                          data-test="state-law-button"
                        >
                          <a
                            href={law.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Acessar
                          </a>
                        </Button>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-600">Nenhuma lei cadastrada</p>
                  )}
                </ScrollArea>
              </TabsContent>
            ))}
          </Tabs>
        )}

        <DialogFooter data-test="state-dialog-footer">
          <Button
            variant="destructive"
            onClick={onClose}
            data-test="state-dialog-close"
          >
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
