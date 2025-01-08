"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

// ダミーの文章リスト（実際のアプリケーションではAPIやより大きなデータセットを使用）
const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "A journey of a thousand miles begins with a single step.",
  "To be or not to be, that is the question.",
  "All that glitters is not gold.",
  "Where there's a will, there's a way.",
  "Actions speak louder than words.",
  "Every cloud has a silver lining.",
  "Don't count your chickens before they hatch.",
  "A picture is worth a thousand words.",
  "When in Rome, do as the Romans do.",
];

export default function SentenceGenerator() {
  const [currentSentences, setCurrentSentences] = useState<
    [string, string] | null
  >(null);
  const [count, setCount] = useState(0);
  const router = useRouter();

  const generateSentences = () => {
    let newSentences: [string, string];
    newSentences = [sentences[count], sentences[count + 1]];
    if (newSentences[0] === undefined || newSentences[1] === undefined) {
      setCount(0);
      newSentences = ["Finish!", "Congratulations!"];
    }
    setCurrentSentences(newSentences);
    setCount(count + 2);
  };

  useEffect(() => {
    generateSentences();
  }, []);

  const handleSelection = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (currentSentences) {
      if (currentSentences[0] === "Finish!") {
        e.preventDefault();
        router.push("/result");
      }
    }

    generateSentences();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6">
          この文章どうですか？
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentSentences &&
            currentSentences.map((sentence, index) => (
              <Card
                key={index}
                className="hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={(e) => handleSelection(e)}
              >
                <CardContent className="p-4">
                  <p className="text-lg">{sentence}</p>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
