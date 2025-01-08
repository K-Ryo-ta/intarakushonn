"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

// ダミーの文章リスト（実際のアプリケーションではAPIやより大きなデータセットを使用）
const sentences = [
  "I believe that it is okay to have films that are intended to be commercially successful.How about you?",
  "I believe it is acceptable for films to be made with the intention of being commercially successful. How do you feel about this?",
  "The reason is that by making a profit, we will have more budget to spend on the next film, and the quality of the next film will improve.",
  "This is because generating a profit allows for a larger budget to be allocated to the next film, which in turn improves its quality. ",
  "As a result, more people will see the film, which will lead to more profits, larger budgets, and higher quality films. What’s your opinion?",
  "As a result, more people will watch the film, leading to greater profits, larger budgets, and even higher-quality productions. What’s the reason behind your opinion?",
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
