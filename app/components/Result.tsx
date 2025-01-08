"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// 仮のデータ（実際のアプリケーションではAPIやデータベースから取得します）
const dummyResults = {
  grammar: [
    {
      id: 1,
      original: "Me and him went to the store.",
      correction: "He and I went to the store.",
    },
    {
      id: 2,
      original: "I should of done that.",
      correction: "I should have done that.",
    },
    {
      id: 3,
      original: "She don't like ice cream.",
      correction: "She doesn't like ice cream.",
    },
  ],
  pronunciation: [
    { id: 1, word: "comfortable", correction: "KUM-fer-tuh-buhl" },
    { id: 2, word: "specifically", correction: "spuh-SI-fi-klee" },
    { id: 3, word: "nuclear", correction: "NOO-klee-er" },
  ],
  vocabulary: [
    { id: 1, original: "big", suggestion: "enormous, massive, substantial" },
    { id: 2, original: "good", suggestion: "excellent, superb, outstanding" },
    { id: 3, original: "said", suggestion: "stated, mentioned, expressed" },
  ],
};

export default function DebateResult() {
  const [activeTab, setActiveTab] = useState("grammar");
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            ディベート結果
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="grammar">文法</TabsTrigger>
              <TabsTrigger value="pronunciation">発音</TabsTrigger>
              <TabsTrigger value="vocabulary">語句</TabsTrigger>
            </TabsList>
            <TabsContent value="grammar">
              <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                {dummyResults.grammar.map((item) => (
                  <div
                    key={item.id}
                    className="mb-4 p-2 bg-white rounded shadow"
                  >
                    <p className="text-red-500 line-through">{item.original}</p>
                    <p className="text-green-500">{item.correction}</p>
                  </div>
                ))}
              </ScrollArea>
            </TabsContent>
            <TabsContent value="pronunciation">
              <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                {dummyResults.pronunciation.map((item) => (
                  <div
                    key={item.id}
                    className="mb-4 p-2 bg-white rounded shadow"
                  >
                    <p className="font-bold">{item.word}</p>
                    <p className="text-blue-500">{item.correction}</p>
                  </div>
                ))}
              </ScrollArea>
            </TabsContent>
            <TabsContent value="vocabulary">
              <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                {dummyResults.vocabulary.map((item) => (
                  <div
                    key={item.id}
                    className="mb-4 p-2 bg-white rounded shadow"
                  >
                    <p className="line-through">{item.original}</p>
                    <p className="text-purple-500">{item.suggestion}</p>
                  </div>
                ))}
              </ScrollArea>
            </TabsContent>
          </Tabs>
          <Button onClick={() => router.push("/")} className="w-full mt-4">
            新しいディベートを開始
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
