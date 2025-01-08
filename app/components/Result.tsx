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
      original: "it is okay ",
      correction: "it is acceptable",
    },
    {
      id: 2,
      original: "The reason is that by making a profit",
      correction: "This is because generating a profit...",
    },
  ],
  pronunciation: [
    { id: 1, word: "commercially", correction: "kuh-MUR-shuh-lee" },
    { id: 2, word: "profit", correction: "PRAH-fit" },
    { id: 3, word: "budget", correction: "BUHJ-it" },
    { id: 4, word: "improve", correction: "im-PROOV" },
  ],
  vocabulary: [
    { id: 1, original: "see", suggestion: "watch" },
    { id: 2, original: "more", suggestion: "greater" },
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
